(function() {
  'use strict';

  angular
    .module('livros')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main',
        resolve: {
          response: ['$http',
            function ($http) {
              return $http.get('./assets/config/books.json');
            }]
        }
      });

    $urlRouterProvider.otherwise('/');
  }

})();
