/**
 * loads sub modules and wraps them up into the main module
 * this should be used for top-level module definitions only
 */
define([
    'angular',
    'underscore',
    'uiRouter',
    'lib/index',
    'domain/index',
    'core/index',
    'ui/index'
], function(ng) {
    'use strict';

    return ng.module('tk.app', [
        'ui.router',
        'tk.lib',
        'tk.domain',
        'tk.core',
        'tk.ui'
    ]);
});
