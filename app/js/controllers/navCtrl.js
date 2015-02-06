/**
 * Created by JKnott on 2/1/2015.
 */
'use strict';
arduApp.controller('navCtrl',['$scope','ardusatData',function($scope,ardusatData){
    ardusatData.getSensors().then(function(data){
        $scope.sensorData = data.data;
    });
}]);