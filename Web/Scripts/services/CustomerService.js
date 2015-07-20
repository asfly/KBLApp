KBLApp.service('CustomerService', ["$rootScope", 'ApiService', 'CommService', function ($rootScope, ApiService, CommService) {
    var customer = {
        utils: {
            "categories": [{ "id": 0, "name": "普通" }, { "id": 1, "name": "贵宾" }],
            "gender": [{ "id": 0, "name": "男" }, { "id": 1, "name": "女" }],
            "names": [],
            "list": []
        },
        list: function (callback) {
            ApiService.post(ApiService.getApiUrl().getCustomers, {}, {}, callback);
        },

        init: function (cid, callback) {
            ApiService.post(ApiService.getApiUrl().getCustomer, {}, { CID: cid }, callback );
        },

        save: function (param,success,error) {            
            ApiService.post(ApiService.getApiUrl().register, {}, param,success, error);
        }
    }
    var service = { biz: customer };
    return service;
}]);