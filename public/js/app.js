function config($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/main.html',
            controller: 'mainController',
            resolve: {
                connected: checkIsConnected
            }
        })
        .when('/login', {
            templateUrl: 'views/connect.html',
            controller: 'connectController'
        })
        .when('/signup', {
            templateUrl: 'views/signup.html',
            controller: 'signupController'
        })
        .when('/admin', {
            templateUrl: 'views/admin.html',
            controller: 'adminController',
            resolve: {
                administrator: checkIsAdmin,
                connected: checkIsConnected
            }
        })
        .when('/about', {
            templateUrl: 'views/about.html'
        })
        .otherwise({
            redirectTo: '/'
        });
}

function checkIsConnected($q, $http, $rootScope, $location) {
    var deferred = $q.defer();

    $http.get('/api/loggedin').success(function (user) {
        // Authenticated 
        if (user !== '0') {
            $rootScope.user = user;
            deferred.resolve();
        } else {
            // Not Authenticated 
            deferred.reject();
            $location.url('/login');
        }
    });

    return deferred.promise;
};


function checkIsAdmin($q, $rootScope, $location) {
    var deferred = $q.defer();

    if ($rootScope.user && $rootScope.user.admin)
        deferred.resolve();
    else {
        deferred.reject();
        $location.url('/');
    }

    return deferred.promise;
}

function run($rootScope, $location, connectService) {
    $rootScope.loginMessage = {};
    $rootScope.loginMessage.title = '';
    $rootScope.loginMessage.message = '';
    // Watch path
    var path = function () {
        return $location.path();
    };
    $rootScope.$watch(path, function (newVal, oldVal) {
        $rootScope.activetab = newVal;
    });

    // Logout
    $rootScope.logout = function () {
        $rootScope.user = null;
        $rootScope.loginMessage.title = '';
        $rootScope.loginMessage.message = '';
        connectService.disconnect().then(function () {
            $location.url('/login');
        })
    }
}

function checkPassword() {
    return {
        require: 'ngModel',
        link: function (scope, elem, attrs, ctrl) {
            var firstPassword = '#' + attrs.checkPassword;
            elem.add(firstPassword).on('keyup', function () {
                scope.$apply(function () {
                    var v = elem.val() === $(firstPassword).val();
                    ctrl.$setValidity('passwordMatch', v);
                });
            });
        }
    }
}

angular.module('app', ['ngRoute'])
    .config(config)
    .directive('checkPassword', checkPassword)
    .controller('connectController', connectController)
    .controller('signupController', signupController)
    .controller('mainController', mainController)
    .controller('adminController', adminController)
    .service('connectService', connectService)
    .service('userService', userService)
    .run(run);
