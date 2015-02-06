
/**
 * Created by JKnott on 2/3/2015.
 */
'use strict';

arduApp.directive('infraredtemp', function () {
    return {
        restrict: 'A',
        replace: true,
        templateUrl: '../../views/common/charts/fluid.html',
        controller: function ($scope,ardusatData,$timeout,chartHelper) {
            var sensorName = "infraredTemp";
            var colors = ["#f0ad4e"];
            $scope.options = {chart:{type: 'lineChart'}};
            ardusatData.getDataBySensor(sensorName).then(function(sensorData){
                $scope.chartData = [{
                    "values":sensorData.data
                }];
                $scope.options = chartHelper.lineChartSettings(sensorName,colors,sensorData.unit);
            });

            $scope.$on('widgetResized', function (event, size) {
                $scope.width = size.width || $scope.width;
                $scope.height = size.height || $scope.height;
                if(size.height){
                    $scope.options.chart.height = size.height-20;
                }
                $timeout(function(){$(window).trigger('resize'),500});
            });
        }
    };
});