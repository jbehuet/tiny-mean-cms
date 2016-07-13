((app) => {
    app.config(($httpProvider) => {
        $httpProvider.interceptors.push(($q, $injector, $cookies) => {
            return {
                request(config) {
                    config.headers = config.headers || {};
                    if ($cookies.get('token'))
                        config.headers.authorization = $cookies.get('token')
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
