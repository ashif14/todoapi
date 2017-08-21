var express = require('express'),
	app = express(),
	port = process.env.PORT || 3000,
	mongoose = require('mongoose'),
	task = require('./api/models/todoModel'),
	bodyParser = require('body-parser');


// Mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/todoDB');

// app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


var routes = require('./api/routes/todoRoute');

routes(app);

app.listen(port);

console.log('Todo api started at PORT: '+port);
