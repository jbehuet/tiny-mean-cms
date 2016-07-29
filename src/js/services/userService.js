((app) => {
    'use strict'
    app.service('UserService', ['$http', '$cookies', '$window', '$q', class UserService {

        constructor($http, $cookies, $window, $q) {
            this.$http = $http
            this.$cookies = $cookies
            this.$window = $window
            this.$q = $q
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
            return new Promise((resolve, reject) => {
                this.$cookies.remove("token")
                this.currentUser = null
                resolve()
            })
        }

        getAll() {
            return this.$http.get('/api/users')
        }

        save(user) {
            if (user._id)
                return this.$http.put('/api/users/' + user._id, user)
            else
                return this.$http.post('/api/users', user)
        }

        delete(user) {
            return this.$http.delete('/api/users/' + user._id)
        }

        getCurrent() {
            let deferred = this.$q.defer()
            if (!this.$cookies.get('token')) {
                deferred.reject()
            } else {
                if (!this.currentUser) {
                    let payload = this.$cookies.get('token').split('.')[1]
                    payload = this.$window.atob(payload)
                    payload = JSON.parse(payload)
                    this.currentUser = payload._doc
                    if (Math.round(new Date().getTime() / 1000) > payload.exp)
                        return this.disconnect()
                }
                deferred.resolve(this.currentUser)
            }

            return deferred.promise
        }

    }])
})(angular.module('app.services'))
