KBLApp.service('CustomerService', ["$rootScope", '$q','ApiService', 'CommService', function ($rootScope,$q, ApiService, CommService) {
    var customer = {
        model:{},
        utils: {
            "categories": [{ "id": 0, "name": "普通" }, { "id": 1, "name": "贵宾" }],
            "gender": [{ "id": 0, "name": "男" }, { "id": 1, "name": "女" }],
            "names": [],
            "list": [],
            "split": { "categories": '客户类别', "gender": "性别" }
        },
        list: function () {
            return ApiService.post(ApiService.getApiUrl().getCustomers, {}, {});
        },

        init: function (cid) {
            return ApiService.post(ApiService.getApiUrl().getCustomer, {}, { cid: cid });
        },

        save: function (param) {            
            return ApiService.post(ApiService.getApiUrl().register, {}, param);
        }
    }
    var service = { biz: customer };
    return service;
}]);