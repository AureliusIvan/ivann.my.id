import {createNewController, createNewAll} from './createfiles/createfile';
import gulp from 'gulp';

let argv = require('yargs').argv;


gulp.task('create:controller', function (cb) {
  createNewController(argv.name, cb)
});
gulp.task('create:all', function (cb) {
  createNewAll(argv.name, cb)
});
