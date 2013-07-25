var express = require('express');
var habitat = require('habitat');
var path = require('path');
var fs = require('fs');

habitat.load();

var env = habitat();
var app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});

app.use('/components', express.static(path.join(__dirname, 'components')));

app.use(express.bodyParser());
app.use(express.logger());

app.get('/package/:components', function (req, res) {
  var packagedData = '';

  var components = req.params.components.split('+');
  var todo = components.length;

  components.forEach(function (name) {
    fs.readFile(path.join(__dirname, 'components', name + '.html'), 'utf-8', function (err, data) {
      packagedData += '\n' + data;
      if (--todo === 0) {
        res.send(packagedData, 200);
      }
    });
  });
});

var server = app.listen(env.get('PORT'), function (err) {
  console.log('Running on', server.address());
});