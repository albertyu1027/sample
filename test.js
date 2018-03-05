const assert = require("assert")
const mocha = require("mocha");
const Participants = require("./models/participants")

// //testing with Mocha
describe('Saving Document', function() {
	// create tests
it('Saves a record to the database', function(done) {

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

		done();

	});
});
