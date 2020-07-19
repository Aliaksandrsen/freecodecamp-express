const express = require("express");
const app = express();

// --> 7)  Mount the Logger middleware here

// --> 11)  Mount the body-parser middleware  here

/** 1) Meet the node console. */
// console.log('Hello World');

/** 2) A first working Express Server */
// app.get('/', (req, res, next) => {
  // res.send('Hello Express');
// });

/** 7) Root-level Middleware - A logger */
//  place it before all the routes !
app.use((req, res, next) => {
  console.log(`${req.method} ${req.path} - ${req.ip}`);
  next();
});

/** 3) Serve an HTML file */
app.get('/', (req, res, next) => {
  const absolutePath = __dirname + '/views/index.html';
  res.sendFile(absolutePath);
});

/** 4) Serve static assets  */
app.use(express.static(__dirname + '/public'));

/** 5) serve JSON on a specific route */
app.get('/json', (req, res, next) => {
  const jsonData = {"message": "Hello json"};
  if(process.env.MESSAGE_STYLE === 'uppercase') {
    jsonData.message = jsonData.message.toUpperCase();
  }
  res.json(jsonData);
});

/** 6) Use the .env file to configure the app */

/** 8) Chaining middleware. A Time server */
app.get('/now', (req, res, next) => {
  req.time = new Date().toString();
  next();
}, function(req, res) {
  res.json({time: req.time});
});

/** 9)  Get input from client - Route parameters */

/** 10) Get input from client - Query parameters */
// /name?first=<firstname>&last=<lastname>

/** 11) Get ready for POST Requests - the `body-parser` */
// place it before all the routes !

/** 12) Get data form POST  */

// This would be part of the basic setup of an Express app
// but to allow FCC to run tests, the server is already active
/** app.listen(process.env.PORT || 3000 ); */

//---------- DO NOT EDIT BELOW THIS LINE --------------------

module.exports = app;
