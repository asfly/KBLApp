/*
* Create by daniel.zuo on 4/19/2015
*/

KBLApp.controller("Customer.Task.ListController", ['$rootScope', '$scope', '$state', '$stateParams', 'ApiService', 'CommService', 'CustomerTrackService',
function ($rootScope, $scope, $state, $stateParams, ApiService, CommService,CustomerTrackService) {
    var track = CustomerTrackService.biz;

    track.task = {
    	items: [],
    	add: function () {
    		var model = {
    			Input0: {
    				Task: {
    					Cid: $stateParams.cid,
    					Describe: '',
    					During: 0,
    					Other: '',
    					Review: 2,
    					ReviewStatus: 0,
    					StartDate: $scope.date
    				}
    			},
    			S: Math.random()
    		};

    		var param = JSON.stringify(model);
    		track.save($stateParams.cid, param).then(function (data) {
    			if (data.result > 0) {
    				init();
    			}
    			else {
    				alert('新增任务失败!');
    			}
    		}, function (response) {
    			console.log(response);
    		});
    	},
    	remove: function (taskId) {
    		if (window.confirm('确认删除该条记录？')) {
    			track.remove($stateParams.cid, taskId).then(function (data) {
    				if (data.result > 0) {
    					init();
    				}
    				else {
    					alert('新增任务失败!');
    				}
    			}, function (response) {
    				console.log(response);
    			});
    		}
    	}
    };


    function init() {
    	track.list($stateParams.cid).then(function (data) {
    		track.task.items = data.result;
    	}, function (response) {
    		console.log(response);
    	});
    }
    init();
    $scope.task = track.task;
}]);