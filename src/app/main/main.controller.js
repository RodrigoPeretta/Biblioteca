(function() {
  'use strict';

  angular
    .module('livros')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($timeout, toastr, response, $scope) {
    var vm = this;

    vm.selectedItem  = null;
    vm.searchText    = '';

    setBooks();

    $scope.$watch('searchText',function(newVal){
      if(newVal != undefined && newVal != ''){
        vm.awesomeThings = response.data.Books.filter(function(value){
          return value.title.toLowerCase().indexOf(newVal.toLowerCase()) > -1
          || value.Category.toLowerCase().indexOf(newVal.toLowerCase()) > -1
          || (value.tags.filter(function(tag){
                return tag.toLowerCase().indexOf(newVal.toLowerCase()) > -1 ? true : false;
            }))[0];
        })

        setCategories();
      }
      else
      {
        setBooks();
      }
    });

    function setBooks() {
      vm.awesomeThings = response.data.Books;
      setCategories(vm.awesomeThings);
    }

    function setCategories(books){
      vm.categories = _.keys(_.groupBy(vm.awesomeThings, 'Category'));

      console.log(vm.categories);
    }
  }
})();
