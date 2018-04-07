const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//create Schema and Model

const TaskSchema = new Schema({
	participant: String,
	tasks: {type: String}
});

const Tasks = mongoose.model("tasks", TaskSchema)
module.exports = Tasks;