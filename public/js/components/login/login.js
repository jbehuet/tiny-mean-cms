((app) => {
    app.config(($stateProvider) => {
        $stateProvider.state('app.login', {
            url: '/',
            templateUrl: 'js/components/login/login.html',
            controller: function($rootScope, $state, ConnectService) {
                let self = this;
                angular.extend(self, {
                    connect() {
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
                });
            },
            controllerAs: 'ctrl'
        })
    });

})(angular.module('app.login', ['ui.router']));
