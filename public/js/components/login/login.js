((app) => {
    app.config(($routeProvider) => {
        $routeProvider.when('/login', {
            templateUrl: 'js/components/login/login.html',
            controller: function($rootScope, $location, ConnectService) {
                let self = this;
                angular.extend(self, {
                    connect() {
                        ConnectService.connect(this.user).then((res) => {
                            $rootScope.token = res.data.token
                            $rootScope.user = res.data.user
                            this.loginMessage = null
                            $location.path('/')
                        }).catch(() => {
                            this.loginMessage = {}
                            this.loginMessage.type = "error"
                            this.loginMessage.title = "Connexion error"
                            this.loginMessage.message = "Error login or password"
                        });
                    }
                });
            },
            controllerAs: 'vm'
        })
    });

})(angular.module('app.login', ['ngRoute']));
