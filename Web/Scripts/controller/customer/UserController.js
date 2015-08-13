/*
* Create by daniel.zuo on 4/19/2015
*/
KBLApp.controller("UserController", ['$rootScope', '$scope', '$state', '$stateParams', 'ApiService', 'CommService', 'UserService',
    function ($rootScope, $scope, $state, $stateParams, ApiService, CommService, UserService) {

        var customer = {
            "UserName": "18620305716",
            "Password": "1314521",
            "RemerberMe":true
        };

        $scope.customer = customer;

        $scope.signIn = function () {
            var promise = UserService.signIn(customer);
            promise.then(
                function (response) {
                    $state.go('customer');
                },
                function (error) {
                    alert("用户名或密码错误！");
                }
            );
        }
    }]);