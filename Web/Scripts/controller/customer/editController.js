/*
* Create by daniel.zuo on 4/19/2015
*/
KBLApp.controller("Customer.editController", ['$rootScope', '$scope', '$state', '$stateParams', '$location', 'ApiService', 'CommService','CustomerService',
    function ($rootScope, $scope, $state, $stateParams, $location, ApiService, CommService, CustomerService) {
        var cid = $stateParams.cid;
        $scope.customerId = cid;

        $scope.customer = { model: {} ,sections:[]};
        
        var customer = CustomerService.biz;
        $scope.customer.sections = customer.utils;
        function callback(data) {
            $scope.customer.model = data.customer;
            $scope.customer.model.CategoryID = customer.utils.categories[data.customer.CategoryID];
            $scope.customer.model.Gender = customer.utils.gender[data.customer.Gender];
            CommService.prepbroadcast('hideLoading', {});
        }

        if (cid) {
            CommService.prepbroadcast('showLoading', {});
            customer.init(cid, callback);
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
            customer.save(data, function () {
                $location.path('/');
            }, function (data) {
                if (data) {
                    console.log('error', data);
                }
            });
        }
    }]);