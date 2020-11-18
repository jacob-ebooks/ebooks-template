define([
    'jquery',
    'underscore',
    'backbone',
    'marked',
    'app/sidebar/SidebarModel',
    'app/sidebar/SidebarView',
    'app/content/ContentView'
], function (
    $,
    _,
    Backbone,
    marked,
    SidebarModel,
    SidebarView,
    ContentView
) {
    var AppView = Backbone.View.extend({

        el: $('#app'),

        initialize: function() {
            this.sidebarView = new SidebarView();
            this.sidebarModel = new SidebarModel();
            this.contentView = new ContentView();
        },

        render: function() {

            var options = {
                dataType: 'text',
                contentType: 'text/json,charset=utf-8',
                success: _.bind(function(model, resp, option){
                    model.set('data', marked(resp));
                    this.sidebarView.render(model.toJSON());
                },this),
                error: function(err) {
                    console.log('err ->', err);
                    model.set('data', err);
                }
            };
            this.sidebarModel.fetch(options);

            this.contentView.render();
            this.$('#app').unwrap(this.$el);
        }
    });
    return AppView;
})