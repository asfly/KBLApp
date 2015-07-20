/*
* Create by daniel.zuo on 4/19/2015
*/

KBLApp.controller("Customer.Task.EditController", ['$rootScope', '$scope', '$state', '$stateParams', 'ApiService', 'CommService', 'CustomerTrackService',
function ($rootScope, $scope, $state, $stateParams, ApiService, CommService, CustomerTrackService) {

    var track = CustomerTrackService.biz;
    track.task = { model: {}, sections: track.utils.ReviewStatus };

    track.init($stateParams.cid, $stateParams.taskId).then(function (data) {
        track.task.model = data.result;
        var statusIdx = data.result.ReviewStatus ? 1 : 0;
        track.task.model.ReviewStatus = track.task.sections[statusIdx];

    }, function (response) {
        console.log(response);
    });

    $scope.task = track.task;

    $scope.save = function () {
        $scope.task.model.Cid = $scope.customer.model.Cid;
        var reviewStatus = $scope.task.model.ReviewStatus;
        $scope.task.model.ReviewStatus = reviewStatus.id;

        var model = {
            Input0: {
                Task: $scope.task.model
            },
            S: Math.random()
        };

        var param = JSON.stringify(model);
        track.save($stateParams.cid, param).then(function (data) {
            if (data.statusCode == 200) {
                $state.go('track.task', { cid: $stateParams.cid });
            }
        }, function (error) {
            console.log(error);
        });
    }
}]);