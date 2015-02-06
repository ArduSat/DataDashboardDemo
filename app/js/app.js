'use strict';

// Declare app level module which depends on views, and components
var arduApp = angular.module('ardusatData', [
'ui.router',
'ui.bootstrap',
'ui.dashboard',
'ardusatData.sensorData',
'ardusatData.d3',
'nvd3',
'LocalStorageModule',
'cgNotify'
]);
arduApp.config(function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise("/");
    $stateProvider
        .state('dash', {
            url: "/",
            templateUrl: "../views/dashmain.html"
        })
        .state('sideNav', {
            url: "/sideNav",
            templateUrl: "../views/common/navigation.html"
        })
        .state('dashboards.dashboard_2', {
            url: "/dashboard_2",
            templateUrl: "../views/dashboard_2.html",
            data: { pageTitle: 'Dashboard 2' }
        });

});

arduApp.run(['$state','stateWatcher','$rootScope',function($rootScope, $state, stateWatcher) {
        $rootScope.$state = $state;
    }]);

