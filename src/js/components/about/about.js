((app) => {
    'use strict'
    app.component("about", {
        templateUrl: 'js/components/about/about.html',
        controller() {
            angular.extend(this,{})
        }
    })
})(angular.module('app.login'))
