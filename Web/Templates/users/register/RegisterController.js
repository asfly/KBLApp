/*
* Create by daniel.zuo on 4/19/2015
*/
KBLApp.controller("User.RegisterController", ['$rootScope', '$scope', '$state', '$stateParams', 'ApiService', 'CommService', 'UserService',
    function ($rootScope, $scope, $state, $stateParams, ApiService, CommService, UserService) {

        //document.getElementById('role.parentCid').addEventListener('input', function (inputtext) {
            
        //});

        var user = UserService.biz;
        $scope.role = {
            "UserName": "",
            "Password": "",
            "CreateDate": new Date().getTime(),
            "LastSigninDate": new Date().getTime(),
            "SignInCount": 1,
            "UpdateAccountDate": new Date().getTime(),
            "Rid":1
        }

        var roleSetting = {
            "Rid": "",
            "ParentCid": 0,
            "ParentCName": "",
            "ChildCid": 0,
            "ChildCName": 0,
            "RoleLevel": 0,
            "RoleType": 16
        }
        $scope.isShowSaveAction = true;
        $scope.save = function () {
            var model ={
                Input0 : {
                    CustomerRole: $scope.role
                },
                S: Math.random()
            }
            var param = JSON.stringify(model);
            user.submit(param).then(function (response) {
                if (response.result > 0) {
                    $scope.isShowSaveAction = false;
                    $state.go('customer', {});
                } else {
                    alert("收录失败！！请联系开发人员");
                }
            }, function (data, status, header, configs) {
                console.log(data, status, header, configs);
            });
        }

        
        
    }]);