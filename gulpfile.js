const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps')
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');

function comprimirImages (){
    return gulp.src('./src/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./build/images'))
}

function comprimirJavaScript() {
    return gulp.src('./src/scripts/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./build/script'))
}

function compilarSass() {
    return gulp.src('./src/style/*.scss')
    .pipe(sass({
        outputStyle:'compressed'
    })) 
    .pipe(gulp.dest('./build/style')) 
}

exports.default = function() {
   gulp.watch('./src/style/*.scss', {ignoreInitial:false}, gulp.series(compilarSass))
    gulp.watch('./src/scripts/*.js', {ignoreInitial:false}, gulp.series(comprimirJavaScript))
    gulp.watch('./src/imagens/*', {ignoreInitial:false}, gulp.series(comprimirImages))
}

//exports.img = comprimirImages;
//exports.js = comprimirJavaScript;
//exports.sass = compilarSass;
