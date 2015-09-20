/*
* Create by daniel.zuo on 4/19/2015
*/

KBLApp.controller("Customer.ListController", ['$rootScope', '$scope', '$state', '$stateParams', '$location', 'ApiService', 'CommService','CustomerService',
    function ($rootScope, $scope, $state, $stateParams, $location, ApiService, CommService, CustomerService) {
        var s = CommService.base64encode(JSON.stringify(Math.random()));

        var types = CustomerService.utils.types;

        
        //function getCategoryId(categoryName) {
        //    for (var i in types) {
        //        if (types[i][type]) {
        //            return types[i][type];
        //        }
        //    }
        //    return 1;
        //}

        $scope.customer = { items: [] };

        var customer = CustomerService.biz;

        var dietitians = {
            options: [],
            selected: {}
        };

        var categoryId = types.indexOf($stateParams.type);
        var params = {
            categoryId:categoryId
        }
        loadData(params);

        function loadData() {
            customer.list(params).then(function (response) {  // 调用承诺API获取数据 .resolve  
                $scope.customer.items = response.result;
                angular.forEach(response.result, function (model, i) {
                    customer.utils.names.push(model.c.CName);
                    if (dietitians.options.indexOf(model.c.Dietitian) < 0 && (model.c.Dietitian || '').length > 0) {
                        dietitians.options.push(model.c.Dietitian);
                    }
                });
                $scope.dietitians = dietitians;
                //$state.
            }, function (data) {  // 处理错误 .reject  
                console.log(data);
            });
        };

        $scope.redirect = function (cid) {
            CommService.customerId = cid;
            $state.go('track.task', { cid: cid });
        }
		
        $scope.filter = function (key, col, value) {
            var category,gender,dietitian, searchText = [];
            switch (col) {
                case 'CategoryID':
                    categoryID = value;
                    searchText[0] = customer.utils[key][value].name;
                    break;
                case 'Gender':
                    gender = value;
                    searchText[1] = customer.utils[key][value].name;
                    break;
                case 'Dietitian':
                    dietitian = key;
                    break;
                default:
                    $scope.search = {};
                    break;
            }
            $scope.search = {
                c:{
                    CategoryID:category,
                    Gender:gender,
                    Dietitian: dietitian
                }
            }
            $scope.searchText = '[筛选：' + (value? searchText.join(','):key) + '】';
        }
}]);