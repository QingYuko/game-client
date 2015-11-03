'use strict';

angular
    .module('kgb')
    .controller('AppHeaderCtrl', [
        '$scope', '$localStorage', '$translate', '$auth', '$state', '$mdSidenav',
        AppHeaderCtrl
    ])

    .controller('AppSidenavCtrl', [
        '$scope', '$auth', '$state',
        AppSidenavCtrl
    ]);

// ---------------------------------------------------------------------------------------------------------------------
/**
 *
 * @param $scope
 * @param $localStorage
 * @param $translate
 * @param $auth
 * @param $mdSidenav
 * @constructor
 */
function AppHeaderCtrl($scope, $localStorage, $translate, $auth, $state, $mdSidenav) {
    $scope.$storage = $localStorage;
    $scope.$auth = $auth;

    $scope.logout = function () {
        $auth.logout();
        $state.go('master.login');
    }

    // open Language menu
    $scope.openLanguageMenu = function ($mdOpenMenu, evt) {
        $mdOpenMenu(evt);
    };

    // init language setting
    if ($scope.$storage.lang) {
        $translate.use($scope.$storage.lang);
    }

    // switch language
    $scope.switchLang = function (lang) {
        $scope.$storage.lang = lang;
        $translate.use(lang);
    }

    // toggle sidenav
    $scope.toggleSidenav = function () {
        $mdSidenav('sidenav').toggle();
    }
}


/**
 *
 * @param $scope
 * @param $auth
 * @param $state
 * @constructor
 */
function AppSidenavCtrl($scope, $auth, $state) {

}