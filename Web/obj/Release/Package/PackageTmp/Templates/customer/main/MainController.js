KBLApp.controller("Customer.MainController", ['$rootScope', '$scope', '$state', '$stateParams', '$location', 'ApiService', 'CommService', 'CustomerService',
    function ($rootScope, $scope, $state, $stateParams, $location, ApiService, CommService, CustomerService) {        
        $scope.tab = function (categoryName) {
            var s = CommService.base64encode(JSON.stringify(Math.random()));
            $state.go('customer.type', { type:categoryName,s:s });
        };        
}]);