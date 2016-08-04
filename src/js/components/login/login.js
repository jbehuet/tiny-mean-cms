((app) => {
    'use strict'
    app.component("login", {
        templateUrl: 'js/components/login/login.html',
        controller: ['UserService', '$state', '$translate', function(UserService, $state, $translate) {
            angular.extend(this, {
                connect() {
                    UserService.connect(this.user).then((res) => {
                        $translate('COMMON_WELCOME').then((translate) => {
                            toastr.success(`${translate} ${(res.user.firstname || '') + ' ' + (res.user.lastname || '')} !`)
                        })
                        $state.go('app.home')
                    }).catch((res) => {
                        $translate('COMMON_TRY_AGAIN').then((translate) => {
                            toastr.error(translate)
                        })
                    });
                }
            })
        }]
    })
})(angular.module('app.login'))
