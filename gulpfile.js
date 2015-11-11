var gulp = require('gulp');
var babel = require('gulp-babel');

//gulp dependencies go here

gulp.task('default', function(){
//gulp tasks go here
// Node source
  gulp.src("es6/**/*.js")
    .pipe(babel())
    .pipe(gulp.dest("dist"));
    //browser source
  gulp.src("public/es6/**/*.js")
    .pipe(babel())
    .pipe(gulp.dest("public/dist"));
});
