// Module dependencies
var express = require('express'),
http = require('http'),
	https = require('https');
path = require('path'),
Cookies = require('cookies');
cheerio = require('cheerio');

const util = require('util');

// Create an express app
var app = express();

// Configure an express app
app.configure(function () {
	app.set('port', process.env.PORT || 3000);
	app.set('views', __dirname + '/views');
	app.set('view engine', 'ejs');
	app.use(express.favicon());
	app.use(express.logger('dev'));
	app.use(express.bodyParser());
	app.use(express.cookieParser('secret'));
	app.use(express.session());
	app.use(express.methodOverride());
	app.use(app.router);
	app.use(express.static(path.join(__dirname, 'public')));
	app.use('/Content', express.static(__dirname + '/Content'));
	app.use('/PageScripts', express.static(__dirname + '/PageScripts'));
	app.use('/Scripts', express.static(__dirname + '/Scripts'));
	app.use('/jasmine', express.static(__dirname + '/jasmine'));
	app.use('/jasmine-node', express.static(__dirname + '/jasmine-node'));
	app.use('/node_modules', express.static(__dirname + '/node_modules'));
	app.use('/Templates', express.static(__dirname + '/Templates'));
	app.use('/pages', express.static(__dirname + '/pages'));
	app.use('/components', express.static(__dirname + '/components'));
	app.use('/bower_components', express.static(__dirname + '/bower_components'));
	app.use('/images', express.static(__dirname + '/images'));
});

app.configure('development', function () {
	app.use(express.errorHandler());
});

// Store "session" information.  To see how to store sessions in a cookie, check out
// https://gist.github.com/visionmedia/1491756
var sessionInfo = {
	name : 'Guest'
};

// Create session middleware
var session = function (request, response, next) {
	// TODO: How do we store session data on the request?  How do we continue with the request chain?
	response.cookie('sessionInfo', sessionInfo, {
		maxAge : 900000,
		httpOnly : false
	});
	next();
};

// Handle GET request to root URL
app.get('/', session, function (request, response) {
	response.sendfile('./index.html');
});

// Handle GET request to root URL
app.get('/test', session, function (request, response) {
	response.sendfile('./specRunner.html');
});


http.createServer(app).listen(app.get('port'), function () {
	console.log("Express server listening on port " + app.get('port') + " - visit http://localhost:3000/");
});
