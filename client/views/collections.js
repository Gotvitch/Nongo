(function () {
    'use strict';


    Nongo.Views.CollectionsItem = Backbone.Marionette.ItemView.extend({
        template: Nongo.Templates.CollectionsItem,
        tagName: 'tr',
        events: {
            'click .js-delete': 'delete'
        },
        initialize: function(options){
            this.databaseName = this.options.databaseName;
        },
        serializeData: function () {
            var modelJSON = this.model.toJSON();

            return _.extend(modelJSON, {
                databaseName: this.databaseName
            });
        },
        delete: function(){
            if(confirm('Are you sure to delete the database ' + this.model.get('name') + ' ?')){
                this.model.destroy({
                    success: function(model, response) {
                
                    }
                });
            }
        }
    });

    Nongo.Views.Collections = Backbone.Marionette.CompositeView.extend({
        template: Nongo.Templates.Collections,
        itemView: Nongo.Views.CollectionsItem,
        itemViewContainer: 'tbody',
        events: {
            'click .js-refresh': 'refresh',
            'click .js-add': 'showAddCollection'
        },
        itemViewOptions: function(model, index) {
            return {
                databaseName: this.databaseName
            };
        },
        initialize: function(options){

            this.databaseName = this.options.databaseName;

            this.collection = new Nongo.Collections.Collections({ databaseName: this.databaseName});

            this.collection.fetch({});

        },
        refresh: function(e){
            this.collection.fetch();
        },
        showAddCollection: function(){
            this.shellForm = new Nongo.Views.ShellForm({
                cancel: true,
                config: 'db.createCollection'
            });

            this.listenTo(this.shellForm, 'submit', this.addCollection, this);
            this.listenTo(this.shellForm, 'cancel', this.closeShellForm, this);

            this.shellForm.render();

            this.$('.shell-form-wrapper').html(this.shellForm.$el.hide());

            this.shellForm.$el.slideDown(200);
        },
        addCollection: function(data){

            var self = this,
                size = parseInt(data.size, null),
                max = parseInt(data.max, null);

            var newCollection = new Nongo.Models.Collection({ name: data.name }, { databaseName: this.databaseName });

            // Remove the id to not consider as a existing collection
            newCollection.id = null;

            if(size){
                newCollection.set('size', size);
            }

            if(size && max){
                newCollection.set('max', max);
            }

            newCollection.save({}, {
                success: function(model, response, options){
                    Nongo.app.navigate('/databases/' + self.databaseName + '/collections/' + data.name, { trigger: true });
                },
                error: function(model, xhr, options){
                    throw new Error('Collection not save');
                }
            });


        },
        closeShellForm: function(){
            var self = this;
            this.shellForm.$el.slideUp(200, function(){
                self.shellForm.remove();
            });
        }
    });
}());