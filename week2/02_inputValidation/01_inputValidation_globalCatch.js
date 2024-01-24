const express = require("express");

const app = express();

app.use(express.json())

app.post("/health-checkup", (req, res, next) => {
    // kidneys = [1, 2];
    const kidneys = req.body.kidneys;
    const kidneyLength = kidneys.length;

    res.send("You have " + kidneyLength + "kidneys");
});

// all handlers
app.use((err, req, res, next) => {
    res.status(500).json({
        msg: "Sorry something is up with our server."
    });
});

app.listen(3000);