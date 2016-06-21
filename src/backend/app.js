import express from 'express';
import path from 'path';

var app = express();

// Dev mode related:
if (app.get('env') === 'development') {
    console.log('Loading development tools (static files serve, HMR)');

    require('./api')(app);
    
    app.use(express.static(path.join(__dirname, '../public')));
    app.use('/build', express.static(path.join(__dirname, '../../build')));

    // HMR related
    var webpackConfig = require('../../webpack.config');

    var webpackDevMiddleware = require("webpack-dev-middleware");
    var webpack = require("webpack");

    var compiler = webpack(webpackConfig.frontend);

    app.use(webpackDevMiddleware(compiler, {
        noInfo: false,
        lazy: false,
        publicPath: '/build/static/'
    }));
    app.use(require("webpack-hot-middleware")(compiler, {
        log: console.log,
        path: '/__webpack_hmr',
        heartbeat: 10 * 1000
    }));
}

// Add API etc here

console.log("Listening on port 4000...");
app.listen(4000);