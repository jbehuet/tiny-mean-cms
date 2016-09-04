((app) => {
    'use strict'
    // toastr
    toastr.options = {
        positionClass: "toast-bottom-right"
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

    const gravatar = ['md5', (md5) => {
        return {
            replace: true,
            required: 'email',
            template: '<img ng-src="https://www.gravatar.com/avatar/{{hash}}?s={{size}}&d=identicon" />',
            link(scope, element, attrs) {
                attrs.$observe('email', (value) => {
                    if (!value) return

                    scope.hash = md5.createHash(value.toLowerCase())
                    scope.size = attrs.size

                    if (angular.isUndefined(scope.size))
                        scope.size = 60
                })
            }
        }
    }]

    app.directive('checkPassword', checkPassword)
    app.directive('gravatar', gravatar)
    app.run()

})(angular.module('app', [
    'ui.router',
    'ngCookies',
    'ngSanitize',
    'angular-md5',
    'InlineTextEditor',
    'pascalprecht.translate',
    'app.views',
    'app.config',
    'app.services',
    'app.common',
    'app.login',
    'app.home',
    'app.blog',
    'app.about',
    'app.dashboard',
    'app.dashboard.summary',
    'app.dashboard.users',
    'app.dashboard.posts'
]))
