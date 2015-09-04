import gulp from 'gulp';

import {dest} from '../config'

gulp.task('copy', () => {
  return gulp.src('src/index.html')
    .pipe(gulp.dest(dest));
});