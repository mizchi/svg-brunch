'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    coffee: {
      compile: {
        files: {
          'lib/svg-brunch.js': 'src/svg-brunch.coffee',
          'test/lib/svg-brunch_test.js': 'test/src/svg-brunch_test.coffee'
        }
      }
    },
    nodeunit: {
      files: ['test/**/*_test.js'],
    },
    watch: {
      lib: {
        src: ['lib/**/*.js'],
        tasks: ['nodeunit']
      },
      test: {
        src: ['test/**/*.js'],
        tasks: ['nodeunit']
      },
    },
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-nodeunit');
  grunt.loadNpmTasks('grunt-contrib-coffee');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task.
  grunt.registerTask('default', ['coffee', 'nodeunit']);

};
