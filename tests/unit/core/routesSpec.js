define([
	'chai',
	'angular',

	'ngMock',
	'core/controllers'
], function(chai, ng) {

	'use strict';

	describe('tk.core', function() {

		var expect = chai.expect,
			mod = ng.module('tk.core');
	
		// Initialize the module...
		beforeEach(ng.mock.module("tk.core"));

		describe('routes', function() {

			// testing...

		});

	});
});