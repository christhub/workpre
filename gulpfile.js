var gulp = require('gulp');
var babel = require('gulp-babel');
var eslint = require('gulp-eslint');

//gulp dependencies go here

gulp.task('default', function(){
//run esLint
gulp.src(['es6/**/*.js', 'public/es6/**/*.js'])
  .pipe(eslint())
  .pipe(eslint.format());
//Node Source
gulp.src("es6/**/*.js")
    .pipe(babel())
    .pipe(gulp.dest('dist'));
    //browser source
  gulp.src('public/es6/**/*.js')
    .pipe(babel())
    .pipe(gulp.dest('public/dist'));
});
