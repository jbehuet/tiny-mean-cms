((app) => {
    'use strict'
    app.config(['$stateProvider', ($stateProvider) => {
      $stateProvider.state('app.dashboard.summary', {
          url:'/',
          template: '<summary />'
      })
    }])
})(angular.module('app.dashboard.summary', ['ui.router']))
