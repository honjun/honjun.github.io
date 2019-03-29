title: live2d同步麦克风说话功能--直播录屏必备
author: hojun
avatar: 'https://wx1.sinaimg.cn/large/006bYVyvgy1ftand2qurdj303c03cdfv.jpg'
authorLink: /about/hojun.html
authorDesc: 一个好奇的人
categories: 技术
comments: true
date: 2019-03-15 22:32:15
authorAbout:
series:
tags: live2d
keywords: live2d
description: 在傅老师的b站教程上了解到这个live2d viewer的功能，觉得很有意思，分享给大家。
photos: https://wx1.sinaimg.cn/small/006bYVyvly1g13vlgbrzwj30q00jkn5y.jpg
---
在傅老师的b站教程上了解到这个live2d viewer的功能，觉得很有意思，分享给大家。
## 准备
live2d Viewer软件的安装以及live2d模型的准备。详情参考之前的文章[live2d-看板娘小埋](https://www.hojun.cn/2018/02/19/live2d-%E7%9C%8B%E6%9D%BF%E5%A8%98%E5%B0%8F%E5%9F%8B/)

## 载入模型
打开live2d Viewer
![](https://ws3.sinaimg.cn/large/006bYVyvly1g13uxrwg7fj30bk06v3yg.jpg)
将模型文件xxx.moc直接拖入面板中，也可以拖json。这里使用小埋来做演示。
![](https://wx3.sinaimg.cn/large/006bYVyvly1g13v6r216cj30i708gjro.jpg)
会弹出如下两个界面
![](https://wx1.sinaimg.cn/large/006bYVyvly1g13v8oka8dj30rw0j6qb9.jpg)

## 隐藏背景
点击菜单栏的view，取消show canvas window前面的勾选，背景就隐藏起来了。
![](https://ws2.sinaimg.cn/large/006bYVyvly1g13vb7td83j30q20j9gug.jpg)

## 配置
接着勾选菜单栏Live->Enable Live function
![](https://ws1.sinaimg.cn/large/006bYVyvly1g13vginuxsj30bh04tt8r.jpg)
然后勾选Live->lip-sync(嘴唇)->add
![](https://ws3.sinaimg.cn/large/006bYVyvly1g13vi99xa3j30p80jijzx.jpg)
就会在面板上出现lip sync文件
![](https://ws1.sinaimg.cn/large/006bYVyvly1g13vjnkyfkj30bf069t8q.jpg)
点击该文件，再点击Mic，麦克风，试着说话，发现下面的Volume Meter有反应即可。
![](https://wx1.sinaimg.cn/large/006bYVyvly1g13vlgbrzwj30q00jkn5y.jpg)
接下来讲解下下面的参数作用：
![](https://ws4.sinaimg.cn/large/006bYVyvly1g13vocy8vvj30b3071aa5.jpg)

 - Noise Level: 声音等级，用来表示反应的声音等级。越大表示对比较大声音才会反应，建议调的稍微大一些，不然敲打键盘的声音都会反应。
 - Scale 表示嘴巴张大的规模，越大就对小声音的反应张得越大，可以自己尝试下调节出自己想要的效果。
 - Smoothing 平滑 表示嘴巴动作的平滑过渡，建议关闭。
 - Error Margin 不知道
 - Close Speed 闭嘴的速度，建议最大
 - Open Speed 张嘴的速度，建议最大

## 使用
设置好后就可以使live2d人物跟着你的麦克风说话了，尽情玩耍吧~~~

## 视频教程

{% bili 46283095 %}