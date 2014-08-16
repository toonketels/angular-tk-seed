'use strict';

module.exports = {
    options: {
        jshintrc : '.jshintrc',
        reporter: require('jshint-stylish')
    },
    target: ['src/js/**/*.js']
};
