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
    .run();
