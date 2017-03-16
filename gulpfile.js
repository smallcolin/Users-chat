var concat = require('gulp-concat'),
	sass = require('gulp-sass')
	gulp = require('gulp'),
	uglify = require('gulp-uglify'),
	rename = require('gulp-rename'),
	ngAnnotate = require('gulp-ng-annotate');

gulp.task('sass', function () {
	  return gulp.src('./assets/scss/style.scss')
    	.pipe(sass.sync().on('error', sass.logError))
    	.pipe(gulp.dest('./assets/css'));
});
gulp.task('watch', function () {
  gulp.watch('./assets/scss/*.scss', ['sass']);
});
gulp.task('default', ['sass', 'watch']);
