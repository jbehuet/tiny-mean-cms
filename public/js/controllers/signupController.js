function signupController($scope, $location, $timeout, userService) {

    $scope.username = "";
    $scope.signupMessage = {};
    $scope.signupMessage.title = "";
    
    $scope.signup = function() {
        userService.create($scope.user).then(function (res) {
            $scope.username = res.data.username;
            $timeout(function(){ $location.path('/'); }, 2000);
        }).catch(function (res) {
            $scope.signupMessage.title = "Signup error";
            $scope.signupMessage.message = res.data;
        });
    }
}