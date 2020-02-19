title: Uni App小白学习笔记(一)
author: hojun
avatar: https://cdn.jsdelivr.net/gh/honjun/ImageHosting/sina/006bYVyvgy1ftand2qurdj303c03cdfv.jpg
authorLink: /about/hojun.html
authorDesc: 一个好奇的人
categories: 技术
comments: true
date: 2019-08-10 21:53:35
authorAbout:
series: uniapp
tags: uniapp
keywords: uniapp题库
description:
photos:
---
## 背景需求

经常会碰到一些这样的场景：需要通过一次考试，考试内容限定在一个excel题库里。用excel题库复习，但是excel在电脑上打开还好，在手机上打开实在是太小了，复习起来太累。而且现在大部分时间都是在手机上复习的多，又是靠碎片化时间学习。于是就想开发一个刷题系统。又考虑到web端需要消耗流量，且受到网速限制比较大，于是想开发个安卓App版的。查询了下解决方案，尝试使用uni-app框架开发。这系列文章就是用来记录开发过程中遇到的一些坑和debug的过程。

---------------

## uni-app是什么？

uni-app 是一个使用 Vue.js 开发跨平台应用的前端框架，开发者编写一套代码，可编译到iOS、Android、H5、小程序等多个平台。
![](https://cdn.jsdelivr.net/gh/honjun/ImageHosting/picgo/20190715235107.png)

## 开始TODO
### 开发前准备

选定工具后就开始着手准备开发。首先，需要安装 HBuliderX工具，也可以使用vue-cli命令行方式创建项目。这里推荐使用HBuliderX工具。[下载地址:dcloud.io/hbuilderx.html](http://www.dcloud.io/hbuilderx.html)。有闲置手机的可以使用真机调试，没有的话也可以使用手机模拟器来调试。我这里选择某电模拟器，没有安装的可以自行百度安装。

下载安装好HBuliderX工具后， 点击打开。速度挺快，在工具那里可以预设置快捷键方式。让用户从其他ide工具过来能很快就上手HBuliderX。
![](https://cdn.jsdelivr.net/gh/honjun/ImageHosting/picgo/20190716001933.png)
### 新建项目
接着新建uni-app项目
![](https://cdn.jsdelivr.net/gh/honjun/ImageHosting/picgo/20190716000340.png)
选择uni-app，默认模版，取名为uniapp-Exercises(截图名称请忽略)
![](https://cdn.jsdelivr.net/gh/honjun/ImageHosting/picgo/20190716000738.png)
新建好后，我们点击：运行->运行到浏览器->Chrome。预览下效果。
![](https://cdn.jsdelivr.net/gh/honjun/ImageHosting/picgo/20190717232948.png)
浏览器打开如下：（注意默认localhost:8080，端口不要被占用）
![](https://cdn.jsdelivr.net/gh/honjun/ImageHosting/picgo/20190717233356.png)
### 分析代码
开发一个项目，对其运行流程了解是必需的。打开网页上的uni-app文档，在框架介绍里面可以找到其目录结构：
![](https://cdn.jsdelivr.net/gh/honjun/ImageHosting/picgo/20190717233955.png)
可以看出pages是业务页面文件存放的目录，下面有我们的index.vue文件。打开它，你会发现就是个很简单的vue文件：
![](https://cdn.jsdelivr.net/gh/honjun/ImageHosting/picgo/20190717234729.png)
修改data的title为uniapp-Exercises，可以看到网页上的title立马就变了
![](https://cdn.jsdelivr.net/gh/honjun/ImageHosting/picgo/20190717234829.png)
所以只要有vue基础，就可以快速上手开发了！

未完待续。