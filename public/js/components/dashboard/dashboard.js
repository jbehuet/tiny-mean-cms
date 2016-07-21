((app) => {
    'use strict'
    app.component('dashboard', {
        template: '<ui-view />',
        controller(UserService, $state){
          angular.extend(this, {
              $onInit(){
                // UserService.getCurrent().then((user) => {
                //   this.user = user
                // }).catch((err)=>{
                //   $state.go('app.home')
                // })
              }
          })
        }
    })
})(angular.module('app.dashboard'))
