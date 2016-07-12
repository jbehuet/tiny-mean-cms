((app) => {
    app.config(($stateProvider) => {
        $stateProvider.state('app.signup', {
            url:'/signup',
            template: '<signup />'
        })
    });

})(angular.module('app.signup', ['ui.router']));
