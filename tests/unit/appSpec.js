define([
	'chai',
	'app'
], function(chai, app) {
    'use strict';

    var expect = chai.expect

    describe('tk.app', function() {

    	it('should be named', function() {
    		expect(app.name).to.equal("tk.app");
    	});

    });
});
