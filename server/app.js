const express = require('express');
const app = express()
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')

app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())
app.use(morgan('dev'))

// var liveServer = require("live-server");
//
// var params = {
//     port: 8181, // Set the server port. Defaults to 8080.
//     host: "0.0.0.0", // Set the address to bind to. Defaults to 0.0.0.0 or process.env.IP.
//     root: "/public", // Set root directory that's being served. Defaults to cwd.
//     open: false, // When false, it won't load your browser by default.
//     ignore: 'scss,my/templates', // comma-separated string for paths to ignore
//     file: "../client/index.html", // When set, serve this file for every 404 (useful for single-page applications)
//     wait: 1000, // Waits for all changes, before reloading. Defaults to 0 sec.
//     mount: [['/components', './node_modules']], // Mount a directory to a route.
//     logLevel: 2, // 0 = errors only, 1 = some, 2 = lots
//     middleware: [function(req, res, next) { next(); }] // Takes an array of Connect-compatible middleware that are injected into the server middleware stack
// };
// liveServer.start(params);
app.use(cors())


app.get('/', function(req, res){
  res.send('hello world');
});

const api  = require('./routes/api')
app.use('/api', api )

app.listen(4001);
