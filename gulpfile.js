var gulp = require('gulp');
var browserify = require('browserify');
var babelify= require('babelify');
var source = require('vinyl-source-stream');
var connect = require('gulp-connect');

gulp.task('browserify',function(){
	browserify('src/js/app.js')
	.transform('babelify')
	.bundle()
	.pipe(source('app.js'))
	.pipe(gulp.dest('dist/js'))});

gulp.task('copy',function(){
	gulp.src('src/index.html')
	.pipe(gulp.dest('dist'));
	gulp.src('src/css/styles.css')
	.pipe(gulp.dest('dist/css'));
});

gulp.task('server',function(){
	connect.server({
		root:['dist'],
		port:8000,
		livereload:true
	})
});

gulp.task('default',['browserify','copy'],function(){
	return gulp.watch('src/**/**.*' , ['browserify', 'copy']);
});