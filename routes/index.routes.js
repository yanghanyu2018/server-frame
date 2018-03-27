/**
 *
 * @author    Jack Yang
 * @copyright Copyright (c) 2016
 *
 */
 
var express = require('express');
var router = express.Router();
var path = require('path');

/* GET home page. */
router.get('/', function(req, res, next) {
	// 使用显示模版
  res.render('index', { title: 'CCMS客户端' });
});

router.get('/test', function(req, res, next) {
  res.sendfile(path.resolve(__dirname + '/../views/login.html'));
});

router.get('/signup', function(req, res, next) {
	res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
  res.end('这是一个测试界面！');
});

module.exports = router;
