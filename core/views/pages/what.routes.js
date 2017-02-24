(function() {
    'use strict';
    angular
        .module('pop.what')
        .config(function($routeProvider, $locationProvider) {
            $routeProvider
                .when("/what", {
                    templateUrl: 'core/views/pages/partials/what.html',
                    controller: 'whatCtrl',
                    controllerAs: 'vm'
                });
            $locationProvider.html5Mode(true);
        });
})();
