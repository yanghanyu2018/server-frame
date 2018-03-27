/**
 *
 * @author    Jack Yang
 * @copyright Copyright (c) 2016
 *
 */

'use strict';

/**
 * Module dependencies.
 */
var logger   = require('mm-node-logger')(module);
var mongoose = require('mongoose');
var config   = require('../../config/base.config.js');
var db = {};
/**
 * Create mongoose connection.
 *
 * @param {*=} cb The callback that start server
 */

db.init = function init(cb) {
    // create the database connection
    mongoose.connect(config.mongodb.dbURI, config.mongodb.dbOptions);

    // when successfully connected
    mongoose.connection.on('connected', function () {
        logger.info('Mongoose connected to ' + config.mongodb.dbURI);
    });

    // if the connection throws an error
    mongoose.connection.on('error', function (err) {
        logger.error('Mongoose connection error: ' + err);
    });

    // when the connection is disconnected
    mongoose.connection.on('disconnected', function () {
        logger.info('Mongoose disconnected');
    });

    // when the connection is open
    mongoose.connection.once('open', function () {
        if(cb && typeof(cb) === 'function') {cb();}
    });

    // if the Node process ends, close the Mongoose connection
    process.on('SIGINT', function() {
        mongoose.connection.close(function () {
            logger.info('Mongoose disconnected through app termination');
            process.exit(0);
        });
    });
}

db.connect = function connect(callback){
   mongoose.connect(config.mongodb.dbURI);
}

db.disconnect =function disconnect(callback){
   mongoose.disconnect(callback);
}

module.exports = db;
