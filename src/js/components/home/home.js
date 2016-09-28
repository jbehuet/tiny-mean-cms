((app) => {
    'use strict'
    app.component("home", {
        templateUrl: 'js/components/home/home.html',
        controller: ['PageService', '$state', function(PageService, $state) {
            angular.extend(this, {
                $onInit() {
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
