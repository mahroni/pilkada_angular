/**
 * Directive: Paijo <paijo></paijo>
 */
angular.module('MyApp')
  .directive('paijo', function PaijoDrctv () {
    'use strict';

    return {
      restrict: 'EA',
      replace: true,
      scope: true,
      templateUrl: "js/directives/paijo.tmpl.html",
      controllerAs: 'paijo',

      controller: function (PaijoFactory) {
        this.candidates = [];		
        PaijoFactory.getCandidates()
			.then( angular.bind( this, function then() {
              this.candidates = PaijoFactory.candidates;
			  //console.log(this.candidates);
            }));		
		this.title = "Daftar Calon Kepala Daerah";
		},
		link: function (scope, element, attrs, ctrl) {
		/* 
		by convention we do not $ prefix arguments to the link function
		this is to be explicit that they have a fixed order
		*/
		}
    }
});