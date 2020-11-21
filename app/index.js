

require([
    'jquery',
    'backbone',
    'underscore',
    'app/AppView'
], function ($, Backbone, _, AppView) {

    // global settings
    $.ajaxSetup({
        cache: false,
        statusCode: {
            400: function() {
                console.log('global error 401');
            },
            401: function() {
                console.log('global error 400');
            },
            404: function(resp, statusName) {
                console.log('global error \n', statusName, resp.status, resp.statusText, '\n', resp.responseText);
            }
        }
    });

    var Rt = Backbone.Router.extend({
        start: function() {
            // var rr = this._routeToRegExp('account/locations/manage?*extra');
            // console.log('rr =', rr);
        }
    });
    
    var rt = new Rt();
    rt.start();

    // backbone workflow
    Backbone.history.start();


    var appView = new AppView()
    appView.render();

})