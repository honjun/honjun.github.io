title: 记录微信公众号历史文章采集(二、js代码完善和数据库建立)
author: hojun
avatar: 'https://cdn.jsdelivr.net/gh/honjun/ImageHosting/sina/006bYVyvgy1ftand2qurdj303c03cdfv.jpg'
authorLink: /about/hojun.html
authorDesc: 一个好奇的人
categories: 技术
comments: true
date: 2018-09-20 23:34:00
authorAbout:
series: 微信公众号采集
tags:
 - 爬虫
 - 微信
 - php
 - anyproxy
keywords: 微信公众号历史文章采集
description: 微信公众号历史文章采集，参考自知乎专题[微信公众号内容的批量采集与应用]
photos:
 - https://cdn.jsdelivr.net/gh/honjun/ImageHosting/sina/006bYVyvgy1fvf92rp8otj30e80e8dfz.jpg
---
参考自知乎专题微信公众号内容的批量采集与应用，作者：飯口組組長 
原作者（飯口組組長）有一句话：我的方法来源于许多同行的分享精神，所以我也会延续这个精神，将我的成果分享出来。 
这系列的文章也是为了延续这份分享精神！ 
该系列文章是根据知乎专题的教程一步一步实现过程，以及实现过程中踩过的一些坑。 
关于原理介绍这里就不重复了，大家可以参考知乎专题。

## 代码完善前准备

原作者用的是php环境，这里有能力的可以尝试其他语言实现，python、java等都可以，不过原作者已经给出一部分的php代码，这里也采用php来实现。
所以要准备php环境，win下推荐使用wamp、xamp、phpstudy等懒人集成环境，因为之前电脑里存在wamp环境，就直接使用了。首先配置虚拟域名，不配也行。不过下文代码需要改成自己对应路径。配置虚拟域名可以教程可以参考我的另一篇文章[php本地虚拟域名配置和端口的一些折腾](https://www.hojun.cn/2018/09/16/php%E6%9C%AC%E5%9C%B0%E8%99%9A%E6%8B%9F%E5%9F%9F%E5%90%8D%E9%85%8D%E7%BD%AE%E5%92%8C%E7%AB%AF%E5%8F%A3%E7%9A%84%E4%B8%80%E4%BA%9B%E6%8A%98%E8%85%BE/)。这里假设我配置的虚拟域名为hojun.weixin.com

## 修改rule_default.js代码
下面只给出部分例子，其他的做相同更改（若是没有配置虚拟域名，需要把域名改成路径访问即，如localhost/weixin/，改成http://localhost/weixin/getWxHis.php即可）：
```js
HttpPost(ret[1],req.url,"/getMsgJson.php");
var http = require('http');
http.get('http://hojun.weixin.com/getWxHis.php', function(res) {
    res.on('data', function(chunk){
        callback(chunk+serverResData);
    })
});
------------------
var options = {
    method: "POST",
    host: "hojun.weixin.com",//注意没有http://，这是服务器的域名。
    port: 80,
    path: path,//接收程序的路径和文件名
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        "Content-Length": content.length
    }
};
```
找到函数replaceRequestOption修改：
```js
replaceRequestOption : function(req,option){
    var newOption = option;
    if(/google/i.test(newOption.headers.host)){
        newOption.hostname = "www.baidu.com";
        newOption.port     = "80";
    }
    return newOption;
},
```
## 创建数据库及数据表

在完善php代码前，我们还需要先创建好数据库及数据表。好消息是組長已经给出了数据表的创建sql语句。修改了一些语法报错和关键字重复
```sql
微信公众号表
CREATE TABLE `weixin` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `biz` varchar(255) DEFAULT ' ' COMMENT '公众号唯一标识biz',
  `collect` int(11) DEFAULT 1 COMMENT '记录采集时间的时间戳',
  PRIMARY KEY (`id`)
) ;
微信文章表
CREATE TABLE `post` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `biz` varchar(255) CHARACTER SET utf8 NOT NULL COMMENT '文章对应的公众号biz',
  `field_id` int(11) NOT NULL COMMENT '微信定义的一个id，每条文章唯一',
  `title` varchar(255) NOT NULL DEFAULT ' ' COMMENT '文章标题',
  `title_encode` text CHARACTER SET utf8 NOT NULL COMMENT '文章编码，防止文章出现emoji',
  `digest` varchar(500) NOT NULL DEFAULT ' ' COMMENT '文章摘要',
  `content_url` varchar(500) CHARACTER SET utf8 NOT NULL COMMENT '文章地址',
  `source_url` varchar(500) CHARACTER SET utf8 NOT NULL COMMENT '阅读原文地址',
  `cover` varchar(500) CHARACTER SET utf8 NOT NULL COMMENT '封面图片',
  `is_multi` int(11) NOT NULL COMMENT '是否多图文',
  `is_top` int(11) NOT NULL COMMENT '是否头条',
  `datetime` int(11) NOT NULL COMMENT '文章时间戳',
  `readNum` int(11) NOT NULL DEFAULT 1 COMMENT '文章阅读量',
  `likeNum` int(11) NOT NULL DEFAULT 0 COMMENT '文章点赞量',
  PRIMARY KEY (`id`)
) ;
采集队列表
CREATE TABLE `tmplist` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `content_url` varchar(255) DEFAULT NULL COMMENT '文章地址',
  `load` int(11) DEFAULT 0 COMMENT '读取中标记',
  PRIMARY KEY (`id`),
  UNIQUE KEY `content_url` (`content_url`)
) ;
```
登录phpMyAdmin后台，语言可以设置为中文。
![image](https://cdn.jsdelivr.net/gh/honjun/ImageHosting/sina/006bYVyvgy1fvgc0kjo4cj30ss0immy6.jpg)
注意设置排序规则为utf8_general_ci。
![image](https://cdn.jsdelivr.net/gh/honjun/ImageHosting/sina/006bYVyvgy1fvgc8aik7vj30jv07vgma.jpg)
接着一个一个执行sql生成数据表就行。
![image](https://cdn.jsdelivr.net/gh/honjun/ImageHosting/sina/006bYVyvgy1fvgccmx3z1j30sz0g6abq.jpg)
未完待续......To be Continued......
