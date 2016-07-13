((app) => {
    app.component("login", {
        templateUrl: '/js/components/login/login.html',
        controller(UserService, $state) {
            angular.extend(this,{
                connect: () => {
                    UserService.connect(this.user).then((res) => {
                        toastr.success('Have fun storming the castle!', 'Miracle Max Says')
                        $state.go('app.home')
                    }).catch(() => {
                        //TODO
                    });
                }
            })
        }
    })
})(angular.module('app.login'))
