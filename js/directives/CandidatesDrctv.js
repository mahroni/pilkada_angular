/**
 * Directive: candidate <candidate></candidate>
 */
angular.module('MyApp')
  .directive('candidate', function CandidatesDrctv () {
    'use strict';

    return {
      restrict: 'EC',
      replace: true,
      scope: true,
      templateUrl: "js/directives/candidate.tmpl.html",
      controllerAs: 'candidate',

      controller: function (CandidatesFactory) {
        this.candidates = [];		
        CandidatesFactory.getCandidates()
			.then( angular.bind( this, function then() {
              this.candidates = CandidatesFactory.candidates;
			  //console.log(this.candidates);
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