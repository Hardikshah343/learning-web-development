const express = require("express");
const cors = require("cors")
const { createTodo, updateTodo } = require("./types.js"); // import validators
const { todoCollection } = require("./db.js");
const app = express();

app.use(cors());
app.use(express.json()); // parse json body middleware

/* Routes */
/* To add new todos */
app.post("/todos", async (req, res) => {
    const data = {title:req.body.title, description:req.body.description};
    const newTodo = createTodo.safeParse(data);
    if(!newTodo.success) {
        res.status(411).json({
            msg: "Invalid inputs to add todo."
        });
        return;
    }
    else {
        // append in mongod db
        // Wont do checking the todo in DB, maybe if user wants to re add the same todo like drink water.
        await todoCollection.create({
            title: newTodo.data.title,
            description: newTodo.data.description,
            completed: false
        });
        res.json({
            msg: "Todo created"
        })
    }
});

/* To get all the todos */
app.get("/todos", async (req, res) => {
    const currentTodoList = await todoCollection.find();

    res.json({
        currentTodoList
    });
});

/* To update a todo */
app.put("/completed", async (req, res) => {
    const input = updateTodo.safeParse(req.body);
    if(!input.success) {
        res.status(411).json({
            msg: "Invalid input to mark complete."
        });
        return;
    }
    else {
        try {
            await todoCollection.updateOne({
                _id: parseInt(req.body.id)
            }, {
                completed: true
            });
            res.json({
                msg: "Todo marked as completed successfully."
            })
        } catch (err) {
            console.log("Error while updating DB:", err);
            res.json({
                msg: "Invalid ID, update failed."
            });
        }
    }
});

/* for all other routes */
app.all("/*", (req, res) => {
    res.json({
        msg: "Sorry this is not allowed"
    });
});

/* Error handling routes */
app.use((err, req, res, next) => {
    console.log("Encountered:", err);
    res.json({
        msg: "Something went wrong at the backend, working on it."
    });
});

app.listen(3000);
