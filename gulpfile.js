const { src, dest, parallel } = require('gulp');
const htmlmin = require('gulp-htmlmin');
//const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');
//const jsonminify=require('gulp-jsonminify');
const minifycss=require('gulp-clean-css');
function processHTML(){
        return src('src/*.html').pipe(htmlmin({collapseWhitespace:true})).pipe(dest('dist'));
}

function imageminify(){
         return src('src/img/**/*') /*.pipe(imagemin()) */.pipe(dest('dist/img/'));
 }

function jsminify(){
        return src('src/scripts/*js').pipe(uglify()).pipe(dest('dist/scripts/'));
}
function cssminify(){
        return src('src/css/*.css').pipe(minifycss({compatability:'ie'})).pipe(dest(('dist/css/')))
}
//let jsonprocess=()=> src('src/*.json').pipe(jsonminify()).pipe(dest('dist'));

exports.js=jsminify;
exports.html=processHTML;
exports.img=imageminify;
//exports.json=jsonprocess;
exports.default=parallel(processHTML,imageminify,jsminify/* ,jsonprocess */);