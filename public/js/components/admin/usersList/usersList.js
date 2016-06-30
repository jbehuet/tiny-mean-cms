((app) => {
    app.component("users", {
        templateUrl: '/js/components/admin/usersList/usersList.html',
        controller(UserService) {
            UserService.getAll().then((res) => {
                this.users = res.data
            })
        }
    })
})(angular.module('app.admin'))
