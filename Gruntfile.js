'use strict';

module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    project: {
      app: ['app'],
      css: ['<%= project.app %>/sass/app.scss']
    },
    sass: {
      dev: {
        options: {
          style: 'expanded',
          compass: false
        },
        files: {
          '<%= project.app %>/app.css':'<%= project.css %>',
          '<%= project.app %>/sensor-data/sensor-data.css':'<%= project.app %>/sensor-data/sensor-data.scss',
        }
      }
    },
    watch: {
      sass: {
        files: ['<%= project.app %>/sass/{,*/}*.{scss,sass}',
                '<%= project.app %>/sensor-data/{,/}*.{scss,sass}',
        ],
        tasks: ['sass:dev']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  
  grunt.registerTask('default', [
    'watch'
  ]);
};
