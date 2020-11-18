define([
    'jquery',
    'backbone',
    'underscore',
    'handlebars',
    'marked',
    'app/sidebar/SidebarModel',
    'text!app/sidebar/SidebarTemplate.html',
    './SearchBarView'
], function($, Backbone, _, Handlebars, marked, SidebarModel, SidebarTemplate, SearchBarView) {
    'use strict';

    return Backbone.View.extend({
        el: $('#sidebar'),

        template: Handlebars.compile(SidebarTemplate),

        initialize: function() {
            $('#app').append(this.template());
        },

        initSearchBar: function() {
            var searchbar = new SearchBarView();
            searchbar.render();
        },

        render: function(viewdata) {
            $('#sidebar').html(viewdata['data']);
            this.initSearchBar();
            console.log('sidebar render');
            return this;
        }

    });

});