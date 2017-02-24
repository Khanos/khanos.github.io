(function() {
    'use strict';
    angular
        .module('pop.who')
        .config(function($routeProvider, $locationProvider) {
            $routeProvider
                .when("/who", {
                    templateUrl: 'core/views/pages/partials/who.html',
                    controller: 'whoCtrl',
                    controllerAs: 'vm'
                });
            $locationProvider.html5Mode(true);
        });
})();
