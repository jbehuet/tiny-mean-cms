class ConnectController {

    constructor($rootScope, $location, ConnectService) {
        this.$rootScope = $rootScope;
        this.$location = $location;
        this.ConnectService = ConnectService;
    }

    connect() {
        this.ConnectService.connect(this.$scope.user).then((res) => {
            this.$rootScope.token = res.data.token;
            this.$rootScope.user = res.data.user;
            this.$location.path('/');
        }).catch(() => {
            this.$rootScope.loginMessage.title = "Connexion error";
            this.$rootScope.loginMessage.message = "Error login or password";
        });
    }
}
