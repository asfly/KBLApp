/*
*** create by daniel.zuo on 4/22/2015
*/
'use strict'
KBLApp.config(function ($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {            
            templateUrl: '/Templates/customer-list.html',
            //controller: 'CustomerController',
        })
        .when('/customer/create', {            
            templateUrl: '/Templates/customer-create.html',
            //controller: 'CustomerController'
        })
        .when('/customer/edit/:CID', {            
            templateUrl: '/Templates/customer-create.html',
            //controller: 'CustomerController'
        })
        .when('/customer/track/:CID', {
            templateUrl: '/Templates/customer-track.html',
            //controller: 'CustomerController'
        })
      .otherwise({
          redirectTo: '/error',
          templateUrl: '/Templates/Error.html'
      });
    //$locationProvider.html5Mode(true);
});