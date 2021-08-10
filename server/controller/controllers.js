const User = require('../models/user')
// Find a single Tutorial with an id
exports.LogIn = (req, res) => {
    User.findOne({ userId: 'Guard1' })
        .then((result) => { res.send(result) })
        .catch((err) => { res.send(err) })
};

exports.findAll = (req, res) => {
    // Getting all the documents from database
    User.find()
        .then((result) => { res.send(result) })
        .catch((err) => { console.log(err) })
};

exports.update = (req, res) => {
    User.updateOne({ userId: req.query.id }, { currentLocation: req.query.currentloc })
        .then((results) => { res.send(results) })
        .catch((err) => { console.log(err) })
}