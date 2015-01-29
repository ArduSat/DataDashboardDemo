'use strict';

/* global angular, console */

angular.module('ardusatData.sensorData', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/data', {
    templateUrl: 'sensor-data/sensors.html',
    controller: 'SensorDataCtrl'
  });
}])

.controller('SensorDataCtrl', ['$scope', '$http', 'd3Service', function($scope, $http, d3Service) {
  $scope.data = "";

  d3Service.d3().then(function(d3) { console.log("d3 loaded!"); });
  $http.get('data.json')
    .success(function(data) { $scope.data = data; })
    .error(function(err) { console.log("Error fetching data: " + err); });
}]);
