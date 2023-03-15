var gulp         = require('gulp'),
    browserSync  = require('browser-sync').create(),
    less         = require('gulp-less'),
    autoprefixer = require('gulp-autoprefixer'),
    concatCss 	 = require('gulp-concat-css'),
		del          = require('del');

gulp.task('clean', async function() {
	return del.sync(['dist']);
});

gulp.task('less', function() {
	return gulp.src("src/css/*.less")
		.pipe(less())
		.pipe(autoprefixer('last 2 versions'))
		.pipe(concatCss('main.css'))
		.pipe(gulp.dest("dist/css"))
		.pipe(browserSync.stream());
});


gulp.task('html', function() {
	return gulp.src("src/index.html")
		.pipe(gulp.dest("dist"))
		.pipe(browserSync.stream());
});


gulp.task('img', function() {
	return gulp.src("src/img/*.*")
		.pipe(gulp.dest("dist/img"))
		.pipe(browserSync.stream());
});
 
gulp.task('php', function() {
	return gulp.src("src/*.php")
		.pipe(gulp.dest("dist"))
		.pipe(browserSync.stream());
});

gulp.task('serve', function() {
	browserSync.init({
		server: "./dist",
		index: "index.html"
	});
	gulp.watch("src/css/*.less", gulp.series('less'));
	gulp.watch("src/img/*.*", gulp.series('img'));
	gulp.watch("src/*.php", gulp.series('php'));
	gulp.watch("src/index.html", gulp.series('html')); 
	gulp.watch("dist/index.html").on('change', () => {
		browserSync.reload();
	});
});


gulp.task('default', gulp.series(
	'clean',
	gulp.parallel('less', 'img', 'html', 'php',  'serve')
));
