// Import modules
const express = require("express");
const path = require("path");
const request = require("request");
const ip = require("ip");
const bodyParser = require("body-parser");

// Init App
const app = express();

// Geo


// Bodyparser
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

// Use static files
app.use("/", express.static(path.join(__dirname, "public")));

// Load view engine
app.set("views", path.join(__dirname, "views"));
// Set view engine
app.set("view engine", "ejs");

// HTTP Request


// GET
app.get("/", (req, res) => {
    // Get user current position


    request({
        url: `https://api.apixu.com/v1/current.json?key=eac7ca1087144cc6b1c130638171606&q=${ip.address()}`,
        json: true
    }, (error, response, body) => {
        
        console.log(response.body);
        // Render template
        res.render("index");
    })
})

// POST
app.post("/", (req, res) => {
    console.log(req.body.long);
    res.render("index", {
        long: req.body.long,
        lat: req.body.lat
    })
})

app.listen(3000, () => {
    console.log("App is running on port 3000");
})