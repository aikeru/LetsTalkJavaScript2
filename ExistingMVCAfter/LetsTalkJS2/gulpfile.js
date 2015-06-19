/// <vs SolutionOpened='watch' />
var gulp = require("gulp"),
  watch = require("gulp-watch"),
  less = require("gulp-less"),
  notify = require("gulp-notify"),
  Toaster = require("node-notifier").WindowsToaster, //Others are available
  eslint = require("gulp-eslint"),
  path = require('path'),
  karma = require('gulp-karma'); //Karma was created by the angular team http://karma-runner.github.io/0.12/index.html

var notifier = new Toaster();

// First thing to do is tell gulp where to find our files

var javaScriptFiles = "./Scripts/App/**/*.js";
var javaScriptTests = "../Presentation.Tests/Client/**/*.spec.js";
var lessFiles = "./Content/**/*.less";

// Show me a picture when success or failure
var successImage = path.join(__dirname, "/Check.png");
var errorImage = path.join(__dirname, "/warning.png");

// Next, where should processed files go?
// Since we're using MVC conventions, put them exactly where we found them.
var lessOutput = 'Content';

// Keep track if unit tests failed last run
var testsFailed = false;

// Tell gulp to watch these files for changes
gulp.task('watch', function () {
  watch([javaScriptFiles], function (files, callBack) {
    //What should gulp do with JS files?
    testsFailed = false;
    gulp.start('js');
  });
  watch([lessFiles], function (files, callBack) {
    //What should gulp do with LESS files?
    gulp.start('less');
  });
});

// When gulp sees the 'js' task, I want it to run two other tasks
gulp.task('js', ['lintjs', 'testjs'], function () {
  //When they finish, just tell me they are successful
  if (testsFailed) { return; }
  notifier.notify({
    title: "JavaScript Tasks Complete!",
    message: "Linting and Tests all OK!",
    icon: successImage
  });
});
// When gulp sees the less task, I want it to compile the files
gulp.task('less', function () {
  return gulp.src(lessFiles)
  .pipe(less())
  .pipe(gulp.dest(lessOutput));
});

gulp.task('lintjs', function (done) {
  //This time we take the pipe
  var lintPipe = gulp.src(javaScriptFiles)
  .pipe(eslint()) //Lint the files
  .pipe(eslint.format()) //Output lint results to console
  .pipe(eslint.failOnError()); //Halt if linting fails

  //Subscribe to it ...
  lintPipe.on('error', function () {
    //Tell us linting failed
    notifier.notify({
      title: 'Linting Failed',
      message: 'JavaScript Linting Failure.',
      icon: errorImage
    });
    this.emit('end');
    done({ failed: true });
  });

  return lintPipe;
});

//We use gulp's optional "done" argument so karma can tell gulp when we finished testing
gulp.task('testjs', function (done) {
  return gulp.src([
    javaScriptFiles,
    javaScriptTests
  ])
  .pipe(karma({
    action: 'run',
    frameworks: ['mocha'],
    reporters: ['progress'],
    port: 9876,
    colors: true,
    autoWatch: false,
    browsers: ['PhantomJS'],
    singleRun: true
  }))
  .on('error', function (err) {
    notifier.notify({
      title: 'Unit Tests Failed',
      message: 'JavaScript Unit Tests Failed.',
      icon: errorImage
    });
    testsFailed = true;
    done(err);
  });
});