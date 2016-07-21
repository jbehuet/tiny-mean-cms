'use strict'
// toastr
toastr.options = {
    "positionClass": "toast-bottom-right"
}

const checkPassword = () => {
    return {
        require: 'ngModel',
        link(scope, elem, attrs, ctrl) {
            let firstPassword = '#' + attrs.checkPassword
            elem.add(firstPassword).on('keyup', () => {
                scope.$apply(() => {
                    let v = elem.val() === $(firstPassword).val()
                    ctrl.$setValidity('passwordMatch', v)
                })
            })
        }
    }
}

const gravatar = () => {
    return {
        replace: true,
        required: 'email',
        template: '<img ng-src="https://www.gravatar.com/avatar/{{hash}}?s={{size}}&d=identicon" />',
        link: function(scope, element, attrs) {
            attrs.$observe('email', function(value) {
                if (!value) return

                scope.hash = md5(value.toLowerCase())
                scope.size = attrs.size

                if (angular.isUndefined(scope.size))
                    scope.size = 60
            })
        }
    }
}


angular.module('app', [
        'ui.router',
        'ngCookies',
        'app.config',
        'app.services',
        'app.common',
        'app.login',
        'app.home',
        'app.dashboard'
    ])
    .directive('checkPassword', checkPassword)
    .directive('gravatar', gravatar)
    .run()
