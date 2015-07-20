/*
*  create by daniel.zuo on 2015.4.19
*/

KBLApp.directive('loadingPanel', function ($timeout) {
    return {
        restrict: 'E',
        replace: true,
        controller: function ($scope) {
            console.log("loadingPanel");
        },
        template: "<div>"
                  +     "<div class=\"modal-backdrop fade in\"></div>"
                  +     "<div class=\"modal\">"
                  +         "<div class=\"modal-dialog\">"
                  +              "<div class=\"modal-content\">"                                    
                  +                  "<div class=\"modal-body\">"
                  +                      "<img src=\"../public/imges/2013092022533282.gif\" />"
                  +                 "</div>"
                  +             "</div>"
                  +         "</div>"
                  +     "</div>"
                  +"</div>",
        //templateUrl:"Templates/loading.html",
        link: function (scope, element, attr) {
            scope.$on("showLoading", function () {                
                element.find(".modal,.modal-backdrop").show();
            });

            function hideLoading() {
                element.find(".modal,.modal-backdrop").hide('slow');
            }

            scope.$on("hideLoading", function () {
                hideLoading();
            });

            hideLoading();
        }
    };
});