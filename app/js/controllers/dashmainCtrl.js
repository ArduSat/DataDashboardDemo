/**
 * Created by JKnott on 1/31/2015.
 */
'use strict';

arduApp.controller('dashmainCtrl',['$scope','$window','$interval','MyDataModel','chartObjects','localStorageService','notify','$timeout',
    function($scope,$window,$interval,MyDataModel,chartObjects,localStorageService,notify,$timeout){
    $scope.notifyTemplate = '../views/common/notify.html';

    $scope.sensors = chartObjects;
    $scope.dashboard = {
        widgetButtons: false,
        widgetDefinitions: chartObjects,
        storage: $window.localStorage,
        storageId: 'ardusat_charts'
    };
    if(localStorageService.get('activeCharts')){
        $scope.activeCharts =localStorageService.get('activeCharts').length;
    }else{
        $scope.activeCharts = 0 ;
        $timeout(function(){
            var el = document.getElementById('mainmen');
            angular.element(el).trigger('click');
        },500);
    }
    $scope.savedDash = function(){
        notify({ message: "Dashboard saving hasn't been implemented yet.", classes: 'alert-info', templateUrl: $scope.notifyTemplate});
    }
    $scope.addChart = function(chartName,sensor){
        var chartArray = localStorageService.get('activeCharts');

        if(!chartArray){
            chartArray = [chartName];
            localStorageService.set('activeCharts',chartArray);
            $scope.dashboard.addWidget(sensor);
            $scope.activeCharts =localStorageService.get('activeCharts').length;
        }
        else {
            if(chartArray.indexOf(chartName) > -1){
                notify({ message: chartName+' is already being displayed.', classes: 'alert-danger', templateUrl: $scope.notifyTemplate});
            }
            else {
                $scope.dashboard.addWidget(sensor);
                chartArray.push(chartName);
                localStorageService.set('activeCharts',chartArray);
                $scope.activeCharts =localStorageService.get('activeCharts').length;
            }
        }

    }
    $scope.removeChart = function(chartName){
        if(chartName === "all"){
            localStorageService.set('activeCharts',null);
            $scope.activeCharts = 0;
        }
        var chartArray = localStorageService.get('activeCharts');
        if(chartArray){
            var itemLoc = chartArray.indexOf(chartName);
            if(itemLoc != -1) {
                chartArray.splice(itemLoc, 1);
                localStorageService.set('activeCharts',chartArray);
            }
            if(localStorageService.get('activeCharts')){
                $scope.activeCharts = localStorageService.get('activeCharts').length;
            }
            else{
                $scope.activeCharts = 0;
            }
        }

    }
}]);


//Subscribe to data feed for live data
arduApp.factory('MyDataModel', ['WidgetDataModel', function (WidgetDataModel) {
    function MyDataModel() {}
    MyDataModel.prototype = Object.create(WidgetDataModel.prototype);
    MyDataModel.prototype.init = function() {
        // My custom data model setup, like subscribing
        // to WebSocket or starting a REST call interval
    }
    MyDataModel.prototype.destroy = function() {
        // My custom data model teardown, like unsubscribing
        // to WebSocket or clearing a setInterval
    }
    return MyDataModel;
}]);

