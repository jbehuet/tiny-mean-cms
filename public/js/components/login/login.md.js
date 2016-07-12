((app) => {
    app.config(($stateProvider) => {
        $stateProvider.state('app.login', {
            url: '/login',
            template: '<login />'
        })
    });

})(angular.module('app.login', ['ui.router']));
