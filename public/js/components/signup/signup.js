((app) => {
    app.component("signup", {
        templateUrl: '/js/components/signup/signup.html',
        controller($state, UserService) {
            angular.extend(this, {
                signup() {
                    UserService.create(this.user).then((res) => {
                        this.username = res.data.username
                        toastr.success(`Account created`)
                        $state.go('login')
                    }).catch((res) => {
                        toastr.error(`${res.data}`)
                    });
                }
            });
        }
    })
})(angular.module('app.login'))
