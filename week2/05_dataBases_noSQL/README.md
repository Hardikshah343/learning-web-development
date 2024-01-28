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


# Lets start again
**What is a database**? A place where data is stored persistently.
Example: For a linkedin data like User data, Posts, connection relationships, messages,etc.

**So how do users interact with DB**? They done directly access database, we use HTTP servers as the end points, the HTTP servers may change but the data bases remain persistent.
**So Why dont we allow users to access the DB directly?** 
* Databases are created using protocls that browsers don't understande.
* Databases dont have granual access as a first class citizen. Very hard to do user specific access in them. i.e. DB gives access to everything or nothing.
* There are some databases (firebase) that let you get rid of the http server and try their best to provide granual access.

### CRUD
Databases usually allow access to 3 primitives
1. Create data, eg. signup on linkedin
2. Read Data, eg. get a post from linkedin
3. Update Data, eg. change profile photo
4. Delete data, eg. delete post

**Mongoose library**
In mongoose, first you have to define the schema. (For validation of input)
This may sound counter intuitive since mongodb is schemaless!!!
But mongoose library makes you define schema for things like autocompletions or validation of data before it goes in the DB to make sure you are doing things right.
Schemaless DBs can be very dangerous, using schemas in mongo makes it slightly less dangerous.

**Defining Schema**
Example: Lets create schema for course selling website.
```javascript
const UserSchema = new mongoose.Schema({
    email: String,
    password: String,
    purchasedCourses: [{
        type: mongoose.Schema.Types.ObjectId, 
        ref: "Course"
    }],
});
const CourseSchema = new mongoose.Schema({
    title: String,
    price: 5999
}) 
```
Note: `purchasedCourses` under `UserSchema` is a referenece to `Course` collection.
For each object created we have a random and unique Object ID is assigned. So purchasedCourses is going to store that objectId under userSchema from refering to Courses.
So when creating a collection or DB we tell the schema.
```Javascript
const User = mongoose.model("User", UserSchema);
const Course = mongoose.model("Course", CourseSchema);
```

Now CRUD Operations can be used as
**Create**
```javascript
User.create({
    username: req.body.username,
    password: req.body.password
});
```
**Read**
```javascript
User.findById("1");
User.findOne({
    username: "hardik@gmail.com"
});
User.find({
    username: "Hardik@gmail.com"
});
```
**Update**
```javascript
User.updateOne(
    { "id": "1" }, 
    { $push: {purchasedCourses: courseId }}
);
User.update({}, {
    premium: true
}); 
```
**Delete**
```javascript
User.deleteMany({}); // delete all
User.deleteOne({
    username: "hardik@gmail.com"
});
```

### Jargons in Databases
1. **Cluster**: the whole storage, consisting of all the databases.
2. **Database**: Collection of data, may be like a DB of users. Maybe application based Database.
3. **Table**: Entries in the database. Also known as document.
