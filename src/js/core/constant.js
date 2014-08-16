/**
 * Defines constants for the application, one of which is the
 * configuration json object.
 */
define([
    './module',
    'json!config/config.json'
], function(mod, config) {
    'use strict';

    mod.constant('ENV', config.env);
    mod.constant('VERSION', config.version);

    console.log(config.version);
    console.log(config.env);
});
