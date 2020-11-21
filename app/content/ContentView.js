define([
    'jquery',
    'backbone',
    'underscore',
    'handlebars',
    'text!app/content/ContentTemplate.html'
], function ($, Backbone, _, Handlebars, ContentTemplate) {
    'use strict';   
    return Backbone.View.extend({

        el: $('#ctx'),

        template: Handlebars.compile(ContentTemplate),

        events: {
            'click #back_to_top': 'goTop'
        },

        initialize: function(){
            $('#app').append(this.template());
            this.init_back_to_top_button();
        },

        render: function () {
            console.log('content render');
            // this.$('*').unwrap();
            $('#ctx > *').unwrap();
            // return this;
        },

        init_back_to_top_button: function() {
            // this.
            $('#back_to_top').show();
        },

        goTop: function(e) {
            console.log('goTop');
            // if(e) e.preventDefault();
            // $('html, body').animate({
            //     scrollTop: 0
            // }, 200);
            // history.pushState(null, null, '#' + location.hash.split('#')[1]);
        }
    })
});