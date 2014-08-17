/**
 * Defines the main routes in the application.
 */
define([
    './module',
    'underscore',
    'text!./views/header.html',
    'text!./views/home.html',
    'text!./views/footer.html',
    'text!./views/not-found.html'
], function(app, _, headerTpl, homeTpl, footerTpl, notFoundTpl) {
    'use strict';

    app.config([
        '$urlRouterProvider', '$stateProvider',
        function($urlRouterProvider, $stateProvider) {

            // Redirect url to homepage and 404
            $urlRouterProvider
                .when('', '/')
                .otherwise('/not-found');

            // Specify default states
            $stateProvider.state('tk', {
                abstract: true,
                views: {
                    'header': {
                        template: headerTpl
                    },
                    'main': {
                        template: homeTpl
                    },
                    'footer': {
                        template: footerTpl
                    }
                },
            }).state('tk.main', {
                url: '/',
                views: {
                    'main@': {
                        template: homeTpl,
                        controller: 'mainController'
                    },
                }
            }).state('tk.error404', {
                url: '/not-found',
                views: {
                    'main@': {
                        template: notFoundTpl
                    }
                }
            });
        }
    ]);
});
