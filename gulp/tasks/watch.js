import gulp from 'gulp';
import gutil, { PluginError } from 'gulp-util';

import source from 'vinyl-source-stream';
import buffer from 'vinyl-buffer';

import browserify from 'browserify';
import watchify from 'watchify';
import babelify from 'babelify';


import {bundleConfig, dest} from '../config'


gulp.task('watch', () => {
  const b = browserify(bundleConfig, watchify.args)
    .transform(babelify);
  const w = watchify(b)
    .on('update', () => bundle(w))
    .on('log', gutil.log);
  return bundle(w)
});


function bundle (b) {
  return b.bundle()
    .on('error', (e) => {
      const pe = new PluginError('browserify', e);
      console.log(pe.toString());
    })
    .pipe(source('app.js'))
    .pipe(buffer())
    .pipe(gulp.dest(dest));
}
