((app) => {

    app.config(($stateProvider) => {
        $stateProvider.state('login', {
            url: '/login',
            template: '<login/>',
        })
    })

})(angular.module('app.login', ['ui.router']))
