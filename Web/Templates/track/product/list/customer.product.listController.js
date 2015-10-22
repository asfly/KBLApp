/*
* Create by daniel.zuo on 4/19/2015
*/
KBLApp.controller("Customer.Product.ListController", ['$scope', '$state', '$stateParams', 'ApiService', 'CommService', 'CustomerTrackService',
    function ($scope, $state, $stateParams, ApiService, CommService, CustomerTrackService) {
        var productService = CustomerTrackService.product;
        var product = $scope.product = {
            customerId: $stateParams.cid,
            list: [],
            asyncData: function () {
                productService.list(product.customerId).then(function (response) {
                    console.log(response.result);
                    $scope.product.list = response.result;
                },
                function (response) {

                });
            },
            remove: function (pid) {
                if(confirm('确定要删除这条记录吗，删除之后将不可恢复？')){
                    productService.remove(product.customerId, pid).then(function (response) {
                        product.asyncData();
                    },
                    function (response) {
                    });
                }                
            }
        }
        product.asyncData();
}]);