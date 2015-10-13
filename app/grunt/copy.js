'use strict';

module.exports = function(grunt, options) {
    return {
        index: {
            options: {
                process: function (content, srcpath) {
                    content = content.replace('js/build/vendor.js', 'js/build/vendor.min.js');
                    content = content.replace('js/build/client.js', 'js/build/client.min.js');
                    return content;
                }
            },
            files: [
                {
                    expand: true,
                    cwd: './',
                    src: ['index.html'],
                    dest: './ROOT/'

                }
            ]
        },
        build: {
            files: [
                {
                    expand: true,
                    cwd: 'components/',
                    src: ['**/*.html'],
                    dest: './ROOT/components/'

                },
                {
                    expand: true,
                    cwd: 'css/',
                    src: ['*.*'],
                    dest: './ROOT/css/'
                },
                {
                    expand: true,
                    cwd: 'images/',
                    src: ['*.*'],
                    dest: './ROOT/images/'
                },
                {
                    expand: true,
                    cwd: 'fonts/',
                    src: ['*.*'],
                    dest: './ROOT/fonts/'
                },
                {
                    expand: true,
                    cwd: 'js/build/',
                    src: ['*.min.js'],
                    dest: './ROOT/js/build/'
                }
            ]
        }
    }
};