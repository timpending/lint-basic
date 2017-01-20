(function() {
  'use strict';

  const gulp = require('gulp');
  const jshint = require('gulp-jshint');

  gulp.task('lint', () => {
    // src is looking for a source directory.  Commonly put in src or lib file
    // project code goes into src file
    return gulp.src('./src/*')
      .pipe(jshint())
      .pipe(jshint.reporter());
    });
}());
