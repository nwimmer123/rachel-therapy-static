var express = require('express');
var app = express();

app.set('view engine', 'ejs');

app.use('/',express.static(__dirname + '/public'));

// ROUTES

app.get('/', function(req,res) {
  res.render('pages/index');
});

//SERVER

app.listen(3000);
console.log('TITTIES!!!')