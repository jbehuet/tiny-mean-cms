((app) => {
    'use strict'
    app.component("summary", {
        templateUrl: 'js/components/dashboard/summary/summary.html',
        controller:['$state', function($state) {
            angular.extend(this,{
              goTo(state){
                $state.go(state)
              }
            })
        }]
    })
})(angular.module('app.dashboard.summary'))
