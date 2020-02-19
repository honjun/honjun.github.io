title: live2d-看板娘小埋
author: hojun
avatar: https://cdn.jsdelivr.net/gh/honjun/ImageHosting/sina/006bYVyvgy1ftand2qurdj303c03cdfv.jpg
authorDesc: 一个好奇的人
categories: 技术
series: hexo折腾
date: 2018-02-19 21:10:03
authorLink: /about/hojun.html
authorAbout:
tags:
 - live2d
keywords: live2d
description: 最近群里有人在耍live2d看板娘，于是默默地跑去get到了一个小埋~
photos:
 - https://cdn.jsdelivr.net/gh/honjun/ImageHosting/sina/006bYVyvgy1fon3hhn3ccj30eg0egwjq.jpg
---
最近群里有人在耍live2d看板娘，于是默默地跑去get到了一个小埋~
![](https://cdn.jsdelivr.net/gh/honjun/ImageHosting/sina/006bYVyvgy1fon3hhn3ccj30eg0egwjq.jpg)
## **第一步 准备代码和工具**
(注意：代码要在服务器环境下跑)
[代码百度云公众号回复demo002获取]
[AdobeAIRInstaller同上]
[live2dViewer同上]你也可以去官网下载[官网](http://sites.cybernoids.jp/cubism2/tools/live2d-viewer?_blank)
[小埋和薇尔莉特live2d模型资源](https://github.com/honjun/live2d-model)使用资源可跳过第二步
## **第二步 get资源**
(注意:apk和lpk都可以用压缩工具打开)
寻找资源，安利贴吧大佬的提供的资源[乖离性ma吧](https://tieba.baidu.com/p/4941885290?_blank)
或者嘿嘿嘿，使用某电或某神模拟器去得到live2d萌宠里面的资源(root过的手机也行)。这里用某电模拟器示范：
安装live2d萌宠->商店->下载稀饭的萌宠->打开文件管理器->找到对应的model(在Android/data下面)->移动到模拟器和电脑的共享文件夹中
![](https://cdn.jsdelivr.net/gh/honjun/ImageHosting/sina/006bYVyvgy1fon2xpswjaj30bi0jo455.jpg)
接着把json文件拖动到Live2dViewer中,得到如下图：
![](https://cdn.jsdelivr.net/gh/honjun/ImageHosting/sina/006bYVyvgy1fon2xm1ceij30zz0kjn2y.jpg)
## **第三步 修改代码**
这一步假设你已经跑的起来第一步那份代码了...
把得到的model资源放到model文件夹下
打开demo.html修改上你自己的路径
![](https://cdn.jsdelivr.net/gh/honjun/ImageHosting/sina/006bYVyvgy1fon2xthv0bj30os0cwt9z.jpg)
接下来就是放入博客页面，调调大小，挪挪位置。duangduangduang~
[效果预览](https://www.hojun.cn//2018/02/19/live2d-看板娘小埋/)

----------
在这里感谢：
[乖离性ma吧](https://tieba.baidu.com/p/4941885290?_blank) dalao提供的资源
[live2d萌宠](http://www.52pk.com/pet?_blank)
[后宫学长](https://haremu.com/p/205?_blank)提供的代码[代码](https://github.com/journey-ad/Live2D?_blank)
[EYHN](https://github.com/EYHN/hexo-helper-live2d?_blank)
[如何给自己的博客添加一个萌萌的看板娘！live2d](https://www.ohyhello.com/530?_blank)
[给博客添加能动的看板娘(Live2D)-将其添加到网页上吧](https://imjad.cn/archives/lab/add-dynamic-poster-girl-with-live2d-to-your-blog-02?_blank)
{% raw %}
<link rel="stylesheet" href="/live2d/css/live2d.css" />
<div id="landlord">
    <div class="message"></div>
    <canvas id="live2d" width="280" height="375" class="live2d"></canvas>
    <div class="hide-button">隐藏</div>
</div>
<script type="text/javascript" src="https://code.jquery.com/jquery-2.2.4.min.js"></script>
<script type="text/javascript">
    var message_Path = '/live2d/'
    var home_Path = 'https://www.hojun.com/'
</script>
<script type="text/javascript" src="/live2d/js/live2d.js"></script>
<script type="text/javascript" src="/live2d/js/message.js"></script>
<script type="text/javascript">
  $(function(){
    loadlive2d("live2d", "/live2d/model/xiaomai/xiaomai.json");
  })
</script>
{% endraw %}