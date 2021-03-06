var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var babel = require('babelify');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var uglify = require('gulp-uglify');
var buffer = require('vinyl-buffer');
var cleanCSS = require('gulp-clean-css');


gulp.task('styles', function(){
  gulp
    .src('css/strv_master.scss')
    .pipe(sass({ style: 'compressed' }))
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(rename('strv.css'))
    .pipe(gulp.dest('public'));
})

gulp.task('assets', function(){
  gulp
    .src('assets/**/*')
    .pipe(gulp.dest('public'))
})

gulp.task('scripts', function(){
  browserify('./src/strv_master.js')
    .transform(babel)
    .bundle()
    .pipe(source('./src/strv_master.js'))
    .pipe(buffer())
    .pipe(uglify())
    .pipe(rename('strv.js'))
    .pipe(gulp.dest('public'));
})

gulp.task('default',['styles','assets','scripts'])
