define([
    'backbone',
    'underscore'
], function(Backbone, _) {
    'use strict';

    return Backbone.Model.extend({

        url: 'docs/sidebar.md',

        // fetch: function(options) {
        //     console.log('sidebar fetch...');
        //     // _.extend(options, {dataType: 'text'});
        //     return Backbone.Model.prototype.fetch.apply(this, options);
        // }
    });
    
});