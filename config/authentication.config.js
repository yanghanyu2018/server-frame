/**
 * 认证处理
 * @author    Jack Yang
 * @copyright Copyright (c) 2016
 *
 */
 
'use strict';

/**
 * Module dependencies.
 */
var path      = require('path');
var passport  = require('passport');

var User      = require('../models/user.model.js');
var config    = require('../config/base.config.js');
var pathUtils = require('../common/path-utils.js');


module.exports = function(app) {
    // Initialize strategies
    pathUtils.getGlobbedPaths(path.join(__dirname, './strategies/**/*.js')).forEach(function(strategy) {
        require(path.resolve(strategy))(User, config);
    });

    // Add passport's middleware
    app.use(passport.initialize());
};
