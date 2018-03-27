/**
 * Authentication routes.
 *
 *
 * @author    Jack Yang
 * @copyright Copyright (c) 2016
 *
 */
'use strict';

/**
 * Module dependencies.
 */
var authentication = require('../controllers/authentication.controller.js');

/**
 * Set authentication routes.
 *
 * @param {Object} app The express application
 */
function setAuthenticationRoutes(app) {
    app.route('/auth/signin').post(authentication.signin);
    app.route('/auth/signout').get(authentication.signout);
    app.route('/auth/signup').post(authentication.signup);
}

module.exports = setAuthenticationRoutes;
