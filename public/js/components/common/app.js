((app) => {
    app.component('app', {
        templateUrl: 'js/components/common/app.html',
        replace: true,
        controller: function () {
            var self = this;
            angular.extend(self, {
            });

        }
    });
})(angular.module('app.common'));
