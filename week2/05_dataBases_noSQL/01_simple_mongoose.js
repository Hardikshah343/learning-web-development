const mongoose = require("mongoose");

mongoose.connect(
    "mongodb+srv://username:password@cluster_link/collectionName"
);

const User = mongoose.model('users', {name:String, email:String, password: String});

const user = new User({ 
    name: "Hardik Shah", 
    email: "hardik@gmail.com", 
    password: "123456"
});
user.save().then(()=>{ console.log("voila")}); // actually stores the data
