define([
    'jquery',
    'backbone',
    'underscore'
], function($, Backbone, _) {
    'use strict';

    return Backbone.View.extend({
        el: '#sidebar',

        initialize: function() {
            console.log('sidebar init');
        },

        render: function() {
            console.log('sidebar render');
        }
    })
});