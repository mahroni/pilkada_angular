/**
 * Factory: PaijoFactory
 */
angular.module('MyApp')
  .factory('PaijoFactory', function PaijoFactory ($q, $http) {
    'use strict';
    var exports = {};

    exports.candidates = [];
	
    exports.getCandidates = function () {
      var deferred = $q.defer();
      /*return $http.get('json/candidates.json')*/
      return $http.get('http://api.pemiluapi.org/calonpilkada/api/candidates?apiKey=7653ddef02de03e1873194b5ccc62395')
        .success(function (data) {
          exports.candidates = data.data.results.candidates;
		  console.log(exports.candidates);
          deferred.resolve(data);
        })
        .error(function (data) {
          deferred.reject(data);
        });
      return deferred.promise;
    };

    return exports;
  });
