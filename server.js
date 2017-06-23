var express = require('express');
var app = express();

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/'));
app.use(express.static('./node_modules/angular/'));

app.get('/', (req, res) => {
	res.render('index');
});

app.get('/api/name', (req, res) => {
	res.writeHead(200, {"Content-Type": "application/json"});
	var json = JSON.stringify({name: 'Mike'});
	res.end(json);
});

app.listen('3000');