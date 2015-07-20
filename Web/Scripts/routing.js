/*
*** create by daniel.zuo on 4/22/2015
*/
'use strict'
KBLApp.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    /////////////////////////////
    // Redirects and Otherwise //
    /////////////////////////////

    // Use $urlRouterProvider to configure any redirects (when) and invalid urls (otherwise).
    //$urlRouterProvider

    // The `when` method says if the url is ever the 1st param, then redirect to the 2nd param
    // Here we are just setting up some convenience urls.
    //.when('/customer/edit/{cid:[0-9]{1，4}}', 'edit')
        //.when('/customer/edit/:cid', '/customer/edit/:cid')
        //.when('/customer/edit/:cid', '/customer/edit/:cid')
        //.when('/customer/edit/:cid', '/customer/edit/:cid')

    // If the url is ever invalid, e.g. '/asdf', then redirect to '/' aka the home state
    //.otherwise('/');


    //////////////////////////
    // State Configurations //
    //////////////////////////

    // Use $stateProvider to configure your states.
    $urlRouterProvider.otherwise("/");

    $stateProvider
    .state('customer', {
        url: "/",
        templateUrl: '/Templates/customer.list.html?' + Math.random(),
        controller: 'Customer.ListController'
    })
    .state('create', {
        url: "/customer/create",
        templateUrl: '/Templates/customer.create.html?' + Math.random(),
        controller: 'Customer.CreateController'
    })
    .state('edit', {
        url: '/customer/edit/{cid:[0-9]{1,4}}',
        templateUrl: '/Templates/customer.create.html?' + Math.random(),
        controller: 'Customer.EditController'
    })
    .state('track', {
        url: '/customer/{cid:[0-9]{1,6}}',
        templateUrl: '/Templates/customer.track.html?' + Math.random(),
        controller: 'Customer.TaskController'
    })
    .state('track.task', {
        url: '/task/list',
        templateUrl: '/Templates/customer.track.task.list.html?' + Math.random(),
        controller: 'Customer.Task.ListController'
    })
    .state('track.task-create', {
        url: '/task/create',
        templateUrl: '/Templates/customer.track.task.create.html?' + Math.random(),
        controller: 'Customer.Task.CreateController'
    })
    .state('track.task-edit', {
        url: '/task/edit/{taskId:[1-9]{1,5}}',
        templateUrl: '/Templates/customer.track.task.create.html?' + Math.random(),
        controller: 'Customer.Task.EditController'
    })
    .state('track.schedule', {
        url: '/schedule',
        templateUrl: '/Templates/customer.schedule.list.html?' + Math.random()
    })
    .state('track.vip', {
        url: '/vip',
        templateUrl: '/Templates/customer.track.task.list.html?' + Math.random()
    })
    .state('track.return-a-visit', {
        url: '/retuen-a-visit',
        templateUrl: '/Templates/customer.track.task.list.html?' + Math.random()
    })
    .state('track.product', {
        url: '/product',
        templateUrl: '/Templates/customer.track.product.list.html?' + Math.random()
    })
});