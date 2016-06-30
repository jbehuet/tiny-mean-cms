((app) => {
    app.config(($routeProvider) => {
      $routeProvider.when('/admin', {
          templateUrl: 'js/components/admin/admin.html',
          controller: function () {
              var self = this;
              angular.extend(self, {
              });
          },
          controllerAs: 'ctrl'
          // resolve: {
          //     connected: checkIsConnected
          // }
      })
    });

})(angular.module('app.admin', ['ngRoute']));
