((app) => {
    'use strict'
    app.component("about", {
        templateUrl: 'js/components/about/about.html',
        controller: [function() {
            angular.extend(this,{})
        }]
    })
})(angular.module('app.about'))
