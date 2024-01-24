/* Optimise the repetitive code using functions */

const express = require("express");
const app = express();

function authenticateUser(username, password) {
    if(username === "hardik" && password === "pass")
        return true;
    return false;
}

function validateInputId(inputId){
    if(inputId == 1 || inputId == 2) 
        return true;
    return false;
}

app.get("/kidney-checkup", (req, res) => {
    const inputId = req.query.kidneyId;
    const username = req.headers.username;
    const password = req.headers.password;

    if (validateInputId(inputId)) {
        if(authenticateUser(username, password)) {
            req.status(200).json({
                msg : "Voila its your kidney!"
            });
            return;
        }
    }

    req.status(411).json({
        msg : "Oops its not your kidney !!"
    });
    return;
});

app.get("/eye-checkup", (req, res) => {
    const inputId = req.query.eyeId;
    const username = req.headers.username;
    const password = req.headers.password;

    if (validateInputId(inputId)) {
        if(authenticateUser(username, password)) {
            req.status(200).json({
                msg : "Voila its your eye!"
            });
            return;
        }
    }

    req.status(411).json({
        msg : "Oops its not your eye !!"
    });
    return;
});

/* Still the repeatation */
app.listen(3000);
