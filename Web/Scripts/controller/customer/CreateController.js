/*
* Create by daniel.zuo on 4/19/2015
*/
KBLApp.controller("Customer.CreateController", ['$rootScope', '$scope', '$state', '$stateParams', 'ApiService', 'CommService', 'CustomerService',
    function ($rootScope, $scope, $state, $stateParams, ApiService, CommService, CustomerService) {

        $scope.actionName = '新建';

        var customer = CustomerService.biz;

        $scope.customer = { model: {} ,sections:customer.utils };

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