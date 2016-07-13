((app) => {
    app.config(($stateProvider, $urlRouterProvider) => {
        $urlRouterProvider.otherwise('/')
        $stateProvider.state('app', {
            url: '',
            abstract: true,
            template: '<app />',
            resolve: {
                //Call userservice to find user details or checkIsConnected
            }
        })
    })
})(angular.module('app.config'))
