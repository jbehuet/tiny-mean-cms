((app) => {
    app.config(($stateProvider) => {
        $stateProvider.state('app.home', {
            templateUrl: 'js/components/home/home.html',
            controller: function() {
                let self = this;
                angular.extend(self, {
                    title: "Welcome !",
                })
            },
            controllerAs: 'ctrl'
        })
    });

})(angular.module('app.home', ['ui.router']));
