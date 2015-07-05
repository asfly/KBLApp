/*
* Create by daniel.zuo on 4/19/2015
*/

KBLApp.controller("CustomerController", ['$rootScope', '$scope', '$state', '$stateParams', '$location', 'ApiService', 'CommService',
    function ($rootScope, $scope, $state, $stateParams, $location, ApiService, CommService) {
        var cid = $stateParams.cid ? $stateParams.cid : 0;
    $scope.select = {};
    var customer = {
        utils:{
            "categories": [{ "id": 0, "name": "普通" }, { "id": 1, "name": "贵宾" }],
            "gender": [{ "id": 0, "name": "男" }, { "id": 1, "name": "女" }],
            "names": [],
            "list": []
        },
        list: function () {
            ApiService.post(ApiService.getApiUrl().getCustomers, {}, {}, function (response) {
                $scope.customer.items = response.data;
                angular.forEach(response.data, function (model, i) {
                    customer.utils.names.push(model.CName);
                });
            });
        },

        init: function (cid) {
            ApiService.post(ApiService.getApiUrl().getCustomer, {}, { CID: cid }, function (data) {
                $scope.customer.model = data.customer;
                $scope.customer.model.CategoryID = customer.utils.categories[data.customer.CategoryID];
                $scope.customer.model.Gender = customer.utils.gender[data.customer.Gender];
            });
        },

        save: function () {
            var data = {
                Input0: {
                    Customer: $scope.customer.model
                },
                S:Math.random()
            };
            data.Input0.Customer.CategoryID = customer.model.CategoryID.id;
            data.Input0.Customer.Gender = customer.model.Gender.id;
            ApiService.post(ApiService.getApiUrl().register, {}, data, function () {
                $location.path('/');
            }, function (data) {
                if (data) {
                    console.log('error',data);
                }
            });
        }
    }
    $scope.customer = customer;

    $scope.tracks = { data: [] };
    for (var i = 1; i < 10; i++) {
        $scope.tracks.data.push({
            StartDate: '第'+i*3+'天',
            Other: '##########',
            During: '三天后',
            CallBack: '已过期',
            CallBackStatus: false,
            Describe: ''
        });
    }

    if ($stateParams.cid && $stateParams.cid > 0) {
        customer.init(param || $stateParams.cid);
        $scope.edit($stateParams.cid);
    } else if ($stateParams.cid) {
        customer.init(param || $stateParams.cid);
        $scope.customer.track(param);
    } else {
        $scope.customer.list();
    }

    $scope.edit = function (param) {        
        $state.go('edit', { "cid": param });
        customer.init(param || $stateParams.cid);
    }

    $scope.track = function (param) {        
        $state.go('track');
        $state.go('track.list', { "cid": param });
        customer.init(param || $stateParams.cid);
    }
}]);