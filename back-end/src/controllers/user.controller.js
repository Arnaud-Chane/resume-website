const db = require("../models");
const User = db.users;
const Op = db.Sequelize.Op;


// Create and Save a new user
exports.create = async (req, res) => {
    console.log(req, res)
};


exports.authenticate = async (req, res) => {
    console.log(req, res)
}


exports.me = (req, res) => {
    console.log(req, res)
}


// Retrieve all users from the database.
exports.findAll = (req, res) => {
    console.log(req, res)
};