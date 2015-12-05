function userService($http){
	return {
		create: function(user){
			return $http.post('/api/users', user);
		}
	}
}