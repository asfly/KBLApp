/*
* Create by daniel.zuo on 4/19/2015
*/

KBLApp.controller("Customer.ListController", ['$rootScope', '$scope', '$state', '$stateParams', '$location', 'ApiService', 'CommService','CustomerService',
    function ($rootScope, $scope, $state, $stateParams, $location, ApiService, CommService, CustomerService) {

        $scope.customer = { items: [] };
        var customer = CustomerService.biz;

        var promise = customer.list(); // 同步调用，获得承诺接口
        promise.then(function (response) {  // 调用承诺API获取数据 .resolve  
            $scope.customer.items = response.result;
            angular.forEach(response.result, function (model, i) {
                customer.utils.names.push(model.CName);
            });
        }, function(data) {  // 处理错误 .reject  
            console.log(data);
        });

        $scope.redirect = function (cid) {
            CommService.customerId = cid;
            $state.go('track.task', { cid: cid });
        }
		
        $scope.filter = function (key, col, value) {
        	switch (col) {
        		case 'CategoryID':
        			$scope.search = { c: { CategoryID: value } };
        			break;
        		case 'Gender':
        			$scope.search = { c: { Gender: value } };
        			break;
        		default:
        			$scope.search = {};
        			break;
			}        	
        	$scope.searchText = '[筛选：' + customer.utils.split[key] + '>' + customer.utils[key][value].name + '】';
        }
}]);