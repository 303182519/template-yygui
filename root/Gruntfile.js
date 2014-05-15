module.exports = function (grunt) {

    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

     
        //清理
        clean: {
            build: ['build']
        }

    });

    grunt.loadNpmTasks('grunt-contrib-clean');


    grunt.registerTask('build', ['clean']);
};