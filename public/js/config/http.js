((app) => {
    app.config(($httpProvider) => {
        $httpProvider.interceptors.push(($q, $injector, $rootScope) => {
            return {
                request(config) {
                    config.headers = config.headers || {};
                    if ($rootScope.token)
                        config.headers.authorization = $rootScope.token
                    return config
                },
                responseError(response) {
                    let state = $injector.get('$state')
                    if (response.status === 401 || response.status === 403)
                        state.go('login')
                    return $q.reject(response)
                }
            }
        })
    })
})(angular.module('app.config'))
