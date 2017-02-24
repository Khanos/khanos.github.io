(function() {
    'use strict';
    angular
        .module('pop.who')
        .controller('whoCtrl', whoCtrl);

    whoCtrl.$inject = ['$rootScope'];

    function whoCtrl($rootScope) {
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
