((app) => {
    'use strict'
    app.service('PageService', ['$http', class PageService {

        constructor($http) {
            this.$http = $http
        }

        getAll() {
            return this.$http.get('/api/pages')
        }

        get(name) {
            return this.$http.get('/api/pages/' + name)
        }

        save(page) {
            page.content = JSON.stringify(page.content)
            if (page._id)
                return this.$http.put('/api/pages/' + page._id, page)
            else
                return this.$http.post('/api/pages', page)
        }

        delete(page) {
            return this.$http.delete('/api/pages/' + page._id)
        }

    }])
})(angular.module('app.services'))
