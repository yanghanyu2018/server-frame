/**
 *
 * @author    Jack Yang
 * @copyright Copyright (c) 2016
 *
 * client.hmset(hash, obj, [callback])：
 *     赋值操作，第一个参数是hash名称；第二个参数是object对象，其中key1:value1...,keyn:valuen形式；第三个参数是可选回调函数
 * client.hmset(hash, key1, val1, ... keyn, valn, [callback])：
 *     与上面做用一致，第2个参数到可选回调函数之前的参数都是key1, val1, ... keyn, valn形式；
 * client.hgetall(hash, [callback])：
 *     获取值操作，返回一个对象
 */
'use strict';

/**
 * Module dependencies.
 */
var redis = require('redis');
var logger = require('mm-node-logger')(module);
var config = require('../../config/base.config');
var Promise = require('bluebird');

var redisClient = null;


if (config.redis.isAvailable) {
	redisClient = redis.createClient(config.redis.port, config.redis.host);

	redisClient.auth(config.redis.auth);

	redisClient.on('connect', function() {
		logger.info('Redis connected to ' + config.redis.host + ':' + config.redis.port);
	});

	redisClient.on('error', function(err) {
		logger.error('Redis error: ' + err);
	});
	Promise.promisifyAll(redisClient);
}

module.exports = exports = redisClient;