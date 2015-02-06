/**
 * Created by JKnott on 2/1/2015.
 */
'use strict';
arduApp.factory('ardusatData', ['$http','$q','$filter',
    function ($http,$q,$filter) {
        var dataEndpoint ="/data.json";
        return {
            getSensors: function () {
                return $http.get(dataEndpoint);
            },
            getDataBySensor: function (sensor) {
                var deferred = $q.defer();
                $http.get(dataEndpoint)
                    .success(function(data) {
                        var dataValues = [];
                        var dataObj = {};
                        var sensorData = $filter('filter')(data,{sensorName:sensor});
                            for(var i = 0; i < sensorData[0].data.length; i++){
                            /*var arrayConvert = _(data[0].data[i]).toArray();
                                console.log("array",arrayConvert);*/
                            dataValues.push({x:sensorData[0].data[i].x,y:sensorData[0].data[i].y});
                                dataObj = {
                                    perturbScale:sensorData[0].perturbScale,
                                    unit:sensorData[0].unit,
                                    data:dataValues
                                }
                            }
                            deferred.resolve(dataObj);
                    }).error(function(msg, code) {
                        deferred.reject(msg);
                    });
                return deferred.promise;
            }
        }
    }]);
