/*
* Create by daniel.zuo on 4/19/2015
*/
KBLApp.controller("Customer.CreateController", ['$rootScope', '$scope', '$state', '$stateParams', 'ApiService', 'CommService', 'CustomerService',
    function ($rootScope, $scope, $state, $stateParams, ApiService, CommService, CustomerService) {

        $scope.actionName = '新建';

        var customer = CustomerService.biz;

        $scope.customer = {
            model:
                {
                    "CardType":customer.utils.cards[0],
                    "CategoryID": customer.utils.categories[0],
                    "Gender":customer.utils.gender[0],
                    "Age":0,
                    "Height":0,
                    "Weight":0,
                    "Married": customer.utils.married[0]
                }, sections: customer.utils
        };
        console.log($state);
        $scope.isShowSaveCustomer = $state.current.name != "create.auth";
        $scope.save = function () {
            var data = {
                Input0: {
                    Customer: $scope.customer.model
                },
                S: Math.random()
            };
            var model = {};
            angular.copy(data.Input0.Customer, model);
            data.Input0.Customer.CategoryID = data.Input0.Customer.CategoryID.id;
            data.Input0.Customer.Gender = data.Input0.Customer.Gender.id;
            data.Input0.Customer.Married = data.Input0.Customer.Married.id;
            data.Input0.Customer.CardType = data.Input0.Customer.CardType.id;
            if (data.Input0.Customer) {
                var promise = customer.save(data);
                promise.then(
                    function (response) {
                        if (confirm("是否收录客户的登录名和密码信息？")) {
                            $scope.isShowSaveCustomer = false;
                            $scope.customer.model = model;
                            $state.go('create.auth');
                        }
                        else {
                            $state.go('customer')
                        }
                    },
                    function (error) {
                        console.log(error);
                    }
                );
            }
            
        }
    }]);