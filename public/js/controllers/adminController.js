function adminController($scope , userService){
	userService.getAll().then(function(res){
		$scope.users = res.data;
	})
}
