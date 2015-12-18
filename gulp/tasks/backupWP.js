module.exports = function(gulp, $, config, user, db, dest) {

  return function() {
    var destFolder = config.wpBackupDest + '_' + config.today + '/wp-content';

    if(!user || !db || !dest) {
      $.util.log($.util.colors.red('\n\n***************************************\nPlease, check if you typed the parameters.\n(eg: --user root --db revista --dest revista)\n'))
    } else {
      gulp.src('./', { read : false })
        .pipe($.shell('mysqldump -u ' + user +' -p ' + db + ' > ../' + dest + '.sql'))
        .on('end', function() {
            console.log('Backup folders')

            gulp.src(config.wpEspecialFiles)
              .pipe(gulp.dest(config.wpBackupDest + '_' + config.today))

            gulp.src(config.wpContent + '/**/*')
              .pipe($.ignore(config.ignore))
              .pipe(gulp.dest(destFolder))
              .on('end', function() {
                return gulp.src(destFolder + '/node_modules', { read: false })
                        .pipe($.rimraf({ force : true }))
              })

        })
    };
  }

};