/*
* Create by daniel.zuo on 4/19/2015
*/
KBLApp.controller("User.RegisterController", ['$rootScope', '$scope', '$state', '$stateParams', 'ApiService', 'CommService', 'UserService',
    function ($rootScope, $scope, $state, $stateParams, ApiService, CommService, UserService) {

        //document.getElementById('role.parentCid').addEventListener('input', function (inputtext) {
            
        //});

        if (!$scope.customer.model.Cid) {
            $state.go('create', {});
        }
        //var role = UserService.role;
        //role.Cid = $scope.customer.model.Cid;
        //var roleSetting = UserService.roleSetting;
        if(!$scope.role){
            $scope.role = {
                Cid:$scope.customer.model.Cid
            }            
        }
        $scope.isShowSaveAction = true;
        $scope.isShowRoleSaveAction = true;
        $scope.save = function () {            
            var model ={
                Input0 : {
                    CustomerRole: $scope.role
                },
                S: Math.random()
            }            
            var param = JSON.stringify(model);
            UserService.submit(param).then(function (response) {
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