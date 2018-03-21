const express= require('express');
require('dotenv').config();
const app = express();
const routes = require("./routes/")

console.log("Hello from Express");

// middleware stack starts with
app.use("/api/v1/", routes);


// ERR Handler
app.use( (req, res, next) => {
    let error = new Error("404: Not Found");
    error.status = 404;
    next(error)
});

app.use( (error, req, res, next) => {
    res.status( error.status || 500);
    res.json({
        message: "There was a terrible accident.",
        error: error.message
    });
});

const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`listening on port ${port}`);
});