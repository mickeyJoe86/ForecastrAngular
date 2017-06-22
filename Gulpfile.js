const gulp = require('gulp');
const series = require('stream-series');
const inject = require('gulp-inject');

gulp.task('inject', () => {    
    let modules = gulp.src([
        './app/app.module.js',
        './app/**/*.module.js'
    ], {read: false});
    let sharedComponents = gulp.src([
        './app/**/*Directive.js',
        './app/**/*Component.js'
    ], { read: false});
    gulp.src('./views/index.ejs')
        .pipe(inject(series(modules, sharedComponents)))
        .pipe(gulp.dest('./views'));
});