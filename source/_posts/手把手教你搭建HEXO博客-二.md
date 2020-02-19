title: 手把手教你搭建HEXO博客(二)
author: hojun
avatar: https://cdn.jsdelivr.net/gh/honjun/ImageHosting/sina/006bYVyvgy1ftand2qurdj303c03cdfv.jpg
authorDesc: 一个好奇的人
categories: 技术
series: 手把手教你搭建HEXO博客
date: 2018-06-07 22:20:12
authorLink: /about/hojun.html
authorAbout:
tags:
 - hexo
 - 博客
keywords: hexo
description: 为什么推荐hexo+github？最重要两点：简单、免费。
photos:
 - https://cdn.jsdelivr.net/gh/honjun/ImageHosting/sina/006bYVyvgy1fs1s79hhsvj30m80b4q8m.jpg
---
![](https://cdn.jsdelivr.net/gh/honjun/ImageHosting/sina/006bYVyvgy1fs1s79hhsvj30m80b4q8m.jpg)
手把手教你搭建HEXO+Github博客 （系列教程二）

 - 为什么推荐hexo+github？ 
 - 最重要两点：简单、免费

## **gitforwin安装**
百度搜索gitforwindows，点击进入官网点击下载：
![](https://cdn.jsdelivr.net/gh/honjun/ImageHosting/sina/006bYVyvgy1fs2z2yf63sj30t60gjwj2.jpg)
下载好后确认安装：
![](https://cdn.jsdelivr.net/gh/honjun/ImageHosting/sina/006bYVyvgy1fs2z2xleamj30t60gjqle.jpg)
我们选择安装在D盘
![](https://cdn.jsdelivr.net/gh/honjun/ImageHosting/sina/006bYVyvgy1fs2z2wt125j30t60gjwvf.jpg)
这里我们选择Use Windows的这个选项，我们就可以在cmd窗口中使用git命令
![](https://cdn.jsdelivr.net/gh/honjun/ImageHosting/sina/006bYVyvgy1fs2z2v7rypj30t60gj1cy.jpg)
win+R打开运行对话框，输入cmd打开命令行
![](https://cdn.jsdelivr.net/gh/honjun/ImageHosting/sina/006bYVyvgy1fs2z2t0cerj30ch06gab6.jpg)
输入git检查是否安装成功，输出一堆git相关命令表示安装成功
![](https://cdn.jsdelivr.net/gh/honjun/ImageHosting/sina/006bYVyvgy1fs2z2tw47wj30t20f6akb.jpg)
## **github SSH Key 配置** 
接下来来到我们gitforwin的安装目录下，打开git-bash
![](https://cdn.jsdelivr.net/gh/honjun/ImageHosting/sina/006bYVyvgy1fs2z2sgjjbj30p30hptho.jpg)
输入ssh-keygen -t rsa -C "github的注册邮箱地址"
![](https://cdn.jsdelivr.net/gh/honjun/ImageHosting/sina/006bYVyvgy1fs2z2qcr6nj30ie0ah0te.jpg)
一路回车生成密钥，默认生成在C:\Users\用户名\.ssh目录下面
![](https://cdn.jsdelivr.net/gh/honjun/ImageHosting/sina/006bYVyvgy1fs2z2r2jtej30ic0agdkr.jpg)
接下来来到github官网，点击头像选择setting
![](https://cdn.jsdelivr.net/gh/honjun/ImageHosting/sina/006bYVyvgy1fs2z2p4p3oj30t60gj0yk.jpg)
再点击SSH and GPG keys，选择右边的New SSH key
![](https://cdn.jsdelivr.net/gh/honjun/ImageHosting/sina/006bYVyvgy1fs2z2o54r2j30vi0fcdje.jpg)
标题可以自定义
![](https://cdn.jsdelivr.net/gh/honjun/ImageHosting/sina/006bYVyvgy1fs2z2nh1l0j30t60gjjug.jpg)
找到我们生成的密钥，默认生成在C:\Users\用户名\.ssh目录下面
![](https://cdn.jsdelivr.net/gh/honjun/ImageHosting/sina/006bYVyvgy1fs2z2mvvwqj30t60gj78q.jpg)
拷贝到Key下
![](https://cdn.jsdelivr.net/gh/honjun/ImageHosting/sina/006bYVyvgy1fs2z2lyxqvj30t60gjgod.jpg)
成功
![](https://cdn.jsdelivr.net/gh/honjun/ImageHosting/sina/006bYVyvgy1fs2z8m6frzj30vq0e678t.jpg)
To Be Continued...(未完待续)
[视频教程-gitforwin安装](http://baijiahao.baidu.com/builder/preview/s?id=1602590264037271838)
[视频教程-gitsshkey配置](http://baijiahao.baidu.com/builder/preview/s?id=1602590443087061279)