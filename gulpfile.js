'use strict';

var gulp = require('gulp');
var copy = require('gulp-contrib-copy');
var connect = require('gulp-connect');
var watch = require('./src/semantic/tasks/watch');
var build = require('./src/semantic/tasks/build');

var dependencies = [
  'node_modules/angular/angular.min.js',
  'node_modules/angular-route/angular-route.min.js'
];

gulp.task('ui', build);

gulp.task('connect', function() {
  connect.server({
    root: 'src',
    livereload: true
  });
});

gulp.task('copy', function() {
	gulp.src(dependencies)
		.pipe(copy())
	    .pipe(gulp.dest('src/dependencies'));
});

gulp.task('default', function() {
  console.log('gulp working');
});
