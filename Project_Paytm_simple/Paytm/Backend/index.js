const express = require("express");
const cors = require("cors");
require("./db");

const PORT = process.env.PORT || 3000;
const app = express();

/* Order matters here */
app.use(cors());
app.use(express.json()); //Used to parse JSON bodies

const mainRouter = require("./routes/index");

/* Route request i.e. all request coming to /api/v1 will be handled by routes/index.js */
app.use("/api/v1", mainRouter); /* This is a middleware */


app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});

