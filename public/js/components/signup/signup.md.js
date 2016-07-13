((app) => {
    app.config(($stateProvider) => {
        $stateProvider.state('signup', {
            url:'/signup',
            template: '<signup />'
        })
    });

})(angular.module('app.signup', ['ui.router']))
