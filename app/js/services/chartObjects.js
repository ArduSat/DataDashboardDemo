/**
 * Created by JKnott on 2/4/2015.
 */
'use strict';
arduApp.factory('chartObjects',['ardusatData', function(ardusatData) {
    /*Here we build widget objects based off of each sensor
     Objects must be sent to the addWidget() function
     */
    var sensors = [];
    (function(){
        ardusatData.getSensors().then(function(data){
            //console.log("ArdusatData returned",data);
            for(var i = 0; i < data.data.length; i++){
                sensors.push({
                        name:data.data[i].sensorName,
                        directive:(data.data[i].sensorName).toLowerCase(), //Convert to lowercase for directive calling
                        size: {
                            width: '50%',
                            height: '350px'
                        },
                        title: data.data[i].sensorName,
                        latestVal: data.data[i].value
                    }

                )
            }
        });
    })();
    return sensors;
}]);