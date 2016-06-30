((app) => {

    app.service('ConnectService', class ConnectService {

        constructor($http) {
            this.$http = $http
        }

        connect(data) {
            return this.$http.post('/api/login', data)
        }

        disconnect() {
            return this.$http.post('/api/logout')
        }

    });
})(angular.module('app.services'));
