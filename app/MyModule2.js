define([
    'backbone'
], function(Backbone) {
    'use strict';
    return Backbone.Router.extend({
        index1: function() {
            console.log("m2 index1");
        },

        index2: function(p) {
            console.log("m2 index2");
        }
    });
});