'use strict';

module.exports = function(grunt, options) {
    return {
        prod: {
            src: [
                './ROOT/js/build/client.min.js',
                './ROOT/js/build/vendor.min.js'
            ],
            // File that refers to above files and needs to be updated with the hashed name
            dest: './ROOT/index.html'
        }
    }
};