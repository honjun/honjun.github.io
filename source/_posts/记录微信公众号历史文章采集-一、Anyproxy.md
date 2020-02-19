title: 记录微信公众号历史文章采集(一、Anyproxy)
author: hojun
avatar: 'https://cdn.jsdelivr.net/gh/honjun/ImageHosting/sina/006bYVyvgy1ftand2qurdj303c03cdfv.jpg'
authorLink: /about/hojun.html
authorDesc: 一个好奇的人
categories: 技术
comments: true
date: 2018-09-19 23:02:07
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
参考自知乎专题[微信公众号内容的批量采集与应用](https://zhuanlan.zhihu.com/c_65943221)，作者：飯口組組長
原作者（飯口組組長）有一句话：我的方法来源于许多同行的分享精神，所以我也会延续这个精神，将我的成果分享出来。
这系列的文章也是为了延续这份分享精神！
该系列文章是根据知乎专题的教程一步一步实现过程，以及实现过程中踩过的一些坑。
关于原理介绍这里就不重复了，大家可以参考知乎专题。

## 安装Anyproxy

![image](https://cdn.jsdelivr.net/gh/honjun/ImageHosting/sina/006bYVyvgy1fve4icgz5sj30uv0hadi2.jpg)
AnyProxy是一个基于NodeJS的，可供插件配置的HTTP/HTTPS代理服务器。（阿里的）
使用npm安装命令npm install -g，这也是安装Anyproxy第一个坑。 anyproxy安装Anyproxy的时候安装的是最新版，你会发现接下来的anyproxy --root命令不能使用，以及rule_default.js找不到知乎中所说的方法。在Anyproxy的github仓库中找到了原因。
![image](https://cdn.jsdelivr.net/gh/honjun/ImageHosting/sina/006bYVyvgy1fve4k58ityj30tw0ecmy5.jpg)
今年二月份更新了版本，代码改了很多。所以不一样了，而組長的教程是17年的，所以用的是第二个版本。为了保持一致，我们在安装Anyproxy的时候要指定版本号。
```cmd
npm install -g anyproxy@3.10.3
```
## 安装证书&设置代理

Anyproxy安装好后使用anyproxy --root命令就能生成证书。
接下来就是安装手机证书了。
这里使用的是真机。
方法一： 启动anyproxy，浏览器打开http://localhost:8002/fetchCrtFile，能获取rootCA.crt文件
方法二：启动anyproxy，http://localhost:8002/qr_root 可以获取证书路径的二维码，移动端安装时会比较便捷。

手机要记住下载路径，安装证书的教程可以参照我之前的[Fiddler小白入门](https://www.hojun.cn/2018/07/11/Fiddler%E5%B0%8F%E7%99%BD%E5%85%A5%E9%97%A8/)。

## 抓包

安装好证书并设置代理后（注意Anyproxy设置代理默认端口是8001），就可以进行手机抓包了。浏览器打开localhost:8002进入Anyproxy后台，可以看到抓到包的内容。
![image](https://cdn.jsdelivr.net/gh/honjun/ImageHosting/sina/006bYVyvgy1fvf8br4xy7j30yf0g743a.jpg)
![image](https://cdn.jsdelivr.net/gh/honjun/ImageHosting/sina/006bYVyvgy1fvf8c4qop8j30x50g978b.jpg)

## 找到安装目录修改代码

找到Anyproxy安装目录，因为是-g全局安装的，我的npm默认在node的安装路径下，于是在D:\Program Files (x86)\nodejs\node_modules\anyproxy\这里找到（node是我自定义安装在D盘）
如果是默认安装的，可能是在C:\Users\用户名\AppData\Roaming\npm\node_modules\下。
安装知乎专题的介绍修改代码就行。具体怎么修改使用在下一篇文章中介绍，未完待续......To be Continued......
