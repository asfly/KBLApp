/*
* Create by daniel.zuo on 4/19/2015
*/

KBLApp.controller("CustomerController", ['$scope', '$routeParams','$location', 'ApiService', 'CommService', function ($scope,$routeParams,$location, ApiService, CommService) {

    var cid = $routeParams.CID || 0;

    $scope.customers = {
        "categories": [{ "id": 0, "name": "普通" }, { "id": 1, "name": "贵宾" }],
        "gender": [{ "id": 0, "name": "男" }, { "id": 1, "name": "女" }],
        "names": [],
        "list": []
    };

    $scope.select = {};

    $scope.save = function () {
        var customer = $scope.customer;
        var data = {
            Input0: {
                Customer: customer
            },
            S:Math.random()
        };
        data.Input0.Customer.CategoryID = customer.CategoryID.id;
        data.Input0.Customer.Gender = customer.Gender.id;
        ApiService.post(ApiService.getApiUrl().register, {}, data, function () {
            $location.path('/');
        }, function (data) {
            if (data) {
               console.log('error',data);
            }
        });
    }
    $scope.list = function () {
        ApiService.post(ApiService.getApiUrl().getCustomers, {}, {}, function (response) {
            $scope.customers.list = response.data;
            angular.forEach(response.data, function (model, i) {
                $scope.customers.names.push(model.CName);
            });
            console.log($scope.customers.names);
        });
    }

    $scope.init = function (cid) {
        ApiService.post(ApiService.getApiUrl().getCustomer, {}, { CID: cid }, function (data) {
            $scope.customer = data.customer;
            //$scope.selected.gender = { "id": data.customer.CategoryID };
            //$scope.customer = {
            //    "categoryID": $scope.customers.categories[data.customer.CategoryID],
            //    "gender": $scope.customers.gender[data.customer.Gender]
            //};
            $scope.customer.CategoryID = $scope.customers.categories[data.customer.CategoryID];
            $scope.customer.Gender = $scope.customers.gender[data.customer.Gender];
            console.log($scope.customer);
        });
    }

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

    if (cid > 0) {
        $scope.init(cid);
    } else {
        $scope.list();
    }
    $scope.edit = function (cid) {        
        $location.path('/customer/edit/'+cid);
    }
    $scope.track = function (cid) {
        $location.path('/customer/track/' + cid);
    }
    $scope.tab = function () {
        alert('正在建设……');
    }
}]);