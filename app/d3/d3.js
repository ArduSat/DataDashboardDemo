'use strict';
/*global angular */ 

angular.module('ardusatData.d3', []).

factory('d3Service', ['$document', '$q', '$window', '$rootScope',
  function($document, $q, $window, $rootScope) {
    var loaded = [];

    var loadScriptTag = function(tagName, retValFxn) {
      var d = $q.defer(),
          onScriptLoad,
          s = $document[0].getElementsByTagName('body')[0],
          scriptTag = $document[0].createElement('script');

      if (loaded.indexOf(tagName) === -1) {
        onScriptLoad = function() {
          loaded.push(tagName);
          $rootScope.$apply(function() { d.resolve(retValFxn()); });
        };

        // Create script tag 
        scriptTag.type = 'text/javascript';
        scriptTag.async = true;
        scriptTag.src = tagName;
        scriptTag.onreadystatechange = function() {
          if (this.readyState === 'complete') { onScriptLoad(); }
        };
        scriptTag.onload = onScriptLoad;

        s.appendChild(scriptTag);
      } else {
        d.resolve(retValFxn());
      }

      return d.promise;
    };

    return {
      d3: function() { return loadScriptTag('d3/d3-src.js', function() { return $window.d3; }); },
    };
}]);
