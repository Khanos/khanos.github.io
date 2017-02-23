(function() {
    'use strict';
    angular
        .module('pop.home')
        .config(function($routeProvider, $locationProvider) {
            $routeProvider
                .when("/", {
                    templateUrl: 'core/views/pages/partials/home.html',
                    controller: 'homeCtrl',
                    controllerAs: 'vm'
                });
            $locationProvider.html5Mode(true);
        });
})();
