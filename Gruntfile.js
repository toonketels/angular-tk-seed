var _ = require('lodash'),
    fs = require('fs'),
    path = require('path'),
    timeGrunt = require('time-grunt');


module.exports = function (grunt) {

    // Loads all tasks automatically from package.json
    require('load-grunt-tasks')(grunt);

    // Loads the various task configuration files
    var options = {
        config : {
            src: "grunt/**/*"
        }
    };
    var configs = require('load-grunt-configs')(grunt, options);
    grunt.initConfig(configs);

    //
    // Register custom tasks

    grunt.registerTask('build', 'Builds the app', ['clean:build', 'setEnv', 'copy:cssAsScss','sass:build', 'copy:build', 'requirejs:build']);
    grunt.registerTask('serveBuild', 'Serves the build version of the app on port 8081', ['build', 'connect:build']);


    // Pass the environment as option like: grunt setEnv --env=dev, defaults to dev
    grunt.registerTask('setEnv', 'Sets the client app environment to DEV, PROD or TEST', ['copy:setEnv']);
    grunt.registerTask('default', 'Spins up development server on port 8080', ['setEnv', 'copy:cssAsScss', 'connect:dev', 'watch']);
}
