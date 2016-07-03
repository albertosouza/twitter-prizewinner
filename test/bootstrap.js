var projectPath = process.cwd();
var path = require('path');
var deleteDir = require('rimraf');
var async = require('async');
var testTools = require('we-test-tools');
var We = require('we-core');
var we;

before(function(callback) {
  this.slow(100);

  testTools.copyLocalConfigIfNotExitst(projectPath, function() {
    we = new We();
    testTools.init({}, we);

    we.bootstrap({
      // disable access log
      enableRequestLog: false,

      i18n: {
        directory: path.resolve(__dirname, '..', 'config/locales'),
        updateFiles: true,
        locales: ['en-us']
      },
      themes: {}
    }, function (err, we) {
      if (err) return console.error(err);
      we.startServer(function (err) {
        if (err) return console.error(err);
        callback();
      });
    });

  });
});

//after all tests
after(function (callback) {

  we.db.defaultConnection.close();

  var tempFolders = [
    path.resolve(process.cwd(), 'node_modules/we-plugin-post'),
    projectPath + '/files/uploads'
  ];

  async.each(tempFolders, function(folder, next){
    deleteDir( folder, next);
  }, function(err) {
    if (err) throw new Error(err);
    callback();
  });

})
