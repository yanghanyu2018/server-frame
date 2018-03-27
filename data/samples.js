/**
 *
 * @author    Jack Yang
 * @copyright Copyright (c) 2016
 *
 */

var entries = [
	{"id":1, "title":"第一篇", "type":"1", "clazz":"2", "content":"正文1", "linkUrl":"", "resource":"", 
		  "postTime":"2016.11.16", "coverImageUrl":"./public/activity1.png", "remarkList":[]},
	{"id":2, "title":"第二篇", "type":"1", "clazz":"1", "content":"正文2", "linkUrl":"", "resource":"", 
		  "postTime":"2016.11.18", "coverImageUrl":"./public/activity2.png", "remarkList":[]},
	{"id":3, "title":"第三篇", "type":"1", "clazz":"1", "content":"正文3", "linkUrl":"", "resource":"", 
		  "postTime":"2016.11.18", "coverImageUrl":"./public/activity3.png", "remarkList":[]},
	{"id":4, "title":"第四篇", "type":"1", "clazz":"2", "content":"正文4", "linkUrl":"", "resource":"", 
		  "postTime":"2016.11.18", "coverImageUrl":"./public/activity4.png", "remarkList":[]},
	{"id":5, "title":"第五篇", "type":"1", "clazz":"2", "content":"正文5", "linkUrl":"", "resource":"", 
		  "postTime":"2016.11.18", "coverImageUrl":"./public/activity3.png", "remarkList":[]},
	{"id":6, "title":"第六篇", "type":"1", "clazz":"3", "content":"正文5", "linkUrl":"", "resource":"", 
		  "postTime":"2016.11.18", "coverImageUrl":"./public/activity3.png", "remarkList":[]},
	{"id":7, "title":"第七篇", "type":"1", "clazz":"3", "content":"正文5", "linkUrl":"", "resource":"", 
		  "postTime":"2016.11.18", "coverImageUrl":"./public/activity3.png", "remarkList":[]},
];

exports.getEntries = function (){
  return entries;
}

