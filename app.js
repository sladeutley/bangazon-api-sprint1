
const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const routes = require("./routes/");

console.log("Hello from Express");

// middleware stack starts here
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use("/api/v1", routes);


// TODO: Add error handler
// Error Handler

app.use((req, res, next) => {
  let err = new Error("Resource Not Found");
  err.status = 404;
  next(err);
});

app.use((err, req, res, next) => {
  // one error handler to rule them all
  if (err.status) console.log("404 handler");
  res.json({
    message: "Generic Error Message",
    err: err.message,
    status: err.status
  });
});

const port = process.env.PORT || 3000; //this is the server port (name) we're creating (e.x. localhost:8080)
app.listen(port, () => {
    console.log(`listening on port ${port}`);
});



