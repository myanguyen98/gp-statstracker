const db = require("../models");

// Defining methods for the booksController
module.exports = {
  // findAll: function(req, res) {
  //   db.Player
  //     .find(req.query)
  //     .sort({ date: -1 })
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },
  // findAllPop: function(req, res) {
  //   db.Player
  //     .find(req.query)
  //     .populate("PlayerGameStats")
  //     .sort({ date: -1 })
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },
  findById: function(req, res) {
    db.Player
      .findById(req.params.id)
      .then(dbModel => {
        if(userRights(dbModel, req.body._id)){
        res.json(dbModel);
      } 
      else{
        res.status(401);
      }

      })
      .catch(err => res.status(422).json(err));
  },
  findByIdPop: function(req, res) {
    db.Player
      .findById(req.params.id)
      .populate("PlayerGameStats")
      .then(dbModel => {
        if (userRights(dbModel, req.body._id)){
          res.json(dbModel);
        }
        else{
          res.status(401);
        }

        })
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Player
      .create(req.body)
      .then( (dbModel) => {
          res.json(dbModel);
          db.Team.findOneAndUpdate(
            { "_id": req.body._id }, { $push: { "player": result.id }}
          );
      })
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Player
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => {
        if (userRights(dbModel, req.body._id)){
        res.json(dbModel);
        }
        else{
          res.status(401);
        }
      })
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Player
      .findById({ _id: req.params.id })
      .then(dbModel => {
        if(userRights(dbModel, req.body._id)){
        dbModel.remove();
        }
        else{
          res.status(401);
        }
      })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};

const userRights = (player, user) => {
  if (!player.user.equal(user._id)) {
    return false;
  }
  return true;
};