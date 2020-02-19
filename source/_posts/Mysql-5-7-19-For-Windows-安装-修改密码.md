title: Mysql 5.7.19 For Windows 安装+修改密码
author: hojun
avatar: https://cdn.jsdelivr.net/gh/honjun/ImageHosting/sina/006bYVyvgy1ftand2qurdj303c03cdfv.jpg
authorDesc: 一个好奇的人
categories: 技术
date: 2017-08-09 23:50:45
authorLink: /about/hojun.html
authorAbout:
tags:
 - mysql
keywords: mysql
description: Mysql 5.7
photos:
---
新版Mysql5.7会为root@localhost用户创建一个随机密码，这个随机密码在不同系统上需要使用不同方式查找，否则无法登录mysql并修改初始密码。（我想吐槽这么坑人的功能是程序员还是产品经理的锅）
![](https://cdn.jsdelivr.net/gh/honjun/ImageHosting/sina/006bYVyvgy1fq3e2vw01kj30dv08oq30.jpg)
今天安装了个mysql5.7版本，然后我居然不知道初始的登录密码？？？我都怀疑是不是自己亲手安装的。（5.7很皮...）
接下来修改初始密码又踩了好多坑(我从未见过对用户如此不友好之数据库)，网上搜了好多教程，试了各种方法。最后总结出一份简洁的方法。特此记录：
安装包是mysql-5.7.19-win32.msi
## **第一步 》安装**
![](https://cdn.jsdelivr.net/gh/honjun/ImageHosting/sina/006bYVyvgy1fq3e3189k0j30zk0qogmq.jpg)
自定义安装到D:\Program Files (x86)\Mysql5.7\MysqlServer5.7
## **第二步 》添加my.ini文件**
安装成功后在安装目录下(D:\Program Files (x86)\Mysql5.7\MysqlServer5.7)添加my.ini文件
```ini
[mysqld]
port=3306
basedir=D:\Program Files (x86)\Mysql5.7\MysqlServer5.7\
datadir=D:\Program Files (x86)\Mysql5.7\MysqlServer5.7\data
skip-grant-tables
```
## **第三步 》初始化Mysql+修改密码**
以管理员身份运行cmd,cd到mysql的bin下
执行
```c
D:\Program Files (x86)\Mysql5.7\MysqlServer5.7>cd bin

D:\Program Files (x86)\Mysql5.7\MysqlServer5.7\bin>mysqld.exe -install
Service successfully installed.

D:\Program Files (x86)\Mysql5.7\MysqlServer5.7\bin>mysqld --initialize-insecure

D:\Program Files (x86)\Mysql5.7\MysqlServer5.7\bin>net start mysql
MySQL 服务正在启动 .
MySQL 服务已经启动成功。


D:\Program Files (x86)\Mysql5.7\MysqlServer5.7\bin>mysql -u root -p
Enter password:(注释：直接回车)
Welcome to the MySQL monitor.  Commands end with ; or \g.
Your MySQL connection id is 3
Server version: 5.7.19 MySQL Community Server (GPL)

Copyright (c) 2000, 2017, Oracle and/or its affiliates. All rights reserved.

Oracle is a registered trademark of Oracle Corporation and/or its
affiliates. Other names may be trademarks of their respective
owners.

Type 'help;' or '\h' for help. Type '\c' to clear the current input statement.

mysql> use mysql
Database changed
mysql> update user set authentication_string = password('root'), password_expired = 'N', password_last_changed = now() where user = 'root';
Query OK, 1 row affected, 1 warning (0.02 sec)
Rows matched: 1  Changed: 1  Warnings: 1

mysql> exit
Bye
```
<font color="red">注：如果服务起不来，检查下有开启其他的mysql服务，导致端口被占用，比如mysql5.6</font>
![](https://cdn.jsdelivr.net/gh/honjun/ImageHosting/sina/006bYVyvgy1fpkrw2fwptj30ox0e9dik.jpg)
## **第四步 》重启服务，配置和修改生效**
修改my.ini文件
```ini
[mysqld]
port=3306
basedir=D:\Program Files (x86)\Mysql5.7\MysqlServer5.7\
datadir=D:\Program Files (x86)\Mysql5.7\MysqlServer5.7\data
```
再重启
```cmd
D:\Program Files (x86)\Mysql5.7\MysqlServer5.7\bin>net stop mysql
MySQL 服务正在停止.
MySQL 服务已成功停止。


D:\Program Files (x86)\Mysql5.7\MysqlServer5.7\bin>net start mysql
MySQL 服务正在启动 .
MySQL 服务已经启动成功。


D:\Program Files (x86)\Mysql5.7\MysqlServer5.7\bin>mysql -u root -p
Enter password:(注释：输入root)
Welcome to the MySQL monitor.  Commands end with ; or \g.
Your MySQL connection id is 4
Server version: 5.7.19 MySQL Community Server (GPL)

Copyright (c) 2000, 2017, Oracle and/or its affiliates. All rights reserved.

Oracle is a registered trademark of Oracle Corporation and/or its
affiliates. Other names may be trademarks of their respective
owners.

Type 'help;' or '\h' for help. Type '\c' to clear the current input statement.
```