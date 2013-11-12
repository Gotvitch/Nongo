var Nongo = require('../nongo'),
    Q     = require('q'),
    _     = require('underscore'),
    util  = require('util'),
    SYSTEM_COLLECTIONS;


SYSTEM_COLLECTIONS = [
    '.system.namespaces',
    '.system.namespaces',
    '.system.indexes',
    '.system.profile',
    '.system.users',
    '.system.js'
];


module.exports = {
    list: function(req, res, next){

        var databaseName = req.params.database,
            errors;
        
        req.assert('database', 'database is required').notEmpty();

        errors = req.validationErrors();

        if (errors) {
            throw new Nongo.Error.validationErrors(errors);
        }

        Nongo.connections
            .connectToDatabase(databaseName)
            .then(function (db) {
                return Q.ninvoke(db, 'collections')
                .then(function (collections) {
                    return Q.all(collections.map(function(collection){
                        return Q.ninvoke(collection, 'stats');
                    }));
                });
            })
            .then(function (collections) {

                res.send(_.filter(collections, function(collection){
                    return !_.any(SYSTEM_COLLECTIONS, function(systemCollection){
                        return ((databaseName + systemCollection) === collection.ns);
                    });
                }).map(function(collection){
                    return {
                        name: collection.ns.substring(databaseName.length + 1),
                        count: collection.count,
                        size: collection.size,
                        storageSize: collection.storageSize,
                        nindexes: collection.nindexes,
                        totalIndexSize: collection.totalIndexSize,
                        indexSizes: collection.indexSizes
                    };
                }));

                res.send(util.inspect(collections));
            })
            .fail(function (err) {
                next(err);
            })
            .done();
    },
    create: function(req, res, next){

        var databaseName = req.params.database,
            collectionName = req.body.name,
            size = req.body.size,
            max = req.body.max,
            errors;

        req.assert('database', 'database is required').notEmpty();
        req.assert('name', 'name is required').notEmpty();

        if(!_.isEmpty(req.body.size)){
            req.assert('size').isInt();
        }

        if(!_.isEmpty(req.body.max)){
            req.assert('max').isInt();
        }

        errors = req.validationErrors();

        if (errors) {
            throw new Nongo.Error.validationErrors(errors);
        }

        Nongo.connections
            .connectToDatabase(databaseName)
            .then(function (db) {

                var options = {};

                if (size || max) {
                    options.capped = true;
                }

                if (size) {
                    options.size = size;
                }

                if (max) {
                    options.max = max;
                }

                return Q.ninvoke(db, 'createCollection', collectionName, options);
            })
            .then(function () {
                res.send(200);
            })
            .fail(function (err) {
                next(err);
            })
            .done();
    },
    drop: function(req, res, next){

        var databaseName = req.params.database,
            collectionName = req.params.collection,
            errors;


        req.assert('database', 'database is required').notEmpty();
        req.assert('name', 'name is required').notEmpty();

        errors = req.validationErrors();

        if (errors) {
            throw new Nongo.Error.validationErrors(errors);
        }


        Nongo.connections
            .connectToDatabase(databaseName)
            .then(function (db) {
                return Q.ninvoke(db, 'dropCollection', collectionName);
            })
            .then(function () {
                res.send(200);
            })
            .fail(function (err) {
                next(err);
            })
            .done();
    }
};