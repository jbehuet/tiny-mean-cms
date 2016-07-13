((app) => {
    app.component("navbar", {
        templateUrl: '/js/components/common/navbar.html',
        controller(UserService) {
            UserService.getCurrent().then((user) => {
                this.user = user
                console.log(this.user)
            })
        }
    })
})(angular.module('app.common'))
