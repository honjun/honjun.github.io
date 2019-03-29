title: hexo-fexo主题推荐
author: hojun
avatar: 'https://wx1.sinaimg.cn/large/006bYVyvgy1ftand2qurdj303c03cdfv.jpg'
authorLink: /about/hojun.html
authorDesc: 一个好奇的人
categories: 技术
comments: true
date: 2019-03-18 17:38:00
authorAbout:
series:
tags: hexo
keywords: hexo主题
description: 今天录制hexo视频的时候，发现了fexo主题。觉得不错，给大家安利一波~
photos: https://wx4.sinaimg.cn/small/006bYVyvly1g174utur7oj30io0cq0tj.jpg
---
今天录制hexo视频的时候，发现了fexo主题。觉得不错，给大家安利一波~

## 资料卡

[主题传送门](https://github.com/forsigner/fexo)
[主题文档](http://forsigner.com/2016/03/10/fexo-doc-zh-cn/)
[主题预览](http://forsigner.com/)

其中RSS页面借助[hexo-generator-feed](https://github.com/hexojs/hexo-generator-feed)插件实现，第一步安装插件
```cmd
npm install hexo-generator-feed --save
```
然后在最外层的_config里面配置
```yml
feed:
  type: atom
  path: atom.xml
  limit: 20
  order_by: -date
```
这样下次hexo g的时候就能生成atom.xml了。

## 视频教程
{% bili 46655382 %}

## 主题秀
### PC端
**首页**
{% fb_img https://wx1.sinaimg.cn/large/006bYVyvly1g174utur7oj30io0cq0tj.jpg PC端-首页 %}
**归档**
{% fb_img https://ws4.sinaimg.cn/large/006bYVyvly1g174x550qpj310r0lctaa.jpg PC端-归档 %}
**分类/标签**
{% fb_img https://wx2.sinaimg.cn/large/006bYVyvly1g174xr5jykj30x00lcwg5.jpg PC端-分类/标签 %}
**友链**
{% fb_img https://wx3.sinaimg.cn/large/006bYVyvly1g174ys3jsej30xa0lcmzi.jpg PC端-友链 %}
**关于**
{% fb_img https://ws4.sinaimg.cn/large/006bYVyvly1g174z8dcq7j30wc0lcjt4.jpg PC端-关于 %}
**搜索**
{% fb_img https://ws4.sinaimg.cn/large/006bYVyvly1g1750ewniaj30wk0lcacb.jpg PC端-搜索 %}
**项目**
{% fb_img https://ws1.sinaimg.cn/large/006bYVyvly1g1751a4jm3j30v60lcace.jpg PC端-项目 %}

### 手机端
**首页**
{% fb_img https://ws4.sinaimg.cn/large/006bYVyvly1g1754v7qv4j30jh0i40tg.jpg 手机端-首页 %}
**归档**
{% fb_img https://ws4.sinaimg.cn/large/006bYVyvly1g1755ad9pdj30jx0i1q3u.jpg 手机端-归档 %}
**分类/标签**
{% fb_img https://wx1.sinaimg.cn/large/006bYVyvly1g1755rhof2j30ik0i6jse.jpg 手机端-分类/标签 %}
**友链**
{% fb_img https://ws1.sinaimg.cn/large/006bYVyvly1g17566kcnej30in0hxwg0.jpg 手机端-友链 %}
**关于**
{% fb_img https://ws3.sinaimg.cn/large/006bYVyvly1g1756ny618j30hr0i10to.jpg 手机端-关于 %}
**搜索**
{% fb_img https://wx4.sinaimg.cn/large/006bYVyvly1g1757j0tfnj30ia0i13zj.jpg 手机端-搜索 %}
**项目**
{% fb_img https://wx2.sinaimg.cn/large/006bYVyvly1g17585sdorj30i10i1ab3.jpg 手机端-项目 %}