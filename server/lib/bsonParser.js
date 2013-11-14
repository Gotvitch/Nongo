var mongodb = require('mongodb'),
    _       = require('underscore');



var formatBSON = function(object){
    if(object instanceof mongodb.ObjectID){
        return { '$oid': object.toString() };
    }
    else if(object instanceof Date)
    {
        return { '$date': object.toJSON() };
    }
    else if(object instanceof mongodb.Timestamp)
    {
        return { '$timestamp': { t: object.low_, i: object.high_ } };
    }
    else if(object instanceof mongodb.DBRef)
    {
        return {
            '$ref':object.namespace,
            '$id':object.oid,
            '$db':object.db || ''
        };
    }
    else if(object instanceof Array || object instanceof Object)
    {
        _.each(object, function(value, key){
            object[key] = formatBSON(value);
        });
    }
    else
    {
        return object;
    }

    return object;
};


exports.formatBSON = formatBSON;