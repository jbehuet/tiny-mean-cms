((app) => {

    app.service('UserService', class UserService {

        constructor($http, $cookies) {
            this.$http = $http
            this.$cookies = $cookies
            this.currentUser = null
        }

        connect(data) {
            return new Promise((resolve, reject) => {
                this.$http.post('/api/login', data).then((res) => {
                    this.currentUser = res.data.user
                    this.$cookies.put('token', res.data.token)
                    resolve(res.data)
                }).catch(() => {
                    reject()
                })
            })

            return this.$http.post('/api/login', data)
        }

        disconnect() {
            return this.$http.post('/api/logout')
        }

        getAll() {
            return this.$http.get('/api/users')
        }

        create(user) {
            return this.$http.post('/api/users', user)
        }

        getCurrent() {
            return new Promise((resolve, reject) => {
                resolve(this.currentUser)
            })
        }

    })
})(angular.module('app.services'))
