var express = require('express');
var path = require('path');
var httpProxy = require('http-proxy');

var proxy = httpProxy.createProxyServer(); 
var app = express();
var modRewrite = require('connect-modrewrite');
//var serveStatic = require('serve-static');
var compression = require('compression');

var isProduction = process.env.NODE_ENV === 'production';
var port = isProduction ? 8080 : 3001;
var publicPath = path.resolve(__dirname, 'build');

app.use(modRewrite([
      '!\\.html|\\.js|\\.json|\\.ico|\\.csv|\\.css|\\.png|\\.svg|\\.eot|\\.ttf|\\.woff|\\.appcache|\\.jpg|\\.jpeg|\\.gif /index.html [L]'
    ]));
    app.use(compression());

app.use(express.static(publicPath));
//app.use(serveStatic(publicPath));

// We only want to run the workflow when not in production
if (!isProduction) {

  // We require the bundler inside the if block because
  // it is only needed in a development environment. Later
  // you will see why this is a good idea
  var bundle = require('./bundle.js'); 
  bundle();

  // Any requests to localhost:3000/build is proxied
  // to webpack-dev-server
  app.all('/assets/*', function (req, res) {
    proxy.web(req, res, {
        target: 'http://localhost:8080'
    });
  });

}

// It is important to catch any errors from the proxy or the
// server will crash. An example of this is connecting to the
// server when webpack is bundling
proxy.on('error', function(e) {
  console.log('Could not connect to proxy, please try again...');
});

app.listen(port, function () {
  console.log('Server running on port ' + port);
});