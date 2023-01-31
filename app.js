if (process.env.NODE_ENV !== "production") {
    require('dotenv').config();
}

const express = require('express');
const app = express();
const ejs = require('ejs');


const { getApod } = require('./services');

app.set('view engine', 'ejs'); // Setting 'EJS' as the 'view engine'

app.get('/', async (req, res) => {
    const response = await getApod();
    const data = response.data;
    if(!data.copyright) { // Agrega el valor unknown a copyright en caso de no estar, api no siempre entrega ese valor
        data.copyright = 'Unknown';
    }
    console.log(data);
    res.render('index', data);
})

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`LISTENING ON PORT ${port}`);
})

