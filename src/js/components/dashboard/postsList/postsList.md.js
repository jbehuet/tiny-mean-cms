((app) => {
    'use strict'
    app.config(['$stateProvider', ($stateProvider) => {
      $stateProvider.state('app.dashboard.posts', {
          url:'/posts',
          template: '<posts />'
      })
    }])
})(angular.module('app.dashboard.posts', ['ui.router']))
