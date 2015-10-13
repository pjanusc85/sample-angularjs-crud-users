'use strict';

/**
 * Gruntfile.js
 *
 * @param grunt
 */
module.exports = function(grunt) {

    var pkg = grunt.file.readJSON('package.json');

    // load grunt config
    require('load-grunt-config')(grunt);


    // ==== Build Tasks ==== //

    /**
     * grunt - connects to intranet servers.
     */
    grunt.registerTask('default', ['build', 'serve']);

    /**
     * grunt local
     */
    grunt.registerTask('local', ['build:local', 'serve']);

    /**
     * grunt build:<env>
     *
     * <env> can be:
     * - dev
     * - qa
     * - prod
     *
     * The env settings can be configured in grunt/ngconstant.js file.
     *
     * NOTE:
     * When an env parameter is not specified, this task will run in DEV mode;
     * meaning it will use `intranet` by default but will not create a ROOT dir.
     * This is useful in development when you don't need to create a ROOT dir.
     */
    grunt.registerTask('build', function(env) {
        var defaultBuildTasks = [
            'concat',
            'concat_css',
            'ngAnnotate',
            'uglify'
        ];

        // DEV mode
        if (!env) {
            grunt.log.writeln();
            grunt.log.writeln('==== Sample AngularJS Application - CRUD v' + pkg.version + ' in DEV mode ====');
            grunt.task.run(defaultBuildTasks);
            grunt.task.run('notify:build');
            return;
        }

        if (env === 'intranet' || env === 'local') {

            grunt.log.writeln();
            grunt.log.writeln('==== Sample AngularJS Application - CRUD v' + pkg.version + ' ====');

            defaultBuildTasks[0] = defaultBuildTasks[0].replace('intranet', env);
            grunt.task.run(defaultBuildTasks);

            // create ROOT dir
            grunt.task.run([
                'clean',
                'copy',
                'hashres'
            ]);
            return;
        }

        grunt.log.error('No available build environment: ' + env);
        grunt.log.writeln('Available build env: intranet, dev, qa, prod');
    });

    /**
     * grunt serve
     *
     * - Must be used after a `grunt build` command.
     */
    grunt.registerTask('serve', ['connect:server', 'notify:serve', 'watch']);

};