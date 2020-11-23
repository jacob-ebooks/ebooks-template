require.config({
    paths: {
        'jquery': 'res/libs/jquery-1.11.0',
        'jquery-ui': 'res/libs/jquery-ui',
        'underscore': 'res/libs/underscore-1.11.0',
        'backbone': 'res/libs/backbone-1.4.0',
        'handlebars': 'res/libs/handlebars-v4.7.6',
        'text': 'res/libs/require-text-2.0.16',
        'i18n': 'res/libs/require-i18n-2.0.6',
        'marked': 'res/js/marked',
        'prism': 'res/js/prism',
        'store': 'res/js/store',
        'constants': 'docs/constants'
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