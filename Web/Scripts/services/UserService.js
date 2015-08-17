/*
* create by daniel.zuo on 2015.4.19
*/
KBLApp.service('UserService', ["$rootScope", "ApiService", function ($rootScope, ApiService) {
    var service = {
        signIn: function (loginModel) {
            var loginModel = JSON.stringify(loginModel);
            return ApiService.post(ApiService.getApiUrl().signIn, {}, loginModel);
        },
        checkCustomerCName: function (cname) {
            return ApiService.post(ApiService.getApiUrl().checkCustomerCName, {}, { 'cname': cname });
        },
        checkUserName: function (username) {
            return ApiService.post(ApiService.getApiUrl().checkUserName, {}, { 'username': username });
        }
    }
    return service;
}]);