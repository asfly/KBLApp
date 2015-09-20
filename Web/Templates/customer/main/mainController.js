KBLApp.controller("Customer.MainController", ['$rootScope', '$scope', '$state', '$stateParams', '$location', 'ApiService', 'CommService', 'CustomerService',
    function ($rootScope, $scope, $state, $stateParams, $location, ApiService, CommService, CustomerService) {
        var s = CommService.base64encode(JSON.stringify(Math.random()));
        $state.go('customer.type', { type: 'general', s: s });
        $scope.tab = function (categoryName) {
            s = CommService.base64encode(JSON.stringify(Math.random()));
            $state.go('customer.type', { type:categoryName,s:s });
        };        
}]);