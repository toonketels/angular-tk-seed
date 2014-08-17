// Karma configuration
// Generated on Sun Aug 17 2014 09:30:31 GMT+0200 (CEST)

module.exports = function(config) {
  config.set({

    // Keep our root as the basepath, the test-main modifies its basepath
    // to be able to correctly locate the js files from src/js
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha', 'requirejs'],


    // list of files / patterns to load in the browser
    // we specify our sources but don't actually load them,
    // they will be loaded by requirejs
    files: [
        {pattern: 'src/config/**/*.json', included: false},
        {pattern: 'src/js/**/*.html', included: false},
        {pattern: 'src/js/**/*.js', included: false},
        {pattern: 'src/vendor/**/*.js', included: false},
        {pattern: 'node_modules/chai/chai.js', included: false},
        {pattern: 'node_modules/chai/chai.js', included: false},
        {pattern: 'tests/unit/**/*.js', included: false},
        'tests/test-main.js'
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['mocha'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false
  });
};
