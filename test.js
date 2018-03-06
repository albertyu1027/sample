const mocha = require("mocha");
const assert = require("assert")
const Participants = require("./models/participants")

// //testing with Mocha
describe('Saving Document', function() {
	// create tests
it('Saved, FoundOne, FoundbyID, Deleted record to the database', function(done) {

		var newParticipant = new Participants({
		companyname: "ABC",
		city: "San Francisco",
		state: "CA",
		datejoined: 10/27/1989,
		projectvalue: 5000,
		local: {
			username: "albert",
    		password: "fjwajf"
		}
		});

		newParticipant.save().then[function(){
			assert(newParticipant.isNew === false);
		}];

		Participants.findOne({ companyname: "ABC"}).then(function(result) {
			assert(result.companyname === "ABC")
		})

		Participants.findOne({ _id: newParticipant._id}).then(function(result) {
			assert(result._id.toString() === newParticipant._id.toString())
		})

		Participants.findOneAndRemove({companyname: "ABC"}).then(function(result) {
			Participants.findOne({ companyname: "ABC"}).then(function(result){
				assert(result === null)
			})
		})

		done();

	});
});
