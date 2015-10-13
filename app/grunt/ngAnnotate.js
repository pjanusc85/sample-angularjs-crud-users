'use strict';

module.exports = function(grunt, options) {
    return {
        client: {
            options: {
                singleQuotes: true
            },
            files: {
                'js/build/client.js': ['js/build/client.js']
            }
        }
    }
};