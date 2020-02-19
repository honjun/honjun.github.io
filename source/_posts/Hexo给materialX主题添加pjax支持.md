title: Hexo给materialX主题添加pjax支持
author: hojun
avatar: 'https://cdn.jsdelivr.net/gh/honjun/ImageHosting/sina/006bYVyvgy1ftand2qurdj303c03cdfv.jpg'
authorLink: /about/hojun.html
authorDesc: 一个好奇的人
categories: 技术
comments: true
date: 2018-11-25 20:41:13
authorAbout:
series:
tags:
 - hexo
keywords: pjax
description: 给materialX主题添加pjax支持，pjax = pushState + ajax。
photos: https://cdn.jsdelivr.net/gh/honjun/ImageHosting/sina/006bYVyvly1fxkk60ttz0j31020imjyl.jpg
---
## pjax

**pjax = pushState + ajax**
博主使用的是jquery-pjax是一个jQuery插件，它使用ajax和pushState通过真正的永久链接，页面标题和工作后退按钮提供快速浏览体验。
pjax的工作原理是通过ajax从服务器获取html，并用ajax请求得到 html替换页面上容器的内容。然后，它使用pushState更新浏览器的当前URL，而无需重新加载页面的布局或任何资源（JS，CSS），从而提供快速，完整页面加载的外观。但实际上它只是ajax和pushState。

## 主题materialX

![](https://cdn.jsdelivr.net/gh/honjun/ImageHosting/sina/006bYVyvly1fxkk60ttz0j31020imjyl.jpg)
 咳咳，主题好不好，主要看自己喜欢。我这里就只是简单的介绍下：

> 一个简约卡片式的Hexo博客主题 [MaterialX](https://xaoxuu.com/wiki/material-x/)oxuu.com/wiki/material-x/ 是博主[xaoxuu](https://xaoxuu.com/)基于Material Flow（已停止维护）改编的一个Hexo主题。

我选择这个主题作为教程嘛也是有原因的，它的页面框架比较适合进行pjax修改（next的有款主题也挺适合，自行琢磨）

主题的一些下载安装使用啊这就不做介绍了。主要说下添加pjax支持的过程：
完整的修改代码在[github](https://github.com/honjun/hexo-theme-material-x/tree/pjax)（照自己喜好多改了些其他东西），以下是几个关键的几个修改内容列一下：
### 第一步：添加id
位置materialX\layout\layout.ejs
![](https://cdn.jsdelivr.net/gh/honjun/ImageHosting/sina/006bYVyvly1fxkkv5dbg1j30g00b8dh0.jpg)
### 第二步：引入js
先把js文件放在\materialX\source\js\jquery.pjax.min.js
![](https://cdn.jsdelivr.net/gh/honjun/ImageHosting/sina/006bYVyvly1fxkkwchpxnj306o04hwed.jpg)
再在\materialX\layout\_partial\scripts.ejs引入js（注意需要jquery支持）
![](https://cdn.jsdelivr.net/gh/honjun/ImageHosting/sina/006bYVyvly1fxluzcdx8qj30m60c1taj.jpg)
在\materialX\source\js\app.js该js文件开头加入pjax代码：(这是一些页面特效等js控制的会失效，需要在pjax后在再处理一些，异步通病)
![](https://cdn.jsdelivr.net/gh/honjun/ImageHosting/sina/006bYVyvly1fxlv33ylppj30md0biabb.jpg)
### 第三步：修改样式
在\materialX\source\less\_base.less这个文件中有个visibility: hidden;会把首页隐藏掉，给他注释了，没有深究。想弄明白可以询问原作者xaoxuxu
![](https://cdn.jsdelivr.net/gh/honjun/ImageHosting/sina/006bYVyvly1fxkkysok8ij30cq0c1gm8.jpg)

### 完成
咳咳！只能说脸好的情况下pjax功能是实现了的，毕竟这是个看脸的时代。

### 优化完善
交给广大materialX主题使用者们啦~~

推荐一个hexo主题博客[flysay](https://blog.flysay.com/),可能是hexo第一个支持pjax的主题*@(献黄瓜)*，而我改的这个吗，不知道第几~*@(调皮)*
[B站视频展示](https://www.bilibili.com/video/av36754659/)
{% raw %}
<iframe src="//player.bilibili.com/player.html?aid=36754659&cid=64538767&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" width="100%" height="350px" allowfullscreen="true"> </iframe>
{% endraw %}