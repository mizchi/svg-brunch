'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    coffee: {
      compile: {
        files: {
          'lib/html-brunch.js': 'src/html-brunch.coffee',
          'test/lib/html-brunch_test.js': 'test/src/html-brunch_test.coffee'
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
