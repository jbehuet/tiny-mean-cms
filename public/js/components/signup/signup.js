((app) => {
    app.config(($stateProvider) => {
        $stateProvider.state('app.signup', {
            url:'/signup',
            templateUrl: 'js/components/signup/signup.html',
            controller: function($rootScope, $state, UserService) {
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
                                $state.go('app.login')
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
            controllerAs: 'ctrl'
        })
    });

})(angular.module('app.signup', ['ui.router']));
