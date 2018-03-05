const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//create Schema and Model

const ParticipantSchema = new Schema({
	companyname: String,
	city: String,
	state: String,
	datejoined: Date,
	projectvalue: Number,
	local: {
		username: { type: String, unique: false, required: false },
    	password: { type: String, unique: false, required: false }
	}
});

const Participants = mongoose.model("Participants", ParticipantSchema)
module.exports = Participants;