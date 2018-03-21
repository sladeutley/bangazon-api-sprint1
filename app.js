const express = require("express");
const app = express();
const routes = require("./routes/");
console.log("Hello from Express");
// middleware stack starts here
app.use("/api/v1", routes);
// TODO: Add error handler
const port = process.env.PORT || 3000; //this is the server port (name) we're creating (e.x. localhost:8080)
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});