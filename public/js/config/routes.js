((app) => {
    const checkIsConnected = ($q, $http, $rootScope, $location) => {
        let deferred = $q.defer()

        $http.get('/api/loggedin').success(() => {
            // Authenticated
            deferred.resolve()
        }).error(() => {
            // Not Authenticated
            deferred.reject()
            $location.url('/login')
        })

        return deferred.promise
    }


    app.config(($stateProvider, $urlRouterProvider) => {
        $urlRouterProvider.otherwise('/');
        $stateProvider.state('app', {
            url: '',
            abstract: true,
            template: '<app></app>',
            resolve: {}
        })
    })
})(angular.module('app.config'));
