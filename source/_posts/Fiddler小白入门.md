title: Fiddler小白入门
author: hojun
avatar: /images/favicon.png
authorDesc: 一个好奇的人
categories: 技术
comments: true
date: 2018-07-11 19:03:42
authorLink:
authorAbout:
series:
tags:
 - 抓包
 - 分析
keywords: fiddler
description: Fiddler是一个http协议调试代理工具，它能够记录并检查所有你的电脑和互联网之间的http通讯，设置断点，查看所有的“进出”Fiddler的数据
photos:
 - https://wx3.sinaimg.cn/large/006bYVyvgy1ft61hfphrxj318g0jqtb3.jpg
---
## 什么是Fiddler
百度百科：Fiddler是一个http协议调试代理工具，它能够记录并检查所有你的电脑和互联网之间的http通讯，设置断点，查看所有的“进出”Fiddler的数据（指  cookie  ,html,js,css等文件）。 Fiddler 要比其他的网络调试器要更加简单，因为它不仅仅暴露http通讯还提供了一个用户友好的格式。

咳咳，年初玩微信跳一跳的时候知道了有人用Fiddler直接改成绩的时候，就想学习使用一下Fiddler。一直到今天才正式接触Fiddler，不要问我中间那段时间去干了什么w(ﾟДﾟ)w，我也很震惊！

## 第一步 安装Fiddler
百度fiddler，点击进入其官网
![](https://wx2.sinaimg.cn/large/006bYVyvgy1ft61hf0klpj30mk0dt74n.jpg)
点击右下角Free download(免费下载)
![](https://wx3.sinaimg.cn/large/006bYVyvgy1ft61hfphrxj318g0jqtb3.jpg)
下载页面如下，需要我们填写问卷后下载
![](https://wx3.sinaimg.cn/large/006bYVyvgy1ft61hg9o48j311l0jiglq.jpg)
1、你准备使用Fiddler来做什么？ 2、你的邮箱地址？ 3、你来自哪个国家？
填好后点击Download for Windows下载，自动跳转下载
![](https://wx3.sinaimg.cn/large/006bYVyvgy1ft61hgx164j31270m9t8z.jpg)
下载好后双击安装
![](https://wx4.sinaimg.cn/large/006bYVyvgy1ft61h8ca7zj30bu0840th.jpg)
默认安装在C盘，我们可以自定义到其他盘
![](https://wx3.sinaimg.cn/large/006bYVyvgy1ft61h8wheoj30bu08474i.jpg)

## 第二步 Fiddler设置

安装好后打开Fiddler，页面如下
![](https://wx4.sinaimg.cn/large/006bYVyvgy1ft61hbckokj310b0lcmzm.jpg)
单击tools，选择options
![](https://wx1.sinaimg.cn/large/006bYVyvgy1ft61hbtvnnj31080lcaal.jpg)
https勾选如下
![](https://wx1.sinaimg.cn/large/006bYVyvgy1ft61hci0i1j30fi0aggll.jpg)
Connections勾选如下，端口我这里设置成5555（默认为8888）
![](https://wx4.sinaimg.cn/large/006bYVyvgy1ft61hd38cej30fi0agmx6.jpg)
设置更改好了，记得重新启动Fiddler生效
![](https://wx4.sinaimg.cn/large/006bYVyvgy1ft61hbckokj310b0lcmzm.jpg)

## 第三步 手机设置代理

打开cmd命令行程序，输入ipconfig命令，回车
![](https://wx3.sinaimg.cn/large/006bYVyvgy1ft61hds9znj30ra0e9q3d.jpg)
获取内网IP（注意博主的情况是电脑和手机都连家里的无线网，同一个无线网）
![](https://wx4.sinaimg.cn/large/006bYVyvgy1ft61heez82j30r80e7jsr.jpg)
打开手机设置，选择WLAN
![](https://wx1.sinaimg.cn/large/006bYVyvgy1ft5vhlve9jj30go0qogn0.jpg)
长按选择修改网络
![](https://wx3.sinaimg.cn/large/006bYVyvgy1ft5vhj6kctj30go0qoabh.jpg)
点击显示高级选项
![](https://wx3.sinaimg.cn/large/006bYVyvgy1ft5vhldw3xj30go0qo75a.jpg)
点击代理，选择手动
![](https://wx4.sinaimg.cn/large/006bYVyvgy1ft5vhmqredj30go0qojsk.jpg)
设置地址为电脑的ip地址，端口为5555
![](https://wx4.sinaimg.cn/large/006bYVyvgy1ft5vhn61kej30go0qoab8.jpg)

## 第四步 手机安装Fiddler证书

打开浏览器，输入你电脑的ip+端口号
![](https://wx2.sinaimg.cn/large/006bYVyvgy1ft5vhi2bgwj30go0qomxj.jpg)
点击下载证书
![](https://wx1.sinaimg.cn/large/006bYVyvgy1ft5vhkxprsj30go0qodge.jpg)
下载好后，来到WLAN设置，选择更多->高级WLAN设置
![](https://wx1.sinaimg.cn/large/006bYVyvgy1ft5vhkh40nj30go0qo75p.jpg)
点击安装证书
![](https://wx2.sinaimg.cn/large/006bYVyvgy1ft5vho68qfj30go0qo0tq.jpg)
进入到证书下载的路径下，点击证书
![](https://wx1.sinaimg.cn/large/006bYVyvgy1ft5vhnp52oj30go0qodg0.jpg)
证书这里不要选择WLAN，不然在应用中打开会显示证书错误
![](https://wx1.sinaimg.cn/large/006bYVyvgy1ft5vhhkxbnj30go0qogmf.jpg)
应该选择VPN和应用
![](https://wx3.sinaimg.cn/large/006bYVyvgy1ft5vhjwkqhj30go0qot9j.jpg)

## 第五步 Fiddler抓取网页和APP数据(微信跳一跳)

设置好后用浏览器访问博主博客
![](https://wx4.sinaimg.cn/large/006bYVyvgy1ft5vhimg6oj30go0qogn6.jpg)
Fiddler抓取如下
![](https://wx4.sinaimg.cn/large/006bYVyvgy1ft61hau6r1j310a0lcmz3.jpg)
点击叉叉，选择Remove All清除抓取的内容
![](https://wx3.sinaimg.cn/large/006bYVyvgy1ft61ha990pj310a0lc0ub.jpg)
打开微信玩一把跳一跳
![](https://wx3.sinaimg.cn/large/006bYVyvgy1ft5vhmbbu8j30go0qowex.jpg)
Fiddler抓取如下，根据分数和历史最高分可知，这个请求就是上传分数的
![](https://wx2.sinaimg.cn/large/006bYVyvgy1ft61h9l210j31070lcmxz.jpg)

Fiddler小白入门到此为止......
