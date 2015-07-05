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
                  +                      "<i class=\"fa fa-spinner fa-pulse fa-3x fa-fw margin-bottom\"></i>"
                  +                 "</div>"
                  +             "</div>"
                  +         "</div>"           
                  +     "</div>"
                  +"</div>",
        //templateUrl:"Templates/loading.html",
        link: function (scope, element, attr) {
            scope.$on("showLoading", function () {                
                element.find(".modal,.modal-backdrop").show();
                //element.find(".modal-backdrop").show();
            });

            scope.$on("hideLoading", function () {
                element.find(".modal,.modal-backdrop").hide();
                //element.find(".modal").hide();
                //element.find(".modal-backdrop").hide();
            });
        }
    };
});