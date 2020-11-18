define([
    'backbone',
    'handlebars',
    'text!./SearchBarTemplate.html'
], function(
    Backbone,
    Handlebars,
    SearchBarTemplate
) {
    'use strict';

    return Backbone.View.extend({
        el: $('form[class=searchBox]'),

        template: Handlebars.compile(SearchBarTemplate),

        initialize: function() {
            $('#sidebar').find('h2').first().before(this.template());
        }

    });
    
});