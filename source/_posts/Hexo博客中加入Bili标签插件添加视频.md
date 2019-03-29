title: Hexo博客中加入Bili标签插件添加视频
author: hojun
avatar: 'https://wx1.sinaimg.cn/large/006bYVyvgy1ftand2qurdj303c03cdfv.jpg'
authorLink: /about/hojun.html
authorDesc: 一个好奇的人
categories: 技术
comments: true
date: 2019-02-01 22:07:18
authorAbout:
series:
tags: hexo
keywords:
description: 这篇文章是上篇文章《Hexo博客中加入B站视频播放器》的第二种实现过程，使用新增hexo标签的形式来添加B站视频。使用起来更方便~
photos: https://wx1.sinaimg.cn/small/006bYVyvly1fzmnxxs8wwj30dq0bvabr.jpg
---
这篇文章是上篇文章《Hexo博客中加入B站视频播放器》的第二种实现过程，使用新增hexo标签的形式来添加B站视频。使用起来更方便~

回顾下之前的实现过程代码如下：
```html
{% raw %}
<div style="position: relative; width: 100%; height: 0; padding-bottom: 75%;"><iframe src="//player.bilibili.com/player.html?aid=24897960&cid=42007693&page=3" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" style="position: absolute; width: 100%; height: 100%; left: 0; top: 0;"></iframe></div>
{% endraw %}
```
两个视频见唯一不同就是iframe标签中src的?后面`aid=24897960&cid=42007693&page=3`这部分。所以我们可以把它封装成一个hexo tag标签插件。

有关于标签插件具体可以查看官方API文档[标签Tag](https://hexo.io/zh-cn/api/tag)。

--------------

## 以下内容来自官方文档：

## 标签插件（Tag）
标签插件帮助开发者在文章中快速插入内容。

概要
```js
hexo.extend.tag.register(name, function(args, content){
}, options);
```
标签函数会传入两个参数：args 和 content，前者代表开发者在使用标签插件时传入的参数，而后者则是标签插件所覆盖的内容。

## youtube视频栗子

```js
hexo.extend.tag.register('youtube', function(args){
  var id = args[0];
  return '<div class="video-container"><iframe width="560" height="315" src="http://www.youtube.com/embed/' + id + '" frameborder="0" allowfullscreen></iframe></div>';
});
```

## youtube使用栗子

```
{% youtube video_id %}
```
-----------------

咳咳，看了以上内容应该已经大致了解，接下来开始实现。

## 第一步 找到标签插件位置

位置在`博客目录\node_modules\hexo\lib\plugins\tag\`下。
先看下index.js内容如下:
![](https://wx4.sinaimg.cn/large/006bYVyvly1fzsfvpxiplj30ji0gujtc.jpg)
我们学着youtube在后面加个bilibili
```js
tag.register('bili', require('./bili'));
```

## 第二步 编写tag插件bili.js

上一步我们注册了bili插件，但是还没有插件的js文件，可以看到他的require目录是`./`所以就在当前目录下（即tag目录下）新建bili.js文件，不理解`./`的童鞋可以搜索下绝对路径与相对路径的意思就懂了。

建好js文件后我们开始编写插件，代码如下：
```js
'use strict';

/**
* Bilibili tag
*
* Syntax:
*   {% bili video_id %}
*/

function biliTag(args, content) {
  var id = args[0];

  return `<div style="position: relative; width: 100%; height: 0; padding-bottom: 75%;"><iframe src="//player.bilibili.com/player.html?${id}" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" style="position: absolute; width: 100%; height: 100%; left: 0; top: 0;"></iframe></div>`;
}

module.exports = biliTag;

```

## 第三步 在md文章中使用

在文章中使用的语法为
```
{% bili bili_id %}
```
其中bili_id为你从B站获取的iframe的src的id部分。比如分享的iframe代码如下:
```js
<iframe src="//player.bilibili.com/player.html?aid=24897960&cid=42007944&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
```
bili_id就是`aid=24897960&cid=42007944&page=1`，使用语法就是
```
{% bili aid=24897960&cid=42007944&page=1 %}
```
在文章中加入以上标签就可以快速插入B站视频了。代码已经PR给hexo~可惜没有通过
