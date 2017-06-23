const express = require('express');
const app = express();
const request = require('request');
const API_KEY = require('./env.json').apiKey;

app.set('port', (process.env.PORT || 3000));
app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/'));
app.use(express.static('./node_modules/angular/'));
app.use(express.static('./node_modules/angular-ui-bootstrap/dist/'));

app.get('/', (req, res) => {
	res.render('index');
});

app.get('/api/forecast', (req, res)=> {
	request(`https://api.darksky.net/forecast/${API_KEY}/37.8267,-122.4233`, (error, forecastResponse, forecastData) => {
		if (!error && forecastResponse.statusCode == 200) {
			res.writeHead(200, {"Content-Type": "application/json"});
			res.end(forecastData);
		}
	});
});

app.listen(app.get('port'), function() {
  console.log('App is running on port', app.get('port'));
});