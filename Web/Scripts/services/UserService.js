/*
* create by daniel.zuo on 2015.4.19
*/
KBLApp.service('UserService', ["$rootScope", "ApiService", function ($rootScope, ApiService) {
    var service = {
        //role:{
        //    "Cid": 0,
        //    "UserName": "",
        //    "Password": "",
        //    "CreateDate": new Date().getTime(),
        //    "LastSigninDate": new Date().getTime(),
        //    "SignInCount": 1,
        //    "UpdateAccountDate": new Date().getTime(),
        //    "Rid":0
        //},
        roleSetting:{
            "Rid": "",
            "ParentCid": 0,
            "ParentCName": "",
            "ChildCid": 0,
            "ChildCName": 0,
            "RoleLevel": 0,
            "RoleType": 16
        },

        signIn: function (loginModel) {
            var loginModel = JSON.stringify(loginModel);
            return ApiService.post(ApiService.getApiUrl().signIn, {}, loginModel);
        },
        init: function (cid) {
            return ApiService.post(ApiService.getApiUrl().getRole, {}, { "cid":cid})
        },
        checkCustomerCName: function (cname) {
            return ApiService.post(ApiService.getApiUrl().checkCustomerCName, {}, { 'cname': cname });
        },
        checkUserName: function (username) {
            return ApiService.post(ApiService.getApiUrl().checkUserName, {}, { 'username': username });
        },
        submit: function (param) {
            return ApiService.post(ApiService.getApiUrl().saveRole, {}, param)
        }
    }
    return service;
}]);