title: 解决动态ajax/pjax加载mathjax不生效问题
author: hojun
avatar: 'https://cdn.jsdelivr.net/gh/honjun/ImageHosting/sina/006bYVyvgy1ftand2qurdj303c03cdfv.jpg'
authorLink: /about/hojun.html
authorDesc: 一个好奇的人
categories: 技术
comments: true
date: 2019-02-21 22:30:52
authorAbout:
series:
tags:
keywords: mathjax
description: 解决动态ajax/pjax加载mathjax不生效问题
photos: https://cdn.jsdelivr.net/gh/honjun/ImageHosting/sina/006bYVyvly1g0effcj83fj311j0lcgnu.jpg
---
## Mathjax
![](https://cdn.jsdelivr.net/gh/honjun/ImageHosting/sina/006bYVyvly1g0effcj83fj311j0lcgnu.jpg)
如图所见，适用于网页上的显示数学公式的JavaScript库。对浏览器的支持比较全面，据说支持到IE6（这个就比较厉害哦）

## 使用教程
[github仓库地址](https://github.com/mathjax/mathjax)
官方demo
```html
<!DOCTYPE html>
<html>
<head>
<title>MathJax TeX Test Page</title>
<script type="text/x-mathjax-config">
  MathJax.Hub.Config({tex2jax: {inlineMath: [['$','$'], ['\\(','\\)']]}});
</script>
<script type="text/javascript" async
  src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.5/MathJax.js?config=TeX-MML-AM_CHTML">
</script>
</head>
<body>
When $a \ne 0$, there are two solutions to \(ax^2 + bx + c = 0\) and they are
$$x = {-b \pm \sqrt{b^2-4ac} \over 2a}.$$
</body>
</html>
```
只要引入mathjax的js地址，配置config，就能自动识别文章中的数学公式写法。显示效果如下：
![](https://cdn.jsdelivr.net/gh/honjun/ImageHosting/sina/006bYVyvly1g0egfau5juj30i9036gln.jpg)

## 发现问题

正常情况下使用，是可以实现显示数学公式的，但是如果你的页面使用了动态加载，即ajax或pjax的情况下，mathjax就不能顺利的渲染出数学公式了。

咳咳，解决动态适配的事情也不是一次两次了，添加事件可以用jquery的on方法委托。在动态调用后执行可以在$.ajax的success方法后执行相关业务逻辑。 pjax则在complete或end后执行相关业务逻辑代码。这里我拿pjax做演示，代码类似下面：
```js
$(document).pjax('a[target!=_top]', '#page', {
    fragment: '#page',
    timeout: 8000,
}).on('pjax:send', function () {
    do something
}).on('pjax:complete', function () {
    $.getScript("//cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.4/MathJax.js?config=TeX-MML-AM_CHTML", function() {
        MathJax.Hub.Config({tex2jax: {inlineMath: [['$','$'], ['\\(','\\)']]}});
    });
});
```
想法是在pjax加载complete之后加载mathjax的js依赖，在配置config,因为之前正常使用也是这样的。但是很遗憾，还是没有正常显示。

## 在官方文档中找到解决方案

遇到问题，最好的方法就是去了解官方的文档，权威有效。（经验表明网上教程没官方靠谱，官方找不到再去互联网上寻求帮助，这对你以后解决问题的能力也是一种锻炼，毕竟不是遇到的所有问题都能在互联网上找到解决方案的）

其中有项动态加载Mathjax,然而很遗憾，测试后发现不行（毕竟我上一步的修改的效果应该和文档这动态加载一致）
![](https://cdn.jsdelivr.net/gh/honjun/ImageHosting/sina/006bYVyvly1g0egyhkwv4j30xj0ik42g.jpg)
后来锲而不舍的找到了MathJax.Hub.Typeset()这个方法，结合Queue方法就能实现（不要问我为啥是中文文档，谷歌翻译了解下）
![](https://cdn.jsdelivr.net/gh/honjun/ImageHosting/sina/006bYVyvly1g0eh6qwhlzj30v40lbwji.jpg)
我的实现代码如下，仅供参考：
```js
....
.on('pjax:complete', function () {
    $.getScript("//cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.4/MathJax.js?config=TeX-MML-AM_CHTML", function() {
        MathJax.Hub.Config({tex2jax: {inlineMath: [['$','$'], ['\\(','\\)']]}});
        // entry-content是文章页的内容div的class
        var math = document.getElementsByClassName("entry-content")[0];
        MathJax.Hub.Queue(["Typeset",MathJax.Hub,math]);
    });
});
```

好了，到此动态ajax/pjax加载mathjax不生效问题就解决了~