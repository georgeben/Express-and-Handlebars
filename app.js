const http = require('http');
const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');

const app = express();

//Setting the view engine to handle bars
app.engine("handlebars",exphbs({defaultLayout:"main"}));
app.set("view engine", "handlebars");

app.use((req, res) =>{
    //res.send("<h1>Hello world</h1>")
    res.render("home");
});

http.createServer(app).listen(3000);
