const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const request = require('request');
const API_KEY = require('./env.json').apiKey;

app.set('port', (process.env.PORT || 3000));
app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/'));
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('./node_modules/angular/'));
app.use(express.static('./node_modules/angular-ui-bootstrap/dist/'));

app.get('/', (req, res) => {
	res.render('index');
});

app.post('/api/forecast', (req, res) => {
	request(`https://api.darksky.net/forecast/${API_KEY}/${req.body.lat},${req.body.lng}`, (error, forecastResponse, forecastData) => {
		if (!error && forecastResponse.statusCode == 200) {
			res.writeHead(200, { "Content-Type": "application/json" });
			res.end(forecastData);
		}
	});
});

app.post('/api/geolocate', (req, res) => {
	let address = req.body.searchTerm;
	request(`https://maps.googleapis.com/maps/api/geocode/json?address=${address}`, (error, geolocationResponse, geolocationData) => {
		if (!error && geolocationResponse.statusCode == 200) {
			res.writeHead(200, { "Content-Type": "application/json" });
			res.end(geolocationData);
		}
	});
});

app.listen(app.get('port'), function () {
	console.log('App is running on port', app.get('port'));
});
