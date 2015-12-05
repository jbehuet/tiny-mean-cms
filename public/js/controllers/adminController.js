function adminController($scope , $http){
	$http.get('/users').then(function(res){
		$scope.users = res.data;
	})
}