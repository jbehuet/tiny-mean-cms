((app) => {
    'use strict'
    app.component('dashboard', {
        template: '<ui-view />',
        controller:['UserService', '$state', function(UserService, $state){
          angular.extend(this, {
              $onInit(){
                UserService.getCurrent().then((user) => {
                  if (!user.isAdmin)
                    $state.go('app.home')
                }).catch((err)=>{
                  $state.go('app.home')
                })
              }
          })
        }]
    })
})(angular.module('app.dashboard'))
