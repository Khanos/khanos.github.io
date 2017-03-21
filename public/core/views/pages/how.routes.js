(function() {
    'use strict';
    angular
        .module('pop.how')
        .config(function($routeProvider, $locationProvider) {
            $routeProvider
                .when("/how", {
                    templateUrl: 'core/views/pages/partials/how.html',
                    controller: 'howCtrl',
                    controllerAs: 'vm'
                });
            $locationProvider.html5Mode(true);
        });
})();
