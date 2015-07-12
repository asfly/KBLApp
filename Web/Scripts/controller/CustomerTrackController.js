/*
* Create by daniel.zuo on 4/19/2015
*/

KBLApp.controller("CustomerTrackController", ['$rootScope', '$scope', '$state', '$stateParams', '$location', 'ApiService', 'CommService',
    function ($rootScope, $scope, $state, $stateParams, $location, ApiService, CommService) {
        var cid = $stateParams.cid | 0;

        var track = {
            list: {
                data: []
            }
        };

        $scope.track = track;

        for (var i = 1; i < 10; i++) {
            $scope.track.list.data.push({
                StartDate: '第' + i * 3 + '天',
                Other: '##########',
                During: '三天后',
                CallBack: '已过期',
                CallBackStatus: false,
                Describe: ''
            });
        }
}]);