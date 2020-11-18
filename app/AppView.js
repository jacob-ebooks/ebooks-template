define(['backbone'], function (Backbone) {
    console.log(1);
    var AppView = Backbone.View.extend({
        initialize: function () {
            console.log("OK");
        }
    });
    return AppView;
})