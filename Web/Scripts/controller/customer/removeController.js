/*
* Create by daniel.zuo on 4/19/2015
*/

KBLApp.controller("Customer.ListController", ['$rootScope', '$scope', '$state', '$stateParams', '$location', 'ApiService', 'CommService',
    function ($rootScope, $scope, $state, $stateParams, $location, ApiService, CommService) {

        var customer = {
            utils: {
                "categories": [{ "id": 0, "name": "普通" }, { "id": 1, "name": "贵宾" }],
                "gender": [{ "id": 0, "name": "男" }, { "id": 1, "name": "女" }],
                "names": [],
                "list": []
            },
            list: function (scope) {
                ApiService.post(ApiService.getApiUrl().getCustomers, {}, {}, function (response) {
                    scope.customer.items = response.data;
                    angular.forEach(response.data, function (model, i) {
                        customer.utils.names.push(model.CName);
                    });
                });
            },

            init: function (scope,cid) {
                ApiService.post(ApiService.getApiUrl().getCustomer, {}, { CID: cid }, function (data) {
                    scope.customer.model = data.customer;
                    scope.customer.model.CategoryID = customer.utils.categories[data.customer.CategoryID];
                    scope.customer.model.Gender = customer.utils.gender[data.customer.Gender];
                });
            },

            save: function (scope) {
                var data = {
                    Input0: {
                        Customer: scope.customer.model
                    },
                    S: Math.random()
                };
                data.Input0.Customer.CategoryID = customer.model.CategoryID.id;
                data.Input0.Customer.Gender = customer.model.Gender.id;
                ApiService.post(ApiService.getApiUrl().register, {}, data, function () {
                    $location.path('/');
                }, function (data) {
                    if (data) {
                        console.log('error', data);
                    }
                });
            }
        }

        $scope.customer = customer;

        if ($stateParams.cid && $stateParams.cid > 0) {
            $scope.edit($stateParams.cid);
            customer.init(param || $stateParams.cid);
        } else {
            $scope.customer.list();
        }

        $scope.edit = function (param) {
            customer.init(param || $stateParams.cid);
            $state.go('customer.edit', { "cid": param });
        }
    }]);