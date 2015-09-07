import gulp from 'gulp';

import {dest,dirs} from '../config'

gulp.task('copy', (cb) => {
  for (let dir of dirs) {
    gulp.src(dir + '/src/index.html')
      .pipe(gulp.dest(dest + dir + '/'))
  }
  cb();
});