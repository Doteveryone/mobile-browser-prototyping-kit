var gulp = require('gulp');
var concat = require('gulp-concat');

gulp.task('scripts', function() {
  return gulp.src(['./scripts/underscore.js', 'scripts/jquery.js', 'scripts/backbone.js', 'scripts/navigation.js', 'scripts/popup.js', 'scripts/bar.js', 'scripts/screen.js', 'scripts/router.js', 'scripts/app.js'])
    .pipe(concat('prototyping-kit.js'))
    .pipe(gulp.dest('./../'))
    .pipe(gulp.dest('./../example/assets/js/'));
});

gulp.task('default', ['scripts']);
