(function() {
  'use strict';

  var gulp = require('gulp'),
      $ = require('gulp-load-plugins')({
        pattern: ['gulp-*', 'gulp.*', 'yargs'],
        scope: ['dependencies', 'devDependencies', 'peerDependencies'],
        replaceString: /^gulp(-|\.)/,
        lazy: true
      }),
      config = require('./config.js');

  function task(name) {
   var args = Array.prototype.slice.call(arguments, 1);
   args.unshift(gulp, $, config);

   return require('./tasks/' + name).apply({}, args);
  }

  gulp.task('backupFiles', task('backupFiles'));
  gulp.task('backupLastYear', task('backupLastYear'));
  gulp.task('backupYear', task('backupYear', $.yargs.argv.year));
  gulp.task('backupMonth', task('backupMonth', $.yargs.argv.year, $.yargs.argv.month));
  gulp.task('backupMySQL', task('backupMySQL', $.yargs.argv.user, $.yargs.argv.db, $.yargs.argv.dest));
  gulp.task('backupWP', task('backupWP', $.yargs.argv.user, $.yargs.argv.db, $.yargs.argv.dest));

  gulp.task('default', ['backupWP'])

})();