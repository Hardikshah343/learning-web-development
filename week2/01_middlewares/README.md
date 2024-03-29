# Middlewares

### Life without middlewares:
Lets say on our HTTP server we are supposed to add some authentication, just before responding to the request.
Lets assume user sends a query parameter, then we check where it is correct querry parameter or not. (`http://link?n=1`, here n is query parameter)
Also user sends it authentication user id and password in headers of request, so we authenitcate it before actually responding.

**One way to do is to put them inside the handler**
```javascript
app.get("/", (req, res) => {
    const inputID = req.query.n;
    const userName = req.headers.username;
    const passwrd = req.headers.password;

    if(userName != "hardik" || passwrd != "Password") {
        /* Unauthorised access */ 
        res.status(403).json({
            msg: "User does not exist"
        });
        return;
    }
    if(inputID != 1 || inputID != 2) {
        res.status(411).json({
            msg: "Invalid request id"
        });
    }
    res.send("Successful !!!");
});
```
Mostprobably the dumb or naive way of doing it.

**What if now we have another handler on other route which also have to do the above authentications. Wooops again we have to do the authentication for that as well. Ugly Code.**

**DRY: the rule "Do not Repeat Yourself!!" is broken.**

### Another approach to fix above problem

Just create functions for each validation and call them to reduce ugliness and duplicacy of the code.

```javascript
function userNameValidator(username, password) {
    if(username != "hardik" || password != "pass") {
        return false;
    }
    return true;
}
// The handlers 
app.get("/handle1", (req, res) => {
    const username = req.headers.username;
    const password = req.headers.password;
    if(userNameValidator(username, password)) {
        res.status(200).json({
            msg: "Successful"
        });
        return;
    }
    res.status(411).json({
        msg:"Invalid username !"
    });
});

app.get("/handle2", (req, res) => {
    const username = req.headers.username;
    const password = req.headers.password;
    if(userNameValidator(username, password)) {
        res.status(200).json({
            msg: "Successful"
        });
        return;
    }    
    req.status(411).json({
        msg:"Invalid username !"
    });
});
```
**The problem that looked fixed still contains repetative code.**
We can also move the response to the validation function and so on.
But still not quite optimum compared to using middlewares.

### Life with Middlewares
Define middlewares similar to the above functions, also are just some functions the middleware.
We introduce another route that does authentication and we pass the inputs that recevied to the handler along. [Inputs need to be same]
![Alt text](image.png)

```javascript
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
app.get("/route1", userAuthMiddleware, idMiddleware, (req, res)=> {
    /* If you are here middle ware passed */
    res.send("Successful !");
});
app.get("/route2", idMiddleware, (req, res)=> {
    /* If you are here middle ware passed */
    res.send("Successful !");
});
```


**Now life is cool**
In reality, all callbacks were middlewares. Hhe!

### app.method("/route", cb1(req, res, next), cb2(req, res, next), ...)
**This is the actual prototype of method function**
* cb1, cb2, cb3 are all callback functions. There can be as many as you want.
* Each callback function takes 3 parameters request, resposne and next.
* Even if we do not pass next, it is by default there.
* Now each call back function in first in sequence have two choices only if it does not want to hold the call backs. First it can itself send the response and break the chain. Or, it can call next() and pass the control to next call back function in sequence.
* **No way we can send more than 1 responds in the whole callback/middleware chain**


### app.use(middleware)
eg. **app.use(express.json())** => to convert body to readable. (if you know body is in json)
So what if we want middleware to be used for all the handlers of all methods.
Voila **app.use(middleware)**
Any request that comes **after** the app.use() will need clear this middleware. (clear means call next() from inside of middleware). So before wont get affected.
* Pass the middleware function.
* express.json() returns a fucntion, and not a called function.
```javascript
// dummy implementation
express.json() {
    return function() {
        // logic to decode the body of request
    }
}
```

### Some Associated Concepts:
1. **next() Keyword:**
In middleware functions in Express, **next is a callback function** that is used to **pass control to the next middleware function in the stack**. When you call next(), it tells Express to move to the next middleware in line. **If next() is not called within a middleware function, the request-response cycle stops, and the client receives no response**.

2. Difference between **res.send** and **res.json**:

    * **res.send**: Sends a response of various types (string, Buffer, object, etc.). Express tries to guess the content type based on the data provided.

    * **res.json**: Sends a JSON response. It automatically sets the Content-Type header to application/json.

3. Importance of **app.use(express.json())**:
**app.use(express.json())** is middleware that parses incoming JSON payloads in the request body. It is crucial when dealing with JSON data sent in the request body, typically in POST or PUT requests. Without this middleware, you might receive the JSON data as a raw string, and you'd need to manually parse it.

4. **Middleware and req.body**:
    * **req.query** and **req.headers** don't require middleware because they represent the query parameters and headers of the incoming request, respectively. **Express automatically parses them.**

    * **req.body** requires middleware like express.json() to parse the request body, especially when the body contains JSON data. Other middleware, like **express.urlencoded()**, is used for parsing **form data in the request body**.

**Middleware helps in processing the request at different stages and is essential for tasks like parsing, logging, authentication, and more in a modular and organized way.**