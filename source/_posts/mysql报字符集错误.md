title: mysql报字符集错误
author: hojun
avatar: https://cdn.jsdelivr.net/gh/honjun/ImageHosting/sina/006bYVyvgy1ftand2qurdj303c03cdfv.jpg
authorDesc: 一个好奇的人
categories: 技术
date: 2017-07-18 20:14:09
authorLink: /about/hojun.html
authorAbout:
tags:
 - mysql
keywords:
description:
photos:
---
今天碰到个这么个报错：
```sql
Illegal mix of collations (utf8_unicode_ci,IMPLICIT) and (utf8_general_ci,IMPLICIT) for operation '=' [ SQL语句 ] :
```
看报错信息好像是字符集不一致
查看了下表
![006bYVyvgy1fhoaywi4qaj307g037q2r.jpg](https://cdn.jsdelivr.net/gh/honjun/ImageHosting/sina/006bYVyvgy1fhoaywi4qaj307g037q2r.jpg)

SHOW TABLE STATUS FROM 数据库名 LIKE '表名'; 
![006bYVyvgy1fhoaytokqnj308o02g3yd.jpg](https://cdn.jsdelivr.net/gh/honjun/ImageHosting/sina/006bYVyvgy1fhoaytokqnj308o02g3yd.jpg)
没问题，可能是字段字符不一样
show full columns from 表名; 或者 show create table 表名; 
```sql
CREATE TABLE `user` (
  `user_id` int(11) NOT NULL AUTO_INCREMENT,
  `user_phone` varchar(200) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL COMMENT '手机号',
  `user_pwd` varchar(50) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL COMMENT '登陆密码',
  `create_time` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL COMMENT '创建时间',
  `last_logtime` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL COMMENT '最后一次登录时间',
  PRIMARY KEY (`user_id`)
) ENGINE=MyISAM AUTO_INCREMENT=32 DEFAULT CHARSET=utf8
```
发现原因 解决
```
ALTER TABLE user CONVERT TO CHARACTER SET utf8 COLLATE utf8_general_ci
```