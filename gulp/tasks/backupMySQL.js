module.exports = function(gulp, $, config, user, db, dest) {

  return function() {
    if(!user || !db || !dest) {
      $.util.log($.util.colors.red('\n\n***************************************\nPlease, check if you typed the parameters.\n(eg: --user root --db database --dest backupdb)\n'))
    } else {
      gulp.src('./', { read : false })
        .pipe($.shell('mysqldump -u ' + user +' -p ' + db + ' > ../' + dest + '.sql'))
    };
  };

};
