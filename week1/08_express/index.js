const express = require("express");
const app = express();

/*
// Very basic HTTP server.

app.get("/",    // this is the route.
    function(req, res) { // this is the callback i.e. what to respond with.
    // Note Java script is single threaded so beware
    res.send("Hi there");
    }
);
*/

/*
// Taking input from browser: Query parameter.
function sumOfN(n) {
    let ans = 0;
    for(let index = 0; index <= n; index ++) {
        ans = ans + index;
    }
    return ans;
}

app.get("/",    // this is the route.
    function(req, res) { 
        const n = req.query.n;
        const ans = sumOfN(n);
        res.send("Hi, your ans is " + ans);
    }
);
*/

/* Lets create a HTTP server that is like a doctor
Create 4 routes (4 things that the hospital can do):
1. GET: User can check how many kidneys they have and their health.
2. POST: User can add a new kidney.
3. PUT: User can replace a kidney, make it healthy.
4. DELETE: User can remove a kidney.

Note: As of now this all will be done in a memory/local storage not in DATA BASES.
*/

/* Lets create a Memory */
var users = [ // array of objects
    {
        name: "John",
        kidneys: [{
            healthy: false
        }, {
            healthy: true
        }]
    }
];

function isThereAtLeastOneUnhealthyKidney() {
    let atleastOneUnhealthyKidney = false;
    for(index = 0; index < users[0].kidneys.length; index++) {
        if(!users[0].kidneys[index].healthy) {
            atleastOneUnhealthyKidney = true;
            break;
        }
    }
    return atleastOneUnhealthyKidney;
}

// 1. GET: Check number of kidneys.
app.get("/", function(req, res) {
    const johnKidneys = users[0].kidneys;
    const numberOfKidneys = johnKidneys.length;
    let numberOfHealthyKidneys = 0;
    for(let index = 0; index < johnKidneys.length; index++) {
        if(johnKidneys[index].healthy) {
            numberOfHealthyKidneys = numberOfHealthyKidneys + 1;
        }
    } // maybe try filter here
    const numberOfUnhealthyKidneys = numberOfKidneys - numberOfHealthyKidneys;
    res.json({
        numberOfKidneys,
        numberOfHealthyKidneys,
        numberOfUnhealthyKidneys
    });
});

// 2. POST: Add a kidney
/* Note: Here we might get error on browser that cannot read properties of undefined
When we recieve contents in body js by default can not parse the body.
So we can take some help from library/middleware. ("express.json()")
So when we get a POST request with body, we can check the contents.
*/
app.use(express.json());
app.post("/", function(req, res) {
    // console.log(req.body); // to check out the body of post request.
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
        healthy: isHealthy
    });
    res.json({
        msg: "Done, Kidney updated."
    });
});

// 3. PUT: Change status of all kidneys, to healthy.
// If there are no unhealthy kidney then respond with 411 status code.
app.put("/", function(req, res) {
    if(isThereAtLeastOneUnhealthyKidney()) {
        for(let i = 0; i<users[0].kidneys.length; i++) {
            users[0].kidneys[i].healthy = true;
        }
        res.json({});
    } else {
        res.status(411).json({
            "msg": "You have no bad kidneys!"
        });
    }
});

// 4. DELETE: User can remove all unhealthy kidneys.
app.delete("/", function(req, res) {
    // try filter here 
    // should return 411 (wrong input) if no unhealthy kidney
    if(!isThereAtLeastOneUnhealthyKidney()) {    
        const newKidneys = [];
        for(index = 0; index < users[0].kidneys.length; index++) {
            if(users[0].kidneys[index].healthy) {
                newKidneys.push({
                    healthy: true
                });
            }
        }
        users[0].kidneys = newKidneys;
    }
    else {
        res.status(411).json({
            "msg": "You have no bad kidneys!"
        });
    }
});

app.listen(3000);