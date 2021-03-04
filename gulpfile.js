const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const cfg = {
    sass: {
        src: './scss',
        dest: './',
    }
};

gulp.task('sass', () => {
    return gulp.src(cfg.sass.src + '/style.scss')
        .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(gulp.dest(cfg.sass.dest))
});

gulp.task('watch-sass', () => {
    gulp.watch(cfg.sass.src + '/**/*.scss', gulp.series('sass'));
});

gulp.task('default', gulp.series('sass', 'watch-sass'));