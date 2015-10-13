'use strict';

module.exports = function(grunt, options){
    return {
        all: {
            src: [
                'bower_components/bootstrap/dist/css/bootstrap.min.css',
                'bower_components/bootstrap/dist/css/bootstrap-theme.min.css',
                'bower_components/angular-xeditable/dist/css/xeditable.css'
            ],
            dest: 'css/styles.css'
        }
    }
};