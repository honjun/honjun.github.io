title: 给Hexo博客添加Mathjax数学公式支持
author: hojun
avatar: https://cdn.jsdelivr.net/gh/honjun/ImageHosting/sina/006bYVyvgy1ftand2qurdj303c03cdfv.jpg
authorDesc: 一个好奇的人
categories: 技术
series: hexo折腾
comments: true
date: 2018-06-18 22:04:14
authorLink: /about/hojun.html
authorAbout:
tags:
 - hexo
 - 搞事
keywords: mathjax
description: 由于网上教程不靠谱，忽悠人一大圈还没啥卵用。花点时间折腾了下Mathjax.js，出了这篇教程。
photos: https://cdn.jsdelivr.net/gh/honjun/ImageHosting/sina/006bYVyvgy1fsfpde5obej30zg0ho405.jpg
---
## 前言

小白文，大神请略过......

最近群里经常有人询问Hexo博客的Mathjax的扩展使用，由于网上教程不靠谱，忽悠人一大圈还没啥卵用*@(无奈)*。于是花点时间折腾了下Mathjax.js，出了这篇教程。（表示没用数学公式，mathjax也是第一次接触）

唠叨一下修改代码的建议：可以在其上扩展，最好不要修改。修改会出现: 改好一个bug，出来N多个bug的这种情况，因为你不知道其他地方是否还用到你修改的这部分代码，后果很严重*@(内伤)*。

## 开始搞

百度搜索mathjax
![](https://cdn.jsdelivr.net/gh/honjun/ImageHosting/sina/006bYVyvgy1fsfpdd8fnij30lw0dwabk.jpg)
点击第一个进入其官网
![](https://cdn.jsdelivr.net/gh/honjun/ImageHosting/sina/006bYVyvgy1fsfpde5obej30zg0ho405.jpg)
找到Getting Started，点击Learn more
![](https://cdn.jsdelivr.net/gh/honjun/ImageHosting/sina/006bYVyvgy1fsfpdf7tkpj30za0hvgnf.jpg)
拉到最下边，Jump to our docs
![](https://cdn.jsdelivr.net/gh/honjun/ImageHosting/sina/006bYVyvgy1fsfpdfq8a3j30yq0gs3zt.jpg)
找到其demo代码
![](https://cdn.jsdelivr.net/gh/honjun/ImageHosting/sina/006bYVyvgy1fsfpdggngij30us0gx41m.jpg)
<font color='red'>*@(不出所料)*注意其代码有个坑，js的src应改为`https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.4/latest.js?config=TeX-MML-AM_CHTML`</font>
接下来就是实验代码了，新建文章输入以下代码：
```html
<p>
When $a \ne 0$, there are two solutions to \(ax^2 + bx + c = 0\) and they are
$$x = {-b \pm \sqrt{b^2-4ac} \over 2a}.$$
</p>
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.4/latest.js?config=TeX-MML-AM_CHTML"></script>
<script type="text/x-mathjax-config">
  MathJax.Hub.Config({tex2jax: {inlineMath: [['$','$'], ['\\(','\\)']]}});
</script>
```
这里发现了个bug,即代码快里面放入raw标签会把代码直接当成html，会被解析了。所以上面的代码缺少了raw标签,还需用raw标签包起来。关于raw标签的介绍请参考[hexo标签插件](https://hexo.io/zh-cn/docs/tag-plugins.html)

正确的代码如下图*@(得意)*：
![](https://cdn.jsdelivr.net/gh/honjun/ImageHosting/sina/006bYVyvgy1fsfpdgxzpxj30lq05z3yt.jpg)

接下来再页面上预览一下
图片：
![](https://cdn.jsdelivr.net/gh/honjun/ImageHosting/sina/006bYVyvgy1fsfpdhdn9aj30js02tdfr.jpg)
真实效果
{% raw %}
<p>
When $a \ne 0$, there are two solutions to \(ax^2 + bx + c = 0\) and they are
$$x = {-b \pm \sqrt{b^2-4ac} \over 2a}.$$
</p>
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.4/latest.js?config=TeX-MML-AM_CHTML"></script>
<script type="text/x-mathjax-config">
  MathJax.Hub.Config({tex2jax: {inlineMath: [['$','$'], ['\\(','\\)']]}});
</script>
{% endraw %}

*@(不出所料)*ok了，很简单有木有。而且在md插入这种不常用的js可以节省一些资源。

