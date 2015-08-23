/*
* Create by daniel.zuo on 4/19/2015
*/
KBLApp.controller("Customer.EditController", ['$rootScope', '$scope', '$state', '$stateParams', '$location', 'ApiService', 'CommService','CustomerService','UserService',
    function ($rootScope, $scope, $state, $stateParams, $location, ApiService, CommService, CustomerService,UserService) {
        $scope.actionName = '编辑';
        var cid = $stateParams.cid;
        $scope.customer = { model: {}, sections: [] };
        var customer = CustomerService.biz;
        $scope.customer.sections = customer.utils;
        $scope.role = {};
        if (cid) {
            customer.init(cid).then(function (data) {  // 调用承诺API获取数据 .resolve  
                $scope.customer.model = data.result;
                $scope.customer.model.CategoryID = customer.utils.categories[data.result.CategoryID];
                $scope.customer.model.Gender = customer.utils.gender[data.result.Gender];
                $scope.customer.model.Married = customer.utils.married[data.result.Married];
                $scope.customer.model.CardType = customer.utils.cards[data.result.CardType];

                UserService.init(cid).then(function (response) {
                    $scope.isShowSaveCustomer = true;
                    $state.go('edit.auth', { "cid": cid });                    
                    if(response.result){
                        $scope.role = response.result || UserService.role;
                    }
                    $scope.role.Cid = cid;
                    $scope.isShowRoleSaveAction = false;
                },
                function (data, status, header, configs) {
                });
            }, function (error) {  // 处理错误 .reject  
                console.log(error);
            });
        }
        else {
            $state.go('customer', {});
        }

        $scope.save = function () {
            var data = {
                Input0: {
                    Customer: $scope.customer.model
                },
                S: Math.random()
            };
            data.Input0.Customer.CategoryID = data.Input0.Customer.CategoryID.id;
            data.Input0.Customer.Gender = data.Input0.Customer.Gender.id;
            data.Input0.Customer.Married = data.Input0.Customer.Married.id;
            data.Input0.Customer.CardType = data.Input0.Customer.CardType.id;
            //data.Input0.Customer.Remark = angular.element('[name="customer.model.Remark"]').val();
            customer.save(data).then(
                function (response) {
                    if ($scope.role.UserName && $scope.role.Password) {
                        var param = {
                            Input0: {
                                CustomerRole: $scope.role
                            },
                            S: Math.random()
                        }
                        UserService.submit(param).then(function (response) {
                            $state.go('customer');
                        }, function (data, status, header, configs) {
                            alert("修改登记用户名，密码时出错！请重试");
                        });
                    } else {
                        $state.go('customer');
                    }                    
                },
                function (error) {
                    alert("修改客户信息时出错！请重试");
                    console.log(error);
                }
            );
            
        }
    }]);