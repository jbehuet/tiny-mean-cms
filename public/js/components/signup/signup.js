((app) => {
    app.component("signup", {
        templateUrl: '/js/components/signup/signup.html',
        controller($timeout, $state, UserService) {
            angular.extend(this, {
                signup() {
                    UserService.create(this.user).then((res) => {
                        this.username = res.data.username
                        this.signupMessage = {}
                        this.signupMessage.type = "success"
                        this.signupMessage.title = "Account created !"
                        this.signupMessage.message = "Redirecting..."
                        $timeout(() => {
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
        }
    })
})(angular.module('app.login'))
