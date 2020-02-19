title: ngrok免费带你穿透内网映射到外网
author: hojun
avatar: 'https://cdn.jsdelivr.net/gh/honjun/ImageHosting/sina/006bYVyvgy1ftand2qurdj303c03cdfv.jpg'
authorLink: /about/hojun.html
authorDesc: 一个好奇的人
categories: 技术
comments: true
date: 2018-10-31 23:59:35
authorAbout:
series:
tags:
 - tools
keywords: ngrok
description: 有句话这么说的：“世界上最遥远的距离就是你在外网，我在内网”
photos:
---
咳咳，今天了解到了一个免费的内网映射软件 ngrok 。

>有句话这么说的：“世界上最遥远的距离就是你在外网，我在内网”

而ngrok解决了这个问题，废话不多说，看下怎么玩*@(献黄瓜)*
咳咳，国外的ngrok，估计被墙卡的不行，不推荐使用
![](https://cdn.jsdelivr.net/gh/honjun/ImageHosting/sina/006bYVyvly1fwrtqeu2snj30mb0h974z.jpg)
![](https://cdn.jsdelivr.net/gh/honjun/ImageHosting/sina/006bYVyvly1fwrtd00pqkj30y80iltb7.jpg)
推荐使用国产的Sunny-Ngrok
![](https://cdn.jsdelivr.net/gh/honjun/ImageHosting/sina/006bYVyvly1fwrts738u9j30yh0hxdp2.jpg)
先注册
![](https://cdn.jsdelivr.net/gh/honjun/ImageHosting/sina/006bYVyvly1fwrtwy4zwcj30ho0g374r.jpg)
注册好后新建隧道，当然是选择免费的啊。土豪请随意*@(献花)*
![](https://cdn.jsdelivr.net/gh/honjun/ImageHosting/sina/006bYVyvly1fwrumwwbpfj30th0i440d.jpg)
端口可以设下，建议8000-8999内的端口。我这里用8765。
![](https://cdn.jsdelivr.net/gh/honjun/ImageHosting/sina/006bYVyvly1fwrtdti7zlj30t90hjdh8.jpg)
建好后第一个是客户端id，点击第二个下载客户端，第三个是外网访问的域名。
![](https://cdn.jsdelivr.net/gh/honjun/ImageHosting/sina/006bYVyvly1fwrter2m9jj30tk06gaag.jpg)
我们可以尝试下访问，这个时候没有开启映射是不能看的到的。
![](https://cdn.jsdelivr.net/gh/honjun/ImageHosting/sina/006bYVyvly1fwrtyz3bozj30hq06g3yh.jpg)
我们先开启本地的服务，我这里方便就直接使用hexo的，端口设置为和网页上设置的一致的8765
![](https://cdn.jsdelivr.net/gh/honjun/ImageHosting/sina/006bYVyvly1fwru3w6bo7j30ix06m3yj.jpg)
使用localhost本地访问ok
![](https://cdn.jsdelivr.net/gh/honjun/ImageHosting/sina/006bYVyvly1fwru4l3gxmj31070kek4m.jpg)
下载客户端解压后双击批处理文件即可。
![](https://cdn.jsdelivr.net/gh/honjun/ImageHosting/sina/006bYVyvly1fwrtye80mnj30dy06paa5.jpg)
这里粘贴之前的id，回车即可。
![](https://cdn.jsdelivr.net/gh/honjun/ImageHosting/sina/006bYVyvly1fwru1fdqo5j30oo0efmxi.jpg)
回车后访问之前的外网域名，控制台如下
![](https://cdn.jsdelivr.net/gh/honjun/ImageHosting/sina/006bYVyvly1fwru3dx3xgj30ob0e6jrw.jpg)
外网也能访问到
![](https://cdn.jsdelivr.net/gh/honjun/ImageHosting/sina/006bYVyvly1fwru5wjvobj31080khdt3.jpg)
是不是很棒啊！