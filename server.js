const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const mongoose = require("mongoose");
const mocha = require("mocha");

//connect to MongodDB
mongoose.connect("mongodb://localhost/sampleBC");

// Set up promises with mongoose
mongoose.Promise = global.Promise;

mongoose.connection.once('open', function(){
	console.log("Successfully Connected to MongoDB")
}).on("error", function(error){
	console.log("Did not connect to MongoDB".error)
})

// //testing with Mocha
// describe('some demo tests', function() {
// 	//create tests
// })

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
