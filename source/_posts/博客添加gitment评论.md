title: 博客添加gitment评论
author: hojun
avatar: /images/favicon.png
authorDesc: 一个好奇的人
categories: 技术
series: hexo折腾
date: 2017-07-09 23:16:20
authorLink:
authorAbout:
tags:
 - hexo
keywords: gitment
description:
photos:
---
说起gitment全是泪啊~~~多说6月1号说拜拜，刚7月三号的时候换了网易云跟帖，今天早上就收到个坏消息：
![006bYVyvgy1fhf69hzfxej30ip09lmxs.jpg](https://wx4.sinaimg.cn/large/006bYVyvgy1fhf69hzfxej30ip09lmxs.jpg)
好吧，我再换
参考[gitment](https://github.com/imsun/gitment)作者博客说明：https://imsun.net/posts/gitment-introduction/

## **概括下使用说明 就两步就行 超简单**
### **1. 注册github OAuth Application**
在头像->setting下面
![006bYVyvgy1fhf7a6r8ykj30jy0lcac0.jpg](https://wx3.sinaimg.cn/large/006bYVyvgy1fhf7a6r8ykj30jy0lcac0.jpg)
得到owner、client_id、client_secret
<font color="red">注意填写：</font>若是绑定个人域名就不能使用yourname.github.io作为Homepage URL和Authorization callback URL。gitment会报Error: Comments Not Initialized错误
### **2. 引入 Gitment**
将下面的代码添加到你的页面：
```js
<div id="container"></div>
<link rel="stylesheet" href="https://imsun.github.io/gitment/style/default.css">
<script src="https://imsun.github.io/gitment/dist/gitment.browser.js"></script>
<script>
var gitment = new Gitment({
  id: '页面 ID', // 可选。默认为 location.href
  owner: '你的 GitHub ID',
  repo: '存储评论的 repo',
  oauth: {
    client_id: '你的 client ID',
    client_secret: '你的 client secret',
  },
})
gitment.render('container')
```
<font color="red">注意填写：参数错误会出现Error: Not Found报错</font>

 - id可以直接删掉
 - repo只要填你的仓库名称就行，不用仓库的git或ssh。例如我的 <font color="#39c">repo:   'honjun.github.io',</font>
 - id="container"和gitment.render('container')最好改下，比如gitment-container以防id重复