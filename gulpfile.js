const gulp = require('gulp');
const sass = require('gulp-sass');
const cleanCSS = require('gulp-clean-css');
const concat = require('gulp-concat');
const pump = require('pump');
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');
const rename = require('gulp-rename');


/************************************************************* sass*/

gulp.task('sass', function() {
    return gulp.src('app/scss/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('app/css'))
    .pipe(cleanCSS())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('app/css'))
});


gulp.task('sass',function(){
	
	return gulp.src('app/scss/*.scss')
	.pipe(sass().on('error',sass.logError))
	.pipe(gulp.dest('app/css'))
	
});


/************************************************************** js */
gulp.task('concat', function() {
    return gulp.src('src/js/*.js')
    .pipe(concat('script.js'))
    .pipe(gulp.dest('app/js'))
});

gulp.task('compress', function(cb) {
    pump([
        gulp.src('app/js/script.js'),
        uglify(),
        rename({suffix: '.min'}),
        gulp.dest('app/js')
    ], cb);
});
/************************************************************************ img */
gulp.task('images', function() {
    return gulp.src('src/img/*.*')
    .pipe(imagemin({optimizationLevel: 7, progressive: true}))
    .pipe(gulp.dest('app/img'));
});
/***************************************************************** automatyzacja*/
gulp.task('watch', function() {
    gulp.watch('src/scss/**/*.scss', ['sass']);
    gulp.watch('src/js/*.js', ['concat']);
    gulp.watch('app/js/*.js', ['compress']);
    gulp.watch('app/img/*.*', ['images']);
});

gulp.task('default', ['sass', 'concat', 'compress', 'images', 'watch']);
