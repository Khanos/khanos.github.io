(function() {
    'use strict';
    angular
        .module('pop.what')
        .controller('whatCtrl', whatCtrl);

    whatCtrl.$inject = ['$rootScope'];

    function whatCtrl($rootScope) {
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
