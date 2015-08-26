var gulp = require('gulp'),
  browserSync = require('browser-sync').create(),
  reload = browserSync.reload;
// Static server
gulp.task('browser-sync', function() {
  browserSync.init({
    server: {
      baseDir: "./src"
    }
  });
});
gulp.task('init', function() {
  return gulp.src([
      'node_modules/react/dist/react.js',
      'node_modules/react/dist/JSXTransformer.js',
      'node_modules/react-router/umd/ReactRouter.js',
      'node_modules/reflux/dist/reflux.js'
    ])
    .pipe(gulp.dest('src/lib'));
});
gulp.task('watch', function() {
  gulp.watch('src/index.html').on('change', browserSync.reload);
  gulp.watch('src/js/actions.js').on('change', browserSync.reload);
  gulp.watch('src/js/components.jsx').on('change', browserSync.reload);
  gulp.watch('src/js/store.js').on('change', browserSync.reload);
});
gulp.task('default', ['init', 'browser-sync', 'watch']);