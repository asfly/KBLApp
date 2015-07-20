KBLApp.service('CustomerTrackService', ["$rootScope", '$q', 'ApiService', 'CommService', function ($rootScope, $q, ApiService, CommService) {
    var track = {
        utils: {
            "ReviewStatus": [{ "id": 0, "name": "否" }, { "id": 1, "name": "是" }]
        },

        init: function (cid,taskId) {
            return ApiService.post(ApiService.getApiUrl().getTask, { cid: cid, taskId: taskId }, {});
        }, 

        list: function (cid) {
            return ApiService.post(ApiService.getApiUrl().getTaskList, { cid:cid }, {});
        },

        save: function (cid,param) {
            return ApiService.post(ApiService.getApiUrl().saveTask, { cid:cid }, param);
        }
    }
    var service = { biz: track };
    return service;
}]);