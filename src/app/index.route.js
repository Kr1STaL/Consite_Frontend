(function () {
    'use strict';

    angular
        .module('consite')
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider, $urlRouterProvider, $locationProvider) {
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'app/main/main.html',
                controller: 'MainController',
                controllerAs: 'main'
            })
            .state('auth', {
                url: '/auth',
                templateUrl: 'app/auth/auth.html',
                controller: 'AuthController',
                controllerAs: 'auth'
            });

        $urlRouterProvider.otherwise('/');
        $locationProvider.html5Mode(true);
    }

})();