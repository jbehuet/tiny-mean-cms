((app) => {
    'use strict'
    app.service('PostService', ['$http', class PostService {

        constructor($http) {
            this.$http = $http
        }

        getAll() {
            return this.$http.get('/api/posts')
        }

        save(post) {
            if (post._id)
                return this.$http.put('/api/posts/' + post._id, post)
            else
                return this.$http.post('/api/posts', post)
        }

        delete(post) {
            return this.$http.delete('/api/posts/' + post._id)
        }

    }])
})(angular.module('app.services'))
