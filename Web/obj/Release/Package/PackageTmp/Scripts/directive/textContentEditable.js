/*
*  create by daniel.zuo on 2015.4.19
*/

KBLApp.directive('onRepeatDirective', function ($timeout) {
    return {
        restrict: 'A',
        link: function (scope, element, attr) {
            if (scope.$last === true) {
                $timeout(function () {
                    scope.$emit('ngRepeatFinished');
                });
            }
        }
    };
});