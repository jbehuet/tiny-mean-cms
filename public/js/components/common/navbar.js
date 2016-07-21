((app) => {
    'use strict'
    app.component("navbar", {
        templateUrl: '/js/components/common/navbar.html',
        bindings: {
            user: '<'
        },
        controller(UserService, $state, $timeout) {
            angular.extend(this, {
                logout() {
                    this.user = null
                    UserService.disconnect().then(() => {
                        $state.go('app.home')
                    })
                }
            })
        }
    })
})(angular.module('app.common'))
