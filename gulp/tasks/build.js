import gulp from 'gulp';
import gutil, { PluginError } from 'gulp-util';
import source from 'vinyl-source-stream';
import buffer from 'vinyl-buffer';
import browserify from 'browserify';
import babelify from 'babelify';

import {ghPagesDest,dirs} from '../config'

gulp.task('build', ['copy'], (cb) => {
    for (let dir of dirs) {
      let b = browserify({
        paths   : ['node_modules', dir + '/components'],
        entries : dir + '/src/app.js'
      })
        .transform(babelify);
      bundle(b, ghPagesDest + dir + '/');
    }

    for (let dir of dirs) {
      gulp.src(dir + '/src/index.html')
        .pipe(gulp.dest(ghPagesDest + dir + '/'))
    }
    cb()
  }
)


function bundle (b, dest) {
  return b.bundle()
    .on('error', (e) => {
      const pe = new PluginError('browserify', e);
      console.log(pe.toString());
    })
    .pipe(source('app.js'))
    .pipe(buffer())
    .pipe(gulp.dest(dest));

}
