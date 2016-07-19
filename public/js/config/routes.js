((app) => {
    app.config(($stateProvider, $urlRouterProvider) => {
        $urlRouterProvider.otherwise('/login')
        $stateProvider.state('app', {
            url: '',
            abstract: true,
            template: '<app />'
        })
    })
})(angular.module('app.config'))
