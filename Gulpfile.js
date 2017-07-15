const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const concat = require('gulp-concat');
const nodemon = require('gulp-nodemon');
const uglify = require('gulp-uglify');
const clean = require('gulp-clean');
const browserify = require('browserify');
const source = require('vinyl-source-stream');
const tsify = require('tsify');
const buffer = require('vinyl-buffer');

gulp.task('ts', () => {
    return browserify({
        basedir: '.',
        debug: true,
        entries: ['src/app.ts'],
        cache: {},
        packageCache: {}
    })
    .plugin(tsify)
    .transform('babelify', {
        presets: ['es2015'],
        extensions: ['.ts']
    })
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(uglify())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('dist'));
});

gulp.task('sass', () => {
	gulp.src('./src/assets/sass/**/*.scss')
		.pipe(sourcemaps.init())
		.pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
		.pipe(concat('all.css'))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('./dist/assets/css'));
});

gulp.task('clean', () => {
	gulp.src('./dist', { read: false })
		.pipe(clean());
});

gulp.task('start', function () {
	nodemon({
		script: 'server.js',
		ext: 'js ejs',
		env: { 'NODE_ENV': 'development' }
	});
});

gulp.task('default', ['sass', 'ts', 'start'], () => {
	gulp.watch('./src/assets/sass/**/*.scss', ['sass']);
	gulp.watch('./src/**/*.ts', ['ts']);
});
