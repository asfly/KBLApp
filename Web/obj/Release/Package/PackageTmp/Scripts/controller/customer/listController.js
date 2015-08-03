/*
* Create by daniel.zuo on 4/19/2015
*/

KBLApp.controller("Customer.ListController", ['$rootScope', '$scope', '$state', '$stateParams', '$location', 'ApiService', 'CommService','CustomerService',
    function ($rootScope, $scope, $state, $stateParams, $location, ApiService, CommService, CustomerService) {

        $scope.customer = { items: [] };
        var customer = CustomerService.biz;

        CommService.prepbroadcast('showLoading', {});

        var promise = customer.list(); // 同步调用，获得承诺接口  
        promise.then(function (response) {  // 调用承诺API获取数据 .resolve  
            $scope.customer.items = response.data;
            angular.forEach(response.data, function (model, i) {
                customer.utils.names.push(model.CName);
            });
            CommService.prepbroadcast('hideLoading', {});
        }, function(data) {  // 处理错误 .reject  
            console.log(data);
        });

        $scope.redirect = function (cid) {
            CommService.customerId = cid;
            $state.go('track.task', { cid: cid });
        }
}]);