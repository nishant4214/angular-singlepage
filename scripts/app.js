(function () {
'use strict';
    angular.module('myFirstApp',[])
    .controller('MyFirstController',function($scope){
        $scope.name = "Nishant";
        $scope.SayHello=function(){
            return "Hello Vivek"
        }
    });
})();