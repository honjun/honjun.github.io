title: 前端开发规范(六、JS优化篇)
author: hojun
avatar: /images/favicon.png
authorDesc: 一个好奇的人
categories: 
 - 技术
 - 前端开发规范
comments: true
date: 2018-06-15 21:55:14
authorLink:
authorAbout:
tags:
 - 前端
 - js
keywords: 前端
description:
photos: https://wx3.sinaimg.cn/small/006bYVyvgy1fs7mq864jvj30zk0k0q96.jpg
---
![](https://wx3.sinaimg.cn/large/006bYVyvgy1fs7mq864jvj30zk0k0q96.jpg)
# 性能优化

## 避免不必要的 DOM 操作

浏览器遍历 DOM 元素的代价是昂贵的。最简单优化 DOM 树查询的方案是，当一个元素出现多次时，将它保存在一个变量中，就避免多次查询 DOM 树了。
```js
// Recommended
var myList = "";
var myListHTML = document.getElementById("myList").innerHTML;
for (var i = 0; i < 100; i++) {
  myList += "<span>" + i + "</span>";
}
myListHTML = myList;
// Not recommended
for (var i = 0; i < 100; i++) {
  document.getElementById("myList").innerHTML += "<span>" + i + "</span>";
}
```

## 缓存数组长度

循环无疑是和 JavaScript 性能非常相关的一部分。通过存储数组的长度，可以有效避免每次循环重新计算。

注: 虽然现代浏览器引擎会自动优化这个过程，但是不要忘记还有旧的浏览器。
```js
var arr = new Array(1000),
    len, i;
// Recommended - size is calculated only 1 time and then stored
for (i = 0, len = arr.length; i < len; i++) {
}
// Not recommended - size needs to be recalculated 1000 times
for (i = 0; i < arr.length; i++) {
}
```

## 异步加载第三方内容

当你无法保证嵌入第三方内容比如 Youtube 视频或者一个 like/tweet 按钮可以正常工作的时候，你需要考虑用异步加载这些代码，避免阻塞整个页面加载。
```js
(function() {
    var script,
        scripts = document.getElementsByTagName('script')[0];
    function load(url) {
      script = document.createElement('script');
      script.async = true;
      script.src = url;
      scripts.parentNode.insertBefore(script, scripts);
    }
    load('//apis.google.com/js/plusone.js');
    load('//platform.twitter.com/widgets.js');
    load('//s.widgetsite.com/widget.js');
}());
```

## 避免使用 jQuery 实现动画

 - 禁止使用 slideUp/Down() fadeIn/fadeOut() 等方法；
 - 尽量不使用 animate() 方法；