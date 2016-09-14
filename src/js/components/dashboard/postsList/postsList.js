((app) => {
    'use strict'
    app.component("posts", {
        templateUrl: 'js/components/dashboard/postsList/postsList.html',
        controller: ['PostService', '$timeout', '$location', '$anchorScroll', function(PostService, $timeout, $location, $anchorScroll) {
            angular.extend(this, {
                $onInit() {
                    this.startIndex = 0
                    PostService.getAll().then((res) => {
                        this.posts = res.data
                    })
                },
                scrollTo(id){
                  $timeout(function() {
                      $location.hash()
                      $anchorScroll(id)
                  }, 100)
                },
                edit(post){
                  this.selectedPost = post
                  this.scrollTo('formPost')
                },
                add() {
                    this.startIndex = Math.trunc(this.posts.length / 4) * 4
                    this.selectedPost = {
                        isDraft: true
                    }
                    this.posts.push(this.selectedPost)
                    this.scrollTo('formPost')
                },
                save() {
                    PostService.save(this.selectedPost).then((res) => {
                        if (angular.isUndefined(this.selectedPost._id))
                            this.posts[this.posts.length - 1] = res.data

                        this.selectedPost = this.posts[this.posts.length - 1]

                        toastr.success(`${this.selectedPost.title} saved`)
                    }).catch((err) => {
                        toastr.error(`${err.data}`)
                    })

                },
                delete(idx, post) {
                    this.posts.splice(idx + this.startIndex, 1)
                    this.startIndex = (this.startIndex !== 0 ? Math.trunc((this.posts.length - 1) / 4) * 4 : 0)
                    if (angular.isDefined(post._id)) {
                        PostService.delete(post).then(() => {
                            toastr.success(`${post.title} deleted`)
                            this.selectedPost = null
                        }).catch((err) => {
                            toastr.error(`${err.data}`)
                        })
                    } else {
                        this.selectedPost = null
                    }

                }
            })
        }]
    })
})(angular.module('app.dashboard.posts'))
