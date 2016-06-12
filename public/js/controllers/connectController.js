class ConnectController {

    constructor($rootScope, $location, ConnectService) {
        this.$rootScope = $rootScope;
        this.$location = $location;
        this.ConnectService = ConnectService;
    }

    connect() {
        this.ConnectService.connect(this.user).then((res) => {
            this.$rootScope.token = res.data.token
            this.$rootScope.user = res.data.user
            this.loginMessage = null
            this.$location.path('/')
        }).catch(() => {
            this.loginMessage = {}
            this.loginMessage.type = "error"
            this.loginMessage.title = "Connexion error"
            this.loginMessage.message = "Error login or password"
        });
    }
}
