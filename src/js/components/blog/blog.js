((app) => {
    'use strict'
    app.component("blog", {
        templateUrl: 'js/components/blog/blog.html',
        controller: ['PostService', function(PostService) {
            angular.extend(this, {
                $onInit() {
                    PostService.getPublished().then((res) => {
                        this.posts = res.data
                    })
                }
            })
        }]
    })
})(angular.module('app.blog'))
