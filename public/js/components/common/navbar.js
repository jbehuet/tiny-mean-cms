((app) => {
    app.component("navbar", {
        templateUrl: '/js/components/common/navbar.html',
        bindings: {
            user: '<'
        },
        controller(UserService, $state) {
            angular.extend(this, {
                logout() {
                    UserService.disconnect().then(() => {
                        $state.go('login')
                    })
                }
            })
        }
    })
})(angular.module('app.common'))
