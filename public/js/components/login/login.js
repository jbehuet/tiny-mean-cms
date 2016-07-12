((app) => {
    app.component("login", {
        templateUrl: '/js/components/login/login.html',
        controller(ConnectService, $state, $rootScope) {
            angular.extend(this,{
                connect: () => {
                    ConnectService.connect(this.user).then((res) => {
                        $rootScope.token = res.data.token
                        $rootScope.user = res.data.user
                        this.loginMessage = null
                        $state.go('app.home')
                    }).catch(() => {
                        this.loginMessage = {}
                        this.loginMessage.type = "error"
                        this.loginMessage.title = "Connexion error"
                        this.loginMessage.message = "Error login or password"
                    });
                }
            })
        }
    })
})(angular.module('app.login'))
