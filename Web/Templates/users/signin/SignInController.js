/*
* Create by daniel.zuo on 4/19/2015
*/
KBLApp.controller("User.SignInController", ['$rootScope', '$scope', '$state', '$stateParams', 'ApiService', 'CommService', 'UserService',
    function ($rootScope, $scope, $state, $stateParams, ApiService, CommService, UserService) {

        var loginModel = {
            "UserName": "18620305716",
            "Password": "1314521",
            "RemerberMe": true
        };

        $scope.loginModel = loginModel;
        $scope.signIn = function () {
            console.log($scope.loginModel);
            var promise = UserService.signIn($scope.loginModel);
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