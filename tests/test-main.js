var allTestFiles = [];
var TEST_REGEXP = /(spec|test)\.js$/i;

// Specifies the path to the testfiles. since we modified requirejs baseUrl
// to /base/src/js' require will locate all files relative to /base/src/js.
// This means we need to go two directories back '../../' to actually locate
// the testfiles
var pathToModuleForTestFiles = function(path) {
  return path.replace(/^\/base\//, '../../').replace(/\.js$/, '');
};

Object.keys(window.__karma__.files).forEach(function(file) {
  if (TEST_REGEXP.test(file)) {
    // Normalize paths to RequireJS module names.
    allTestFiles.push(pathToModuleForTestFiles(file));
  }
});

require.config({
    paths: {
        jquery: '../vendor/jquery/dist/jquery',
        underscore: '../vendor/lodash/dist/lodash.underscore',
        angular: '../vendor/angular/angular',
        uiRouter: '../vendor/angular-ui-router/release/angular-ui-router',
        text: '../vendor/requirejs-text/text',
        json: '../vendor/requirejs-plugins/src/json',
        config: '../config',

        ngMock: '../vendor/angular-mocks/angular-mocks',

        chai: '../../node_modules/chai/chai'
    },
    shim: {
        underscore: {
            exports: '_'
        },
        angular: {
            deps: ['jquery'],
            exports: 'angular'
        },
        uiRouter: ['angular'],
        ngMock: ['angular']
    },
    stubModules: ['json', 'text'],

    // Karma serves files under /base, which is the basePath from your config file
    // We modify the base url to point to the orignal main.js function as all relative
    // paths should be evaluated from there
    baseUrl: '/base/src/js',

    // dynamically load all test files
    deps: allTestFiles,

    // we have to kickoff jasmine, as it is asynchronous
    callback: window.__karma__.start
});
