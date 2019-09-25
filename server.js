var express    = require('express'),
    app        = express(),
    path       = require('path'),
    port       = 8000;

const flash = require('express-flash');

const session = require('express-session');

const mongoose = require('mongoose');

app.use(session({
    secret: 'keyboardkitteh',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}))

mongoose.connect('mongodb://localhost/cake_rates')

app.use(express.static(path.join(__dirname, 'static')));

app.use(express.static( __dirname + '/public/dist/public' ));

app.set(path.join('views', __dirname, 'views'));

app.set('view engine', 'ejs');

app.use(express.static(__dirname + "/static"));

app.use(express.urlencoded({extended: true}));

app.use(express.json());

app.use(flash());

require('./config/routes.js')(app);

app.all("*", (req,res,next) => {
    res.sendFile(path.resolve("./public/dist/public/index.html"))
  });

app.listen(8000, function() {
    console.log(`listening on port ${port}`);
})