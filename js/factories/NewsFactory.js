/**
 * Factory: NewsFactory
 */
angular.module('MyApp')
  .factory('NewsFactory', function NewsFactory ($q, $http, $routeParams) {
    'use strict';
    var exports = {};	
	
    exports.news = [];

    exports.getNews = function (params) {
        var deferred = $q.defer();
        $http.get('http://api.pemiluapi.org/berita-pilkada/api/news?apiKey=fea6f7d9ec0b31e256a673114792cb17')
          .success(function (data) {
			  exports.news = data.data.results.news;
			  deferred.resolve(data);
          })
          .error(function (data) {
			  deferred.reject(data);
          });
        return deferred.promise;
    };

    return exports;
  });
