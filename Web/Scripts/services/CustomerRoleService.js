KBLApp.service('CustomerRoleService', ["$rootScope", '$q', 'ApiService', 'CommService', function ($rootScope, $q, ApiService, CommService) {
    var role = {
        model: {},
        roles: {
            "types": [{ "name": '管理员', "level": "0" }, { "name": '营养师', "level": "4" }, { "name": '贵宾客户', "level": "8" }, { "name": "普通", "level": "12" }],
            "levels": [{ "name": "3级", "level": "3" }, { "name": "4级", "level": "3" }, { "name": "5级", "level": "5" }]
        },
        list: function () {
            return ApiService.post(ApiService.getApiUrl().roleList, {}, {});
        },

        check: function (cid) {
            return ApiService.post(ApiService.getApiUrl().checkRole, {}, { cid: cid });
        },

        init: function (cid) {
            return ApiService.post(ApiService.getApiUrl().getRole, {}, { cid: cid });
        },

        save: function (param) {
            return ApiService.post(ApiService.getApiUrl().submitRole, {}, param);
        }
    }
    var service = { biz: role };
    return service;
}]);