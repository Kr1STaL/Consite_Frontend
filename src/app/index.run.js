(function() {
    'use strict';

    angular
        .module('consite')
        .run(runBlock);

    /** @ngInject */
    function runBlock($log) {

        $log.debug('runBlock end');
    }

})();