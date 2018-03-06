const db = require("../models");
// Defining methods for the participantController
module.exports = {
  findAll: function(req, res) {
    db.Participants
      .find(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Participants
      .find({UserID: req.params.UserID})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));

      Participants.findOne({ _id: newParticipant._id}).then(function(result) {
      assert(result._id.toString() === newParticipant._id.toString())
    })
  },
  findByUsername: function(req, res) {
    console.log(req.params.username);
    db.Participants
      .find({username: req.params.username})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Participants
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Participants
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Upload
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};