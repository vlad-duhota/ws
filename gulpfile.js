// main module
import gulp from "gulp";
// import pathes
import { path } from "./gulp/config/path.js";
// import plugins
import { plugins } from "./gulp/config/plugins.js";

global.app = {
    isBuild: process.argv.includes('--build'),
    isSev: !process.argv.includes('--build'),
    path: path,
    gulp: gulp,
    plugins: plugins
}

// import tasks
import { copy } from "./gulp/tasks/copy.js";
import { reset } from "./gulp/tasks/reset.js";
import { html } from "./gulp/tasks/html.js";
import { server } from "./gulp/tasks/server.js";
import { scss } from "./gulp/tasks/scss.js";
import { saass } from "./gulp/tasks/sass.js";
import { js } from "./gulp/tasks/js.js";
import { images } from "./gulp/tasks/images.js";
import { otfToTtf, ttfToWoff, fontStyle } from "./gulp/tasks/fonts.js";
import { svgSprive } from "./gulp/tasks/svgsprive.js";
import { zip } from "./gulp/tasks/zip.js";
import { ftp } from "./gulp/tasks/ftp.js";

// files watcher
function watcher() {
    gulp.watch(path.watch.files, copy)
    gulp.watch(path.watch.html, html) // gulp.series(html, ftp) - autodeployFtp
    gulp.watch(path.watch.scss, scss)
    gulp.watch(path.watch.sass, saass)
    gulp.watch(path.watch.js, js)
    gulp.watch(path.watch.images, images)
}

export { svgSprive }

// fonts tasks
const fonts = gulp.series(otfToTtf, ttfToWoff, fontStyle);

// main tasks
const mainTasks = gulp.series(fonts, gulp.parallel(copy, html, scss, js, images));

// series
const dev = gulp.series(reset, mainTasks, gulp.parallel(watcher, server));
const build = gulp.series(reset, mainTasks);
const deployZip = gulp.series(reset, mainTasks, zip);
const deployFtp = gulp.series(reset, mainTasks, ftp);

export { dev }
export { build }
export { deployZip }
export { deployFtp }

// run default task
gulp.task('default', dev);