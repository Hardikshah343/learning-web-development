/*
Create a backend server that 
1. Can send a **"/signup"** request, along with username and password.
Here we check if username is already present or not.
If not present then we put it in the database.
2. We can get a **"/signin"** request, along with username and password.
Here we check if username and password are present in DB.
If yes then we generate a token with a jwtPassword as key. And respond back with the token.
3. Can send **"/user"** request, along with the token.
If token is valid we return back all the username back as response.
*/

const express = require("express");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");

const app = express();

const jwtPassword = "123456";

mongoose.connect(
    "mongodb+srv://hardikshah343:Super%401234@cluster0.liovzcf.mongodb.net/user_app"
);

const User = mongoose.model('users', {name:String, email:String, password: String});

app.use(express.json());
app.post("/signup", async (req,res) => {
    const username = req.body.username;
    const password = req.body.password;
    const name = req.body.name;

    // check if user is already present
    const existingUser = await User.findOne({email: username});
    if(existingUser) {
        return res.status(403).json({
            msg: "Username already exists."
        });
    }

    const user = new User({
        name: name,
        email: username,
        password: password
    });
    user.save();
    res.json({
        msg: "User Created successfully."
    });
});

app.listen(3000);
