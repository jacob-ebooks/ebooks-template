

require([
    'jquery',
    'backbone',
    'underscore',
    'app/content/ContentView'
], function ($, Backbone, _, ContentView) {

    // Backbone.history.start();

    var AppRouter = Backbone.Router.extend({
        routes: {
            '': 'main'
        }
    });
    
    var router = new AppRouter();

    router.on('route:main', function() {
        console.log('out ...');
    });

    
    var routes = {
        'hello1': {controller: 'app/MyModule1', action: 'index1'},
        'hello2': {controller: 'app/MyModule2', action:'index1'}
    };

    _.each(_.keys(routes), function(key){
        console.log(key, routes[key]);
        var controller = _.pluck(routes[key], 'controller');
        console.log('controller', '->', controller);
    //     var m = require(routes[key]);
        
    //     // routes[key]['controller']
    });
    
    Backbone.history.start();

})