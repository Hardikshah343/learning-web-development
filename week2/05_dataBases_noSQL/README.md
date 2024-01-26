Till now we just used in memory variables or maybe file manager to store data.
But that kind of bad because:
* Data can't be dynamic, if you update in memory objects, the updates are lost if the process restarts.
* There are multiple servers in real world. And all can then not share that in memory of one server.

# Databases (DB)

In the real world, a basic architecture looks like 
* User hits the backend
* Backend then hits the database
* User doesnt have access to the database/can't directly talk to DB.

### Types of databases
* **Graph DB**
* **Vector DB**
* **SQL DB**
* **NoSQL DB**

Most famous is NoSQL DB, eg. MongoDB.

## MongoDB
* MongoDB lets you create databases.
* In each DB, it lets you create tables (collections)
* In each table, it lets you dump JSON data
* It is schemaless and scales well.

**Prerequisites**
* Create a MongoDB free instance from https://mongodb.com
* Get the mongoDB connection URL.
* Download MongoDB Compass and try to explore the DB.
* Connect compass to DB usign the connection URL.
* Create a data collection "user_app" and created "users" collection.

**How does the backend connect to the databse?**
* Express lets us create an HTTP Server
* Jsonwebtokens library lets us create jwts
* **Mongoose** lets us connect to your database, from backend.

> https://mongoosejs.com

Multiple ways to use MongoDB, one way is to use MongoDB driver js, another is use mongoose.
We are as of now using mongoose as we can create schema to validate before dumping in DB, which driver wont do automatically. 
MongoDB is schemaless, driver allows us being schemaless but mongoose makes it as schema.


# Project
Create a backend server that 
1. Can send a **"/signup"** request, along with username and password.
Here we check if username is already present or not.
If not present then we put it in the database.
2. We can get a **"/signin"** request, along with username and password.
Here we check if username and password are present in DB.
If yes then we generate a token with a jwtPassword as key.  And respond back with the token.
3. Can send **"/user"** request, along with the token.
If token is valid we return back all the username back as response.

1. Install **mongoose**
```terminal
$ npm install mongoose
```
2. Inlcude mongoose and connect
```javascript
const mongoose = require("mongoose");
mongoose.connect(
    "your_mongo_url",
);
```
A valid connection string **"mongodb+srv://username:password@cluster0.e7euu.mongodb.net/cat"**
* Protocol (e.g. “mongodb+srv://”)
* Username (if authentication is required)
* Password (if authentication is required)
* Hostname or IP address of the MongoDB server
* Port number (if not using the default port 27017)
* Database name
* **If in password @ is used replace it with '%40'**

3. Create a validation schema for putting data inside
```javascript
const Cat = mongoose.model('Cat', { name: String });

const kitty = new Cat({ name: 'Zildjian' });
kitty.save().then(() => console.log('meow'));
```
Here kitty is a schema where collection name is `Cat` and `{name: String}` is the type of data it expects.
So mongoose library for us validates the data everytime when we want to add in the schema.
Just for hierarchy 
```schema
[Collection: user_app
    [Schema: user
        Cat : 
        [{ 
            name : "Zildjian"
        }]
    ]
]
```

4. Check if data is already present in schema, [**READ**]
```javascript
const existingUser = await Cat.findOne({name: "Zildjian"});   // Cat is the model
```
