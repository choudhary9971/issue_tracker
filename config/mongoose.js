const mongoose = require("mongoose");
const dbUrl ="mongodb://127.0.0.1:27017/issue_tracker"
  
  //"mongodb://localhost/Issue-tracker";
mongoose.connect(dbUrl);
const db = mongoose.connection;
// error
db.on("error", console.error.bind(console, "erroe connecting to db"));
// up and running then message
db.once("open", function () {
  console.log("Success fully connected to the database");
});
module.exports = db;