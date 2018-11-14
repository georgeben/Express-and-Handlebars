const http = require('http');
const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');

const app = express();

app.use(express.static(path.resolve(__dirname, "public")));

app.use(bodyParser.urlencoded({extended:false}))
//Setting the view engine to handle bars
app.engine("handlebars",exphbs({defaultLayout:"main"}));
app.set("view engine", "handlebars");

app.get("/", (req, res) =>{
    res.render("home");
});


app.use((req, res) =>{
    //res.send("<h1>Hello world</h1>")
});

http.createServer(app).listen(3000);
