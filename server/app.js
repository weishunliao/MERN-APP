const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const router = require('./routes/router');
require('./db');
const cors = require('cors');
require('./routes/passport');
const passport = require("passport");


app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());
app.use(passport.initialize());
app.use(passport.session());
app.use('/api', router);


app.listen(3000, function (err) {
    if (err) {
        console.error('err:', err);
    } else {
        console.error('App is running at port 3000');
    }
});