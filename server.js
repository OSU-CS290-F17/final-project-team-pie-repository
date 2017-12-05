var path = require('path');
var express = require('express');
var exphbs = require('express-handlebars');

var pieData = require('./pieData');
var app = express();

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

