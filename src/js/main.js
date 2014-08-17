require.config({
    urlArgs: 'bust=' + (new Date()).getTime(),
    deps: ['boot'],
    paths: {
        jquery: '../vendor/jquery/dist/jquery',
        underscore: '../vendor/lodash/dist/lodash.underscore',
        angular: '../vendor/angular/angular',
        uiRouter: '../vendor/angular-ui-router/release/angular-ui-router',
        text: '../vendor/requirejs-text/text',
        json: '../vendor/requirejs-plugins/src/json',
        config: '../config'
    },
    shim: {
        underscore: {
            exports: '_'
        },
        angular: {
            deps: ['jquery'],
            exports: 'angular'
        },
        uiRouter: ['angular']
    },
    stubModules: ['json', 'text']
});
