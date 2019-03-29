title: hexo-sakura主题实现公告功能
author: hojun
avatar: 'https://wx1.sinaimg.cn/large/006bYVyvgy1ftand2qurdj303c03cdfv.jpg'
authorLink: /about/hojun.html
authorDesc: 一个好奇的人
categories: 技术
comments: true
date: 2019-01-12 21:24:34
authorAbout:
series: hexo-sakura主题
tags:
 - sakura
 - hexo
 - yaml
keywords: hexo-sakura主题实现公告功能
description: 这篇教程来实现hexo-sakura主题的公告功能。
photos: https://wx3.sinaimg.cn/small/006bYVyvly1fz43v29e58j30y70im1kx.jpg
---
这篇教程来实现hexo-sakura主题的公告功能。
![](https://wx3.sinaimg.cn/large/006bYVyvly1fz43v29e58j30y70im1kx.jpg)
首先定位到我们主题的公告位置，位置在index.ejs。
![](https://ws1.sinaimg.cn/large/006bYVyvly1fz43y95ywmj30r80h6any.jpg)
接下来用ejs模板变量替换公告，替换前先在主题配置文件或hexo配置文件中增加变量。(这里看不懂的可以看我这一系列文章《yaml基本语法及实现Hexo二级导航栏功能》看下yaml语法就明白了)
```yml
notice: hexo-Sakura主题已经开源，目前正在开发中...
```
![](https://ws2.sinaimg.cn/large/006bYVyvly1fz4405nnldj30or0fkgux.jpg)
接着再在index.ejs中使用模板语言`<%= theme.notice%>`输出主题配置文件中notice变量的内容。（因为是写在主题配置文件中，所以使用theme变量，要是写在hexo配置文件中，则要使用config.notice）
![](https://ws4.sinaimg.cn/large/006bYVyvly1fz441ww0szj30ot09o47p.jpg)

修改完成后的效果：
![](https://wx1.sinaimg.cn/large/006bYVyvly1fz442nqk6oj30yp0in4mr.jpg)