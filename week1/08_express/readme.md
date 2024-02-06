## Understanding Express

We are creating a express server.
Note: Express is just one of the tool to run a HTTP server, i.e. a host that listens on a port.

1. Install express to local machine
```terminal
$ sudo npm install express # locally
$ sudo npm install -g express  # globally
```

2. Create a express object
```javascript
const express = require("express");
const app = express();
```

3. Open a port to listen on 
```javascript
app.listen(3000);
```

**This is a simple express server which when we run will listen on port 3000.**

4. To run it simply.
```terminal 
$ node index.js
```
And open from browser
> http://localhost:3000

5. Now that we dont have any get/post method listed for port 3000, we will get **"Cannot GET /"** on browser. i.e. no "/" handler is present.
So lets add them. (Lets introduce route)
```javascript
app.get("/",    // this is the route.
    function(req, res) { // this is the callback i.e. what to respond with.
    // Note Java script is single threaded so beware
    res.send("hi there");
    }
);
```

### req and res
```
Basically req the first parameter is for all the headers body query parameters.. 
etc that we received as a request from browser.
And res the second parameter is for all the headers body query parameters.. etc 
that we want to respond with to browser for the request.
```

Now when you hit localhost:3000 it will respond with "hi there"
Voila we created a very basic HTTP server.

6. Lets add a function that will compute a sum of n which will be input from browser.
But first we need a input. there are two ways to get input from browser.

### Taking input from browser

# Query Parameters: 
**After the final route add `?` and then all input.**

`http://localhost:3000/?n=3&a=2&a=b`

So anthing after the `?` is not considered as route. Mostly used for get request.
Now how to access the query parameters
```javascript

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
```
# Body:
We will discuss soon. Usually used in POST method.


### Request methods:
Ways to get a request from browser. There are lots of them but most commonly used are
1. **GET** : To **get** the data from server.
2. **POST**: To **add** the data from server.
3. **PUT**: To **update** the data to server.
4. **DELETE**: To **delete** the data from server.

### Response as Status Codes
Response to any request, is we give back how it went or how was the operation on request?
1. **200**: Everything went fine.
2. **404**: Route or listener is not available.
3. **500**: Something went wrong in the middle of processing.
4. **411**: Inputs provided were incorrect.
5. **403**: Unauthorised access made.

Ans so on, many more. But these are common.

## POINTS TO REMEBER:
1. For POST Requests, we might get error on browser that cannot read properties of undefined i.e. body is undefined.
When we recieve contents in body js by default can not parse the body.
So we can take some help from library/middleware. (eg. "express.json()")
So when we get a POST request with body, we can check the contents.

2. Response is necessary for all request. But also only one response.

3. Always take care of edge cases, i.e. server may get any kind of data so validation should be done before going ahead with the request.

4. Check out wild cards for route.
    For eg. if we want anything after a route should be considered then use :
    `http://localhost:3000/files/123.txt`
    `http://localhost:3000/files/abc.txt`
    `http://localhost:3000/files/hello/wow`
    Should all redirect or invoke get function call back we should use
    ```js
    app.get("/files/:filenameOrPath", function(req, res) {
        const fileName = req.params.fileName; 
        // this is how we get the parameter of wild card
    });
    ```

<!-- End of document -->