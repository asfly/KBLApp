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
    //$urlRouterProvider.otherwise("/");

    $stateProvider
    .state('customer', {
        url: "/",
        templateUrl: '/Templates/customer.list.html',
    })
    .state('create', {
        url: "customer/create",
        templateUrl: '/Templates/customer.create.html'
    })
    .state('edit', {
        url: 'customer/edit/{cid:[0-9]}',
        templateUrl: '/Templates/customer.create.html'
    })
    .state('track', {
        url: '/customer/track',
        templateUrl: '/Templates/customer.track.html'

    })
    .state('track.list', {
        url: '/{cid:[0-9]{1,4}}',
        templateUrl: '/Templates/customer.track.list.html'
    })
    .state('vip.track', {
        url: 'customer/vip/track/{cid:[0-9]{1,4}}',
        templateUrl: '/Templates/customer.track.html'
    })
    .state('return-a-visit', {
        url: 'customer/retuen-a-visit/{cid:[0-9]{1,4}}',
        templateUrl: '/Templates/customer.track.html'
    })
    .state('product', {
        url: 'customer/product/{cid:[0-9]{1,4}}',
        templateUrl: '/Templates/customer.product.list.html'
    })
});