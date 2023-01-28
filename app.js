if (process.env.NODE_ENV !== "production") {
    require('dotenv').config();
}

const express = require('express');
const app = express();
const ejs = require('ejs');

const { getApod } = require('./util');

app.set('view engine', 'ejs'); // Setting 'EJS' as the 'view engine'

app.get('/', async (req, res) => {
    const response = await getApod();
    const { data } = response;
    console.log(data);
    res.render('index', data);
})

app.listen(3000, () => {
    console.log('LISTENING ON PORT 3000');
})