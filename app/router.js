define([
    'underscore'
], function(_) {
    'use strict';

    var routes = {
        '': {controller: 'app/MyModule1', method: 'index1'},
        'hello': {controller: 'app/MyModule2', method:'index1'}
    };

    return routes;
});