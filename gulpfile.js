// Sass configuration
'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
 

gulp.task('sass', function(cb) {
  gulp
    .src('*.scss')
    .pipe(sass())
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(
      gulp.dest(function(f) {
        return f.base;
      })
    );
  cb();
});
 
gulp.task(
  'default',
  gulp.series('sass', function(cb) {
    gulp.watch('*.scss', gulp.series('sass'));
    cb();
  })
);
