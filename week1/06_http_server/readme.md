In empty folder

1. open terminal
```terminal
$ npm init -y
```

This creates package.json that loooks like below : 
```json 
{
  "name": "06_http_server1",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```

As we can see here, main is "index.js" so this is our main file.

2. Create index.js
Now, basically we are creating a HTTP server. (Which can also be done using C/C++)
We are not going to handle all request on our own as of now, so what we do?
We use some code written by very smart people and today we chose "EXPRESS".

```javascript
const express = require("express");
```

One small difference between "fs" and "express" is that fs is stored in our system in form of package when node js is installed, but express we have to import from the internet to our maching.

3. Install express locally, on root directory or simply opening home terminal
```terminal
$ npm install express
```
or if facing installation issues on Ubuntu (VBox), try using
```terminal
$ sudo apt install node-express
```

4. Lets try running a example 
```javascript
const express = require("express");
const app = express();
const port = 3000;

app.get("/", function(req, res) { // function is a callback function 
    res.send("Hello world");
});

app.listen(port, function() {
    console.log('HTTP Server 1 listening to port ${port}');
});
```

Run it !!
```terminal
$ node index.js
```

Things to learn from this example:
1. If we run this code and have a big time consuming task in get function like a for loop with a very big iteration that will consume lot of time,
We can not run another web request on same url.
Why? JS is single threaded.
So usually we put asynchronous functions.

2. Express is used to create HTTP server.
Same can be done, using C/C++ [mostly express uses C/C++ under hood]

3. Install postman to try out various methods to send request.

4. Try printing the body sent on lets say get request.
```javascript
app.get("/weblink", (req, res) => {
  console.log(req.body);
});
```
This will give undefined.
So reason being JS doesnt come with body parser in built. We need to import a library for the same.
```terminal 
  $ npm install body-parser
```
```javascript
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.get("/weblink", (req, res) => {
  console.log(req.body);  // so when body will contain json data this will extract it for us.
});
```

5. Each time we fix some code we have to close the node terminal, again restart it.
```terminal
  $ npx nodemon index.js
```
Now every time you make changes and save file it will restart for you.

6. What if we want to send a request to a website from server.
"fetch"

7. Try exporting environment variable.
``` terminal
  $ export PORT = 3006
```
```javascript
const port = process.env.PORT || 3000
// It will get 3006 because we have created a env variable PORT = 3006
```

8. Query parameter 
```http request
  http://localhost:3000/hi?message=123&b=1
```
So 
```json
{
  "message" : 123,
  "b" : 1
}
```
is querry we received.

9. What is npm vs npx?
Node package manager lets us bring packages to our machine
Node package execute lets us bring package temporarily to execute and then remove afterwards.'

10. express let us create "HTTP SERVERS".