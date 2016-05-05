'use strict';

var gulp = require('gulp');
var copy = require('gulp-contrib-copy');
var connect = require('gulp-connect');
var watch = require('./src/semantic/tasks/watch');
var build = require('./src/semantic/tasks/build');
var webpack = require('gulp-webpack');

var dependencies = [
  'node_modules/angular/angular.min.js',
  'node_modules/faker/build/build/faker.min.js',
  'node_modules/angular-route/angular-route.min.js'
];

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

gulp.task('default', function() {
  console.log('gulp working');
});
