const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());

app.get("/sum", (req, res) => {
    const firstNum = req.query.a;
    const secondNum = req.query.b;
    const sum = parseInt(firstNum) + parseInt(secondNum);
    res.send(sum.toString());
});

app.get("/interest", (req, res) => {
    const principal = parseInt(req.query.principal);
    const rate = parseInt(req.query.rate);
    const time = parseInt(req.query.time);
    const interest = (principal*rate*time)/100;
    const total = principal + interest;
    res.json({
        total: total,
        interest: interest,
    });
});

app.all("/*", (req, res) => {
    res.status(404).json({
        msg: "Page not found"
    });
})

app.use((err, req, res, next)=>{
    res.status(404).json({
        msg:"something went wrong."
    });
});

app.listen(3000);