define([
    'underscore',
    'backbone'
], function(_, Backbone) {
    'use strict';
    var routes = {
        '': {controller: 'app/MyModule1', action: 'index1'},
        'hello': {controller: 'app/MyModule2', action:'index1'}
    };
    
    _.each(function(){});

    return routes;
});