const express = require("express");
const body_parser = require("body-parser");
const api = require('./config/db.config');


const app = express();
const port = 4000;

app.listen(port, () => {
    console.log(`Server listening at ${port}`);
});
app.use(body_parser.urlencoded({extended:true}));
app.use(body_parser.json());

app.use('./api', api);
