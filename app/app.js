'use strict';

// Declare app level module which depends on views, and components
angular.module('ardusatData', [
  'ngRoute',
  'ui.bootstrap',
  'ardusatData.sensorData',
  'ardusatData.d3',
]).

config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/data'});
}]);
