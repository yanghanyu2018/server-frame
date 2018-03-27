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
var express = require('express');
var router = express.Router();
var user           = require('../controllers/user.controller.js');
var authentication = require('../controllers/authentication.controller.js');

router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


module.exports = router;
