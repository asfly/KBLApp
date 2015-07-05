/*
* Create by Daniel.zuo on 2015.4.19
*/
KBLApp.controller('MainController', ['$scope', 'ApiService', 'CommService', '$location', function ($scope, ApiService, CommService, $location) {
    $scope.isActive = function (route) {
        return route === $location.path();
    }
}]);