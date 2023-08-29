const path = require('path');
require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
require("./db/conn.js");
const weatherModel = require("./models/weatherschema.js");
const getData = require('./routers/getData.js');
const pagePath = require('./routers/pagePath.js');
const hbs =require("hbs");

const public_path = path.join(__dirname, "../public")
const views_path = path.join(__dirname, "../templates/views");
const partials_path = path.join(__dirname, "../templates/partials");

app.use(express.static(public_path));
app.set('view engine', 'hbs');
app.set("views", views_path);
hbs.registerPartials(partials_path);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(getData);
app.use(pagePath);




app.listen(port, () => {
    console.log(`listening on ${port}`);
})
