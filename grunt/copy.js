'use strict';

var _ = require('lodash');

module.exports = function(grunt) {
    return {
        build: {
            files: [
                {expand: true, cwd: 'src/', src: ['index.html', 'images/**', 'scss/style.css'], dest: 'build/'}
            ]
        },
        cssAsScss: {
            files: [
                {
                    expand: true,
                    cwd: 'src/vendor/bootstrap/dist/css/',
                    src: ['bootstrap-theme.css', 'bootstrap.css'],
                    dest: 'src/scss/vendor',
                    ext: ".scss"
                }
            ]
        },
        setEnv: {
            files: [
                {expand: false, src: ['src/config/*.json'], dest: 'src/config/config.json', filter: function(file) {
                    // Matches files on environment option.
                    // Grunt cmd: grunt copu:setEnv --env=dev
                    //
                    // Defaults to dev
                    var env = _.contains(['dev', 'prod', 'test'], grunt.option('env')) ? grunt.option('env') : 'dev',
                        regex = new RegExp(env, "i");
                    return regex.test(file);
                }}
            ]
        }
    };

}
