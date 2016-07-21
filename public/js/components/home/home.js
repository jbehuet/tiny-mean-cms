((app) => {
    'use strict'
    app.component("home", {
        templateUrl: '/js/components/home/home.html',
        controller(UserService) {
            angular.extend(this,{
              title:'Hello',
              editMode: false,
              save(){
                this.editMode = false
              },
              $onInit() {
                UserService.getCurrent().then((user) => {
                  this.user = user
                }).catch((err)=>{

                })
              }
            })
        }
    })
})(angular.module('app.login'))
