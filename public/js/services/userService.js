function userService($http){
	return {
		getAll: function(){
			return $http.get('/api/users');
		},
		create: function(user){
			return $http.post('/api/users', user);
		}
	}
}
