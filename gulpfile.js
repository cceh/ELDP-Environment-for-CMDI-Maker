// include gulp
var gulp = require('gulp');

// include plug-ins
var jshint = require('gulp-jshint'),
    changed = require('gulp-changed'),
    concat = require('gulp-concat'),
    stripDebug = require('gulp-strip-debug'),
    uglify = require('gulp-uglify'),
    cleancss = require('gulp-clean-css'),
    connect = require('gulp-connect'),
    watch = require('gulp-watch'),
    notify = require('gulp-notify');

var source_scripts = [
    /*ELDP */
    "./src/js/eldp_main.js",
    "./src/js/eldp_LanguagePacks.js",
    "./src/js/eldp_forms.js",
    "./src/js/eldp_resources.js",
    "./src/js/eldp_actors.js",
    "./src/js/eldp_actor_languages.js",
    "./src/js/eldp_sessions.js",
    "./src/js/eldp_sessions_rendering.js",
    "./src/js/eldp_output.js",
    "./src/js/eldp_generator.js",
    "./src/js/eldp_repair.js"
];

var style_sources = [
    "./src/css/layout-eldp.css"
];

//DEV
// localserver
gulp.task('server', function() {
    connect.server({
        port: 8082,
        livereload: true,
        root: ['.', './src']
    });
});

gulp.task('livereload', function() {
    gulp.src(['./src/css/*.css', './src/js/*.js'])
        .pipe(watch())
        .pipe(connect.reload())
        .pipe(notify({ message: 'livereload task complete' }));
});

gulp.task('watch', function() {
    gulp.watch([
        './src/js/*.js',
        './src/css/*.css'
    ], function(event) {
        console.log('@--> caught change in file', event);
        gulp.src(event.path, { read: false })
            .pipe(connect.reload())
            .pipe(notify({ message: 'Caught change in file' }));
    });
});


// JS hint task
gulp.task('jshint', function() {
    gulp.src('./src/js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
        .pipe(notify({ message: 'JSHINT task complete' }));
});

//PROD
// JS concat, strip debugging, minify, and add header
gulp.task('scripts', function() {
    gulp.src(source_scripts)
        .pipe(concat('eldp_environment.js')).on('error', errorHandler)
        .pipe(stripDebug())
        .pipe(uglify()).on('error', errorHandler)
        .pipe(gulp.dest('./build/')).on('error', errorHandler)
        .pipe(notify({ message: 'Scripts task complete' }));
});

// CSS concat and minify
gulp.task('styles', function() {
    gulp.src(style_sources)
        .pipe(concat('eldp_environment.css'))
        .pipe(cleancss())
        .pipe(gulp.dest('./build/'))
        .pipe(notify({ message: 'Styles task complete' }));
});


// gulp task for production
gulp.task('default', ['scripts', 'styles'], function() {});

// gulp task for development
gulp.task('develop', ['server', 'watch'], function() {});

// Error handler
function errorHandler(error) {
    console.log(error.toString());
    this.emit('end');
}
