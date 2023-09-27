"use strict";

const gulp = require("gulp"),
      webpack = require("webpack-stream"),
      browsersync = require("browser-sync"),
      sass = require('gulp-sass')(require('sass')),
      autoprefixer = require("autoprefixer"),
      cleanCSS = require("gulp-clean-css"),
      postcss = require("gulp-postcss"),
      imagemin = require('gulp-imagemin'),
      htmlmin = require('gulp-htmlmin');

// const dist = "/OSPanel/domains/localhost/Depo";
const dist = "./dist/";


gulp.task("copy-html", () => {
    return gulp.src("./src/*.html")
                .pipe(gulp.dest(dist))
                .pipe(htmlmin({ collapseWhitespace: true }))
                .pipe(browsersync.stream());
});

gulp.task("build-sass", () => {
    return gulp.src("./src/assets/sass/style.scss")
                .pipe(sass().on('error', sass.logError))
                .pipe(gulp.dest(dist))
                .pipe(browsersync.stream());
});

gulp.task('copy-php', function () {
  return gulp.src("./src/assets/**/*")
      .pipe(gulp.dest(dist))
      .pipe(browsersync.stream());
});

gulp.task('fonts', function () {
  return gulp.src("./src/assets/fonts/**/*")
      .pipe(gulp.dest(dist + '/fonts'))
      .pipe(browsersync.stream());
});

gulp.task('icons', function () {
  return gulp.src("./src/assets/icons/**/*")
      .pipe(gulp.dest(dist + '/icons'))
      .pipe(browsersync.stream());
});

gulp.task('images', function () {
  return gulp.src("./src/assets/img/**/*")
      .pipe(imagemin())
      .pipe(gulp.dest(dist + '/img'))
      .pipe(browsersync.stream());
});

gulp.task("build-js", () => {
    return gulp.src("./src/js/script.js")
                .pipe(webpack({
                    mode: 'development',
                    output: {
                        filename: 'script.js'
                    },
                    watch: false,
                    devtool: "source-map",
                    module: {
                        rules: [
                          {
                            test: /\.m?js$/,
                            exclude: /(node_modules|bower_components)/,
                            use: {
                              loader: 'babel-loader',
                              options: {
                                presets: [['@babel/preset-env', {
                                    debug: true,
                                    corejs: 3,
                                    useBuiltIns: "usage"
                                }]]
                              }
                            }
                          }
                        ]
                      }
                }))
                .pipe(gulp.dest(dist))
                .on("end", browsersync.reload);
});

gulp.task("watch", () => {
    browsersync.init({
      server: {
          baseDir: "./dist/",
          serveStaticOptions: {
              extensions: ["html"]
          }
      },
  port: 4000,
  notify: true
  });
    
    gulp.watch("./src/*.html", gulp.parallel("copy-html"));
    gulp.watch("./src/js/**/*.js", gulp.parallel("build-js"));
    gulp.watch("./src/assets/**/*.php", gulp.parallel("copy-php"));
    gulp.watch("./src/assets/sass/**/*.scss", gulp.parallel("build-sass"));
    gulp.watch("./src/assets/fonts/**/*").on('all', gulp.parallel('fonts'));
    gulp.watch("./src/assets/icons/**/*").on('all', gulp.parallel('icons'));
    gulp.watch("./src/assets/img/**/*").on('all', gulp.parallel('images'));
});

gulp.task("build", gulp.parallel("copy-html", "build-js", "copy-php", "build-sass", "fonts", "icons", "images"));

gulp.task("prod", () => {
    gulp.src("./src/assets/sass/style.scss")
        .pipe(sass().on('error', sass.logError))
        .pipe(postcss([autoprefixer()]))
        .pipe(cleanCSS())
        .pipe(gulp.dest(dist));

    return gulp.src("./src/js/script.js")
                .pipe(webpack({
                    mode: 'production',
                    output: {
                        filename: 'script.js'
                    },
                    module: {
                        rules: [
                          {
                            test: /\.m?js$/,
                            exclude: /(node_modules|bower_components)/,
                            use: {
                              loader: 'babel-loader',
                              options: {
                                presets: [['@babel/preset-env', {
                                    corejs: 3,
                                    useBuiltIns: "usage"
                                }]]
                              }
                            }
                          }
                        ]
                      }
                }))
                .pipe(gulp.dest(dist));
});

gulp.task("default", gulp.parallel("watch", "build"));