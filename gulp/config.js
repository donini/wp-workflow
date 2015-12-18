module.exports = (function() {
  var fs       = require('fs'),
      path     = require('path'),
      args     = require('yargs'),
      date = new Date(),
      today = date.getFullYear().toString() + (date.getMonth()+1).toString() + date.getDate().toString(),
      local    = path.resolve('../..', './wp-content/');

  function getDirectories(srcpath) {
    return fs.readdirSync(srcpath).filter(function(file) {
      return fs.statSync(path.join(srcpath, file)).isDirectory();
    })
  }

  function getYears(dir) {
    if (getDirectories(dir).indexOf('uploads') >= 0)
      return getDirectories(local + '/uploads');
  }

  function getLastYear(dir) {
    if (getYears(dir))
      return getDirectories(local + '/uploads').length -1;
  }

  function getMonths(dir, year) {
      var year = year;

      return getDirectories(local + '/uploads' + '/' + year);
  }

  var currentYearPos = getLastYear(local),
      currentYear = getYears(local)[currentYearPos];

  var config = {
        currentYearPos    : currentYearPos,
        currentYear       : currentYear,
        today             : today,
        wpContent         : local,
        uploadsDir        : '../uploads/',
        wpBackupDest      : '../../WPBackup',
        wpEspecialFiles   : ['../../wp-config.php', '../../robots.txt', '../../.htaccess', '../../.htpasswd', '../../favicon.ico'],
        currentYearFolder : currentYear,
        ignore            : ['node_modules/**', '.DS_Store']
      };

  return config;
})();