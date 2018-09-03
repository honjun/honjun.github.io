title: node更新
author: hojun
avatar: 'https://wx1.sinaimg.cn/large/006bYVyvgy1ftand2qurdj303c03cdfv.jpg'
authorLink: /about/hojun.html
authorDesc: 一个好奇的人
categories: 技术
comments: true
date: 2018-08-25 22:46:52
authorAbout:
series:
tags:
 - node
keywords: node更新
description: 
photos:
---
最近准备做个简友们的站点，然后也想实践下自学的vue知识。于是准备使用VuePress+Coding搭建这个站点。
![](https://wx3.sinaimg.cn/large/006bYVyvgy1fumcq6tkebj30o70h7gn4.jpg)
来到VuePress官网，发现其要求node版本需要大于8。
![](https://wx2.sinaimg.cn/large/006bYVyvgy1fumcbtss78j30y30fat96.jpg)
而电脑上的node版本是6，需要更新下。（cmd输入node-v命令查看node版本）
![](https://wx3.sinaimg.cn/large/006bYVyvgy1fumcbvupxqj308m02i3y9.jpg)
一开始觉得npm应该能更新，所以先使用npm-v，查看npm版本。然后使用它提示的命令将npm更新到最新版。
![](https://wx3.sinaimg.cn/large/006bYVyvgy1fumcbwgna5j30k906b3yb.jpg)
后来发现win下node不能直接更新，需要在去官网上下载安装包重新安装并覆盖原先安装目录才行。
![](https://wx4.sinaimg.cn/large/006bYVyvgy1fumcbwwcncj30nw0hbdhv.jpg)
使用where node可以查看node的安装路径。
![](https://wx3.sinaimg.cn/large/006bYVyvgy1fumcbv9x14j30ah02ijr5.jpg)
下载好后我们安装到原先目录下。
![](https://wx1.sinaimg.cn/large/006bYVyvgy1fumcbuqxghj30dv0atjrj.jpg)
安装成功后使用弄得node-v命令查看node版本，已经更新成功!
![](https://wx2.sinaimg.cn/large/006bYVyvgy1fumcbuc1cwj30am02d741.jpg)

26日续，在VuePress官方文档发现其对自定义模板的支持不是很好，文档不全。决定从入门到放弃，还是用Hexo吧*@(脸红)*
