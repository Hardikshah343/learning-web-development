const mongoose = require("mongoose");

const MONGO_URI = 'mongodb+srv://hardikshah343:Super%401234@cluster0.liovzcf.mongodb.net/PaytmApp';

mongoose.connect(MONGO_URI)
  .then(()=> {
      console.log(`Connected to MongoDB`);
  })
  .catch((error) => {
      console.log(`Error Connecting to MongoDB: ${error}`);
  });

