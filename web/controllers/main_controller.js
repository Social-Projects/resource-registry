(function(){
    'use strict';
    angular.module('restApp')

        .controller('MainCtrl', ['$scope', '$location', 'rrVersion', function($scope, $location, rrVersion) {
            $scope.rrVersion = rrVersion.version;
            
            //$scope.activePills = $location.url();
            $scope.$on("$viewContentLoaded", function() {
                var interval = setInterval(function() {
                    console.log($scope.activePills);
                    if ($scope.activePills != "undefined") {
                        $scope.activePills = $location.url();
                        clearInterval(interval);
                    }
                },1); 
            });
            ($scope.activatePills = function() {
            	var interval = setInterval(function() {
                    console.log($scope.activePills);
                    if ($scope.activePills != "undefined") {
                        $scope.activePills = $location.url();
                        clearInterval(interval);
                    }
            	},1);
            })();   
       }]);


})();
