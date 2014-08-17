define([
	'chai',
	'angular',

	'ngMock',
	'core/controllers'
], function(chai, ng) {

	'use strict';

	describe('tk.core', function() {

		var expect = chai.expect,
			mod = ng.module('tk.core'),
			$scope,
			controller;
	
		// Initialize the module...
		beforeEach(ng.mock.module("tk.core"))
	
		beforeEach(ng.mock.inject(function($rootScope, $controller) {
			$scope = $rootScope.$new()
			controller = $controller('mainController', {$scope: $scope})
		}));

		describe('mainController', function() {

			it('should exist', function() {
				expect(controller).to.exist;
			});
	
			it('should expose title on the scope', function() {
				expect($scope.title).to.exist;
				expect($scope.title).to.equal('Angular tk seed')
			});
		});

	});
});