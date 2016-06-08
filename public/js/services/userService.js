class UserService {

    constructor($http) {
			this.$http = $http
    }

    getAll() {
        return $http.get('/api/users')
    }

    create(user) {
        return $http.post('/api/users', user)
    }

}
