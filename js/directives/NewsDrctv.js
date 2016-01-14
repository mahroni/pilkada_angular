/**
 * Directive: news <news></news>
 */
angular.module('MyApp')
  .directive('news', function NewsDrctv () {
    'use strict';

    return {
      restrict: 'EE',
      replace: true,
      scope: true,
      templateUrl: "js/directives/news.tmpl.html",
      controllerAs: 'news',

      controller: function (NewsFactory) {
        this.news = [];		
        NewsFactory.getNews()
			.then( angular.bind( this, function then() {
              this.news = NewsFactory.news;
			  //console.log(this.news);
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