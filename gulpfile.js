const { src, dest, parallel } = require('gulp');
const htmlmin = require('gulp-htmlmin');
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');
const jsonminify=require('gulp-jsonminify');
function processHTML(){
        return src('src/*.html').pipe(htmlmin({collapseWhitespace:true})).pipe(dest('dist'));
}

function imageminify(){
        return src('src/img/**/*') .pipe(imagemin()) .pipe(dest('dist/img/'));
}

function jsminify(){
        return src('src/*js').pipe(uglify()).pipe(dest('dist/'));
}
//let jsonprocess=()=> src('src/*.json').pipe(jsonminify()).pipe(dest('dist'));

exports.js=jsminify;
exports.html=processHTML;
exports.img=imageminify;
//exports.json=jsonprocess;
exports.default=parallel(processHTML,imageminify,jsminify/* ,jsonprocess */);