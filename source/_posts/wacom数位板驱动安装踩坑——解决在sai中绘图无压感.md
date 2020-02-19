title: wacom数位板驱动安装踩坑——解决在sai中绘图无压感
author: hojun
avatar: 'https://cdn.jsdelivr.net/gh/honjun/ImageHosting/picgo/20191009004718.png'
authorLink: /about/hojun.html
authorDesc: 一个好奇的人
categories: 生活
comments: true
date: 2020-01-30 11:54:08
authorAbout:
series:
tags:
 - wacom
 - 手绘
keywords:
description:
photos: https://cdn.jsdelivr.net/gh/honjun/ImageHosting/picgo/20200130204349.jpg
---
前天借了个wacom数位板想折腾下手绘的乐趣，因为是纯新手，对数位板和画画软件的功能不是很了解。在网上下了个驱动就开始看视频画画了。一开始从虎课（每天能免费学一个视频，挺好的，一个视频够学了）上选了个简单点的教视频——《SAI-转手绘-唯美风格人物眼睛刻画》，这个教程只是把眼睛转了手绘，是比较简单的。不过在画睫毛的时候，我发现我的笔和老师的不一样，不能画出有随压感变换粗细的线条。当时并未深究，用水彩笔凑合了。画好后开始上网查找原因。发现同样问题的还挺多。我这里就总结下：

## 1、驱动未安装成功
打开wacom桌面中心，点击“支持”->“驱动程序检查”检查到没错误说明你的驱动安装的没问题。
![](https://cdn.jsdelivr.net/gh/honjun/ImageHosting/picgo/20200130121914.png)
若你的驱动检查到错误了，那就要重新安装驱动了。点击wacom支持可以直接去到wacom官网。但是它的官网在国内访问速度很慢。若你访问挺快可以在官网上重下驱动：
![](https://cdn.jsdelivr.net/gh/honjun/ImageHosting/picgo/20200130122611.png)
在下面这输入你的数位板版本号就会弹出（若是没有弹出就放弃吧），点击即可以看到驱动的下载按钮。
![](https://cdn.jsdelivr.net/gh/honjun/ImageHosting/picgo/20200130122718.png)

官网很慢的可以去wacom商城去下载：
![](https://cdn.jsdelivr.net/gh/honjun/ImageHosting/picgo/20200130124043.png)
![](https://cdn.jsdelivr.net/gh/honjun/ImageHosting/picgo/20200130124138.png)
![](https://cdn.jsdelivr.net/gh/honjun/ImageHosting/picgo/20200130124206.png)emmmmm，你会发现每款的下载链接都是同一个。不过他都这样玩，我们就找到自己的对应版本的下载链接下载，找不到的随意。点击下载你会发现一件神奇的事情：
![](https://cdn.jsdelivr.net/gh/honjun/ImageHosting/picgo/20200130124623.png)
真有意思，我们选择叉掉这个下载框，选中这个网址，右键复制：
![](https://cdn.jsdelivr.net/gh/honjun/ImageHosting/picgo/20200130125018.png)
在浏览器网址栏粘贴访问即可下载，下载后双击安装即可。
![](https://cdn.jsdelivr.net/gh/honjun/ImageHosting/picgo/20200130125156.png)

## 2、服务未启动成功
在win开始按钮上右键->打开控制面板
![](https://cdn.jsdelivr.net/gh/honjun/ImageHosting/picgo/20200130131132.png)
在控制面板里搜索服务->查看本地服务
![](https://cdn.jsdelivr.net/gh/honjun/ImageHosting/picgo/20200130131317.png)
找到Wacom Consumer Service和Wacom Professional Service，将它们重新启动。若你只有一个服务，说明你驱动未安装成功，需要重新安装。
![](https://cdn.jsdelivr.net/gh/honjun/ImageHosting/picgo/20200130131425.png)

## 3、sai软件未设置好
打开sai，鼠标光标移动到这位置，可以向上拖动
![](https://cdn.jsdelivr.net/gh/honjun/ImageHosting/picgo/20200130132018.png)
这几项配置调成一致来，浓度若是勾选上了，最小最大浓度也按上图来。
帮助->选项里面将最小笔压设为0，点击确定即可。
![](https://cdn.jsdelivr.net/gh/honjun/ImageHosting/picgo/20200130132529.png)

## 4、重启电脑
重启电脑能解决大部分问题2333

这样一来，你大概率可以画出随笔压变化的线条了。祝成功~
![](https://cdn.jsdelivr.net/gh/honjun/ImageHosting/picgo/20200130132738.png)

最后个人手绘学习首秀：
![](https://cdn.jsdelivr.net/gh/honjun/ImageHosting/picgo/20200129130606.png)