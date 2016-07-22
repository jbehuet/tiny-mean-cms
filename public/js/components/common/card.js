((app) => {
    'use strict'
    app.component("card", {
        templateUrl: '/js/components/common/card.html',
        bindings: {
            ngModel: '=',
            editMode: '<'
        },
        controller() {
            angular.extend(this, {
            })
        }
    })
})(angular.module('app.common'))
