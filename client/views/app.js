(function () {
    'use strict';

    Nongo.Views.App = Backbone.Marionette.Layout.extend({
        el: 'body',
        regions: {
            content: '#content'
        },
        initialize: function () {
            this.breabcrumbView = new Nongo.Views.Breadcrumb();
        },
        updateBreadCrumb: function(data){

        },
        showHome: function(){
            var self = this,
                databases = new Nongo.Collections.Databases({});

            databases.fetch({
                success: function () {
                    self.content.show(new Nongo.Views.Home({
                        collection: databases
                    }));

                    self.breabcrumbView.update({});
                }
            });
        },
        showDatabase: function(databaseName){
            var databaseView = new Nongo.Views.Database({ databaseName: databaseName });
            this.content.show(databaseView);
            databaseView.showCollections();

            this.breabcrumbView.update({ database: databaseName });
        },
        showCollection: function(databaseName){
            var databaseView = this.content.currentView;

            if(!this.content.currentView ||
                !(this.content.currentView instanceof Nongo.Views.Database) ||
                this.content.currentView.databaseName != databaseName){

                databaseView = new Nongo.Views.Database({ databaseName: databaseName });
                this.content.show(databaseView);
            }

            databaseView.showCollections();

            this.breabcrumbView.update({ database: databaseName });
        },
        showUsers: function(databaseName){

            var databaseView = this.content.currentView;

            if(!this.content.currentView ||
                !(this.content.currentView instanceof Nongo.Views.Database) ||
                this.content.currentView.databaseName != databaseName){

                databaseView = new Nongo.Views.Database({ databaseName: databaseName });
                this.content.show(databaseView);
            }

            databaseView.showUsers();

            this.breabcrumbView.update({ database: databaseName });
        },
        showDocuments: function (databaseName, collectionName, documentId) {

            var collectionView = this.content.currentView;

            if(!this.content.currentView ||
                !(this.content.currentView instanceof Nongo.Views.Collection) ||
                this.content.currentView.databaseName != databaseName ||
                this.content.currentView.collectionName != collectionName){

                collectionView = new Nongo.Views.Collection({ databaseName: databaseName, collectionName: collectionName });
                this.content.show(collectionView);
            }

            collectionView.showDocuments(documentId);

            this.breabcrumbView.update({ database: databaseName, collection: collectionName });
        },
        showIndexes: function (databaseName, collectionName) {
            var collectionView = this.content.currentView;

            if(!this.content.currentView || !(this.content.currentView instanceof Nongo.Views.Collection)){
                collectionView = new Nongo.Views.Collection({ databaseName: databaseName, collectionName: collectionName });
                this.content.show(collectionView);
            }
            
            collectionView.showIndexes();

            this.breabcrumbView.update({ database: databaseName, collection: collectionName });
        }
    });
}());