const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const router = require('./routes/router');
const db = require('./db');
const cors = require('cors');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.use('/api', router);

app.get('/', (req, resp) => {
    resp.send("Hello");
});

app.listen(3000, function (err) {
    if (err) {
        console.error('err:', err);
    } else {
        console.error('App is running at port 3000');
    }
});