define([
    'jquery',
    'underscore',
    'backbone',
    'marked',
    './sidebar/SidebarModel',
    './sidebar/SidebarView',
    './content/ContentView'
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
            this.initTitle();
            this.sidebarView = new SidebarView();
            this.sidebarModel = new SidebarModel();
            this.contentView = new ContentView();
        },

        initTitle: function() {
            $.getJSON('docs/_config.json', function(json){
            }).success(function(json){
                $('title').html(json.title);
            });
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
                    this.sidebarView.render({data: err});
                }
            };
            this.sidebarModel.fetch(options);

            this.contentView.render();
            $('#app > *').unwrap();
        }
    });
    return AppView;
})