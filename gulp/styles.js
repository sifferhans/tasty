const gulp = require('gulp');
const sass = require('gulp-sass');
const cssnano = require('gulp-cssnano');
const autoprefixer = require('gulp-autoprefixer');
const rename = require('gulp-rename');

gulp.task('sass',function(){
  gulp.src(['styles/**/[^_]*.scss'])
      .pipe(sass().on('error',sass.logError))
      .pipe(autoprefixer())
      .pipe(gulp.dest('./build/css/'))
      .pipe(cssnano())
      .pipe(rename({
        suffix: '.min'
      }))
      .pipe(gulp.dest('./build/css/'));
});

gulp.task('watch:sass',['sass'],function(){
  gulp.watch(['styles/**/*.scss'],['sass']);
});
