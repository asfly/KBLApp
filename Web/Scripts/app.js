'use strict';
var KBLApp = angular.module('kblapp', ['ui.router', 'ui.bootstrap', 'xeditable']);

KBLApp.run(['$rootScope', '$state', '$stateParams', function ($rootScope, $state, $stateParams) {
    // It's very handy to add references to $state and $stateParams to the $rootScope
    // so that you can access them from any scope within your applications.For example,
    // <li ng-class="{ active: $state.includes('contacts.list') }"> will set the <li>
    // to active whenever 'contacts.list' or one of its decendents is active.
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
}])


