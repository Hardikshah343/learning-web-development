const express = require("express");
const bodyParser = require("body-parser")
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.get("/", function(req, res) { // function is a callback function 
    res.send("Hello world");
});

app.get("/hi", (req, res) => {
    console.log("This is a get request:");
    console.log("Parameters:", req.params);
    console.log("Body:", req.body);
    console.log("Query:", req.query);
    console.log("Headers:", req.headers);
    res.send({
        "Name" : "Hardik",
        "WhatISThis": "A Response to hi"
    }); // sending a json response.
});


app.post("/conversations", (req, res)=> {
    console.log("This is a post request: ", req);
    res.send("<b>Hello World this is bold.</b>")
    res.send({
        "Type" : "JSON",
        "Why" : "Random stuff"
    });
});

app.listen(port, function() {
    console.log('HTTP Server 1 listening to port ${port}');
});