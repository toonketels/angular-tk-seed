'use strict';

module.exports = {
    build: {
        options: {
            style: 'compressed',
        },
        files : {
            'src/scss/style.css': 'src/scss/main.scss'
        }
    },
    dev: {
        options: {
            style: 'expanded',
        },
        files : {
            'src/scss/style.css': 'src/scss/main.scss'
        }
    }
};
