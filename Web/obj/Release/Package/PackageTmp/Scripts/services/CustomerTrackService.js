KBLApp.service('CustomerTrackService', ["$rootScope", '$q', 'ApiService', 'CommService', function ($rootScope, $q, ApiService, CommService) {
    var task = {
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
        },
		
    	remove: function (cid,taskId) {
    		return ApiService.post(ApiService.getApiUrl().removeTask, { cid: cid, taskId: taskId }, {});
		}
    }
    var product = {
        init: function (param) {
            return ApiService.get(ApiService.getApiUrl().getProduct, param, {});
        },
        list: function (cid) {
            return ApiService.get(ApiService.getApiUrl().getProductList, { cid: cid }, {});
        },
        save: function (cid,param) {
            return ApiService.post(ApiService.getApiUrl().saveProduct, { cid: cid }, param);
        },
        remove: function (cid,param) {
            return ApiService.post(ApiService.getApiUrl().removeProduct, { cid: cid }, param);
        }
    }
    var service = { biz: task, product: product };
    return service;
}]);