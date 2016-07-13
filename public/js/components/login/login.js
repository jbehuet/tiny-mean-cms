((app) => {
    app.component("login", {
        templateUrl: '/js/components/login/login.html',
        controller(UserService, $state) {
            angular.extend(this,{
                connect: () => {
                    UserService.connect(this.user).then((res) => {
                        toastr.success(`Welcome ${(res.user.firstname || '') + ' ' + (res.user.lastname || '')} !`)
                        $state.go('app.home')
                    }).catch((res) => {
                        toastr.error('Please try again...')
                    });
                }
            })
        }
    })
})(angular.module('app.login'))
