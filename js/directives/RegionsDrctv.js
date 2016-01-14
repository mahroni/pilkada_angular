/**
 * Directive: region <region></region>
 */
angular.module('MyApp')
  .directive('region', function RegionsDrctv () {
    'use strict';

    return {
      restrict: 'ED',
      replace: true,
      scope: true,
      templateUrl: "js/directives/region.tmpl.html",
      controllerAs: 'region',

      controller: function (RegionsFactory) {
        this.regions = [];		
        RegionsFactory.getRegions()
			.then( angular.bind( this, function then() {
              this.regions = RegionsFactory.regions;
			  //console.log(this.regions);
            }));
		},
		link: function (scope, element, attrs, ctrl) {
		/* 
		by convention we do not $ prefix arguments to the link function
		this is to be explicit that they have a fixed order
		*/
		}
    }
});