const run = ($rootScope, $location, $state, ConnectService) => {
    // Watch path
    let path = () => {
        return $location.path()
    }
    $rootScope.$watch(path, (newVal, oldVal) => {
        $rootScope.activetab = newVal
    });

    // Logout
    $rootScope.logout = () => {
        $rootScope.token = null
        $rootScope.user = null
        ConnectService.disconnect().then(() => {
            $state.go('app.login')
        })
    }
}

const checkPassword = () => {
    return {
        require: 'ngModel',
        link(scope, elem, attrs, ctrl) {
            var firstPassword = '#' + attrs.checkPassword;
            elem.add(firstPassword).on('keyup', () => {
                scope.$apply(() => {
                    let v = elem.val() === $(firstPassword).val();
                    ctrl.$setValidity('passwordMatch', v);
                })
            })
        }
    }
}

angular.module('app', [
        'ui.router',
        'app.config',
        'app.services',
        'app.common',
        'app.login',
        'app.signup',
        'app.home',
        'app.admin'])
    .directive('checkPassword', checkPassword)
    .component('alert', alertComponent)
    .run(run);
