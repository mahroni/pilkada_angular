/**
 * Factory: RegionsFactory
 */
angular.module('MyApp')
  .factory('RegionsFactory', function RegionsFactory ($q, $http, $routeParams) {
    'use strict';
    var exports = {};	
	
    exports.regions = [];

    exports.getRegions = function (params) {
        var deferred = $q.defer();
        $http.get('http://api.pemiluapi.org/berita-pilkada/api/regions?apiKey=fea6f7d9ec0b31e256a673114792cb17')
          .success(function (data) {
			  exports.regions = data.data.results.regions;
			  deferred.resolve(data);
          })
          .error(function (data) {
			  deferred.reject(data);
          });
        return deferred.promise;
    };

    return exports;
  });
