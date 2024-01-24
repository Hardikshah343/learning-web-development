const express = require("express");
const app = express();

function userAuthMiddleware(req, res, next) {
    if(req.headers.username != "hardik" || req.headers.password != "pass") {
        res.status(403).json({
            msg: "Unauthorised"
        });
    } else {
        next();
    }
}
function idMiddleware(req, res, next) {
    if(req.querry.id != 1 && req.query.id != 2) {
        res.status(403).json({
            msg: "Incorrect input"
        });
    }
    else {
        next();
    }
}

let numOfReq = 0;
function countNumberOfRequestsHandled(req, res, next) {
    numOfReq++;
    console.log("Request number:", numOfReq);
    next();
}

app.use(countNumberOfRequestsHandled); // 

app.get("/health-checkup", userAuthMiddleware, idMiddleware, (req, res)=> {
    /* If you are here middle ware passed */
    res.send("Successful !");
});
app.get("/kidney-checkup", idMiddleware, (req, res)=> {
    /* If you are here middle ware passed */
    res.send("Successful !");
});

app.listen(3000);