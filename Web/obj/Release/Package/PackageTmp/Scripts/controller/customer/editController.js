﻿/*
* Create by daniel.zuo on 4/19/2015
*/
KBLApp.controller("Customer.EditController", ['$rootScope', '$scope', '$state', '$stateParams', '$location', 'ApiService', 'CommService','CustomerService',
    function ($rootScope, $scope, $state, $stateParams, $location, ApiService, CommService, CustomerService) {

        var cid = $stateParams.cid;
        $scope.customer = { model: {} ,sections:[]};        
        var customer = CustomerService.biz;
        $scope.customer.sections = customer.utils;
        if (cid) {
            CommService.prepbroadcast('showLoading', {});
            var promise = customer.init(cid); // 同步调用，获得承诺接口  
            promise.then(function (data) {  // 调用承诺API获取数据 .resolve  
                $scope.customer.model = data.customer;
                $scope.customer.model.CategoryID = customer.utils.categories[data.customer.CategoryID];
                $scope.customer.model.Gender = customer.utils.gender[data.customer.Gender];
                CommService.prepbroadcast('hideLoading', {});
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
            var promise = customer.save(data);
            promise.then(
                function (response) {
                    $state.go('customer');
                },
                function (error) {
                    console.log(error);
                }
            );
        }
    }]);