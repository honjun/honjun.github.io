title: 修改Hexo引用样式为双引号形式
author: hojun
avatar: 'https://cdn.jsdelivr.net/gh/honjun/ImageHosting/sina/006bYVyvgy1ftand2qurdj303c03cdfv.jpg'
authorLink: /about/hojun.html
authorDesc: 一个好奇的人
categories: 技术
comments: true
date: 2018-10-23 22:10:01
authorAbout:
series:
tags:
 - hexo
keywords:
description:
photos:
---
这篇文章教大家怎么修改主题的引用样式为双引号形式。
比如我们在md里使用>引用语法写下：
```md
>博主为啥开淘宝店？
>1.我说好奇你信吗。
>2.生活所迫*@(装大款)*
```
博主的JSimple主题默认显示的引用样式如下：
![](https://cdn.jsdelivr.net/gh/honjun/ImageHosting/sina/006bYVyvly1fwiinunietj30g403qwey.jpg)
想把它改成这种样子的
![](https://cdn.jsdelivr.net/gh/honjun/ImageHosting/sina/006bYVyvly1fwiisocut1j30kc04aaa1.jpg)

因为这里双引号正好在引用块的前后，可以使用css的before\after伪元素实现。
首先使用F12开发工具找到引用块的元素
![](https://cdn.jsdelivr.net/gh/honjun/ImageHosting/sina/006bYVyvly1fwij4uxoxwj30su0dzgti.jpg)
然后给这个元素添加css代码。
这里直接给出代码如下：
```css
blockquote:after {
    position: relative;
    content: '\f10e' !important;
    font-size: 1rem;
    float: right;
    top: -1rem;
    margin-right:-1em;
    color: #233;
    font-family: FontAwesome;
}
blockquote:before {
    position: relative;
    content: "\f10d" !important;
    font-size: 1rem;
    left: 0;
    margin-left:-1em;
    color: #233;
    font-family: FontAwesome;
}
.markdown-body blockquote
{
    margin-left:1em;margin-right:1em;padding:.25em 1em;color:#666;
}
```

其中`.markdown-body blockquote`去掉了左边的边框。
然后content中的字符是根据字体文件的内容：
![](https://cdn.jsdelivr.net/gh/honjun/ImageHosting/sina/006bYVyvly1fwij0tt9f8j30xr0d7tlv.jpg)
就这样，不想多说。太懂的可以参考[B站视频教程](https://www.bilibili.com/video/av34413878/)
