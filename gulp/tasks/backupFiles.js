module.exports = function(gulp, $, config) {

  return function() {
    var dest = config.wpBackupDest + '_' + config.today + '/wp-content';

    gulp.src(config.wpEspecialFiles)
      .pipe(gulp.dest(config.wpBackupDest + '_' + config.today));

    gulp.src(config.wpContent + '/**/*')
      .pipe($.ignore(config.ignore))
      .pipe(gulp.dest(dest))
      .on('end', function() {
        return gulp.src(dest + '/node_modules', { read: false })
                .pipe($.rimraf({ force : true }))
      })
  }

};