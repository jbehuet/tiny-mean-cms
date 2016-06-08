class ConnectController {

    constructor($rootScope, $location, ConnectService) {
        this.$rootScope = $rootScope;
        this.$location = $location;
        this.ConnectService = ConnectService;

        this.loginMessage = {}
    }

    connect() {
        this.ConnectService.connect(this.user).then((res) => {
            this.$rootScope.token = res.data.token;
            this.$rootScope.user = res.data.user;
            this.$location.path('/')
        }).catch(() => {
            this.loginMessage.title = "Connexion error"
            this.loginMessage.message = "Error login or password"
        });
    }
}
