title: 文档生成器docute、docsify、vuepress
author: hojun
avatar: 'https://cdn.jsdelivr.net/gh/honjun/ImageHosting/picgo/20191009004718.png'
authorLink: /about/hojun.html
authorDesc: 一个好奇的人
categories: 技术
comments: true
date: 2020-02-14 22:49:20
authorAbout:
series:
tags:
 - doc
 - vue
keywords:
description:
photos:
---
## 前言

前阵子有意把hexo-theme-sakura文档单独分离开来的时候折腾了下几个文档生成器，折腾的一引些心得写给后来人。

## Vuepress

![](https://cdn.jsdelivr.net/gh/honjun/ImageHosting/picgo/20200216190434.png)
这是一开始的选择，老实说官方使用文档写的不是很走心。（太多内容放在开发上面了，没有让人负责单纯的写作就好）
![](https://cdn.jsdelivr.net/gh/honjun/ImageHosting/picgo/20200216190755.png)
按这个三步只能建个很简单的页面
![](https://cdn.jsdelivr.net/gh/honjun/ImageHosting/picgo/20200216191737.png)

然后你要做成官方文档那种有导航栏、侧边栏的就要自行参考这个[目录结构](https://vuepress.vuejs.org/zh/guide/directory-structure.html#%E9%BB%98%E8%AE%A4%E7%9A%84%E9%A1%B5%E9%9D%A2%E8%B7%AF%E7%94%B1)
与其说是推荐还不如直白的说目录如下（或者直接帮忙建好），目录建好后还要看这篇文档：[默认主题配置](https://vuepress.vuejs.org/zh/theme/default-theme-config.html#%E9%A6%96%E9%A1%B5)，才能加上导航栏、侧边栏等。（当然加起来也不是那么简单的）

搭的差不多了才发现vuepress是直接生成静态页面的模式，如果拿来搭建文档的话不能够直接在仓库里更新文档。当然你可以用第三方持续集成自动编译，但是好麻烦~~~。

### 总结：
不适合小白入门，当然你有大把时间折腾的ok。特点：生成静态页面，seo友好，速度快。改md后还要花时间生成，比较复杂，适合diy，可以折腾成blog，自带站内搜索。

## docsify

![](https://cdn.jsdelivr.net/gh/honjun/ImageHosting/picgo/20200216194420.png)
docsify是一个很好的选择，前提是你是拿来建文档（简单的blog也行）。但hexo-theme-sakura文档不是用它建的，并是不它不好，只是那时候看只是部分文档，还以为它没有导航栏。而且发现中文文档都是404页面，官方的文档也没有使用导航栏（单一个语言选框没看出来是导航栏），天坑！。后来有心想把这几个文档成生器折腾个demo出来给大家快速使用，才重新去折腾docsify才发现其英文文档的详细。
![](https://cdn.jsdelivr.net/gh/honjun/ImageHosting/picgo/20200216195850.png)
不要觉的它的使用文档多，多说明两点： 1、写的详细，解释详细了那就更容易上手。2、功能多，更强大。你只要案照文档一步一步边看边学习下来，到最后，你就会发现你的文档网页开发好了，同时也会用docsify了。

### 总结：
适合所有人。文档详细（仅限英文文档），体积小，star多，功能多；运行时驱动，只要复责改md就行；自带站内搜索。

## docute
![](https://cdn.jsdelivr.net/gh/honjun/ImageHosting/picgo/20200216201843.png)
强裂推荐docute@3，不要问为什么。就是3版本。如上图你所见的就是它的首页。
![](https://cdn.jsdelivr.net/gh/honjun/ImageHosting/picgo/20200216202017.png)
文档简单，hexo-theme-sakura文档就是用它建的，如上图。当然最简单的就是copy官方的。老实说一开始有给这三个文档生成器整快速上手demo的念头，就是copy docute官方文档的时候涌现的。没错，docute的文档是很简单了，但哪有用demo并直接在上没改改配置就能用方便。但是有个遗憾的地方就是docute没有本地搜索功能，用的是DocSearch，是一个algolia.com提供的免费搜索服务，所以你要用搜索还要注册啥的折腾下。

### 总结：
简单，文档简单，体积小，运行时驱动，只要复责改md就行；DocSearch第三方搜索。

## 最后也是最棒的

不多说，Vuepress、docsify、docute的快速上手demo同步上传在github仓库和百度云上，关注回复docs001获取。

使用教程待续......