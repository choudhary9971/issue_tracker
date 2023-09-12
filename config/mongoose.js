const mongoose = require("mongoose");
dbUrl =
  "mongodb+srv://shoaibahmad269:ShoaibA123067@shoaibapi.apta8jm.mongodb.net/Issue-tracker?retryWrites=true&w=majority" ||
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