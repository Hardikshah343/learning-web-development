const express = require("express");
const jwt = require("jsonwebtoken");
const jwtPassword = "123456";

const app = express();

/* In memory storage */
const ALL_USERS = [
    {
        username: "hardik@gmail.com",
        password: "123",
        name: "Hardik Shah",
    },
    {
        username: "cbuddy@gmail.com",
        password: "123321",
        name: "Cool Buddy",
    },
    {
        username: "kidrah@gmail.com",
        password: "321123",
        name: "Kidrah Hahs",
    },
];

function userExists(username, password) {
    /* Method 1: Using loops */
    // let userExists = false;
    // for(let i = 0; i < ALL_USERS.length; i++) {
    //     if (ALL_USERS[i].username == username && ALL_USERS[i].password == password) {
    //         userExists = true;
    //         break;
    //         // i = ALL_USERS.length
    //     }
    // }
    // return userExists;
    
    /* Method 2: Using filter */
    // let userExists = false;
    // let fileteredData =  ALL_USERS.filter((item) => {
    //     if (item.username === username && item.password === password)
    //         return true;
    //     else 
    //         return false;
    // });
    // if (fileteredData.length > 0)
    //     userExists = true;
    // return userExists;

    /* Method 3: Using find function for arrays */
    let userExists = false;
    let findValue = ALL_USERS.find((items) => {
        return items.username == username && items.password == password;
    });
    if(findValue)
        userExists = true;
    return userExists;
}

app.use(express.json());
app.post("/signin", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    if(!userExists(username, password)) {
        return res.status(403).json({
            msg: "User Does not exists in memory DB.",
        });
    }
    var token = jwt.sign({username: username}, jwtPassword);
    return res.json({
        token,
    });    
});

app.get("/users", (req, res) => {
    const token = req.headers.authentication;
    try {
        const decoded = jwt.verify(token, jwtPassword); // in case of invalid it will throw exception
        const username = decoded.username;
        // res.json({
        //     users: ALL_USERS
        // });
        // TODO: return a list of users other than this username
        res.json({
            users: ALL_USERS.filter((items) => {
                if(items.username == username) 
                    return false; // except this all we have to return
                else 
                    return true;
            })
        });
    }
    catch(err) {
        return res.status(403).json({
            msg: "Invalid token",
        });
    }
    return;
});

app.use((err, req, res, next) => {
    res.json({
        msg: "Opps something went wrong horribly.",
    });
});

app.listen(3000);