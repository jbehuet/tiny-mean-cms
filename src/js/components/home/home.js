((app) => {
    'use strict'
    app.component("home", {
        templateUrl: 'js/components/home/home.html',
        controller: ['UserService', 'PageService', '$state', function(UserService, PageService, $state) {
            angular.extend(this, {
                editMode: false,
                cancel(){
                  this.editMode = false
                  $state.go('app.home', {}, { reload: true })
                },
                save() {
                    PageService.save(angular.copy(this.page)).then(()=>{
                      toastr.success(`${this.page.name} saved`)
                      this.editMode = false
                    }).catch((err)=>{
                      toastr.error(`${err.data}`)
                    })
                },
                $onInit() {
                    UserService.getCurrent().then((user) => {
                        this.user = user
                    }).catch((err) => {

                    })

                    PageService.get('home').then((res) => {
                      this.page = res.data
                      if (this.page.content)
                        this.page.content = JSON.parse(this.page.content)
                    }).catch((err) =>{
                      console.log(err)
                    })

                }
            })
        }]
    })
})(angular.module('app.home'))
