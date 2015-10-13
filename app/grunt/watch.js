'use strict';

module.exports = function(grunt, options) {
    return {
        vendorJSChange: {
            files: [ 'bower_components/**'],
            tasks: ['concat:vendor'],
            options: {
                spawn: false,
                interrupt: true
            }
        },
        clientJSChange: {
            files: [
                'js/config.js',
                'js/app.js',
                'js/directives.js',
                'js/filters.js',
                'js/services.js',
                'components/**/*.js',
                '!**/*.spec.js'
            ],
            tasks: ['concat:client'],
            options: {
                spawn: false,
                interrupt: true
            }
        }
    }
};