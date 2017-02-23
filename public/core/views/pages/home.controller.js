(function() {
    'use strict';
    angular
        .module('pop.home')
        .controller('homeCtrl', homeCtrl);

    homeCtrl.$inject = ['$rootScope'];

    function homeCtrl($rootScope) {
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
