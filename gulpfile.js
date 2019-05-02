const gulp = require('gulp');
const sass = require('gulp-sass');
const htmlmin = require('gulp-htmlmin');
const cleanCSS = require('gulp-clean-css');

gulp.task('sass', () => {
  return gulp.src('./src/sass/**/*.scss')
    .pipe(sass({ outputStyle: 'expanded' }))
    .pipe(cleanCSS({ compatibility: 'ie8' }))
    .pipe(gulp.dest('./dist/css'))
});


gulp.task('sass-watch', (done) => {
  gulp.watch('./src/sass/*.scss', gulp.task('sass'));
  done();
});

gulp.task('html', () => {
  return gulp.src('./src/*.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('dist'));
});

gulp.task('default', gulp.parallel('sass', 'sass-watch', 'html', ));
