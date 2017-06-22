var gulp = require('gulp')
, concat = require("gulp-concat"),
del = require('del'),
uglify = require('gulp-uglify'),
pump = require('pump');


var defaultTasks = ['clean', 'compress'];


gulp.task('compress', ['clean'],function (cb) {
  pump([
        gulp.src('lib/*.js').pipe(concat('ngPagination-directive.min.js')),
        uglify(),
        gulp.dest('dist')
    ],
    cb
  );
});


gulp.task('clean', function (cb) {
    return del(['dist/'], cb);
});

gulp.task('default', defaultTasks);