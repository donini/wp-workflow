module.exports = function(gulp, $, config, year) {
  /*
    The user need pass year with syntax:
    gulp backupYear --year {a number}

    Ex.:

    $ gulp backupYear --year 2014
  */

  return function() {
    if(!year){
      $.util.log($.util.colors.red('\n\n***************************************\nPlease, type a year parameter\n(eg: --year=2013)\n'))
    } else {
      gulp.src(config.uploadsDir + year + '/**/*')
        .pipe($.expectFile(config.uploadsDir + year + '/**/*'))
        .pipe(gulp.dest(config.wpBackupDest + '/uploads/' + year))
        .on('end', function() {
          return $.util.beep();
        })
    }
  };

};