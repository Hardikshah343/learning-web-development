const mongoDB = require("mongoose");


// usually put this in .env and dont commit on git
mongoDB.connect(
    "mongodb+srv://username:password@cluster_name/collectionName"
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
