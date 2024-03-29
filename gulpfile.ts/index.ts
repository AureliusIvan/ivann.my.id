import { createNewController, createNewAll } from './createfiles/createfile';
import gulp from 'gulp';
var argv = require('yargs').argv;


gulp.task('create:controller', function (cb) {createNewController(argv.name, cb)});
gulp.task('create:all', function (cb) {createNewAll(argv.name, cb)});

// exports.build = build;
// exports.default = series(clean, build);