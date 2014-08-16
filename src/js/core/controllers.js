define(['./module'], function(mod) {
    'use strict';

    mod.controller('mainController', [
        '$scope',
        function($scope) {
            $scope.title = 'Angular tk seed';
        }
    ]);
});
