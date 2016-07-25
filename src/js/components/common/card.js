((app) => {
    'use strict'
    app.component("card", {
        templateUrl: 'js/components/common/card.html',
        bindings: {
            ngModel: '=',
            editMode: '<'
        },
        controller: [function() {
            angular.extend(this,{})
        }]
    })
})(angular.module('app.common'))
