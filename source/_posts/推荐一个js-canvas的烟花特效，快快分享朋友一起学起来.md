title: 推荐一个js+canvas的烟花特效，快快分享朋友一起学起来~
author: hojun
avatar: 'https://wx1.sinaimg.cn/large/006bYVyvgy1ftand2qurdj303c03cdfv.jpg'
authorLink: /about/hojun.html
authorDesc: 一个好奇的人
categories: 技术
comments: true
date: 2018-09-06 23:47:29
authorAbout:
series:
tags:
keywords:
description:
photos:
---
废话不多说，先看下效果：
![image](https://ws4.sinaimg.cn/large/006bYVyvgy1fv08rz6fj6g30id0clu09.gif)
直接上代码：
```html
<style type="text/css">
  .fireworks {
      position: absolute;
      top: 0;
      left: 0;
      widows: 100%;
      height: 100%;
  }
</style>
<canvas class="fireworks"></canvas>
<script src="./anime.min.js"></script>
<script src="./fireworks.js"></script>
<script type="text/javascript">
  fireworks.setCanvasSize();
</script>
```
{% raw %}
<style type="text/css">
  .fireworks {
      position: fixed;
      top: 0;
      left: 0;
      widows: 100%;
      height: 100%;
  }
</style>
<canvas class="fireworks"></canvas>
<script src="/js/anime.min.js"></script>
<script src="/js/fireworks.js"></script>
<script type="text/javascript">
  fireworks.setCanvasSize();
</script>
{% endraw %}
anime.min.js和fireworks.js都可以去anime官网上找到。或者关注公众号回复demo007获取*@(献黄瓜)*