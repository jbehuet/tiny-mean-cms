((app) => {
    'use strict'
    app.service('PostService', ['$http', class PostService {

        constructor($http) {
            this.$http = $http
        }

        getAll() {
            return this.$http.get('/api/post')
        }

    }])
})(angular.module('app.services'))
