class SignupController {

    constructor($location, $timeout, UserService) {
        this.$location = $location
        this.$timeout = $timeout
        this.username = ""
        this.signupMessage = {}
        this.signupMessage.title = ""
    }

    signup() {
        this.UserService.create($scope.user).then((res) => {
            this.username = res.data.username;
            $timeout(() => {
                this.$location.path('/');
            }, 2000);
        }).catch((res) => {
            this.signupMessage.title = "Signup error";
            this.signupMessage.message = res.data;
        });
    }
}
