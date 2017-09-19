'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function () {
    gulp.src('./css/scss/style.scss')
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(gulp.dest('./css/'));
});

gulp.task('sass:watch', function () {
    gulp.watch('./css/scss/**/*.scss', ['sass']);
});