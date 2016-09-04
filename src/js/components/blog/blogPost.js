((app) => {
    'use strict'
    app.component("post", {
        bindings:{
          post: "<"
        },
        templateUrl: 'js/components/blog/blogPost.html',
    })
})(angular.module('app.blog'))
