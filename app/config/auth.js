'use strict';

angular
    .module('kgb.auth', [
        'ui.router',
        'satellizer'
    ])

    // config state
    .config([
        '$stateProvider',
        function ($stateProvider) {
            $stateProvider
                .state('master.login', {
                    url: '^/login',
                    views: {
                        '@': {
                            templateUrl: KgbTemplateUrl('auth/login'),
                            controller: 'AuthLoginCtrl'
                        }
                    }
                });
        }
    ])


    // configure Satellizer
    .config([
        '$authProvider',
        function ($authProvider) {
            // set authentication API url
            $authProvider.loginUrl = KgbEnv.engineUrl + 'auth/login';

            // local storage prefix
            $authProvider.tokenPrefix = 'kgbauth';
        }
    ])


    // Add http interceptor to handle unauthorized response
    .config([
        '$httpProvider',
        function ($httpProvider) {
            $httpProvider.interceptors.push(['$q', '$injector', function ($q, $injector) {
                return {
                    // http request
                    request: function (config) {
                        // can do some transformation here
                        // ...

                        // return config directly
                        return config;
                    },

                    // if http response is error
                    responseError: function (response) {
                        // access denied
                        if (response.status === 400 || response.status === 401 || respons.status === 403) {
                            // redirect to login page
                            $injector.get('$state').go('master.login');
                        }

                        // return a promise containing response
                        return $q.reject(response);
                    }
                }
            }]);
        }
    ]);