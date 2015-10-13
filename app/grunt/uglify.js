'use strict';

module.exports = function(grunt, options) {
    return {
        clientJS: {
            src: 'js/build/client.js',
            dest: 'js/build/client.min.js'
        },
        vendorJS: {
            src: 'js/build/vendor.js',
            dest: 'js/build/vendor.min.js'
        }
    }
};