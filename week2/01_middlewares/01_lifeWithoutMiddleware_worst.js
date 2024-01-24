const express = require("express")
const app = express();

app.get("/health-checkup", (req, res) => {
    // do health checks here
    const kidneyId = req.query.kidneyId;
    const userName = req.headers.username;
    const password = req.headers.password;

    if(userName === "hardik" && password === "Pass") {
        if(kidneyId == 1 || kidneyId == 2) {
            res.json({
                msg: "Voila this is your kidney !!"
            });
        }
        else {
            res.json({
                msg : "Invalid kidney id"
            })
        }
    }
    else {
        res.json({
            msg: "Authentication failed"
        });
    }

    return;
});


app.listen(3000)