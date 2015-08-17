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
        templateUrl: '/Templates/user/signin/signin.html?' + Math.random(),
        controller: 'User.SignInController'
    })
    .state('customer', {
        url: "/customer",
        templateUrl: '/Templates/customer.list.html?' + Math.random(),
        controller: 'Customer.ListController'
    })
    .state('create', {
        url: "/customer/create",
        templateUrl: '/Templates/customer.create.html?' + Math.random(),
        controller: 'Customer.CreateController'
    })

    .state('create.auth', {
        url: "/@auth",
        templateUrl: '/Templates/users/register/register.html?' + Math.random(),
        controller: 'User.RegisterController'
    })
    .state('edit', {
        url: '/customer/edit/{cid:[0-9]{1,4}}',
        templateUrl: '/Templates/customer.create.html?' + Math.random(),
        controller: 'Customer.EditController'
    }).state('edit.auth', {
        url: '/customer/edit/{cid:[0-9]{1,4}}/@auth',
        templateUrl: '/Templates/customer.register.html?' + Math.random(),
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