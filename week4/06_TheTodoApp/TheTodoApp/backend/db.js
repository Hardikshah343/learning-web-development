const mongoDB = require("mongoose");


// usually put this in .env and dont commit on git
mongoDB.connect(
    "mongodb+srv://hardikshah343:Super%401234@cluster0.liovzcf.mongodb.net/todoApplication"
);

/* todo {
    title: string,
    description: string,
    completed: boolean
}
*/

const todoDBSchema = mongoDB.Schema({
    title: String, 
    description: String, 
    completed: Boolean
});

const todoCollection = mongoDB.model("todoCollection", todoDBSchema);

module.exports = {
    todoCollection
}
