title: Hexo博客中加入B站视频播放器
author: hojun
avatar: 'https://cdn.jsdelivr.net/gh/honjun/ImageHosting/sina/006bYVyvgy1ftand2qurdj303c03cdfv.jpg'
authorLink: /about/hojun.html
authorDesc: 一个好奇的人
categories: 技术
comments: true
date: 2019-01-28 21:43:12
authorAbout:
series:
tags: 
 - hexo
keywords: 
description: 写博文的时候经常有在文章段落中加视频的需求。大部分视频网站的外链播放器在视频开头都会加上30秒——2分钟的恶心广告，于是选择B站（无广告！）。
photos: https://cdn.jsdelivr.net/gh/honjun/ImageHosting/sina/006bYVyvly1fzmnxxs8wwj30dq0bvabr.jpg
---
![](https://cdn.jsdelivr.net/gh/honjun/ImageHosting/sina/006bYVyvly1fzmnz4ts4uj30o20btdjb.jpg)
写博文的时候经常有在文章段落中加视频的需求。由于hexo博客搭建在github上，githubpage的限制，以及其他一些动态博客网站服务器带宽的限制，往往添加的都是其他视频网站的外链播放器。大部分视频网站的外链播放器在视频开头都会加上30秒——2分钟的恶心广告，于是选择B站（无广告！）。

## 第一步：去B站获取视频外链
![](https://cdn.jsdelivr.net/gh/honjun/ImageHosting/sina/006bYVyvly1fzmnjkshe8j30x50j2dnc.jpg)

## 第二步：在文章中插入视频外链
我们知道在md中可以直接插入html代码，但是为了防止一些其他因素的干扰，hexo给我们特意准备了一个raw标签来插入html代码。这里我们就使用raw来插入视频外链。代码如下：
```html
{% raw %}
<iframe src="//player.bilibili.com/player.html?aid=24897960&cid=42007693&page=3" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
{% endraw %}
```
真实效果如下：
{% raw %}
<iframe src="//player.bilibili.com/player.html?aid=24897960&cid=42007693&page=3" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
{% endraw %}
我们可以看到效果令人很不满意。
## 第三步：修改代码，美化播放器样式。
代码如下：（不解释）
```html
{% raw %}
<div style="position: relative; width: 100%; height: 0; padding-bottom: 75%;"><iframe src="//player.bilibili.com/player.html?aid=24897960&cid=42007693&page=3" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" style="position: absolute; width: 100%; height: 100%; left: 0; top: 0;"></iframe></div>
{% endraw %}
```
真实效果如下：
{% raw %}
<div style="position: relative; width: 100%; height: 0; padding-bottom: 75%;"><iframe src="//player.bilibili.com/player.html?aid=24897960&cid=42007693&page=3" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" style="position: absolute; width: 100%; height: 100%; left: 0; top: 0;"></iframe></div>
{% endraw %}
好了，这篇博文到此结束~ 提前祝大家 新年快乐！恭喜发财！