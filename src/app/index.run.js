(function() {
  'use strict';

  angular
    .module('livros')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
