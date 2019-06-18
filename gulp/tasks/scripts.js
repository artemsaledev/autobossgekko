let uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    scriptsPATH = {
        "input": "./dev/static/js/",
        "ouput": "./build/static/js/"
    };

module.exports = function () {
    $.gulp.task('libsJS:dev', () => {
        return $.gulp.src([
            'node_modules/svg4everybody/dist/svg4everybody.min.js',
            'dev/static/js/slidebars/slidebars.js',
            'dev/static/js/slidebars/scripts.js',
            'dev/static/js/addcart/addcart.js',
            'dev/static/js/owl-carousel/owl.carousel.min.js',
            'dev/static/js/slider/modernizr.js',
            'dev/static/js/slider/customslider.js',
            'dev/static/js/menu/menu.js',
            'dev/static/js/menu/menu-aim.js',
            'dev/static/js/menu/util.js'])
            .pipe(concat('libs.min.js'))
            .pipe($.gulp.dest(scriptsPATH.ouput));
    });

    $.gulp.task('libsJS:build', () => {
        return $.gulp.src([
            'node_modules/svg4everybody/dist/svg4everybody.min.js',
            'dev/static/js/slidebars/slidebars.js',
            'dev/static/js/slidebars/scripts.js',
            'dev/static/js/addcart/addcart.js',
            'dev/static/js/owl-carousel/owl.carousel.min.js',
            'dev/static/js/slider/modernizr.js',
            'dev/static/js/slider/customslider.js',
            'dev/static/js/menu/menu.js',
            'dev/static/js/menu/menu-aim.js',
            'dev/static/js/menu/util.js'])
            .pipe(concat('libs.min.js'))
            .pipe(uglify())
            .pipe($.gulp.dest(scriptsPATH.ouput));
    });

    $.gulp.task('js:dev', () => {
        return $.gulp.src([scriptsPATH.input + '*.js',
            '!' + scriptsPATH.input + 'libs.min.js'])
            .pipe($.gulp.dest(scriptsPATH.ouput))
            .pipe($.browserSync.reload({
                stream: true
            }));
    });

    $.gulp.task('js:build', () => {
        return $.gulp.src([scriptsPATH.input + '*.js',
            '!' + scriptsPATH.input + 'libs.min.js'])
            .pipe($.gulp.dest(scriptsPATH.ouput))
    });

    $.gulp.task('js:build-min', () => {
        return $.gulp.src([scriptsPATH.input + '*.js',
            '!' + scriptsPATH.input + 'libs.min.js'])
            .pipe(concat('main.min.js'))
            .pipe(uglify())
            .pipe($.gulp.dest(scriptsPATH.ouput))
    });
};
