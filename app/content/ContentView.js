define([
    'jquery',
    'backbone',
    'underscore'
], function ($, Backbone, _) {
    'use strict';   
    return Backbone.View.extend({

        el: '#content',

        initialize: function(){
            this.setContent($el);
            console.log('content init');
        },

        render: function () {
            console.log('content render');
            return this;
        }
    })
});