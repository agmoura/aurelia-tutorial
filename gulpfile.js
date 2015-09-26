var gulp = require('gulp');
var browserSync = require('browser-sync');
var jspm = require('jspm');

// this task utilizes the browsersync plugin
// to create a dev server instance
// at http://localhost:9001
gulp.task('serve', function (done) {
  browserSync({
    open: false,
    port: 9001,
    server: {
      baseDir: ['.'],
      middleware: function (req, res, next) {
        res.setHeader('Access-Control-Allow-Origin', '*');
        next();
      }
    }
  }, done);
});

gulp.task('bundle', function (done) {

  var outputFile = 'lib/aurelia.js';

  var packges = [
    'aurelia-bootstrapper',
    'aurelia-fetch-client',
    'aurelia-router',
    'aurelia-animator-css',
    'aurelia/templating-binding',
    'aurelia/templating-resources',
    'aurelia/templating-router',
    'aurelia/loader-default',
    'aurelia/history-browser',
    'aurelia/logging-console'
  ].join(' + ');

  jspm.bundle(packges, outputFile, { inject: true, minify: true }).then(function () {
    done();
  });

});

/* COMMANDS
jspm bundle aurelia-bootstrapper + aurelia-fetch-client + aurelia-router + aurelia-animator-css + aurelia/templating-binding + aurelia/templating-resources + aurelia/templating-router + aurelia/loader-default + aurelia/history-browser + aurelia/logging-console src/aurelia.js --inject
*/

