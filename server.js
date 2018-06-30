const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const passport = require('passport')
const PORT = process.env.PORT || 3001;
const session       = require("express-session");
const mysql         = require("mysql");
const MySQLStore    = require("express-mysql-session")(session);
const app = express();
const routes = require("./routes");
const authCheckMiddleware = require("./server/middleware/auth-check");
// const FacebookTokenStrategy = require('passport-facebook-token');
let options;
app.use(express.static(path.join(__dirname + "/public")));
if (process.env.JAWSDB_URL) {
  options = process.env.JAWSDB_URL;
  var connection = mysql.createPool(options);
  var sessionStore = new MySQLStore({},connection);
} else {
  options = {
    host     : "localhost",
    user     : "root",
    password : "root",
    database : "bucketlistdb",
    port: 3000
  };
  console.log(options);
  var sessionStore = new MySQLStore(options);
  console.log(sessionStore);
}
app.use(session({
  secret: "8QEvskFKPTuZ5k5r7CKF",
  resave: false,
  store: sessionStore,
  saveUninitialized: false,
  // cookie: { secure: true }
}));
app.use(passport.initialize());
app.use(passport.session());

//load Passport strategies
const facebookTokenLoginStrategy = require("./server/passport/facebook-login");
const localSignupStrategy = require('./server/passport/local-signup');
const localLoginStrategy = require('./server/passport/local-login');
passport.use('facebook-token', facebookTokenLoginStrategy);
passport.use('local-signup', localSignupStrategy);
passport.use('local-login', localLoginStrategy);

app.use('/api', authCheckMiddleware);
app.use(routes);

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

//BODY-PARSER MIDDLEWARE
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
