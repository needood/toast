'use strict';
var gulp = require('gulp');
const rollup = require('rollup').rollup;
const commonjs = require('rollup-plugin-commonjs');
const nodeResolve = require('rollup-plugin-node-resolve');
const babel = require('rollup-plugin-babel');
const uglify = require('rollup-plugin-uglify');
const minify = require('uglify-js').minify;
const _uglify = require('uglify-js').uglify;

var sourcemaps = require('gulp-sourcemaps');
var buffer = require('vinyl-buffer');


var gutil = require('gulp-util');

var path = require('path');
var fs = require('fs');

const css2js = require("gulp-css2js");

gulp.task('css', function() {
    var postcss = require('gulp-postcss');
    var cssModules = require('postcss-modules');
    var distDir = './dist/css';
    var JsonDir = './build/localScopeJson';

    function getJSONFromCssModules(cssFileName, json) {
        var cssName = path.basename(cssFileName,'.css');
        var jsFileName = path.resolve(JsonDir,cssName+'.js');
        var jsonFileName = path.resolve(JsonDir,cssName+'.json');
        fs.writeFileSync(jsonFileName, JSON.stringify(json));
        fs.writeFileSync(jsFileName, "module.exports="+JSON.stringify(json)+";");
    }
    function getClass(module, className){
        var moduleFileName = path.resolve(distDir, module + '.js');
        var classNames = fs.readFileSync(moduleFileName).toString();
        return JSON.parse(classNames)[className];
    }

    return gulp.src('src/localcss/**/*.css')
        .pipe(buffer())
        .pipe(sourcemaps.init())
        .pipe(postcss([require('autoprefixer'), require('precss')]))
        .pipe(postcss([cssModules({
            getJSON: getJSONFromCssModules
        })]))
        .on('error', gutil.log)
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(distDir));
});


gulp.task('css2js', function() {
    var distDir = 'dist/css';
    var CssDir = './build/localScopeCss';
    return gulp.src(distDir + '/**/*.css')
        .pipe(buffer())
        .on('error', gutil.log)
        .pipe(css2js({
            splitOnNewline: false
        }))
        .pipe(gulp.dest(CssDir));
});
gulp.task('default',["css","css2js","js"], function() {
    return rollup({
        entry: './src/index.js',
        plugins: [nodeResolve({
                jsnext: true
            }),
            commonjs(),
            babel({
                exclude: ['node_modules/**']
            }),
            uglify({
                compress: {
                    screw_ie8: false
                },
                mangle: {
                    screw_ie8: false
                }
            }, _uglify)
        ]
    }).then(function(bundle) {
        return bundle.write({
            moduleName: "Toast",
            format: 'umd',
            dest: './dist/bundle.js'
        });
    });
});
gulp.task('js', function() {
    return rollup({
        entry: './src/index-without-css.js',
        plugins: [nodeResolve({
                jsnext: true
            }),
            commonjs(),
            babel({
                exclude: ['node_modules/**']
            }),
            uglify({
                compress: {
                    screw_ie8: false
                },
                mangle: {
                    screw_ie8: false
                }
            }, _uglify)
        ]
    }).then(function(bundle) {
        return bundle.write({
            moduleName: "Toast",
            format: 'umd',
            dest: './dist/bundle-without-css.js'
        });
    });
});
