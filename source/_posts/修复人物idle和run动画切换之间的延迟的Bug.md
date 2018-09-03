title: 修复人物idle和run动画切换之间的延迟的Bug
author: hojun
avatar: https://wx1.sinaimg.cn/large/006bYVyvgy1ftand2qurdj303c03cdfv.jpg
authorDesc: 一个好奇的人
categories: 技术
date: 2017-06-16 23:47:38
authorLink: /about/hojun.html
authorAbout:
tags:
 - Unity
 - debug
keywords: Unity修复人物idle和run动画切换之间的延迟的Bug
description: Unity修复人物idle和run动画切换之间的延迟的Bug
photos:
 - https://wx1.sinaimg.cn/mw690/006bYVyvgy1fh9c7gerq0j30fe0753yk.jpg
---
![006bYVyvgy1fh9c7gerq0j30fe0753yk.jpg](https://wx1.sinaimg.cn/large/006bYVyvgy1fh9c7gerq0j30fe0753yk.jpg)
**Bug描述：**在动画切换的时候，idle动画不能灵敏的反应按键切换成run动画。导致快速 **按下->释放** 按键时，人物表现为idle动画平移效果。

----------


> 解决之道

1.试着把切换动画的逻辑放到 FiexdUpdate 方法中。因为Update会在每次渲染新的一帧时，被调用。而FixedUpdate会在每个固定的时间间隔被调用，Update受当前渲染的物体和机器性能影响，有时快有时慢，帧率会变化，update被调用的时间间隔就发生变化。但是FixedUpdate则不受帧率的变化，它是以固定的时间间隔来被调用.

**这个时间间隔怎么设置呢？**：Edit->Project Setting->time下面的Fixed timestep。

----------

尝试后发现和update没有明显的区别，反应还是不灵敏。
2.于是仔细看了下Animator的参数：发现Has Exit Time被默认勾选上了。

**查阅资料：** Has Exit Time就是必须过度的时间，处于这个时间时，是不允许任何对动画的操作的。

----------


找到原因，取消勾选。测试，动画切换灵敏流畅。