title: Lozad.js学习使用
author: hojun
avatar: https://wx1.sinaimg.cn/large/006bYVyvgy1ftand2qurdj303c03cdfv.jpg
authorDesc: 一个好奇的人
categories: 技术
series: hexo折腾
date: 2017-11-15 18:39:54
authorLink: /about/hojun.html
authorAbout:
tags:
 - js
 - hexo
keywords: Lozad.js
description: Lozad懒加载
photos:
 - https://wx2.sinaimg.cn/mw690/006bYVyvgy1fljswcaig9j31700gewh3.jpg
---
![image](http://upload-images.jianshu.io/upload_images/2597553-d44d71ea6b1672b5.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
github地址[lozad.js](https://github.com/ApoorvSaxena/lozad.js)
前几天在公众号上看到github上一些受欢迎的项目，其中就有lozad.js,据说碾压jquery.lazyload.js。而自己也一直想给自己博客添加惰性加载以提高页面打开速度（没办法，git略卡，aplayer音乐播放器和cnzz统计都被舍弃了）
## **介绍**
使用请参照github上的README.md中的Usage，英文实在看不懂可以参照sf的这篇文章[《lozad.js：懒加载神器》](https://segmentfault.com/a/1190000011527281)，以及[阮老师的文章](http://www.ruanyifeng.com/blog/2016/11/intersectionobserver_api.html?utm_source=tuicool&utm_medium=referral)
## **实战-给主题添加**
首先给列表页面（category-items.ejs）加上了对应的class和data-src，然后在layout.ejs里面加上了
```js
$(function () {
    const observer = lozad();
    observer.observe();
});
```
测试通过。
## **实战-修改代码使hexo生成的img加上class和data-src**
列表页是在模板（themes）来编写的，自然能找到对应的img元素代码，给其加上class和data-src并不是难事。接下来遇到了个问题，要给文章中的图片也加上对应的class和data-src就不容易了。
因为文章的内容是在hexo的[变量](https://hexo.io/zh-cn/docs/variables.html)中,
### **全局变量**
变量|描述
:--:|:--|
site|网站变量
page|针对该页面的内容以及 front-matter 所设定的变量。
config|网站配置
theme|主题配置。继承自网站配置。
_ (单下划线)|Lodash 函数库
path|当前页面的路径（不含根路径）
url|当前页面的完整网址
env|环境变量
### **页面变量**
变量|描述
:--:|:--|
page.title|页面标题
page.date|页面建立日期（Moment.js 对象）
page.updated|页面更新日期（Moment.js 对象）
page.comments|留言是否开启
page.layout|布局名称
page.content|页面的完整内容
page.excerpt|页面摘要
page.more|除了页面摘要的其余内容
page.source|页面原始路径
page.full_source|页面的完整原始路径
page.path|页面网址（不含根路径）。我们通常在主题中使用 url_for(page.path)。
page.permalink|页面的完整网址
page.prev|上一个页面。如果此为第一个页面则为 null。
page.next|下一个页面。如果此为最后一个页面则为 null。
page.raw|文章的原始内容
page.photos|文章的照片（用于相簿）
page.link|文章的外部链接（用于链接文章）

其中page.content就是文章的内容了，接下来就是找到hexo是在哪里把markdown解释成html了。推荐一篇[《hexo是怎么工作的》](http://coderunthings.com/2017/08/20/howhexoworks/)，可惜没有讲到对应的源代码，不过受他启发，去找对应的源代码。一开始觉得大概率是在生成的时候解析的，于是在![image](http://upload-images.jianshu.io/upload_images/2597553-cde21adbc3b1c570.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)这几个generator的文件夹中找？怎么找，sublime中右键[图片上传失败...(image-67a3c5-1510805619540)]选择Find in Folder就行，我选择查找的关键字是`<img src=`,可惜没有找到对应的源码。
接着在渲染的![image](http://upload-images.jianshu.io/upload_images/2597553-35f409a9739b7c9a.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)这几个renderer文件夹中找,其实看文件夹名就能看出端倪，hexo-renderer-ejs对应ejs,hexo-renderer-stylus对应syl,hexo-renderer-marked对应markdown咯。
打开对应的README.md就看见你这么一句
```md
Add support for [Markdown]. This plugin uses [marked] as render engine.
```
看来是找到了。查找发现真正的位置在![image](https://wx2.sinaimg.cn/large/006bYVyvgy1fljpj5cg8ej308f00p741.jpg)这里，`\node_modules\_marked@0.3.6@marked\lib\marked.js`在这个js中解析的markdown,接下来就好办了，把对应解析图片那段代码添加class和data-src即可。修改好记得
```cmd
hexo clean
hexo g
```
清空重新生成一下。
ok,文章图片也实现了惰性加载