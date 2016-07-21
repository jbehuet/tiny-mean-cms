((app) => {
    'use strict'
    app.component("users", {
        templateUrl: '/js/components/dashboard/usersList/usersList.html',
        controller(UserService) {
            angular.extend(this, {
                $onInit() {
                    this.startIndex = 0
                    UserService.getAll().then((res) => {
                        this.users = res.data
                    })
                },
                add() {
                    this.startIndex = Math.trunc(this.users.length / 4) * 4
                    this.selectedUser = {}
                    this.users.push(this.selectedUser)
                },
                save() {
                    if (angular.isUndefined(this.selectedUser.password))
                        delete this.selectedUser.password

                    UserService.save(this.selectedUser).then((res) => {
                        //TODO set _id to user in users
                        toastr.success(`${res.data.firstname} ${res.data.lastname} saved`)
                    }).catch((err) => {
                        toastr.error(`${err.data}`)
                    })

                },
                delete(idx, user) {
                    this.users.splice(idx + this.startIndex, 1)
                    this.startIndex = (this.startIndex !== 0 ? Math.trunc((this.users.length - 1) / 4) * 4 : 0 )
                    if (angular.isDefined(user._id)) {
                        UserService.delete(user).then(() => {
                            toastr.success(`${this.selectedUser.firstname} ${this.selectedUser.lastname} deleted`)
                            this.selectedUser = null
                        }).catch((err) => {
                            toastr.error(`${err.data}`)
                        })
                    } else {
                        this.selectedUser = null
                    }

                }
            })
        }
    })
})(angular.module('app.dashboard'))
