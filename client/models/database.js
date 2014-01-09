(function () {
    'use strict';

    Nongo.Models.Database = Backbone.Model.extend({
        idAttribute: 'name',
        url: function () {
            return '/api/db';
        },
        initialize: function (options) {
        }
    });


    Nongo.Collections.Databases = Backbone.Collection.extend({
        model: Nongo.Models.Database,
        comparator: function(database) {
            return database.get('name');
        },
        url: function () {
            return '/api/db';
        },
        initialize: function (models, options) {
        }
    });
}());

