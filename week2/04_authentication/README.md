# Authentication

Anyone can send a request from postman/browser, how can we validate a user.

**Dumb Way**: Ask user to send username and apssword in all requests as headers.
Like we did authenticate using middle ware
```javascript
function authenticateUsed(req, res, next) {
    if(req.headers.userName != "hardik"  || req.headers.password != "Pass") {
        res.status(403).json({
            msg: "Unauthorised"
        });
    } else {
        next();
    }
}
app.get("/controller", authenticateUser, (req, res, next)=>{
    /* Handler logic here */
});
```
But for all the request it will go and validate.
Also puts a risk of exposing password and username.

What we want is validate once and remember for the whole session.

**Slightly better Approach**
1. Give the user back a **token on valid signup/signin.**. Store in local browser storage.
2. Ask the user to **send back the token in all future requests**, from the local browser.
3. When the user logs out, ask the user to forget the token or revoke it from the backend.

**Lets dive into this approach**
But first till now we have seen two approaches:
1. Using Postman
2. Using browser URL

Third is to use get data from front end.i.e. Create a HTML page from where on an event or from somewhere at somepoint we collect / send a request to server.

# Fetch Api

> **index.html**
```html
<body>
<script>
    function getAnimalData() {
        fetch("https://fakerapi.it/api/v1/persons") // by default it is get method
            .then(function(response) {
                response.json()  // as we know response is json we parsed it into json
                    .then(function(finalData) {
                        console.log(finalData);
                    });
            });
    }
</script>
<button onclick = "getAnimalData()">Get Animal Data</button>
</body>
```
**TRY: axios is another library that can be replacement for fetch()**
So we can se the console on web using inspect on page to see the output of finalData.
> **Inspect -> console**
```console
Object { status: "OK", code: 200, total: 10, data: (10) […] }
code: 200
data: Array(10) [ {…}, {…}, {…}, … ]
0: Object { id: 1, firstname: "Hillary", lastname: "Schuster", … }
1: Object { id: 2, firstname: "Rowland", lastname: "Sanford", … }
2: Object { id: 3, firstname: "Brenna", lastname: "Gorczany", … }
3: Object { id: 4, firstname: "Ignatius", lastname: "Fritsch", … }
4: Object { id: 5, firstname: "Berry", lastname: "Bode", … }
5: Object { id: 6, firstname: "Elias", lastname: "Lueilwitz", … }
6: Object { id: 7, firstname: "Ewell", lastname: "Huels", … }
7: Object { id: 8, firstname: "Brooke", lastname: "Leuschke", … }
8: Object { id: 9, firstname: "Tess", lastname: "Carter", … }
9: Object { id: 10, firstname: "Else", lastname: "Hammes", … }
length: 10
<prototype>: Array []
status: "OK"
total: 10
<prototype>: Object { … }
__defineGetter__: function __defineGetter__()
__defineSetter__: function __defineSetter__()
__lookupGetter__: function __lookupGetter__()
length: 1
name: "__lookupGetter__"
<prototype>: function ()
__lookupSetter__: function __lookupSetter__()
​​__proto__: 
​​constructor: function Object()
​​hasOwnProperty: function hasOwnProperty()
​​isPrototypeOf: function isPrototypeOf()
​​propertyIsEnumerable: function propertyIsEnumerable()
​​toLocaleString: function toLocaleString()
​​toString: function toString()
​​valueOf: function valueOf()
​​<get __proto__()>: function __proto__()
​​<set __proto__()>: function __proto__()
index.html:14:36
```
**We can even display data on DOM, later**
 
So what we did here basically, we went to **https://fakerapi.it/api/v1/persons**, which contains a list of dummy data on persons, and got that data back on html page.

Now what we will do is back to authentication.

## Project
**Let people sign up to your website. Only allow signed in users to see people data (the same api dummy list)**

### Authentication
Almost all websites have authentication. There are complicated ways (Login with google..) to do auth.
Easiest is a username and password based auth.

**Some keywords on Cryptography**
1. **Hashing**: Using a hashing function/ or a algorithm to convert normal data to a random data, that will be stored as data at backend, so no one will be able to decipher, or know what is the actual data. This random data is stored by the backend. Next time when data is again send same algorithm is used to convert to random data which is then compared to the random data stored at backend to authenticate.
Basically is **[Good Data] -> Hasing_Function() -> [Random Data]**
This is all one way. Given the output no one can find out the input.
Changing the input a little bit changes the output a lot.

2. **Encryption**: It is like a lock using a key type functionality. All the data is send is encrypted using a function that takes key as argument and then that encrypted data is stored at backend. Now whoever has the key only can look at the data because when fetching back the data is again converted to normal using the same key. [same key or maybe different based on encryption algorithm].
Basically **[Good Data] -> Encrypt_function(key) --> [Encrypted data]**
And when getting back **[Encrypted data] --> Decrypt_function(key) --> [Normal Data]**
This is Two Way. Output can be decrypted using the same password.

3. **JWT**(Json Web Tokens): Only works on Json Input. So whatever json data we send is encrypted using a encryption algorithm and a key, and the output is a very long string in gibberish format not directly readable. That is called token.
Now, anyone who has the token can decode it and see the content of json. (Mostly because all algorithms to decode are known to all)
But only the user/authenticated person can verify if the data decoded is correct or not, for which it will require the key.
Basically **[Good Json data] --> Encryption_algorithm(key) --> [ TOKEN ]**
Anyone with token **[ TOKEN ] --> Decode_algotithm() --> [Json Data]** (Not sure if correct)
But the authorized person **[ TOKEN ] --> verify(TOKEN, key) --> [Good Json Data]**
It is neither encryption or hashing. It is like a **digital signature**
So anyone can see the original output given the signature.
But signature can only be verified only using the password.

4. **Local Storage**: So it is a way to store the data. But how this storage helps with authorisation.
**Step 1**: User creates/logs in with a username and passowrd.
**Step 2**: Server verifies the password and username (maybe using one of 1st and 2nd), and returns a JWT to user.
**Step 3**: User then stores the JWT in the local storage of machine. (kind of permanent storage till user logs out or server deauthorizes the user)
**Step 4**: Now whenever the user wants to send a request to server, we pass this token along inside may be body or headers, and the server verifies the token and authorises the user.
So like we also experience that once logged in next time from same browser we dont need to again login, hence the website uses local storage on machine we are using.
The Frontend has to take care of storing the token and sending it along with all the requests.
And at server end, server is responsible to maintain the key to verify the user.


#### Back to project
**We will create a website (FRONT END), that has 2 endpoints**
1. **POST "/signin"** 
Body {
    username: string
    password: string
}
Return a json web token with **username** encrypted.

2. **GET** "/users"
**Headers**: Authorisation header
Returns **an array of all users if user is signed in (token is correct)**
Else Returns **403 status code, if not signed in**

1. Install JWT
```terminal
$ npm install jsonwebtoken
```
2. Created a in memory password, to verify.
```javascript
const jwtPassword = "123456";
```
Usually it will be stored at some secured place like github secrets, etc.

3. Created a in memory DB for stroing user information.
Usually a Database like mongoDB will be used.

4. Create the two endpoints i.e. GET and POST.
```javascript
app.use(express.json()) // to convert body in json
app.post("/signin", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    if(!userExists(username, password)) { // a function we create to check if user exists inside in memory database.
        return res.status(403).json({
            msg: "User does not exists in our in memory db",
        });
        return;
    }
    var token = jwt.sign({ username: username}, jwtPassword); // convert to token
    return res.json({
        token,
    });
});
app.get("/users", (req,res) => {
    const token = req.headers.authentication;
    try {
        const decoded = jwt.verify(token, jwtPassword); 
        // in case of invalid it will throw exception
        const username = decoded.username;
        res.json({
            users: ALL_USERS
        })
    }
    catch(err) {
        return res.status(403).json({
            msg: "Invalid token",
        });
    }
    return;
});

```

**Mostly JWT function used**
#### jwt.verify(token, password)
To verify is the token is signed by proper authorized medium.
#### jwt.decode(token)
To convert back to normal json form.
**Note: Any one can decode a jwt token, but only the person having signature/password can verify the token.**
#### jwt.sign(jsonKeyValuetoSign, password)
To put the signature using password in jwt, while converting the json in jwt.

#### **Important points**
1. **find()**
The find() method returns the value of the first element that passes a test.
The find() method executes a function for each array element.
The find() method returns undefined if no elements are found.
The find() method does not execute the function for empty elements.
The find() method does not change the original array.

