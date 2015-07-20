/*
* Create by daniel.zuo on 4/19/2015
*/

KBLApp.controller("Customer.TaskController", ['$rootScope', '$scope', '$state', '$stateParams','ApiService', 'CommService', 'CustomerService',
    function ($rootScope, $scope, $state, $stateParams, ApiService, CommService, CustomerService) {

        var customer = CustomerService.biz;

        customer.init($stateParams.cid).then(function (data) {  // 调用承诺API获取数据 .resolve 
            $scope.customer = { model: data.customer };
        }, function (data) {  // 处理错误 .reject  
            console.log(data);
        });

    }]);