/**
 * Created by JKnott on 2/4/2015.
 */
arduApp.directive('ambienttemp', function () {
    return {
        restrict: 'A',
        replace: true,
        templateUrl: '../../views/common/charts/fluid.html',
        controller: function ($scope,ardusatData,$timeout,chartHelper) {
            var sensorName = "ambientTemp";
            var colors = ["#5bc0de"];
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