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
        controller: 'customer.trackController'
    })
        //  客户任务route
    .state('track.task', {
        url: '/task/list',
        templateUrl: '/Templates/track/task/list/customer.track.task.list.html?' + Math.random(),
        controller: 'Customer.Task.ListController'
    })
        // 客户任务创建
    .state('track.task-create', {
        url: '/task/create',
        templateUrl: '/Templates/track/task/create/customer.track.task.create.html?' + Math.random(),
        controller: 'Customer.Task.CreateController'
    })
        //客户任务编辑
    .state('track.task-edit', {
        url: '/task/edit/:taskId',
        templateUrl: '/Templates/track/task/create/customer.track.task.create.html?' + Math.random(),
        controller: 'Customer.Task.EditController'
    })
        //客户任务计划列表
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
    // 顾客产品route
    .state('track.product', {
        url: '/product',
        templateUrl: '/Templates/track/product/customer.product.html?' + Math.random(),
        controller: function ($state) {
            $state.go('track.product.list');
        }
    })
    //客户产品创建
    .state('track.product.create', {
        url: '/create',
        templateUrl: '/Templates/track/product/create/customer.product.create.html?' + Math.random(),
        controller: 'Customer.Product.SaveController'
    })
    //产品列表
    .state('track.product.create.list', {
        url: '/@items',
        templateUrl: '/Templates/track/product/create/product.list.html?' + Math.random(),
        controller: 'Product.ListController'
    })
    //客户产品编辑
    .state('track.product.edit', {
        url: '/edit/:pid',
        templateUrl: '/Templates/track/product/create/customer.product.create.html?' + Math.random(),
        controller: 'Customer.Product.SaveController'
    })
    //客户产品列表
    .state('track.product.list', {
        url: '/list',
        templateUrl: '/Templates/track/product/list/customer.product.list.html?' + Math.random(),
        controller: 'Customer.Product.ListController'
    })
    //产品库存表
    .state('product.list', {
        url: '/list',
        templateUrl: '/Templates/track/product/product.list.html?' + Math.random()
    })
});