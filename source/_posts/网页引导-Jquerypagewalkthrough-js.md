title: 网页引导-Jquerypagewalkthrough.js
author: hojun
avatar: https://cdn.jsdelivr.net/gh/honjun/ImageHosting/sina/006bYVyvgy1ftand2qurdj303c03cdfv.jpg
authorDesc: 一个好奇的人
categories: 技术
date: 2017-09-06 23:23:16
authorLink: /about/hojun.html
authorAbout:
tags:
 - jquery
keywords: jquerypagewalkthrough
description: hojunBlog
photos:
---
效果预览![](https://cdn.jsdelivr.net/gh/honjun/ImageHosting/sina/006bYVyvgy1fjei07ocr1g30z40j0wtk.gif)
碰见网页引导功能的需求，于是收到了Jquerypagewalkthrough.js这个插件，在[github](https://github.com/jwarby/jquery-pagewalkthrough)上下载到源码，英文渣很尴尬，找啊找啊找。终于找到篇中文的[博客教程：来源helloweba.com 作者：月光光](https://www.helloweba.com/view-blog-286.html)
## **第一步 在需要引导的页面head部分加入css和js**
```html
<link rel="stylesheet" href="./css/jquery.pagewalkthrough.css">
<!-- jQuery -->
<script type="text/javascript" src="./jquery-2.1.1.js"></script>
<!-- Page walkthrough plugin（插件） -->
<script type="text/javascript" src="./jquery.pagewalkthrough.min.js"></script>
```
## **第二步 在body的最后加上引导的内容**
```html
<style type="text/css">
    #walkthrough-content{display:none}
</style>
<div id="walkthrough-content"> 
    <div id="walkthrough-1"> 
        <h3>jquerypagewalkthrough<br>简单使用</h3> 
    </div> 
    <div id="walkthrough-2"> 
        <h3>下,博客的导航栏</h3>
        <h3>bottom,blog navigation bar</h3>
    </div> 
    <div id="walkthrough-3"> 
        <h3>右,博客的logo</h3>
        <h3>right,bolg logo</h3>
    </div> 
    <div id="walkthrough-4"> 
        <h3>上,博客的底部</h3>
        <h3>top,blog footer</h3>
    </div> 
    <div id="walkthrough-5"> 
        <h3>左,博客切换白天还是黑夜模式</h3>
        <h3>left,blog sun and moon switch</h3>
    </div> 
</div>
```
## **第三步 jquery调用pagewalkthrough**
steps是一个数组，定义每一步引导调用的内容，参数wrapper定义了当前引导对应的元素位置(wrapper中的值就是css选择器)，参数popup定义弹出提示引导层，参数content定义关联的内容元素，参数type定义弹出方式，包括tooltip和modal以及nohighlight三种方式，参数position定义了弹出层位置，包括top,left, right or bottom。
```html
<script>
  $(function() {
      $('body').pagewalkthrough({
          name: 'introduction',
          steps: [{
             popup: {
                 content: '#walkthrough-1',
                 type: 'modal'
             }
          }, {
              wrapper: '.page-title ul',
              popup: {
                  content: '#walkthrough-2',
                  type: 'tooltip',
                  position: 'bottom'
              }
          }, {
              wrapper: '.avatar',
              popup: {
                  content: '#walkthrough-3',
                  type: 'tooltip',
                  position: 'right'
              }
          }, {
              wrapper: '.footer-inner',
              popup: {
                  content: '#walkthrough-4',
                  type: 'tooltip',
                  position: 'top'
              }
          }, {
              wrapper: '.fa.fa-sun-o',
              popup: {
                  content: '#walkthrough-5',
                  type: 'tooltip',
                  position: 'left'
              }
          }]
      });

      $('body').pagewalkthrough('show');
  });
</script>
```
代码下载[demo.zip](https://leanote.com/api/file/getAttach?fileId=59b4ef48ab64413c9e001cec)