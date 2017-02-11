var gulp = require('gulp'),
    livereload = require('gulp-livereload');

gulp.task('build', function() {
  gulp.src('*.html')
    .pipe(livereload());
});

gulp.task('watch', function() {
  livereload.listen();
  gulp.watch('*.html', ['build']);
  gulp.watch('scripts/*.js', ['build']);
  gulp.watch('css/*.css', ['build']);
});
