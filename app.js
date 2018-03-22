'use strict';
const express = require("express");
const app = express();
const routes = require("./routes/");
const bodyParser = require("body-parser");

console.log("Hello from Express");

// middleware stack starts here
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use("/api/v1/", routes);


// TODO: Add error handler
app.use((req, res, next) => {
  let err = new Error("Resource Not Found");
  console.log("404 handler");
  err.status = 404;
  next(err);
});

app.use((err, req, res, next) => {
  // one error handler to rule them all
  res.json({
    message: "Generic Error Message",
    err: err.message
  });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});