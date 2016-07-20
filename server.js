var express = require('express');
var app = express();

app.set('view engine', 'ejs')

app.use('/', express.static(__dirname + '/public'));

// ROUTES

app.get('/', function (req,res) {
  res.sendFile(__dirname + '/pages/index.html');
});

//SERVER

app.listen(3000);
console.log('TITTIES!!!')