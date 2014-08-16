'use strict';


module.exports = {
    js: {
        files: ['src/js/**/*.js'],
        tasks: ['jsbeautifier', 'jshint'],
        options: {
            spawn: false,
            livereload: true
        }
    },
    config: {
        files: ['src/config/config.json'],
        options: {
            livereload: true
        }
    },
    css: {
        files: ['src/scss/**/*.scss'],
        tasks: ['sass:dev'],
    },
    livereload: {
        options: {livereload: true},
        files: ['src/scss/style.css', 'build/css/*']
    }
};
