var gulp = require('gulp');
var clean = require('gulp-clean');
var concat = require('gulp-concat');
var watch = require('gulp-watch');

var bases = {
    app: 'GtuAutoCadWebsite/',
    dist: 'GtuAutoCadWebsite/assets/js/',
};


//Delete the dist directory
gulp.task('clean', function () {
    return gulp.src(bases.dist)
    .pipe(clean());
});

// Process scripts and concatenate them into one output file
gulp.task('ngscripts', ['clean'], function () {
    gulp.src('**/*src.js')
    .pipe(concat('main.js'))
    .pipe(gulp.dest(bases.dist));
});

// Process scripts and concatenate them into one output file
gulp.task('libscripts', ['clean'], function () {
    gulp.src(
       ['node_modules/angular/angular.js',
        'node_modules/angular-ui-router/release/angular-ui-router.js',
        'node_modules/underscore/underscore-min.js',
       ])
    .pipe(concat('lib.js'))
    .pipe(gulp.dest(bases.dist));
});

gulp.task('watch', function () {
    return gulp.watch('**/*src.js', ['default']);
});


// Define the default task as a sequence of the above tasks
gulp.task('default', ['clean', 'ngscripts', 'libscripts', 'watch']);