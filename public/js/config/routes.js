((app) => {
    app.config(($stateProvider, $urlRouterProvider) => {
        $urlRouterProvider.otherwise('/');
        $stateProvider.state('app', {
            url: '',
            abstract: true,
            template: '<app />',
            resolve: {}
        })
    })
})(angular.module('app.config'));
