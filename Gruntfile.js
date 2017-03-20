module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {
            options: {
                livereload: true,
            },
            css: {
                files: ['src/sass/**/*.sass'],
                tasks: ['sass']
            },
            js: {
                files: ['Gruntfile.js', 'src/**/*.js'],
                tasks: ['newer:copy']
            },
            pug: {
                files: ['src/views/**/*.pug'],
                tasks: ['pug']
            },
            bower: {
                files: ['./bower.json']
            }
        },
        connect: {
            server: {
                options: {
                    port: 9090,
                    base: './public',
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
                files: [{
                    expand: true,
                    cwd: './src/views',
                    src: ['**/*.pug', '!includes/**', '!index.pug'],
                    dest: 'public/core/views/',
                    ext: '.html',
                }, {
                    './public/index.html': 'src/views/index.pug'
                }]
            }
        },
        sass: {
            dist: {
                files: {
                    './public/assets/css/style.css': 'src/sass/style.sass'
                }
            }
        },
        copy: {
            main: {
                files: [
                    // makes all src relative to cwd
                    {expand: true, cwd: 'src', src: ['**/*.js'], dest: 'public/core'}
                ],
            },
        },
        bower: {
            dev: {
                dest: 'public/assets',
                js_dest: 'public/assets/js',
                css_dest: 'public/assets/css'
            }
        }
    });

    // Grunts plugins
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-pug');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-newer');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-bower');

    grunt.registerTask('server', [
        'pug',
        'copy',
        'bower',
        'connect',
        'watch'
    ]);
};
