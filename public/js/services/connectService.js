class ConnectService {

    constructor($http) {
        this.$http = $http
    }

    connect: function(data) {
        return $http.post('/api/login', data)
    }

    disconnect: function() {
        return $http.post('/api/logout')
    }
}
}
