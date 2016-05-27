function connectController($scope, $rootScope, $location, connectService){

	$scope.connect = function(){
		connectService.connect($scope.user).then(function(res){
			$rootScope.token = res.data.token;
      $rootScope.user = res.data.user;
			$location.path('/');
		}).catch(function(){
			$rootScope.loginMessage.title = "Connexion error";
			$rootScope.loginMessage.message = "Error login or password";
		});
	}
}
