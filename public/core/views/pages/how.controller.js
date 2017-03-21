(function() {
    'use strict';
    angular
        .module('pop.how')
        .controller('howCtrl', howCtrl);

    howCtrl.$inject = ['$rootScope'];

    function howCtrl($rootScope) {
        /* jshint validthis: true */
        var vm = this;
        $rootScope.toggleAside = toggleAside;

        function toggleAside() {
            if($rootScope.asideStyle == 'showAside'){
                $rootScope.asideStyle = 'hideAside';
            } else {
                $rootScope.asideStyle = 'showAside';
            }
        }
    }
})();
