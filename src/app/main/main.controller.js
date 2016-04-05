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
    /*
    $scope.$watch('searchText',function(newVal){
      if(newVal != ''){
        getBooks();
        vm.awesomeThings = vm.awesomeThings.filter(function(value){
          return value.Category.toLowerCase().indexOf(newVal.toLowerCase()) > -1 
                 || value.Books.filter(function(book){
                      return 
                    })
          //return value.title.toLowerCase().startsWith(newVal.toLowerCase());
        })

        console.log(vm.awesomeThings);
      }
      else
      {
        getBooks();
      }
    });*/
    
    function getBooks() {
      var group = _.groupBy(response.data.Books, "Category");

      vm.categories = $.map(group, function(Books, Category) {
                              return {Category};
                          });

      vm.awesomeThings = response.data.Books;

      console.log(vm.awesomeThings);

    }
  }
})();
