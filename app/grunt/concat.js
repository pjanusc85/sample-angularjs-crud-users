'use strict';

module.exports = function(grunt, options) {
    return {
        vendor: {
            src: [
                'bower_components/angular/angular.js',
                'bower_components/jquery/dist/jquery.min.js',
                'bower_components/angular-sanitize/angular-sanitize.js',
                'bower_components/angular-ui-router/release/angular-ui-router.min.js',
                'bower_components/angular-resource/angular-resource.js',
                'bower_components/bootstrap/dist/js/bootstrap.min.js',
                'bower_components/angular-bootstrap/ui-bootstrap-tpls.min.js',
                'bower_components/angular-xeditable/dist/js/xeditable.min.js'
            ],
            dest: 'js/build/vendor.js'
        },
        client: {
            src: [
                'js/app.js',
                'js/config.js',
                'js/directives.js',
                'js/filters.js',
                'js/ui-select2.js',
                'js/services/*.js',
                'js/services.js',
                'components/**/*.js',
                '!**/*.spec.js'
            ],
            dest: 'js/build/client.js'
        }
    }
};