title: Coding的SVN服务踩坑记
author: hojun
avatar: 'https://wx1.sinaimg.cn/large/006bYVyvgy1ftand2qurdj303c03cdfv.jpg'
authorLink: /about/hojun.html
authorDesc: 一个好奇的人
categories: 技术
comments: true
date: 2018-08-28 16:36:19
authorAbout:
series:
tags:
 - svn
keywords: Coding的SVN服务
description: 咳咳，为啥会用到Coding的SVN?
photos:
 - https://wx1.sinaimg.cn/large/006bYVyvly1fnu8apz5tsj30870870su.jpg
---
## 前言
Q:咳咳，为啥会用到Coding的SVN?
A:博主电脑上已经配好一个coding的账号，且是全局的。网上搜索一台电脑上配置两个git账号都是采用非全区的账号的方法。这个coding是博主的第二个coding账号，全局的账号不想动他。于是尝试下Coding的SVN服务。

## 食用方式

在项目的仓库设置>开启SVN服务，蓝后去下载小乌龟TortoiseSVN。不要点击下面这个，这个是服务器端的。一开始不清楚，踩一个坑
![](https://wx4.sinaimg.cn/large/006bYVyvgy1fupi115shlj30su0drwfo.jpg)
不要下载这个！！
![](https://wx4.sinaimg.cn/large/006bYVyvgy1fupi11vfbuj30s70fk0v6.jpg)
去下载小乌龟tortoisesvn.net/downloads.html
![](https://wx2.sinaimg.cn/large/006bYVyvgy1fupi147utrj30r40hsgp5.jpg)
安装
![](https://wx4.sinaimg.cn/large/006bYVyvgy1fupi14mmltj30dv0atmyp.jpg)
打开这个，SVN输入地址(Coding上有)
![](https://wx4.sinaimg.cn/large/006bYVyvgy1fupi12dxrgj30er0b1aam.jpg)
输入Coding账号
![](https://wx4.sinaimg.cn/large/006bYVyvgy1fupi150tbyj309m06s0so.jpg)
登录后就可以看到仓库内容了。
![](https://wx2.sinaimg.cn/large/006bYVyvgy1fupi12ujgrj30hb0dj757.jpg)
蓝后直接把需要部署的代码移进去
![](https://wx2.sinaimg.cn/large/006bYVyvgy1fupi13px7nj30mz0ecjtp.jpg)

## 后续

想覆盖文件，报错。
![](https://wx1.sinaimg.cn/large/006bYVyvgy1fupi15jtcxj30hb0dfwft.jpg)
想删除文件，报错。
![](https://wx2.sinaimg.cn/large/006bYVyvgy1fupi15zd2gj30hf0dlmyi.jpg)
由于SVN不是很会用，这两个坑踩的我一脸懵逼。让后脑子终于开窍，想到了更好的解决小号coding代码推送的方法。于是弃用SVN了233333~