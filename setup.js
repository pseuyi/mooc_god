setup

git init
npm init
npm init -y // initializes with default values

<scripts>
	"start": "nodemon -e html,js,css ./path/to/your/app.js",
	"test": "mocha —watch **.spec.js"
	//  mocha test by default looks for directory named ‘test'

<npm all>
	npm install express body-parser morgan sequelize pg pg-hstore  --save
	npm install nodemon --save-dev
	npm install nunjucks --save
	// testing
	npm install mocha —save-dev
	npm install chai —save-dev
	npm install chai-spies —save-dev

<express>
	var express = require('express');
	var app = express();
	app.use(express.static('public'));
	app.use('/static', express.static('public'));
	app.use('/static', express.static(__dirname + '/public'));

<router instance>
	var express = require('express');
	var router = express.Router();
	// module.exports = router;

<body-parser>
	npm i body-parser
	var bodyParser = require('body-parser');
	// true uses qs lib, false uses querystring
	app.use(bodyParser.urlencoded({extended: true}));
	app.use(bodyParser.json());

<nunjucks>
	npm i nunjucks
	var nunjucks = require('nunjucks');
	app.set('view engine', 'html');
	app.engine('html', nunjucks.render);
	nunjucks.configure('views', {noCache: true} ); //specify a view folder, turn off cache for dev purposes

<mocha + supertest + npm test>
	if (!module.parent) app.listen(3000); // conditional prevents a very esoteric EADDRINUSE issue with mocha watch + supertest + npm test.

<path>
	var path = require('path');
	requiring path overrides links

<sequelize>
	npm install sequelize pg pg-hstore --save
	// pg/pg-hstore necessary to direct sql orl to interact w postgresSQL
	sequelize.ARRAY can only be used with postgres
	//required for models
	var Sequelize = require('sequelize');
	var db = new Sequelize('postgres://localhost:5432/wikistack', {logging: false});//logging false will clean up tests

<bluebird>
	npm install bluebird
	var Promise = require("bluebird");

<fs>
	built into node library
	var fs = require('fs');

<morgan>
	var morgan = require('morgan')
	app.use(morgan('combined'))
	// dev mode includes colorful response statuses
	app.use(morgan('dev'))
	// only log errors
	app.use(morgan('combined', {
	  skip: function (req, res) { return res.statusCode < 400 }
	}))

<express error handling>
app.use(function(err, req, res, next){
	res.status(err.status || 500) // statuses
	console.error(err) // messages
	if(err) throw err // throw
})

*any files to gitignore?

// module.exports = app; as needed
