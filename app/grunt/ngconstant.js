'use strict';

module.exports = function(grunt, options) {
    return {
        options: {
            space: '  ',
            wrap: '/**\n * App configuration.\n */\n{%= __ngModule %}',
            name: 'app.config'
        },
        // Environment targets
        local: {
            options: {
                dest: 'js/config.js'
            },
            constants: {
                ENV: {
                    name: 'local',
                    apiEndpoint: 'http://localhost:9999/api/v1',
                    providerJsURL : 'http://localhost:9999/aaa-js/js/provider.js',
                    enableDebug: true
                }
            }
        }
    }
};