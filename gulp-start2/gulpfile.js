let project_folder = "dist";
let source_folder = "app";

let path = {
  build: {
    html: project_folder + "/",
    css: project_folder + "/css/",
    js: project_folder + "/js/",
    img: project_folder + "img/",
    fonts: project_folder + "/fonts/",
  },
  src: {
    html: project_folder + "/*.html",
    css: project_folder + "/scss/style.scss",
    js: project_folder + "/js/main.js",
    img: project_folder + "img/**/*.+(png|jpg|gif|ico|svg|webp)",
    fonts: project_folder + "/fonts/*.ttf",
  },
  watch: {
    html: project_folder + "/**/*.html",
    css: project_folder + "/scss/**/*.scss",
    js: project_folder + "/js/**/*.js",
    img: project_folder + "img/**/*.+(png|jpg|gif|ico|svg|webp)",
  },
  clean: "./" + project_folder + "/",
};

let { src, dest } = require("gulp"),
  gulp = require("gulp"),
  browsersync = require("browser-sync").create();

function browserSync(params) {
  browsersync.init({
    server: {
      baseDir: "./" + project_folder + "/",
    },
    port: 3000,
    notify: false,
  });
}

function html() {
  return src(path.src.html)
    .pipe(dest(path.build.html))
    .pipe(browsersync.stream())
}

let build = gulp.series(html);
let watch = gulp.parallel(build,browserSync);

exports.html = html;
exports.build = build;
exports.watch = watch;
exports.default = watch;
