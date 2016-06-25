module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {
            options: {
                livereload: true,
            },
            css: {
                files: ['src/assets/css/*.css'],
            },
            js: {
                files: ['Gruntfile.js'],
            },
            pug: {
                files: ['src/views/*.pug'],
                tasks: ['pug']
            }
        },
        connect: {
            server: {
                options: {
                    port: 9090,
                    base: '.',
                    hostname: 'localhost',
                    protocol: 'http',
                    livereload: true,
                    open: true,
                }
            }
        },
        pug: {
            compile: {
                options: {
                    pretty: true,
                },
                files: {
                    'index.html': 'src/views/*.pug'
                }
            }
        }
    });

    // Grunts plugins
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-pug');

    // Default task(s).
    grunt.registerTask('default', 'Log something', function() {
        grunt.log.writeln('Excelente!');
    });

    grunt.registerTask('server', [
        'pug',
        'connect',
        'watch'
    ]);
};
