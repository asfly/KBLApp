/*
* Create by daniel.zuo on 4/19/2015
*/

KBLApp.controller("Customer.Task.CreateController", ['$rootScope', '$scope', '$state', '$stateParams', 'ApiService', 'CommService', 'CustomerTaskService',
function ($rootScope, $scope, $state, $stateParams, ApiService, CommService, CustomerTaskService) {
    var track = CustomerTaskService.biz;
    track.task = { model: {}, sections: track.utils.ReviewStatus };
    $scope.route = { 'action':'新建'};
    $scope.save = function () {
        $scope.task.model.Cid = $scope.customer.model.Cid;
        var reviewStatus = $scope.task.model.ReviewStatus;
        $scope.task.model.ReviewStatus = reviewStatus.id;

        var model = {
            Input0: {
                Task: $scope.task.model
            },
            S:Math.random()
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

    $scope.task = track.task;
}]);