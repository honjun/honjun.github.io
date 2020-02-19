title: hexo-helper-tocbot插件使用教程
author: hojun
avatar: 'https://cdn.jsdelivr.net/gh/honjun/ImageHosting/sina/006bYVyvgy1ftand2qurdj303c03cdfv.jpg'
authorLink: /about/hojun.html
authorDesc: 一个好奇的人
categories: 技术
comments: true
date: 2019-04-01 18:25:11
authorAbout:
series:
tags: hexo
keywords: hexo-helper-tocbot
description: hexo-helper-tocbot插件使用教程
photos: https://cdn.jsdelivr.net/gh/honjun/ImageHosting/sina/006bYVyvly1g1niio7gebj30h60c0dgh.jpg
---
眼尖的小伙伴可能会发现博主博客目录样式变了，这其实是博主最近封装的一个hexo-helper插件，帮助没有目录的主题快速插入目录，不保证兼容所有主题，且行且珍惜。

## 介绍
![](https://cdn.jsdelivr.net/gh/honjun/ImageHosting/sina/006bYVyvly1g1nii1mki6j30n80bf3yz.jpg)
[hexo-helper-tocbot](https://github.com/honjun/hexo-helper-tocbot) 是一款hexo辅助函数插件，是基于[tocbot](https://github.com/tscanlin/tocbot)(Tocbot可以 根据HTML文档中的标题构建目录（TOC）)实现的。其实就是使用tocbot实现，我只是把它打包起来，借助hexo辅助函数快速引用使用它。

## 安装

使用npm安装：
```cmd
npm i hexo-helper-tocbot --save
```

## 使用教程

### 配置
在博客根目录或主题下的_config.yml中配置如下：
```yml
tocbot:
  contentSelector: .post-content
  scrollSmooth: true
  headingSelector: h1, h2, h3, h4, h5
  headingsOffset: 45
  scrollSmoothOffset: -45
```
其中headingsOffset和scrollSmoothOffset要和你主题的头部高度相对应。
含义详见API

最关键的在.post-content这个class，指你文章容器的class类。如果你的文章容器是<div clas="box">,那么配置就改为contentSelector: .box

### 使用
在主题模板文件合适位置插入：(要放在上面容器类的下面或footer底部最合适)
```ejs
<%- tocbot(top, right) %>
```
因为默认样式是固定定位，例子如下
```ejs
<%- tocbot(['60px', 'calc((100% - 950px - 250px) / 2)']) %>
```
上图参数的意思就是离顶部60px，右边calc((100% - 950px - 250px) / 2)距离。具体情况根据主题样式调整。

### API

```js
// Where to render the table of contents.
tocSelector: '.js-toc',
// Where to grab the headings to build the table of contents.
contentSelector: '.js-toc-content',
// Which headings to grab inside of the contentSelector element.
headingSelector: 'h1, h2, h3',
// Headings that match the ignoreSelector will be skipped.
ignoreSelector: '.js-toc-ignore',
// Main class to add to links.
linkClass: 'toc-link',
// Extra classes to add to links.
extraLinkClasses: '',
// Class to add to active links,
// the link corresponding to the top most heading on the page.
activeLinkClass: 'is-active-link',
// Main class to add to lists.
listClass: 'toc-list',
// Extra classes to add to lists.
extraListClasses: '',
// Class that gets added when a list should be collapsed.
isCollapsedClass: 'is-collapsed',
// Class that gets added when a list should be able
// to be collapsed but isn't necessarily collpased.
collapsibleClass: 'is-collapsible',
// Class to add to list items.
listItemClass: 'toc-list-item',
// Class to add to active list items.
activeListItemClass: 'is-active-li',
// How many heading levels should not be collpased.
// For example, number 6 will show everything since
// there are only 6 heading levels and number 0 will collpase them all.
// The sections that are hidden will open
// and close as you scroll to headings within them.
collapseDepth: 0,
// Smooth scrolling enabled.
scrollSmooth: true,
// Smooth scroll duration.
scrollSmoothDuration: 420,
// Smooth scroll offset.
scrollSmoothOffset: 0,
// Callback for scroll end.
scrollEndCallback: function (e) {},
// Headings offset between the headings and the top of the document (this is meant for minor adjustments).
headingsOffset: 1,
// Timeout between events firing to make sure it's
// not too rapid (for performance reasons).
throttleTimeout: 50,
// Element to add the positionFixedClass to.
positionFixedSelector: null,
// Fixed position class to add to make sidebar fixed after scrolling
// down past the fixedSidebarOffset.
positionFixedClass: 'is-position-fixed',
// fixedSidebarOffset can be any number but by default is set
// to auto which sets the fixedSidebarOffset to the sidebar
// element's offsetTop from the top of the document on init.
fixedSidebarOffset: 'auto',
// includeHtml can be set to true to include the HTML markup from the
// heading node instead of just including the textContent.
includeHtml: false,
// onclick function to apply to all links in toc. will be called with
// the event as the first parameter, and this can be used to stop,
// propagation, prevent default or perform action
onClick: false,
// orderedList can be set to false to generate unordered lists (ul)
// instead of ordered lists (ol)
orderedList: true,
// If there is a fixed article scroll container, set to calculate titles' offset
scrollContainer: null
```