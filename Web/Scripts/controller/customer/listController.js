/*
* Create by daniel.zuo on 4/19/2015
*/

KBLApp.controller("Customer.ListController", ['$rootScope', '$scope', '$state', '$stateParams', '$location', 'ApiService', 'CommService','CustomerService',
    function ($rootScope, $scope, $state, $stateParams, $location, ApiService, CommService, CustomerService) {

        $scope.customer = { items: [] };
        var customer = CustomerService.biz;

        function callback(response) {
            $scope.customer.items = response.data;
            angular.forEach(response.data, function (model, i) {
                customer.utils.names.push(model.CName);
            });
            CommService.prepbroadcast('hideLoading', {});
        }    
        CommService.prepbroadcast('showLoading', {});
        customer.list(callback);
}]);