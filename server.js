var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();

app.use(express.static(path.join(__dirname, "./app")));
app.use(bodyParser.json());

require('./config/mongoose.js');
require('./config/routes.js')(app);

app.listen(8000, function(){
	console.log('MEAN store is up and running on port 8000');
})

// facebook:
// 	app_id: 460770284115319
// 	app_secret: ebce5669a725d6d069db65291edaa24f