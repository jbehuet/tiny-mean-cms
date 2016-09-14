((app) => {
    'use strict'
    app.component("users", {
        templateUrl: 'js/components/dashboard/usersList/usersList.html',
        controller: ['UserService', '$timeout', '$location', '$anchorScroll', function(UserService, $timeout, $location, $anchorScroll) {
            angular.extend(this, {
                $onInit() {
                    this.startIndex = 0
                    UserService.getAll().then((res) => {
                        this.users = res.data
                    })
                },
                scrollTo(id){
                  $timeout(function() {
                      $location.hash()
                      $anchorScroll(id)
                  }, 100)
                },
                edit(user){
                  this.selectedUser = user
                  this.scrollTo('formUser')
                },
                add() {
                    this.startIndex = Math.trunc(this.users.length / 4) * 4
                    this.selectedUser = {}
                    this.users.push(this.selectedUser)
                    this.scrollTo('formUser')
                },
                save() {
                    if (angular.isUndefined(this.selectedUser.password))
                        delete this.selectedUser.password

                    UserService.save(this.selectedUser).then((res) => {
                        if (angular.isUndefined(this.selectedUser._id))
                            this.users[this.users.length - 1] = res.data

                        this.selectedUser = this.users[this.users.length - 1]

                        toastr.success(`${this.selectedUser.firstname} ${this.selectedUser.lastname} saved`)
                    }).catch((err) => {
                        toastr.error(`${err.data}`)
                    })

                },
                delete(idx, user) {
                    this.users.splice(idx + this.startIndex, 1)
                    this.startIndex = (this.startIndex !== 0 ? Math.trunc((this.users.length - 1) / 4) * 4 : 0)
                    if (angular.isDefined(user._id)) {
                        UserService.delete(user).then(() => {
                            toastr.success(`${user.firstname} ${user.lastname} deleted`)
                            this.selectedUser = null
                        }).catch((err) => {
                            toastr.error(`${err.data}`)
                        })
                    } else {
                        this.selectedUser = null
                    }

                }
            })
        }]
    })
})(angular.module('app.dashboard.users'))
