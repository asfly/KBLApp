/*
* Create by daniel.zuo on 4/19/2015
*/

KBLApp.controller("Customer.Task.ListController", ['$rootScope', '$scope', '$state', '$stateParams', 'ApiService', 'CommService', 'CustomerTrackService',
function ($rootScope, $scope, $state, $stateParams, ApiService, CommService,CustomerTrackService) {
    var track = CustomerTrackService.biz;

    track.task = { items: [] };

    track.list($stateParams.cid).then(function(data){
        track.task.items = data.result;
    },function(response){
        console.log(response);
    });

    $scope.task = track.task;
}]);