((app) => {
    app.component("home", {
        templateUrl: '/js/components/home/home.html',
        controller() {
            angular.extend(this,{
              title: "Welcome !"
            })
        }
    })
})(angular.module('app.login'))
