'use strict'
exports.config = {
    paths: {
        watched: ['src'],
        public: 'public'
    },
    files: {
        javascripts: {
            joinTo: {
                'js/vendor.min.js': [
                    'bower_components/jquery/dist/jquery.js',
                    'bower_components/bootstrap/dist/js/bootstrap.js',
                    'bower_components/toastr/toastr.js',
                    'bower_components/rangy/*.js',
                    'bower_components/angular/angular.js',
                    'bower_components/angular-cookies/angular-cookies.js',
                    'bower_components/angular-sanitize/angular-sanitize.js',
                    'bower_components/angular-ui-router/release/angular-ui-router.js',
                    'bower_components/angular-md5/angular-md5.js',
                    'bower_components/angular-inline-text-editor/ite.js',
                    'bower_components/angular-translate/angular-translate.js',
                    'bower_components/angular-translate-loader-static-files/angular-translate-loader-static-files.js'
                ],
                'js/app.min.js': /^src\/js/
            },
            order: {
                before: [
                    'src/js/app.js',
                    'src/js/**/*.md.js',
                    'src/js/components/**/*.js'
                ]
            }
        },
        stylesheets: {
            joinTo: {
                'css/vendor.min.css': /^bower_components/,
                'css/app.min.css': /^src\/scss/
            }
        },
        templates: {
            joinTo: {
                'js/templates.js': /^src\/js/
            }
        }
    },
    npm: {
        enabled: false
    },
    conventions: {
        assets: /static[\\/]/
    },
    modules: {
        wrapper: false,
        definition: false
    },
    plugins: {
        autoReload: {
            enabled: {
                css: 'on',
                js: 'on',
                json: 'on'
            }
        },
        babel: {
            ignore: [
                /^(bower_components)/
            ]
        },
        copycat: {
            "css": ["bower_components/bootstrap/dist/css/bootstrap.min.css", "bower_components/bootstrap/dist/css/bootstrap.min.css.map", "bower_components/angular-inline-text-editor/ite.css"],
            "fonts": "bower_components/font-awesome/fonts",
            verbose: true,
            onlyChanged: true
        },
        concatenate: {
            files: {
                "public/i18n/en.json": ['src/js/components/**/*.en.json'],
                "public/i18n/fr.json": ['src/js/components/**/*.fr.json']
            }
        },
        /*jshint -W106 */
        angular_templates: {
            module: 'app.views',
            path_transform: (path) => path.replace('src/', '')
        }
        /*jshint +W106 */
    },
    overrides: {
        production: {
            sourceMaps: false,
            plugins: {
                autoReload: {
                    enabled: false
                }
            }
        }
    },
    server: {
        path: 'server.js',
        port: 8000,
        run: true
    }
}
