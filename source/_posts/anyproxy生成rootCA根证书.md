title: anyproxy生成rootCA根证书
author: hojun
avatar: 'https://wx1.sinaimg.cn/large/006bYVyvgy1ftand2qurdj303c03cdfv.jpg'
authorLink: /about/hojun.html
authorDesc: 一个好奇的人
categories: 技术
comments: true
date: 2018-09-11 00:12:59
authorAbout:
series:
tags:
keywords: anyproxy
description: AnyProxy是一个基于NodeJS的，可供插件配置的HTTP/HTTPS代理服务器。
photos:
---
## 前言
AnyProxy是一个基于NodeJS的，可供插件配置的HTTP/HTTPS代理服务器。
环境：
node.js >= 5.0
windows

## 全局安装anyproxy
在cmd下输入命令npm install -g anyproxy
![image](http://ws3.sinaimg.cn/large/006bYVyvgy1fv4uwthvp3j30r60e9wf8.jpg)
## 生成证书
使用网上的 --root 命令发现 报错，什么鬼？
![image](http://wx2.sinaimg.cn/large/006bYVyvgy1fv4uzmjnzaj30cy05f745.jpg)
试着使用 -help 查看 anyproxy 的命令，也没有找到生成证书的命令。
![image](http://ws4.sinaimg.cn/large/006bYVyvgy1fv4v6h4h1uj30jr08xaa9.jpg)
后来终于找到了 anyproxy-ca 命令生成
![image](http://ws4.sinaimg.cn/large/006bYVyvgy1fv4v73ca3lj30li04o74a.jpg)
会自动打开生成的目录，双击打开
![image](http://wx1.sinaimg.cn/large/006bYVyvgy1fv4uqn4ddej30hf08cwfe.jpg)
选择安装，一路默认就OK了。
![image](http://wx4.sinaimg.cn/large/006bYVyvgy1fv4uttf0ajj30d30ie74t.jpg)
