require.config({
    paths: {
        'jquery': 'js/jquery-1.11.0',
        'jquery-ui': 'js/jquery-ui',
        'underscore': 'js/underscore-1.11.0',
        'backbone': 'js/backbone-1.4.0',
        'handlebars': 'js/handlebars-v4.7.6',
        'text': 'js/require-text-2.0.16',
        'i18n': 'js/require-i18n-2.0.6',
        'marked': 'js/marked',
        'prism': 'js/prism',
        'store': 'js/store'
    },
    shim: {
        'underscore': {
            exports: '_'
        },
        'backbone': {
            deps: ['jquery', 'underscore'],
            exports: 'Backbone'
        },
        'handlebars': {
            exports: 'Handlebars'
        }
    }
});