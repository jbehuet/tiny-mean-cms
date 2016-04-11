function adminController($scope , $http){
	$http.get('/api/users').then(function(res){
		$scope.users = res.data;
	})
}