/**
 * Factory: CandidatesFactory
 */
angular.module('MyApp')
  .factory('CandidatesFactory', function CandidatesFactory ($q, $http, $routeParams) {
    'use strict';
    var exports = {};	
	
    exports.candidates = [];

	/*
    exports.reply = function (message) {
      if (message) {
        // we would obviously hit the back-end here
        // but let's just alert what we've typed
        alert('Reply content: ' + message);
      }
    };
	*/
    exports.getCandidates = function (params) {
        var deferred = $q.defer();
        $http.get('http://api.pemiluapi.org/berita-pilkada/api/candidates?apiKey=fea6f7d9ec0b31e256a673114792cb17')
          .success(function (data) {
			  exports.candidates = data.data.results.candidates;
			  deferred.resolve(data);
          })
          .error(function (data) {
			  deferred.reject(data);
          });
        return deferred.promise;
    };

    return exports;
  });
