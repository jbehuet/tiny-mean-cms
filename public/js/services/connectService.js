function connectService($http){
	return {
		connect: function(data){
			return $http.post('/api/login', data);
		},
		disconnect: function(){
			return $http.post('/api/logout');
		}
	}
}