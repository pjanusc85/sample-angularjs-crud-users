'use strict';

module.exports = function(grunt, options) {

    return {
        build: {
            options: {
                title: 'Build complete',
                message: '<%= package.name %> v<%= package.version %> build finished successfully.'
            }
        },
        serve: {
            options: {
                title: 'Server is ready!',
                message: 'http://localhost:8000/'
            }
        }
    }
};