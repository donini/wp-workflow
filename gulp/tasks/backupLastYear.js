module.exports = function(gulp, $, config) {

  return function() {
    gulp.src(config.uploadsDir + config.currentYearFolder + '/**/*')
      .pipe($.expectFile(config.uploadsDir + config.currentYearFolder + '/**/*'))
      .pipe(gulp.dest(config.wpBackupDest + '/uploads/' + config.currentYearFolder))
      .on('end', function() {
        return $.util.beep();
      })
  };

};