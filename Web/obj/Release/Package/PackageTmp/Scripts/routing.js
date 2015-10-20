/*
*** create by daniel.zuo on 4/22/2015
*/
'use strict'
KBLApp.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    /////////////////////////////
    // Redirects and Otherwise //
    /////////////////////////////

    // Use $stateProvider to configure your states.
    $urlRouterProvider.otherwise("/");

    $stateProvider
    .state('signin', {
        url: "/",
        templateUrl: '/Templates/users/signin/signin.html?' + Math.random(),
        controller: 'User.SignInController'
    })
    .state('customer', {
        url: "/customer",
        templateUrl: '/Templates/customer/Main/customer.html?' + Math.random(),
        controller: 'Customer.MainController'
    })
    .state('customer.type', {
        url: "/:type?:s",
        templateUrl: '/Templates/customer/list/customer.list.html?' + Math.random(),
        controller: 'Customer.ListController'
    })
    .state('create', {
        url: "/new-customer",
        templateUrl: '/Templates/customer/create/customer.create.html?' + Math.random(),
        controller: 'Customer.CreateController'
    })

    .state('create.auth', {
        url: "/@auth",
        templateUrl: '/Templates/users/register/register.html?' + Math.random(),
        controller: 'User.RegisterController'
    })
    .state('edit', {
        url: '/customer/edit/:cid',
        templateUrl: '/Templates/customer/create/customer.create.html?' + Math.random(),
        controller: 'Customer.EditController'
    })
    .state('edit.auth', {
        url: '/@auth',
        templateUrl: '/Templates/users/register/register.html?' + Math.random(),
        controller: 'User.RegisterController'
    })
    .state('track', {
        url: '/customer/:cid',
        templateUrl: '/Templates/track/task/main/customer.track.html?' + Math.random(),
        controller: 'Customer.TaskController'
    })
    .state('track.task', {
        url: '/task/list',
        templateUrl: '/Templates/track/task/list/customer.track.task.list.html?' + Math.random(),
        controller: 'Customer.Task.ListController'
    })
    .state('track.task-create', {
        url: '/task/create',
        templateUrl: '/Templates/track/task/create/customer.track.task.create.html?' + Math.random(),
        controller: 'Customer.Task.CreateController'
    })
    .state('track.task-edit', {
        url: '/task/edit/:taskId',
        templateUrl: '/Templates/track/task/create/customer.track.task.create.html?' + Math.random(),
        controller: 'Customer.Task.EditController'
    })
    .state('track.schedule', {
        url: '/schedule',
        templateUrl: '/Templates/track/schedule/list/customer.schedule.list.html?' + Math.random()
    })
    .state('track.vip', {
        url: '/vip',
        templateUrl: '/Templates/track/task/list/customer.track.task.list.html?' + Math.random()
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