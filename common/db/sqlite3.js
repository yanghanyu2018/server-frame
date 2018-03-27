/**
 * SQLITE3 数据库接口
 * @author    Jack Yang
 * @copyright Copyright (c) 2016
 *
 * new sqlite3.Database(filename, [mode], [callback])
 * Database#run(sql, [param, ...], [callback])
 * Database#get(sql, [param, ...], [callback])
 * Database#all(sql, [param, ...], [callback])
 * Database#each(sql, [param, ...], [callback], [complete])
 * Database#exec(sql, [callback])
 * Database#prepare(sql, [param, ...], [callback])
 */

'use strict';

//数据库接口库
var config = require('../../config/base.config');
var logger = require('mm-node-logger')(module);
var util = require('util');

var sqlite3 = require('sqlite3');
sqlite3.verbose();

var sqliteDB = null;
var db = {};

// 数据库名是直接硬编码的，所以当调用connect和setup函数时，当前目录中就会生成DATA_BASE文件
db.init = function(callback) {
    if (config.sqlite3.isAvailable) {
        sqliteDB = new sqlite3.Database(config.sqlite3.db, sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE,
            function(err) {
                if (err) {
                    util.log('FAIL on creating database ' + err);
                    if (callback)
                        callback(err);
                } else {
                    if (callback)
                        callback(null);
                    logger.info('SQLite3 connected to ' + config.sqlite3.db);
                }
            });
    }
}

//此处的disconnect函数是空的
db.disconnect = function(callback) {
    sqliteDB.disconnect(callback);
}

db.setup = function(callback) {
    sqliteDB.run("CREATE TABLE IF NOT EXISTS notes " +
        "(ts DATETIME, author VARCHAR(255), note TEXT)",
        function(err) {
            if (err) {
                util.log('FAIL on creating table ' + err);
                if (callback)
                    callback(err);
            } else {
                if (callback)
                    callback(null);
            }
        });
}

/**
db.emptyNote = {
    "ts": "",
    author: "",
    note: ""
};

//  run函数接受一个字符串参数，其中?表示占位符，占位符的值必须通过一个数组传递进来
//  调用者提供了一个回调函数，然后通过这个回调函数来声明错误

db.add = function(author, note, callback) {
    sqliteDB.run("INSERT INTO notes (ts, author, note) " +
        "VALUES (?, ?, ?);", [new Date(), author, note],
        function(error) {
            if (error) {
                util.log('FAIL on add ' + error);
                callback(error);
            } else {
                callback(null);
            }
        });
}


db.delete = function(ts, callback) {
    sqliteDB.run("DELETE FROM notes WHERE ts = ?;", [ts],
        function(err) {
            if (err) {
                util.log('FAIL to delete ' + err);
                callback(err);
            } else {
                callback(null);
            }
        });
}

db.edit = function(ts, author, note, callback) {
    sqliteDB.run("UPDATE notes " +
        "SET ts = ?, author = ?, note = ? " +
        "WHERE ts = ?", [ts, author, note, ts],
        function(err) {
            if (err) {
                util.log('FAIL on updating table ' + err);
                callback(err);
            } else {
                callback(null);
            }
        });
}

db.allNotes = function(callback) {
    util.log(' in allnote');
    sqliteDB.all("SELECT * FROM notes", callback);
}

db.forAll = function(doEach, done) {
    sqliteDB.each("SELECT * FROM notes", function(err, row) {
        if (err) {
            util.log('FAIL to retrieve row ' + err);
            done(err, null);
        } else {
            doEach(null, row);
        }
    }, done);
}

// 而forAll方法可以接受两个回调函数，每当从数据集中拿一行数据，回调函数doEach都会执行一遍，当读完所有数据时，回调函数done就会执行

db.findNoteById = function(ts, callback) {
    var didOne = false;
    sqliteDB.each("SELECT * FROM notes WHERE ts = ?", [ts],
        function(err, row) {
            if (err) {
                util.log('FAIL to retrieve row ' + err);
                callback(err, null);
            } else {
                if (!didOne) {
                    callback(null, row);
                    didOne = true; //保证回调函数只被执行一次
                }
            }
        });
}
**/

module.exports = db;