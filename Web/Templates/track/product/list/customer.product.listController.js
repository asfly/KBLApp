/*
* Create by daniel.zuo on 4/19/2015
*/
KBLApp.controller("Customer.Product.ListController", ['$scope', '$state', '$stateParams', 'ApiService', 'CommService', 'CustomerTrackService',
    function ($scope, $state, $stateParams, ApiService, CommService, CustomerTrackService) {
        var productService = CustomerTrackService.product;
        var prodcut = $scope.prodcut = {
            customerId: $stateParams.cid,
            list: [],
            asyncData: function () {
                productService.list(prodcut.customerId).then(function (response) {
                    console.log(response.result);
                    $scope.prodcut.list = response.result;
                },
                function (response) {

                });
            },
            remove: function (pid) {
                productService.remove(prodcut.customerId, {pid:pid}).then(function (response) {
                    console.log(response.result);
                    $scope.prodcut.list = response.result;
                },
                function (response) {
                });
            }
        }
        prodcut.asyncData();
}]);