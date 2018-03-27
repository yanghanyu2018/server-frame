/**
 * An application configuration.
 * 基础的配置文件
 *
 * @author    Jack Yang
 * @copyright Copyright (c) 2016
 */


var config = {
  version : ' [2016.11.24] ',
  users : {
    ws_onlineCount : 0, // WebSocket的当前在线人数
    ws_onlineUsers : {}, // WebSocket的在线用户名称
    ts_onlineCount : 0, // TcpSocket的当前在线人数
    ts_onlineUsers : {}, // TcpSocket的在线用户名称
  }
};

'use strict';

config.environment = process.env.NODE_ENV || 'development';

// Upload files in memory
config.uploadFilesInMemory = process.env.UPLOAD_FILES_IN_MEMORY || false;

// Populate the DB with sample data
config.seedDB = true;

// Token settings
config.token = {
  secret : process.env.TOKEN_SECRET || 'hxtime-ccms-20161125',
  expiration : process.env.TOKEN_EXPIRATION || 60 * 60 * 24 //24 hours
};

// Server settings
config.server = {
  host : '0.0.0.0',
  port : process.env.NODE_PORT || process.env.PORT || 3000
};

// MongoDB settings
config.mongodb = {
  dbURI : process.env.MONGODB_URI || process.env.MONGOLAB_URI || "mongodb://127.0.0.1:27017/ccms",
  dbOptions : {
    "user" : "",
    "pass" : ""
  }
};

// Redis settings
if (process.env.REDISTOGO_URL) {
  var rtg = require('url').parse(process.env.REDISTOGO_URL);
  process.env.REDIS_HOST = rtg.hostname;
  process.env.REDIS_PORT = rtg.port;
  process.env.REDIS_AUTH = rtg.auth.split(":")[1];
}

config.redis = {
  isAvailable : process.env.IS_REDIS_AVAILABLE || true,
  host : process.env.REDIS_HOST || '127.0.0.1',
  port : process.env.REDIS_PORT || 6379,
  auth : process.env.REDIS_AUTH || '',
  options : {}
};


config.sqlite3 = {
  isAvailable : process.env.IS_SQLITE_AVAILABLE || true,
  db : process.env.SQLITE_DB || 'ccms.db',
  options : {}
};

// websocket settings
config.websocket = {
  host : '0.0.0.0',
  port : process.env.WSNODE_PORT || process.env.WSPORT || 8088
};

// tcpsocket settings
config.tcpsocket = {
  host : '0.0.0.0',
  port : process.env.TCNODE_PORT || process.env.TCPORT || 2000
};

// 监控后台进程
config.monitor = {
  on : false,
  processes : [
    '/usr/share/airshow/websocket/checkProcess.sh "AirPlay_01" "/usr/share/airshow/airplay1/apl"',
    '/usr/share/airshow/websocket/checkProcess.sh "AirPlay_02" "/usr/share/airshow/airplay2/apl"'
  ],
};

// 定时处理
config.schedule = {
  on : true
};

// Export configuration object
module.exports = config;
