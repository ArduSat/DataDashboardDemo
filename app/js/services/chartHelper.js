/**
 * Created by JKnott on 2/4/2015.
 */
'use strict';
arduApp.factory('chartHelper', [
    function () {
        var chartHelperObj = {
            lineChartSettings: function (chartTitle, colors, units) {
                if(!colors){
                    colors=["#30b7c1"]
                }
                var chartOptions = {
                        chart:{
                        height:300,
                        color:colors,
                        type: 'lineChart',
                        useInteractiveGuideline: true,
                        showLegend:false,
                        margin: {
                            "top": 20,
                            "right": 50,
                            "bottom": 40,
                            "left": 140
                        },
                        xAxis: {
                            "axisLabel": "Time",
                            "staggerLabels":true,
                            "tickFormat":function (d) {
                            return d3.time.format('%m/%d %H:%M:%S%p')(new Date(d));
                            }
                        },
                        yAxis: {
                            "axisLabel": units,
                                "axisLabelDistance": 20
                        }
                        },
                        title:{
                           /* enable:true,
                            text:"AccelerometerX"*/
                        }
                }
                return chartOptions;
            }
        };

        return chartHelperObj;
    }]);

