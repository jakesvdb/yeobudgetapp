'use strict';

angular.module('angularJsApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
])
/*  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });  */
  .config(function($routeProvider) {
    $routeProvider.
      when('/', {
        title: 'Categories',
        templateUrl: '/views/categories/categories.html',
        controller: 'categoriesCtrl'
      })
      .when('/edit-categories/:id', {
        title: 'Edit Categories',
        templateUrl: 'views/categories/edit-category.html',
        controller: 'editCtrl',
        resolve: {
          categorty: function(services, $route){
            var id = $route.current.params.id;
            return services.getCategory(id);
          }
        }
      })
      .otherwise({
        redirectTo: '/'
      });
});