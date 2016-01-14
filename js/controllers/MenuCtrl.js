/**
 * Controller: MenuCtrl
 */
angular.module('MyApp')
  .controller('MenuCtrl',
    function MenuCtrl ($scope, $route, $routeParams) {
		'use strict';
		/*
		render = function(){					
			var renderAction = $route.current.action;
			
			var renderPath = renderAction.split( "." );
			
			var isHome = (renderPath[ 0 ] == "home");
			var isCandidates = (renderPath[ 0 ] == "kandidat");
			var isFaq = (renderPath[ 0 ] == "faq");
			var isRegions = (renderPath[ 0 ] == "region");
			var isNews = (renderPath[ 0 ] == "news");
			// Store the values in the model.
					$scope.renderAction = renderAction;
					$scope.renderPath = renderPath;
					$scope.isHome = isHome;
					$scope.isCandidates = isCandidates;
					$scope.isFaq = isFaq;
					$scope.isRegions = isRegions;
					$scope.isNews = isNews;
		};
		$scope.$on(
			"$routeChangeSuccess",
			function( $currentRoute, $previousRoute ){

				// Update the rendering.
				render();

			}
		);
      */
    });