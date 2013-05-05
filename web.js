var express = require ("express");
var app = express(express.logger());
	app.use(express.bodyParser());
	app.set('title','scorecenter');
	
var allowCrossDomain = function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
  res.header('Access-Control-Allow-HEADERS', 'Content-Type');
  next();
}

app.configure(function() {
  app.use(express.bodyParser());
  app.use(express.cookieParser());
  app.use(express.methodOverride());
  app.use(allowCrossDomain);
  app.use(app.router);
  app.use(express.static(__dirname));
});
	
app.get('/', function (req, res) {
	res.set('Content-Type', 'text/html');
	res.redirect("home.html");
	})
	
app.listen(process.env.PORT || 3000);
console.log("Listening on 3000");


