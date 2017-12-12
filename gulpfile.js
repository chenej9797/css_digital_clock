var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function(){
	return gulp.src('source/style.scss')
		.pipe(sass())
		.pipe(gulp.dest('public/stylesheets/'))
})