angular.module('MyApp', [
  'ngRoute',
  'ngSanitize'
]).config(function ( $routeProvider ) {
  
  'use strict';

  $routeProvider  
    .when('/paijo', {
      templateUrl: 'views/paijo.html',
      controller: 'PaijoCtrl',
      controllerAs: 'paijo'
    })  
    .when('/faq', {
      templateUrl: 'views/faq.html',
      controller: 'FaqCtrl',
      controllerAs: 'faq'
    })
    .when('/candidates', {
      templateUrl: 'views/candidate.html',
      controller: 'CandidatesCtrl',
      controllerAs: 'candidate'
    })
    .when('/regions', {
      templateUrl: 'views/region.html',
      controller: 'RegionsCtrl',
      controllerAs: 'region'
    })
    .when('/news', {
      templateUrl: 'views/news.html',
      controller: 'NewsCtrl',
      controllerAs: 'news'
    })
    .otherwise({
      redirectTo: '/paijo'
    });
}).run(function($rootScope){
  $rootScope.$on('$routeChangeError', function(event, current, previous, rejection){
    console.log(event, current, previous, rejection)
  })
});