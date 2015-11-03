'use strict';

angular
    .module('kgb.auth')

    .controller('AuthLoginCtrl', [
        '$scope', '$auth', '$state',
        AuthLoginCtrl
    ]);

// ---------------------------------------------------------------------------------------------------------------------
/**
 *
 * @param $scope
 * @param $auth
 * @param $state
 * @constructor
 */
function AuthLoginCtrl($scope, $auth, $state) {
    // To be removed in production
    $scope.email = 'huze@km.com';
    $scope.password = '1234';


    // Login
    $scope.login = function (redirectTo) {
        var credentials = {
            email: $scope.email,
            password: $scope.password
        };

        // Use Satellizer's $auth service to login
        $auth.login(credentials).then(function () {
            $state.go(redirectTo);

        }, function (res) {
            // Login failed
            $scope.status = res.data;
        });
    }
}
