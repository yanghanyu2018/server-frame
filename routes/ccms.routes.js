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

router.get('/', function(req, res, next) {
  res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
  res.end('这是一个CCMS测试界面！');
});

module.exports = router;
