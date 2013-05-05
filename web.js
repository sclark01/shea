var express = require ("express");
var app = express();
	app.use(express.bodyParser());
	app.set('title','scorecenter');
	
app.get('/', function (req, res) {
	res.set('Content-Type', 'text/html');
	res.send("<h1>I'm Shea bitchs.");
	})
	
app.listen(process.env.PORT || 3000);
console.log("Listening on 3000");