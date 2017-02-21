(function() {
    'use strict';
    angular
        .module('pop.home')
        .config(function($routeProvider) {
            $routeProvider
                .when("/", {
                    templateUrl: 'core/views/pages/partials/home.html',
                    controller: 'homeCtrl',
                    controllerAs: 'vm'
                });
        });
})();
