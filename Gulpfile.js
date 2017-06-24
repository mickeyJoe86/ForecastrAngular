const gulp = require('gulp');
const series = require('stream-series');
const inject = require('gulp-inject');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const concat = require('gulp-concat');
const nodemon = require('gulp-nodemon');


gulp.task('inject', () => {
	let modules = gulp.src([
		'./app/app.module.js',
		'./app/**/*.module.js'
	], { read: false });
	let sharedComponents = gulp.src([
		'./app/**/*Service.js',
		'./app/**/*Directive.js',
		'./app/**/*Component.js'
	], { read: false });
	gulp.src('./views/index.ejs')
		.pipe(inject(series(modules, sharedComponents)))
		.pipe(gulp.dest('./views'));
});

gulp.task('sass', () => {
	gulp.src('./src/assets/sass/**/*.scss')
		.pipe(sourcemaps.init())
		.pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
		.pipe(concat('all.css'))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('./app/assets/css'));
});

gulp.task('start', function () {
	nodemon({
		script: 'server.js',
		ext: 'js html',
		env: { 'NODE_ENV': 'development' }
	});
});

gulp.task('default', ['sass', 'inject', 'start'], () => {
	gulp.watch('./src/assets/sass/**/*.scss', ['sass']);
});
