module.exports = function(grunt) {
    grunt.initConfig({
        connect: {
            local: {
                options: {
                    port: 9000,
                    hostname: '192.168.2.172',
                    base: 'public'
                }
            } 
        },

        clean: {
            default: {
                files: {
                    src: 'build/**/*' 
                }
            } 
        },

        eslint: {
            es2015: {
                src: 'src/**/*.js' 
            } 
        },

        babel: {
            options: {
                sourceMap: true
            },

            normal: {
                files: [{
                    expand: true,
                    cwd: 'src',
                    src: '**/*.js',
                    dest: 'build/',
                    ext: 'es5.js'
                }] 
            }
        },

        watch: {
            source: {
                files: ['src/**/*.js'],
                tasks: ['clean', 'eslint', 'babel']
            },

            static: {
                options: {
                    livereload: true 
                },

               files: ['public/**/*'], 
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('gruntify-eslint');
    grunt.loadNpmTasks('grunt-babel');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['connect', 'watch']);
};
