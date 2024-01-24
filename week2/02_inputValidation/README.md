# Input validation

### Why is input validation important?

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
**Error handling middleware**: This is a special type of middleware function in express that has four arguments instead of three `(err, req, res, next)`.
A special middleware that takes **4 arguments**, and handles all the exceptions of all **above handlers**.
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

**This is very hard to scale. What if we expect a complicated input?**
So then came many input validation libraries that ask for the format that is expected, and will do the validation for us.
One such creature is Zod.

