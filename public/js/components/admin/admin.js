((app) => {
    app.config(($stateProvider) => {
      $stateProvider.state('app.admin', {
          url:'/admin',
          templateUrl: 'js/components/admin/admin.html',
          controller: function() {
              var self = this;
              angular.extend(self, {
              });
          },
          controllerAs: 'vm'
          // resolve: {
          //     connected: checkIsConnected
          // }
      })
    });

})(angular.module('app.admin', ['ui.router']));
