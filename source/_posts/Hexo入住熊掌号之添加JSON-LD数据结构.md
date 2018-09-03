title: Hexo入住熊掌号之添加JSON_LD数据结构
author: hojun
avatar: https://wx1.sinaimg.cn/large/006bYVyvgy1ftand2qurdj303c03cdfv.jpg
authorDesc: 一个好奇的人
categories: 技术
comments: true
date: 2018-07-31 01:23:21
authorLink: /about/hojun.html
authorAbout:
series:
tags:
keywords:
description:
photos:
 - https://wx3.sinaimg.cn/mw690/006bYVyvgy1fttgdqkmfoj30dw0crdfy.jpg
---
![](https://wx3.sinaimg.cn/mw690/006bYVyvgy1fttgdqkmfoj30dw0crdfy.jpg)
百度搜索熊掌号，点击上面的和下面的是两个后台。
![](https://wx2.sinaimg.cn/large/006bYVyvgy1ftse34f71cj30ku0c5dgj.jpg)
这个觉得有些像微信公众号的模式。一开始这个主页装修是打不开的，下面的配置了才能打开(不知道是不是我网卡了)
![](https://wx4.sinaimg.cn/large/006bYVyvgy1ftse34zmhaj30yx0i5tda.jpg)
下面的是是搜索资源平台，打开如下：
![](https://wx1.sinaimg.cn/large/006bYVyvgy1ftse3897z9j30yf0hl4bw.jpg)
点击右边的熊掌号，嗯~怎么搞的有点忘记了。等我想记录的时候已经突破新手期了。。。。
![](https://wx3.sinaimg.cn/large/006bYVyvgy1ftteu0bja7j30o60h6q3m.jpg)
突破新手主要就是做任务，其中学习任务类送分（了解粉丝那里要点击复制代码触发），绑定类的是送分，https之前就有送分，（任务在数据统计->熊掌号搜索指数里的可以查看）
![](https://wx1.sinaimg.cn/large/006bYVyvgy1fttgo6oawpj30rn0ijgnc.jpg)
下面具体说下JSON-LD，什么是JSON_LD
维基百科：
```
JSON-LD（关联数据的JavaScript对象表示法）是一种使用JSON编码关联数据的方法。这是一个目标，要求开发人员尽可能少地将他们现有的JSON转换为JSON-LD。[1]这允许以类似于传统JSON的方式序列化数据。[2]这是一个万维网联盟建议书。它最初由JSON for Linking Data Community。Group开发，然后转移到RDF工作组[3]进行审查，改进和标准化。[4]
```
嗯说了一堆看不懂的......找啊找啊，找到说人话的了：编码由Schema.org [6]，Google Knowledge Graph [7]使用，主要用于搜索引擎优化活动。
额，就是用于搜索引擎优化的咯...
按熊掌号的要求改代码：(要求在号主页展示中)
![](https://wx4.sinaimg.cn/large/006bYVyvgy1ftse37fk5fj30qy0gw75b.jpg)
校验工具在粉丝关注->在线校验工具里
![](https://wx3.sinaimg.cn/large/006bYVyvgy1fttguyzhwnj30tc0gawfm.jpg)
第一种报错，存在空行：（报错截图没保存，将就下）
要改成这种没空行的，加在head标签中。
![](https://wx2.sinaimg.cn/large/006bYVyvgy1ftse371f6sj30ep04zgls.jpg)
下面给出hexo中的ejs版的修改代码：
```js
<script type="application/ld+json">
{
    "@context": "https://ziyuan.baidu.com/contexts/cambrian.jsonld",
    "@id": "https://www.hojun.com<%=url_for(page.path) %>",
    "appid": "xxxxxxxxxxxx",<% if (page.title){ %>
    "title": "<%= page.title %>",<% } else {%>"title": "hojun-好少年光芒万丈",
    "images": ['https://wx1.sinaimg.cn/large/006bYVyvgy1ftand2qurdj303c03cdfv.jpg'],<% } %><% if (page.photos && page.photos.length){ %>
    "images": ["<%= page.photos[0] %>"],<% } %>
    "pubDate": "<%= date(page.date, 'YYYY-MM-DDThh:mm:ss') %>"
}
</script>
```
接着有碰到这种错误
![](https://wx2.sinaimg.cn/large/006bYVyvgy1ftse3cmzxmj30p00cu3yn.jpg)
这么改：
![](https://wx4.sinaimg.cn/large/006bYVyvgy1ftse3bdgj9j30tv0bdjry.jpg)
顺带加上这个：
![](https://wx3.sinaimg.cn/large/006bYVyvgy1ftse36pbldj30sq056t8v.jpg)
还有可能碰到这种报错：
![](https://wx1.sinaimg.cn/large/006bYVyvgy1ftth5c9g3yj30r50hpgmg.jpg)
原因是在地址栏复制url的时候把中文转码了，我们直接复制下面$id里的值粘贴进去就行
![](https://wx3.sinaimg.cn/large/006bYVyvgy1fttghapf4mj30n409zq39.jpg)
校验成功！
![](https://wx3.sinaimg.cn/large/006bYVyvgy1fttghb8fduj30ip0h7jrl.jpg)
未完待续......To be Continued......