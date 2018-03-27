/**
 * Populate DB with sample data on server start to disable, edit config.js, and set `seedDB: false`
 * 示例数据
 * 
 * @author    Jack Yang
 * @copyright Copyright (c) 2016
 */
'use strict';

/**
 * Module dependencies.
 */
var logger   = require('mm-node-logger')(module);
var mongoose = require('mongoose');
var User     = require('../user/user.model');

var testUserId = mongoose.Types.ObjectId();

// User删除原来的数据，创建新的数据
User.find({}).remove(function() {
    User.create({
            provider: 'local',
            name: 'Jack Yang',
            email: 'jack@test.com',
            password: 'test',
            avatar: ''
        }, {
            _id: testUserId,
            provider: 'local',
            name: 'Test',
            email: 'test@test.com',
            password: 'test'
        }, {
            provider: 'local',
            name: 'Admin',
            email: 'admin@admin.com',
            password: 'admin'
        }, function() {
            logger.info('Finished populating users');
        }
    );
});
