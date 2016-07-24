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

    const gravatar = () => {
        return {
            replace: true,
            required: 'email',
            template: '<img ng-src="https://www.gravatar.com/avatar/{{hash}}?s={{size}}&d=identicon" />',
            link(scope, element, attrs) {
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

    const contenteditable = () => {
        return {
            require: 'ngModel',
            link(scope, element, attrs, ctrl) {
                // view -> model
                element.bind('blur', () => {
                    scope.$apply(() => {
                        ctrl.$setViewValue(element.html())
                    })
                })

                // model -> view
                ctrl.$render = () => {
                    element.html(ctrl.$viewValue)
                }

                // load init value from DOM
                ctrl.$render()
            }
        }
    }

    app.directive('checkPassword', checkPassword)
    app.directive('gravatar', gravatar)
    app.directive('contenteditable', contenteditable)
    app.run()

})(angular.module('app', [
    'ui.router',
    'ngCookies',
    'app.views',
    'app.config',
    'app.services',
    'app.common',
    'app.login',
    'app.home',
    'app.about',
    'app.dashboard',
    'app.dashboard.summary',
    'app.dashboard.users',
]))
