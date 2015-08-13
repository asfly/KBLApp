/*
* create by daniel.zuo on 2015.4.19
*/
KBLApp.service('UserService', ["$rootScope", "ApiService", function ($rootScope, ApiService) {
    var service = {
        signIn: function (loginModel) {
            var loginModel = JSON.stringify(loginModel);
            return ApiService.post(ApiService.getApiUrl().signIn, {}, loginModel);
        }
    }
    return service;
}]);