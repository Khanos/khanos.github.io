(function() {
    'use strict';
    angular
        .module('pop.what')
        .config(function($routeProvider) {
            $routeProvider
                .when("/", {
                    templateUrl: 'core/views/pages/partials/what.html',
                    controller: 'whatCtrl',
                    controllerAs: 'vm'
                });
        });
})();
