'use strict';

var gulp = require('gulp');
var copy = require('gulp-contrib-copy');
var connect = require('gulp-connect');
var watch = require('./src/semantic/tasks/watch');
var build = require('./src/semantic/tasks/build');
var webpack = require('gulp-webpack');
var karmaServer = require('karma').Server;
var runSequence = require('run-sequence');

var dependencies = [
  'node_modules/jquery/dist/jquery.min.js',
  'node_modules/angular/angular.min.js',
  'node_modules/faker/build/build/faker.min.js',
  'node_modules/angular-inview/angular-inview.js',
  'node_modules/angular-route/angular-route.min.js'
];

gulp.task('test-no-quit', function(done) {
  new karmaServer.start({
    configFile: __dirname + '/karma.config.js',
    singleRun: true
  }, function(exitCode) {
    if (exitCode === 0) {
      done();
    } else {
      var msg = "Tests failed with exit code:" + exitCode;
      console.error(msg);
      throw msg;
    }
  });
});

gulp.task('quit', function(cb) {
  process.exit(0);
});

gulp.task('test', function(cb) {
  runSequence('test-no-quit', 'quit');
  cb();
});

gulp.task('ui', build);

gulp.task('connect', function() {
  connect.server({
    root: 'src',
    livereload: true
  });
});

gulp.task('webpack', function() {
  return gulp.src('src/app/app.module.js')
    .pipe(webpack({
      output: {
        filename: 'app.min.js'
      }
    })).pipe(gulp.dest('src/dist'));
});

gulp.task('copy', function() {
	gulp.src(dependencies)
		.pipe(copy())
	    .pipe(gulp.dest('src/dependencies'));
});

gulp.task('start', ['copy','ui','webpack', 'connect']);
