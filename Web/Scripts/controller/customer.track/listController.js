/*
* Create by daniel.zuo on 4/19/2015
*/

KBLApp.controller("Customer.track.listController", ['$rootScope', '$scope', '$state', '$stateParams', '$location', 'ApiService', 'CommService', 'CustomerService',
    function ($rootScope, $scope, $state, $stateParams, $location, ApiService, CommService, CustomerService) {

        var track = {
            customerId: $stateParams.cid,
            list: {
                data: []
            }
        };
        var customer = CustomerService.biz;

        $scope.track = track;

        for (var i = 1; i < 10; i++) {
            $scope.track.list.data.push({
                StartDate: '第' + i * 3 + '天',
                Other: '##########',
                During: '三天后',
                CallBack: '已过期',
                CallBackStatus: false,
                Describe: ''
            });
        }

        function callback(data) {
            $scope.customer = {
                model:data.customer
            }
            CommService.prepbroadcast('hideLoading', {});
        }
        CommService.prepbroadcast('showLoading', {});
        customer.init(track.customerId,callback);
}]);