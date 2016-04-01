(function() {
  'use strict';

  angular
    .module('livros')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($timeout, toastr, response, $scope) {
    var vm = this;

    vm.selectedItem  = null;
    $scope.searchText    = '';

    getBooks();

    $scope.$watch('searchText',function(newVal){
      if(newVal != ''){
        vm.awesomeThings = response.data.Books.filter(function(value){
          return value.title.toLowerCase().startsWith(newVal.toLowerCase());
        })
      }
      else
      {
        getBooks();
      }
    });

    function getBooks() {
      vm.awesomeThings = response.data.Books;
    }
  }
})();
