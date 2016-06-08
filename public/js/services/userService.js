class UserService {

    constructor($http) {
			this.$http = $http
    }

    getAll() {
        return this.$http.get('/api/users')
    }

    create(user) {
        return this.$http.post('/api/users', user)
    }

}
