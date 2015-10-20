/*
* Create by daniel.zuo on 4/19/2015
*/
KBLApp.controller("Customer.Product.SaveController", ['$rootScope', '$scope', '$state', '$stateParams', 'ApiService', 'CommService', 'CustomerTrackService',
    function ($rootScope, $scope, $state, $stateParams, ApiService, CommService, CustomerTrackService) {
        var productService = CustomerTrackService.product;
        var product = $scope.product = {
            model: {
                Pid: $stateParams.pid || 0,
                Cid: $stateParams.cid
            },
            save: function () {
                product.model.GeneratintVpDate = Math.floor(new Date($scope.product.model.GeneratintVpDate).getTime() / 1000),
                product.model.PurchasingDate = Math.floor(new Date($scope.product.model.PurchasingDate).getTime() / 1000),
                productService.save(product.model.Cid, product.model).then(function (response) {
                    $state.go('track.product.list');
                },
                function (error) {
                    console.log(error);
                });
            },
            remove: function () {
            }
        }
        console.log($state);
        if ($state.is('track.product.edit')) {
            productService.init({ cid:product.model.Cid,pid: product.model.Pid }).then(function (response) {
                $scope.product.model = response.result;
                $scope.product.model.GeneratintVpDate = new Date(response.result.GeneratintVpDate*1000);
                $scope.product.model.PurchasingDate = new Date(response.result.PurchasingDate*1000);
            },
            function (error) {
                console.log(error);
            });
        }
}]);