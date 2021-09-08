const path = require('path');
const express = require('express');
const handlebars = require('express-handlebars');
const morgan = require('morgan');

const router = require('./routers/index.router');

//Connect db
const db = require('./config/db/index.db');
db.connect();

const app = express();

const port = 3000;

app.use(morgan('combined'));

//req.body
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

//Static files
app.use(express.static(path.join(__dirname, 'public')));

//Template engine
app.engine(
    '.hbs',
    handlebars({
        extname: '.hbs',
    }),
);
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'resources/views'));

//Routers init
router(app);

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
