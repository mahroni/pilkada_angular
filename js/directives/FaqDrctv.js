/**
 * Directive: Faq <faq></faq>
 */
angular.module('MyApp')
  .directive('faq', function FaqDrctv () {
    'use strict';

    return {
      restrict: 'EB',
      replace: true,
      scope: true,
      templateUrl: "js/directives/faq.tmpl.html",
      controllerAs: 'faq',

      controller: function (FaqFactory) {
        this.faqs = [];	

        this.goToFaqs = function () {
          FaqFactory.goToFaq();
        };        
		
        FaqFactory.getFaqs()
			.then( angular.bind( this, function then() {
			  console.log(FaqFactory.faqs);
              this.faqs = FaqFactory.faqs;
            }));
		},
		link: function (scope, element, attrs, ctrl) {
		/* 
		by convention we do not $ prefix arguments to the link function
		this is to be explicit that they have a fixed order
		*/
		}
    }
})