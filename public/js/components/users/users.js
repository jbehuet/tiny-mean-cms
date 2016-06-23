let usersComponent = {
    templateUrl: '/js/components/users/users.html',
    controller(UserService) {
        UserService.getAll().then((res) => {
            this.users = res.data
        })
    }
}
