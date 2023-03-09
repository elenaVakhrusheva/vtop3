const gulp = require('gulp'),
      concatCSS = require('gulp-concat-css'),
      less = require('gulp-less');
      minifyCSS = require('gulp-minify-css'), 
      autoprefixer = require('gulp-autoprefixer');

gulp.task('default', function(){
  return gulp.src('src/*.html')
    .pipe(gulp.dest('dist/html'))
});

gulp.task('less', function () {
  gulp.src('src/css/*.less')
    .pipe(less())
    .pipe(concatCSS('css/main.css'))
    .pipe(autoprefixer('last 2 versions'))
    .pipe(minifyCSS())
    .pipe(gulp.dest('dist/'));
});

 