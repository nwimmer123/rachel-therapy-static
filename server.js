var express = require('express');
var app = express();

app.set('view engine', 'ejs');

app.use('/',express.static(__dirname + '/public'));

// ROUTES

app.get('/', function(req,res) {
  res.render('pages/index');
});

app.get('/family_life', function(req,res) {
  res.render('pages/family_life');
});

app.get('/couples_therapy', function(req,res) {
  res.render('pages/couples_therapy');
});

app.get('/therapy_with_teens', function(req,res) {
  res.render('pages/therapy_with_teens');
});

app.get('/about_me', function(req,res) {
  res.render('pages/about_me');
});

app.get('/sexuality', function(req,res) {
  res.render('pages/sexuality');
});

//SERVER

app.listen(3000);
console.log('TITTIES!!!');