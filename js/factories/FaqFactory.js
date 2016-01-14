/**
 * Factory: FaqFactory
 */
angular.module('MyApp')
  .factory('FaqFactory', function FaqFactory ($q, $http, $location) {
    'use strict';
    var exports = {};

    exports.faqs = [];
	
    exports.goToFaqs = function(page) {
		var current = $location.path();
		return page === current ? "active" : "";		
		console.log(page);
    }

    exports.getFaqs = function () {
      var deferred = $q.defer();
      return $http.get('http://api.pemiluapi.org/faqpilkada/api/faqs?apiKey=7653ddef02de03e1873194b5ccc62395')
        .success(function (data) {
          exports.faqs = data.data.results.faqs;
          deferred.resolve(data);
        })
        .error(function (data) {
          deferred.reject(data);
        });
      return deferred.promise;
    };
    return exports;
  });
