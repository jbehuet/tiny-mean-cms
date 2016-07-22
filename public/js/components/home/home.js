((app) => {
    'use strict'
    app.component("home", {
        templateUrl: '/js/components/home/home.html',
        controller(UserService, $state) {
            angular.extend(this, {
                title: 'Build anything with code',
                subtitle:'Remember you are the code.',
                content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, tenetur natus doloremque laborum quos iste ipsum rerum obcaecati impedit odit illo dolorum ab tempora nihil dicta earum fugiat. Temporibus, voluptatibus.',
                concept1:{
                  title:'We do parallax.',
                  content:'Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Integer a elit turpis. Phasellus non varius mi. Nam bibendum in mauris at sollicitudin lacinia.'
                },
                editMode: false,
                cancel(){
                  this.editMode = false
                  $state.go('app.home', {}, { reload: true })
                },
                save() {
                    this.editMode = false
                },
                $onInit() {
                    UserService.getCurrent().then((user) => {
                        this.user = user
                    }).catch((err) => {

                    })
                }
            })
        }
    })
})(angular.module('app.login'))
