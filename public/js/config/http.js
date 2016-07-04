((app) => {
    app.config(($httpProvider) => {
        $httpProvider.interceptors.push(($q, $location, $rootScope) => {
            return {
                request(config) {
                    config.headers = config.headers || {};
                    if ($rootScope.token)
                        config.headers.authorization = $rootScope.token
                    return config
                },
                responseError(response) {
                    if (response.status === 401 || response.status === 403)
                        $location.path('/')
                    return $q.reject(response)
                }
            }
        })
    });
})(angular.module('app.config'));
