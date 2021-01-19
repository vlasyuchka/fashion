var gulp = require('gulp');
var sass = require('gulp-sass');

var webp = require('gulp-webp');
 
const imagemin = require('imagemin');
const imageminWebp = require('imagemin-webp');

var browserSync = require('browser-sync');
var reload      = browserSync.reload;

gulp.task('sass', function() {
    return gulp.src("app/scss/main.scss")
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(gulp.dest("app/css"))
        .pipe(reload({stream:true}));
});

gulp.task('html', async function(){
  gulp.src("app/index.html")
  .pipe(reload({stream:true}));
});
gulp.task('webp', (async function(){
  await imagemin(['app/img/*.jpg'], {
    destination: 'app/img/webp',
    plugins: [
      imageminWebp({quality: 80})
    ]
  });

  console.log('Images optimized');
}));


gulp.task('browser-sync', function(done) { 
  browserSync.init({
    server: {
      baseDir: './app'
    },
    notify: false
  });
  
  browserSync.watch('app/').on('change', browserSync.reload);
  
  done()
});

gulp.task('default', gulp.series('sass', 'html', 'webp', 'browser-sync', function(done) {
  gulp.watch('app/scss/main.scss', gulp.series('sass'));
  gulp.watch('app/img/*.*', gulp.series('webp'));
  
  done()
}));