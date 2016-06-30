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


    app.config(($routeProvider, $httpProvider) => {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainController',
                controllerAs: 'vm',
                resolve: {
                    connected: checkIsConnected
                }
            })
            .when('/signup', {
                templateUrl: 'views/signup.html',
                controller: 'SignupController',
                controllerAs: 'vm'
            })
            .when('/about', {
                templateUrl: 'views/about.html'
            })
            .otherwise({
                redirectTo: '/'
            })
    })
})(angular.module('app.config'));
