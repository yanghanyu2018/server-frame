var express = require('express');
var router = express.Router();

var wechat = require('wechat');
var config = require('../config/base.config.js');

router.use('/', wechat(config.wechat, wechat.text(function(message, req, res, next) {
	// message为文本内容
	// { ToUserName: 'gh_d3e07d51b513',
	// FromUserName: 'oPKu7jgOibOA-De4u8J2RuNKpZRw',
	// CreateTime: '1359125035',
	// MsgType: 'text',
	// Content: 'http',
	// MsgId: '5837397576500011341' }
	console.log(message);
	var msg = message.Content;

}).image(function(message, req, res, next) {
	// message为图片内容
	// { ToUserName: 'gh_d3e07d51b513',
	// FromUserName: 'oPKu7jgOibOA-De4u8J2RuNKpZRw',
	// CreateTime: '1359124971',
	// MsgType: 'image',
	// PicUrl: 'http://mmsns.qpic.cn/mmsns/bfc815ygvIWcaaZlEXJV7NzhmA3Y2fc4eBOxLjpPI60Q1Q6ibYicwg/0',
	// MediaId: 'media_id',
	// MsgId: '5837397301622104395' }
	console.log(message);
	res.reply('hehe');

}).voice(function(message, req, res, next) {
	// message为音频内容
	// { ToUserName: 'gh_d3e07d51b513',
	// FromUserName: 'oPKu7jgOibOA-De4u8J2RuNKpZRw',
	// CreateTime: '1359125022',
	// MsgType: 'voice',
	// MediaId: 'OMYnpghh8fRfzHL8obuboDN9rmLig4s0xdpoNT6a5BoFZWufbE6srbCKc_bxduzS',
	// Format: 'amr',
	// MsgId: '5837397520665436492' }
	console.log(message);
	res.reply('hehe');

}).video(function(message, req, res, next) {
	// message为视频内容
	// { ToUserName: 'gh_d3e07d51b513',
	// FromUserName: 'oPKu7jgOibOA-De4u8J2RuNKpZRw',
	// CreateTime: '1359125022',
	// MsgType: 'video',
	// MediaId: 'OMYnpghh8fRfzHL8obuboDN9rmLig4s0xdpoNT6a5BoFZWufbE6srbCKc_bxduzS',
	// ThumbMediaId: 'media_id',
	// MsgId: '5837397520665436492' }
	console.log(message);
	res.reply('hehe');

}).shortvideo(function(message, req, res, next) {
	// message为短视频内容
	// { ToUserName: 'gh_d3e07d51b513',
	// FromUserName: 'oPKu7jgOibOA-De4u8J2RuNKpZRw',
	// CreateTime: '1359125022',
	// MsgType: 'shortvideo',
	// MediaId: 'OMYnpghh8fRfzHL8obuboDN9rmLig4s0xdpoNT6a5BoFZWufbE6srbCKc_bxduzS',
	// ThumbMediaId: 'media_id',
	// MsgId: '5837397520665436492' }
	console.log(message);
	res.reply('hehe');

}).location(function(message, req, res, next) {
	// message为位置内容
	// { ToUserName: 'gh_d3e07d51b513',
	// FromUserName: 'oPKu7jgOibOA-De4u8J2RuNKpZRw',
	// CreateTime: '1359125311',
	// MsgType: 'location',
	// Location_X: '30.283950',
	// Location_Y: '120.063139',
	// Scale: '15',
	// Label: {},
	// MsgId: '5837398761910985062' }
	console.log(message);
	res.reply('hehe');

}).link(function(message, req, res, next) {
	// message为链接内容
	// { ToUserName: 'gh_d3e07d51b513',
	// FromUserName: 'oPKu7jgOibOA-De4u8J2RuNKpZRw',
	// CreateTime: '1359125022',
	// MsgType: 'link',
	// Title: '公众平台官网链接',
	// Description: '公众平台官网链接',
	// Url: 'http://1024.com/',
	// MsgId: '5837397520665436492' }
	console.log(message);
	res.reply('hehe');

}).event(function(message, req, res, next) {
	// message为事件内容
	// { ToUserName: 'gh_d3e07d51b513',
	// FromUserName: 'oPKu7jgOibOA-De4u8J2RuNKpZRw',
	// CreateTime: '1359125022',
	// MsgType: 'event',
	// Event: 'LOCATION',
	// Latitude: '23.137466',
	// Longitude: '113.352425',
	// Precision: '119.385040',
	// MsgId: '5837397520665436492' }
	console.log(message);
	var event = message.Event;

	switch (true) {
		case (event === 'subscribe'):
			res.reply('subscrible:' + JSON.stringify(message));
			break;

		case (event === 'unsubscribe'):
			res.reply({
				content: 'unsubscrible:' + JSON.stringify(message),
				type: 'text'
			});
			break;
		default:
			res.reply([{
				title: '缺省的事件反馈',
				description: '这是缺省的事件',
				picurl: 'http://nodeapi.cloudfoundry.com/qrcode.jpg',
				url: 'http://59.110.48.187/test'
			}]);
			break;
	}

}).device_text(function(message, req, res, next) {
	// message为设备文本消息内容
	// { ToUserName: 'gh_d3e07d51b513',
	// FromUserName: 'oPKu7jgOibOA-De4u8J2RuNKpZRw',
	// CreateTime: '1359125022',
	// MsgType: 'device_text',
	// DeviceType: 'gh_d3e07d51b513'
	// DeviceID: 'dev1234abcd',
	// Content: 'd2hvc3lvdXJkYWRkeQ==',
	// SessionID: '9394',
	// MsgId: '5837397520665436492',
	// OpenID: 'oPKu7jgOibOA-De4u8J2RuNKpZRw' }
	console.log(message);
	res.reply('hehe');

}).device_event(function(message, req, res, next) {
	// message为设备事件内容
	// { ToUserName: 'gh_d3e07d51b513',
	// FromUserName: 'oPKu7jgOibOA-De4u8J2RuNKpZRw',
	// CreateTime: '1359125022',
	// MsgType: 'device_event',
	// Event: 'bind'
	// DeviceType: 'gh_d3e07d51b513'
	// DeviceID: 'dev1234abcd',
	// OpType : 0, //Event为subscribe_status/unsubscribe_status时存在
	// Content: 'd2hvc3lvdXJkYWRkeQ==', //Event不为subscribe_status/unsubscribe_status时存在
	// SessionID: '9394',
	// MsgId: '5837397520665436492',
	// OpenID: 'oPKu7jgOibOA-De4u8J2RuNKpZRw' }
	console.log(message);
	res.reply('hehe');

})));

module.exports = router;