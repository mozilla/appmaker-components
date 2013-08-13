var
express = require('express'),
path    = require('path'),
fs      = require('fs'),
util    = require('util'),
mu      = require('mu2');

mu.root = path.join(__dirname, 'components');

var view = {
  ASSET_HOST: process.env.ASSET_HOST ? process.env.ASSET_HOST : "//localhost:" + process.env.PORT
};

var app = express();

app.use(function(req, res, next) {
  // remove for security-by-obscurity for automated attacks
  res.removeHeader("x-powered-by");
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});

app.use('/assets', express.static(path.join(__dirname, 'assets')));
app.use('/components', express.static(path.join(__dirname, 'components')));

app.use(express.bodyParser());
app.use(express.logger());

app.get('/package/:components', function (req, res) {
  var components = req.params.components.split('+');

  function collectAndSendComponentData () {
    var packagedData = '';
    if (components.length) {
      var todo = components.length;
      components.forEach(function (name) {

        var stream = mu.compileAndRender(name, view);

        stream.pipe(res, {end: false})

        stream.on('end', function () {
          if (--todo === 0) {
            res.end();
          }
        });
      });
    }
    else {
      res.send('', 200);
    }
  }

  if (components.length === 1 && components[0] === 'all') {
    fs.readdir(path.join(__dirname, 'components'), function (err, files) {
      components = files;
      collectAndSendComponentData();
    });
  }
  else {
    components = components.map(function (name) {
      return name + '.html';
    });
    collectAndSendComponentData();
  }
});

var server = app.listen(process.env.PORT, function (err) {
  console.log('Running on', server.address());
});
