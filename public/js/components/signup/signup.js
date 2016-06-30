((app) => {
    app.config(($routeProvider) => {
        $routeProvider.when('/login', {
            templateUrl: 'js/components/login/login.html',
            controller: function($rootScope, $location, UserService) {
                let self = this;
                angular.extend(self, {
                    signup() {
                        UserService.create(this.user).then((res) => {
                            this.username = res.data.username
                            this.signupMessage = {}
                            this.signupMessage.type = "success"
                            this.signupMessage.title = "Account created !"
                            this.signupMessage.message = "Redirecting..."
                            this.$timeout(() => {
                                this.signupMessage = null
                                this.$location.path('/')
                            }, 2000);
                        }).catch((res) => {
                            this.signupMessage = {}
                            this.signupMessage.type = "error"
                            this.signupMessage.title = "Signup error"
                            this.signupMessage.message = res.data
                        });
                    }
                });
            },
            controllerAs: 'vm'
        })
    });

})(angular.module('app.login', ['ngRoute']));
