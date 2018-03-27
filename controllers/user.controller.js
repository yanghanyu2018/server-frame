/**
 * 用户管理
 *
 * @author    Jack Yang
 * @copyright Copyright (c) 2016
 *
 */
'use strict';

/**
 * Module dependencies.
 */
var logger = require('mm-node-logger')(module);
var User   = require('../models/user.model.js');

/**
 * Find an user by id.
 *
 * @param {Object} req The request object
 * @param {Object} res The request object
 * @returns {Object} the user corresponding to the specified id
 * @api public
 */
function findById(req, res) {
    return User.findById(req.params.id, 'name email avatar', function (err, user) {
        if (err) {
            logger.error(err.message);
            return res.status(400).send(err);
        } else {
            res.json(user);
        }
    });
}

/**
 * List of users.
 *
 * @param {Object} req The request object
 * @param {Object} res The request object
 * @returns {Array} the list of users
 * @api public
 */
function findAll(req, res) {
    User.find(function(err, users) {
        if (err) {
            logger.error(err.message);
            return res.status(400).send(err);
        } else {
            res.json(users);
        }
    });
}

function addUser(req, res) {
/**
        // Get our form values. These rely on the "name" attributes
         var userName = req.body.username;
         var userEmail = req.body.useremail;

        // Set our collection
         var collection = db.get('usercollection');

        // Submit to the DB
         collection.insert({
             "username" : userName,
             "email" : userEmail
         }, function (err, doc) {
             if (err) {
                 // If it failed, return error
                 res.send("There was a problem adding the information to the database.");
             }
             else {
                 // If it worked, set the header so the address bar doesn't still say /adduser
                 res.location("userlist");
                 // And forward to success page
                 res.redirect("userlist");
             }
         });
**/
}

function deleteUser(req, res) {
	// TODO
}

module.exports = {
    findById: findById,
    findAll: findAll,
    addUser: addUser,
    deleteUser: deleteUser
};
