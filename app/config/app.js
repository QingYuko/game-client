'use strict';

angular
    .module('kgb', [
        'ui.router',
        'ngMaterial',
        'ngStorage',
        'ngMdIcons',
        'ngSanitize',
        'pascalprecht.translate',
        'satellizer',

        // kgb
        'kgb.auth'
    ])

    .config([
        '$stateProvider', '$urlRouterProvider',
        function ($stateProvider, $urlRouterProvider) {
            // default url: /game
            $urlRouterProvider.otherwise('/games');

            // config state
            $stateProvider
                .state('master', {
                    abstract: true,
                    views: {
                        'header': {
                            templateUrl: KgbTemplateUrl('layouts/header'),
                            controller: 'AppHeaderCtrl'
                        },
                        'sidenav': {
                            templateUrl: KgbTemplateUrl('layouts/sidenav'),
                            controller: 'AppSidenavCtrl'
                        },
                        'footer': {
                            templateUrl: KgbTemplateUrl('layouts/footer')
                        }
                    }
                });
        }
    ])


    .config([
        '$localStorageProvider',
        function ($localStorageProvider) {
            $localStorageProvider.setKeyPrefix('kgb_');
        }
    ])


    .config([
        '$translateProvider',
        function ($translateProvider) {
            $translateProvider
                .preferredLanguage('en')
                .useSanitizeValueStrategy('sanitize')
                .useStaticFilesLoader({
                    prefix: 'i18n/',
                    suffix: '.json'
                });
        }
    ]);