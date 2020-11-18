define([
    'jquery',
    'backbone',
    'underscore',
    'handlebars',
    'text!app/content/ContentTemplate.html'
], function ($, Backbone, _, Handlebars, ContentTemplate) {
    'use strict';   
    return Backbone.View.extend({

        el: '#content',

        template: Handlebars.compile(ContentTemplate),

        initialize: function(){
            $('#app').append(this.template());
        },

        render: function () {
            console.log('content render');
            return this;
        }
    })
});