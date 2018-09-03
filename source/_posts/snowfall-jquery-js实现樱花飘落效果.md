title: snowfall.jquery.js实现樱花飘落效果
author: hojun
avatar: https://wx1.sinaimg.cn/large/006bYVyvgy1ftand2qurdj303c03cdfv.jpg
authorDesc: 一个好奇的人
categories: 技术
series: hexo折腾
date: 2018-01-10 23:01:54
authorLink: /about/hojun.html
authorAbout:
tags:
 - js
keywords:
 - 樱花
description:
photos:
 - https://wx2.sinaimg.cn/large/006bYVyvgy1fnbxdi3kr7g30dw07o7ou.gif
---
<img src="https://wx3.sinaimg.cn/large/006bYVyvgy1fne9cxz06lj30ez0rsq3q.jpg">
----------
前几天圣诞节玩了把雪花飘落的jquery插件
结果一不小心又想搞个樱花飘落效果。。。不幸晚睡————猝
献上jquery雪花插件[snowfall.jquery.js](https://github.com/loktar00/JQuery-Snowfall)
该插件的参数有：

 - flakeCount|number  雪花数量
 - flakeColor|#RGB    雪花颜色
 - flakeIndex|???     不清楚
 - minSize|number     雪花最小体积
 - maxSize|number     雪花最大体积
 - minSpeed|number    雪花最小速度
 - maxSpeed|number    雪花最大速度
 - round|boolean      true雪花圆形|false方形(笑哭)
 - shadow|boolean     true雪花有阴影|false无阴影
 - image|url          雪花图片

使用demo
//css部分

```html
<style>
.snowfall-flakes{animation:sakura 1s linear 0s infinite;}
@keyframes sakura{
0% {transform:rotate3d(0, 0, 0, 0deg);}
25%{transform:rotate3d(1, 1, 0, 60deg);}
50%{transform:rotate3d(1, 1, 0, 0deg);}
75%{transform:rotate3d(1, 0, 0, 60deg);}
100% {transform:rotate3d(1, 0, 0, 0deg);}
}
</style>
```

//js部分

```js
<script>
$(document).snowfall('clear');
$(document).snowfall({image:"1.png", flakeCount:10, minSpeed:1, minSize:8, maxSize:15,});
$(document).snowfall({image:"2.png", flakeCount:10, minSpeed:1, minSize:8, maxSize:15,});
$(document).snowfall({image:"3.png", flakeCount:10, minSpeed:1, minSize:8, maxSize:15,});
$(document).snowfall({image:"4.png", flakeCount:10, minSpeed:1, minSize:8, maxSize:15,});
<script>
```

飘落的时候添加了css的3D翻转效果，使之更加逼真
图片是用ps一个一个扣下来的。扣好发现jpg格式不能带透明度，然后又心酸的重新扣png格式的。。。
{% raw %}
<link rel="stylesheet" href="/css/sakura.css" />
<script type="text/javascript" src="/js/jquery.min.js"></script>
<script type="text/javascript" src="/js/snowfall.jquery.js"></script>
<script>
    function sakuraInit() {
        $(document).snowfall('clear');
        if (document.body.clientWidth > 600) {
            $(document).snowfall({image:"/images/sakura/1.png", flakeCount:20, minSpeed:1, minSize:8, maxSize:15,});
            $(document).snowfall({image:"/images/sakura/1.png", flakeCount:20, minSpeed:1, minSize:8, maxSize:15,});
            $(document).snowfall({image:"/images/sakura/2.png", flakeCount:20, minSpeed:1, minSize:8, maxSize:15,});
            $(document).snowfall({image:"/images/sakura/4.png", flakeCount:20, minSpeed:1, minSize:8, maxSize:15,});
        } else {
            $(document).snowfall({image:"/images/sakura/1.png", flakeCount:10, minSpeed:1, minSize:8, maxSize:15,});
            $(document).snowfall({image:"/images/sakura/1.png", flakeCount:10, minSpeed:1, minSize:8, maxSize:15,});
            $(document).snowfall({image:"/images/sakura/2.png", flakeCount:10, minSpeed:1, minSize:8, maxSize:15,});
            $(document).snowfall({image:"/images/sakura/4.png", flakeCount:10, minSpeed:1, minSize:8, maxSize:15,});
        }
    }
    window.onload = sakuraInit();
</script>
{% endraw %}