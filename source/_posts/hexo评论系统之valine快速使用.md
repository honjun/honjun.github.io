title: hexo评论系统之valine快速使用
author: hojun
avatar: 'https://cdn.jsdelivr.net/gh/honjun/ImageHosting/sina/006bYVyvgy1ftand2qurdj303c03cdfv.jpg'
authorDesc: 一个好奇的人
categories: 技术
comments: true
date: 2018-08-07 22:48:32
authorLink: /about/hojun.html
authorAbout:
series: hexo折腾
tags:
 - hexo
keywords:
description:
photos:
 - https://cdn.jsdelivr.net/gh/honjun/ImageHosting/sina/006bYVyvgy1fu1j2asd1pj30oo0li3zi.jpg
---

![](https://cdn.jsdelivr.net/gh/honjun/ImageHosting/sina/006bYVyvgy1fu1j2asd1pj30oo0li3zi.jpg)

## 前言
咳咳，昨天不是立了个每日签到的flag，再计算分值之后，用评论记录的时候，发现加载要很久。一言不合就动手换了它，加入valine评论系统阵营。
## Valine
来到其官网valine.js.org，(抠了1元钱打赏了作者，还是群里的群友)点击 快速开始
![](https://cdn.jsdelivr.net/gh/honjun/ImageHosting/sina/006bYVyvgy1fu1ilnqz6yj30wd0he0tv.jpg)
嗯，需要注册LeanCloud，注册如下
![](https://cdn.jsdelivr.net/gh/honjun/ImageHosting/sina/006bYVyvgy1fu1ilialrzj30ox0k3t9e.jpg)
验证邮箱和绑定手机号
![](https://cdn.jsdelivr.net/gh/honjun/ImageHosting/sina/006bYVyvgy1fu1ilj62w0j31050hatap.jpg)
![](https://cdn.jsdelivr.net/gh/honjun/ImageHosting/sina/006bYVyvgy1fu1iljy87zj30l00e0wf2.jpg)
然后点击创建应用>开发版
![](https://cdn.jsdelivr.net/gh/honjun/ImageHosting/sina/006bYVyvgy1fu1ilkm79lj30zt0gnabw.jpg)
建好之后点击进入到应用中
![](https://cdn.jsdelivr.net/gh/honjun/ImageHosting/sina/006bYVyvgy1fu1ill5issj30rr0eh3yq.jpg)
依次点击设置>应用Key 得到App ID和App Key
![](https://cdn.jsdelivr.net/gh/honjun/ImageHosting/sina/006bYVyvgy1fu1illmu8ij30vs0h7dhe.jpg)
设置安全域名，可设可不设咯。舍得话要设自己博客域名哦（不要设博主的哦）
![](https://cdn.jsdelivr.net/gh/honjun/ImageHosting/sina/006bYVyvgy1fu1ilm8yuej30zu0hzacc.jpg)
注册好了，去valine官网找到demo
![](https://cdn.jsdelivr.net/gh/honjun/ImageHosting/sina/006bYVyvgy1fu1ilmqe8jj30nj0eg0tc.jpg)
直接插入到自己博客（hexo）评论模板那里
```js
<% if (config.valine && page.comments) { %>
<script src="//cdn1.lncld.net/static/js/3.0.4/av-min.js"></script>
<script src='//unpkg.com/valine/dist/Valine.min.js'></script>
<div id="vcomments"></div>
<script>
  new Valine({
    el: '#vcomments',
    appId: "<%=config.v_appId %>",
    appKey: "<%=config.v_appKey %>"
  })
</script>
<% } %>
```
然后在配置里配置参数(_config.yml)
```yml
# Valine
valine: true
v_appId: xxxxxx
v_appKey: xxxxxx
```
OK，发布的时候可能还不能马上评论，等两分钟好啦~
![](https://cdn.jsdelivr.net/gh/honjun/ImageHosting/sina/006bYVyvgy1fu1iln9h86j30os0e6q31.jpg)
嗯。。。。。点下题，换的真的很快，大约半小时不到*@(doge)*