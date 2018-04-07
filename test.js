const mocha = require("mocha");
const assert = require("assert")
const Tasks = require("./models/tasks")

// //testing with Mocha
describe('Saving Document', function() {
	// create tests
it('Saved, FoundOne, FoundbyID, Deleted record to the database', function(done) {

		var newTask = new Tasks({
		participant: "albert",
		tasks: "Code"
		});

		newTask.save().then[function(){
			assert(newTask.isNew === false);
		}];

		Tasks.findOne({ participant: "albert"}).then(function(result) {
			assert(result.participant === "albert")
		})

		Tasks.findOne({ _id: newTask._id}).then(function(result) {
			assert(result._id.toString() === newTask._id.toString())
		})

		Tasks.findOneAndRemove({participant: "albert"}).then(function(result) {
			Tasks.findOne({participant: "albert"}).then(function(result){
				assert(result === null)
			})
		})

		done();

	});
});
