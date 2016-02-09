var gulp = require('gulp');
var webpack = require('webpack');
var path = require('path');
var DeepMerge = require('deep-merge');
var fs = require('fs');
var nodemon = require('nodemon');
var webpackConfig = require('./webpack.config');

var deepmerge = DeepMerge(function(target, source, key) {
  if(target instanceof Array) {
    return [].concat(target, source);
  }
  return source;
});

// generic

var defaultConfig = {
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loaders: ['babel'] },
    ]
  }
};

if(process.env.NODE_ENV !== 'production') {
  defaultConfig.devtool = '#eval-source-map';
  defaultConfig.debug = true;
}


function config(overrides) {
  return deepmerge(defaultConfig, overrides || {});
}

function onBuild(done) {
  return function(err, stats) {
    if(err) {
      console.log('Error', err);
    }
    else {
      console.log(stats.toString());
    }

    if(done) {
      done();
    }
  }
}

var frontendConfig = config(webpackConfig.frontend);

// Back 
var nodeModules = {};
fs.readdirSync('node_modules')
  .filter(function(x) {
    return ['.bin'].indexOf(x) === -1;
  })
  .forEach(function(mod) {
    nodeModules[mod] = 'commonjs ' + mod;
  });

var backendConfig = config(webpackConfig.backend);


gulp.task('frontend-build', function(done) {
  webpack(frontendConfig).run(onBuild(done));
});

gulp.task('frontend-watch', function() {
  webpack(frontendConfig).watch(100, onBuild());
});

gulp.task('backend-build', function(done) {
  webpack(backendConfig).run(onBuild(done));
});

gulp.task('backend-watch', function() {
  webpack(backendConfig).watch(100, function(err, stats) {
    onBuild()(err, stats);
    nodemon.restart();
  });
});

gulp.task('build', ['frontend-build', 'backend-build']);
gulp.task('watch', ['frontend-watch', 'backend-watch']);

gulp.task('run', ['backend-watch'], function() {
  console.log('!!! Please note, built frontend asset is in memory')
  nodemon({
    execMap: {
      js: 'node' 
    },
    script: path.join(__dirname, 'build/server/backend'),
    ignore: ['*'],
    watch: ['src/backend/', './gulpfile.js'],
    ext: 'noop'
  }).on('restart', function() {
    console.log('Restarted!');
  });
});