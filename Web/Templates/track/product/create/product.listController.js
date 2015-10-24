/*
 * Create by daniel.zuo on 4/19/2015
 */
KBLApp.controller("Product.ListController", ['$rootScope', '$scope', '$state', '$stateParams', 'ApiService', 'CommService', 'CustomerTrackService',
    function ($rootScope, $scope, $state, $stateParams, ApiService, CommService, CustomerTrackService) {
        var products = $scope.products = {
            list:[],
            async: function () {
                ApiService.get(ApiService.getApiUrl().getAllProduct,{}).then(function(response){
                    $scope.products.list = response.result;
                })
            },
            getProduct:function(e,model){                
                if (!e.target.checked) {
                    model = {};
                }
                $scope.$emit('setProduct', model);
            }
        }
        products.async();
    }
]);


