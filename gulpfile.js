var gulp        = require('gulp'),
    browserSync = require('browser-sync').create(),
    less        = require('gulp-less'),
    autoprefixer = require('gulp-autoprefixer'),
    concatCss 	= require('gulp-concat-css');

gulp.task('less', function(done) {
    gulp.src("scr/css/*.less")
        .pipe(less())
        .pipe(gulp.dest("dist/css"))
        .pipe(concatCss('main.css'))
        .pipe(autoprefixer('last 2 versions'))
        .pipe(browserSync.stream());
    done();
});

gulp.task('serve', function(done) { 
    browserSync.init({
        server: "./dist",
        index: "html/index.html" 
    });
    gulp.watch("src/css/*.less", gulp.series('less')); 
    gulp.watch("dist/html/index.html").on('change', () => {
      browserSync.reload();
      done();
    });

    done();
});

gulp.task('default', gulp.series('less', 'serve'));
