module.exports = function(gulp, $, config, year, month) {
  /*
    The user need pass month path with syntax:
    gulp backupMonth --year {a number} --month {a number}

    Ex.:

    $ gulp backupMonth --year 2013 --month 07
  */

  var month = (month < 10) ? ("0" + month) : month;

  return function() {
    if(!month || !year){
      $.util.log($.util.colors.red('\n\n***************************************\nPlease, type a year or month parameter\n(eg: --year=2013 --month 03)\n'))
    } else {
      gulp.src(config.uploadsDir + year + '/' + month + '/**/*')
        .pipe($.expectFile(config.uploadsDir + year + '/' + month + '/**/*'))
        .pipe(gulp.dest(config.wpBackupDest + '/uploads/' + year + '/' + month))
        .on('end', function() {
          return $.util.beep();
        })
    }
  };

};