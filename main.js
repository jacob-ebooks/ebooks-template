

require([
    'jquery',
    'backbone',
    'underscore',
    'app/AppView'
], function ($, Backbone, _, AppView) {

    
    Backbone.history.start();


    var appView = new AppView()
    appView.render();

})