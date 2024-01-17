module.exports = function(grunt){
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less:{
            development:{
                files:{
                    './dev/style/main.css': './src/style/main.less',
                }
            },
            production:{
                option:{
                    compress: true
                },
                files:{
                    './dist/style/main.min.css':'./src/style/main.less',
                }
            }
        },
        uglify:{
            target:{
                files:{
                    './dist/scripts/main.min.js':'./src/scripts/main.js'
                }
            }
        },


    })

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['build'])
    grunt.registerTask('build', ['less:production', 'uglify'])
}