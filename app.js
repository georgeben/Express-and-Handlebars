const http = require('http');
const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');

const app = express();

app.use(express.static(path.resolve(__dirname, "public")));

app.use(bodyParser.urlencoded({extended:false}))
//Setting the view engine to handle bars
app.set("views", path.resolve(__dirname, "views"));
app.engine("handlebars",exphbs({defaultLayout:"main"}));
app.set("view engine", "handlebars");

app.get("/", (req, res) =>{
    res.render("home");
});

app.post("/", (req, res) =>{
    if(!req.body.name || !req.body.email || !req.body.password){
        res.status(400).send("Please enter all inputs");
        return;
    }

    let user = {
        name:req.body.name,
        email:req.body.email,
        password:req.body.password
    }

    res.render("welcome", user);
})
app.use((req, res) =>{
    res.send("<h1>The page you are trying to visit does not exist!</h1>")
});

http.createServer(app).listen(8000, ()=> console.log("Started app on port 8000"));
