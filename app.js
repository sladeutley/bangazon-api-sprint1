<<<<<<< HEAD
=======

>>>>>>> master
const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const routes = require("./routes/");
<<<<<<< HEAD
=======

>>>>>>> master
console.log("Hello from Express");

// middleware stack starts here
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use("/api/v1", routes);

<<<<<<< HEAD
// TODO: Add error handler
=======
// Error Handler
>>>>>>> master
app.use((req, res, next) => {
  let err = new Error("Resource Not Found");
  console.log("404 handler");
  err.status = 404;
  next(err);
});
<<<<<<< HEAD
=======

>>>>>>> master
app.use((err, req, res, next) => {
  // one error handler to rule them all
  res.json({
    message: "Generic Error Message",
    err: err.message
  });
});

const port = process.env.PORT || 3000; //this is the server port (name) we're creating (e.x. localhost:8080)
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});