((app) => {
    'use strict'
    app.component('app', {
        templateUrl: 'js/components/common/app.html',
        controller: ['UserService', '$state', function(UserService, $state){
          angular.extend(this, {
              $onInit(){
                UserService.getCurrent().then((user) => {
                  this.user = user
                }).catch((err)=>{
                  //$state.go('login')
                })
              }
          })
        }]
    })
})(angular.module('app.common'))
