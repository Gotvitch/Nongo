var Nongo = require('../nongo'),
    Q     = require('q'),
    _     = require('underscore'),
    bsonParser = require('../lib/bsonParser');


module.exports = {
    list: function(req, res, next){

        var databaseName = req.params.database,
            collectionName = req.params.collection,
            query = req.query.query,
            fields = req.query.fields,
            sort = req.query.sort,
            skip = req.query.skip,
            limit = req.query.limit;


        Nongo.connections
            .connectToDatabase(databaseName)
            .then(function (db) {

                var collection = db.collection(collectionName);

                var options = {
                    skip: skip,
                    limit: limit
                };

                var queryJson = {};

                if(!_.isEmpty(query)){
                    queryJson = JSON.parse(query);
                }

                if(!_.isEmpty(fields)){
                    options.fields = JSON.parse(fields);
                }

                if(!_.isEmpty(sort)){
                    options.sort = JSON.parse(sort);
                }

                var cursor = collection.find(queryJson, options);

                return Q.ninvoke(cursor, 'toArray');
            })
            .then(function (documents) {
                res.json(bsonParser.formatBSON(documents));
            })
            .fail(function (err) {
                next(err);
            })
            .done();
    }
};


