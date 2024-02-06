# Input validation

### Why is input validation important?
Input validation is a crucial aspect of securing your application. It helps ensure that the data received by your server is in the expected format and meets certain criteria.
Take for instance a login schema, now instead of passing a username and password in the body, the user can pass in any gibberish and may try to crash the server. Thus, it is our responsibility to ensure that our application logic handles all these input vulnerabilities.

Lets say user is supposed to send array of data as input.
```javascript
app.use(express.json()) // for body expected in json
app.post("/route", (req, res, next) => {
    // data = [1, 2]
    const data = req.body.datas;
    const dataLength = data.length;

    res.send("You shared:", dataLength, "values");
});
```
Now backends are supposed to serve everyone, all kind of users, all kind of requests.
Users being silly may send any kind of data.
* if they send `{ data: [1,2,3] }`, the ideal scenario we expect.
* if they send `{}`, i.e. no datas in json. What to do?
* if they send `{ data: 1 }`, not an array
* if they send `Blank text`, not even json that we expect.

We will expose our error/excepts and will know what we used at backend. Server exposed.
Even if error occurs it should be clean sorry to user.

**Hence data validation is very important**

#### How to solve it?
One naive method is to apply all the possible checks on input data, i.e. if array then ok, if string then no, if nothing then noo, if integer in json noooo, if not even json noooooooo.

```javascript
app.post("/health-checkup", (req, res) => {
    const datas = req.body.datas;
    if(!datas) { // handling undefined
        res.json({
            msg: "noooooo"
        });
    } else {
        const dataLenght = datas.lenght;
        res.send("You shared:", dataLenght, "values");
    }
});
```

One way to solve it:
# Middleware: Global Catches
It essentially help us the developers give a better error message to the user.

**Def** : `Global Catch or Error-Handling Middleware is a special type of middleware function in Express that has four arguments instead of three ((err, req, res, next)). Express recognizes it as an error-handling middleware because of these four arguments.`

**Global catches help you give the user a Better error message.**
```javascript
// all handlers
app.use((err, req, res, next) => {
    res.json({
        msg: "Sorry something is up with our server."
    });
});
```
* next here helps to futher log errors based on type of error and maybe call next error handler middleware.

#### Importance of Global Error Handling:
1.  **Centralized Handling:**
    Global catch blocks allow you to centrally manage and handle errors that occur anywhere in your application. Instead of handling errors at each specific location, you can capture and process them in a centralized location.

2. **Consistent Error Handling:**
    Using a global catch mechanism ensures a consistent approach to error handling throughout the application. You can define how errors are logged, reported, or displayed in one place, making it easier to maintain a uniform user experience.

3. **Fallback Mechanism:**
    Global catches often serve as a fallback mechanism. If an unexpected error occurs and is not handled locally, the global catch can capture it, preventing the application from crashing and providing an opportunity to log the error for further analysis.


#### **This is very hard to scale. What if we expect a complicated input?**
So then came many input validation libraries that ask for the format that is expected, and will do the validation for us.
One such creature is **Zod**.


## EXTRAS: 3 Ways of Sending Inputs to a Response
1. **Query Parameter:**  Simple instructions visible in the web address.
    **What it is:** Like giving specific instructions in the web address.
    **Example:** In `www.example.com/search?topic=animals`, the query parameter is topic with the value animals.
    **Use Case:** Good for simple stuff you want everyone to see, like search terms in a URL.

2. **Body:** Hidden part of the request for more detailed info, great for forms
    **What it is:** Imagine it as the hidden part of a request, carrying more detailed information.
    **Example:** When you fill out a form on a website, the details you enter (name, email) go in the body of the request.
    **Use Case:** Great for sending lots of information, especially when you're submitting something like a form.

3. **Headers:** Extra details about the request, useful for special information
    **What it is:** Extra information attached to the request, kind of like details about a letter.
    **Example:** Headers could include things like your identity or the type of data you're sending.
    **Use Case:** Perfect for passing along special information that doesn't fit neatly in the URL or body, like who you are or how to handle the data.

