((app) => {
    app.component("navbar", {
        templateUrl: '/js/components/common/navbar.html',
        controller(UserService, $state, $cookies) {
            angular.extend(this, {
                $onInit() {
                    UserService.getCurrent().then((user) => {
                        this.user = user
                    })
                },
                logout() {
                  $cookies.remove("token");
                  $state.go('login')
                }
            })
        }
    })
})(angular.module('app.common'))
