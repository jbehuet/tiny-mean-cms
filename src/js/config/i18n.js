((app) => {
    'use strict'
    app.config(['$translateProvider', ($translateProvider) => {
      let lang = window.navigator.language || window.navigator.userLanguage

      $translateProvider.useStaticFilesLoader({
          prefix: 'i18n/',
          suffix: '.json'
      })

      //$translateProvider.useSanitizeValueStrategy('sanitize')
      $translateProvider.useSanitizeValueStrategy(null)
      $translateProvider.preferredLanguage(lang.split('-')[0])
    }])
})(angular.module('app.config'))
