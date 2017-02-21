(function() {
    'use strict';

    angular
        .module('pop.aside')
        .directive('ngAside', ngAside);

    function ngAside() {
        return {
            restrict: 'A',
            templateUrl: 'core/views/shared/aside.html'
        };
    }
})();
