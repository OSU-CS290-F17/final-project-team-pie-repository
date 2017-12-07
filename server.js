var path = require('path');
var express = require('express');
var exphbs = require('express-handlebars');

var pieData = require('./pieData');
var app = express();
var port = process.env.PORT || 3000;

var mongoHost = process.env.MONGO_HOST;
var mongoPort = process.env.MONGO_PORT || 27017;
var mongoUser = process.env.MONGO_USER;
var mongoPassword = process.env.MONGO_PASSWORD;
var mongoDBName = process.env.MONGO_DB;


app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');


app.get('/', function(req, res) {
	res.status(200).render('home');
});

app.get('/pies', function(req, res) {
	var pieDataCollection = mongoConnection.collection('pieData');
	pieDataCollection.find({}).toArray(function (err, results) {
		if (err) {
			res.status(500).send("Error fetching pies from DB");
		} else {
			console.log("== query results:", results);
			res.status(200).render('piePage', {
				people: results
			});
		}
	});
});

MongoClient.connect(mongoURL, function (err, connection) {
  if (err) {
    throw err;
  }
  mongoConnection = connection;
  app.listen(port, function () {
    console.log("== Server listening on port:", port);
  });
});