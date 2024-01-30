const express = require("express");
const app = express();
const cors = require("cors")

let state = [];

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.json(state);
});

app.get("/todos", (req, res) => {
    const randomNum = Math.floor(Math.random() * 10);    
    state = [];
    for(let i = 0; i < randomNum; i++) {
        state.push({
            id: i+1,
            title: "Todo Item "+(i+1),
            description: "Description for todo Item "+(i+1),
        });
    }
    // console.log(state);
    res.status(200).json({state});
});

app.post("/todos", (req, res) => {
    const title = req.body.title;
    const description = req.body.description;
    const id = req.body.id;
    state.push({
        title,
        description,
        id,
    });
    res.send("Ok, updated");
});

app.all("/*", (req, res) => {
    res.send("Invalid request. Appologies");
});

app.use((err, req, res, next) => {
    res.send("Something went wrong.");
});

app.listen(3000);