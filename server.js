'use strict';

var express = require('express');
var bodyparser = require('body-parser');
var Adjective = require('./lib/adjective.js');
var Verb = require('./lib/verb.js');
var Noun = require('./lib/noun.js');
var getRandomWord = require('./lib/getRandomWord.js');
var postRandomWord = require('./lib/postRandomWord.js');
var app = express();
var port = process.env.PORT || 3000;

var adjective = new Adjective();
var verb = new Verb();
var noun = new Noun();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/app/'));

app.get('/', function (req, res) {
  res.sendFile('index.html');
});

app.get('/adjective', function (req, res) {
  res.json(getRandomWord(adjective));
});

app.get('/verb', function (req, res) {
  res.json(getRandomWord(verb));
});

app.get('/noun', function (req, res) {
  res.json(getRandomWord(noun));
});

app.post('/adjective', function (req, res) {
  res.json(postRandomWord(req.body.word, adjective));
});

app.post('/verb', function (req, res) {
  res.json(postRandomWord(req.body.word, verb));
});

app.post('/noun', function (req, res) {
  res.json(postRandomWord(req.body.word, noun));
});

app.listen(port, function() {
  console.log('server started on port ' + port);
});
