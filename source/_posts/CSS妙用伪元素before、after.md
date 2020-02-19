title: CSS妙用伪元素before、after
author: hojun
avatar: https://cdn.jsdelivr.net/gh/honjun/ImageHosting/sina/006bYVyvgy1ftand2qurdj303c03cdfv.jpg
authorDesc: 一个好奇的人
categories: 技术
date: 2018-04-19 21:22:48
authorLink: /about/hojun.html
authorAbout:
tags:
 - css
keywords:
description:
photos:
 - https://cdn.jsdelivr.net/gh/honjun/ImageHosting/sina/006bYVyvgy1fqi9ns1lmqg30j20j8hdv.gif
---
css——层叠样式表,简单理解就是用来装饰网页的样子，比如颜色，大小，位置等等。总之，你现在能看到美轮美奂的网页就是css的功劳。
今天介绍一下css中伪元素before、after的妙用小技巧。
首先纠正下写法：
 - 伪类用一个冒号表示 :hover
 - 伪元素则使用两个冒号表示 ::before

## **小例子一 导航鼠标悬停特效**
![](https://cdn.jsdelivr.net/gh/honjun/ImageHosting/sina/006bYVyvgy1fqi9vl8krtg30ec03mwfv.gif)
```html
<html>
  <style>
  ul {
    padding: 0;
    margin: 0;
    font-size: 12px;
  }
  li {
    font-size: 20px;
    padding: 5px 15px 5px 15px;
    display: inline-block;
    position: relative;
    cursor: pointer;
    transition: all 0.5s;
  }
  /*默认设置left=100%表示在最右边*/
  li::before {
    content: '';
    display: block;
    position: absolute;
    width: 0%;
    bottom: 0;
    left: 100%;
    border-bottom: 2px solid #999;
    /*all 0.5秒 表示所有类型的过渡动画都在0.5秒内完成*/
    transition: all 0.5s;
  }
  /*鼠标hover上去的时候width从0变化至100*/
  li:hover::before {
    left:0;
    width:100%;
  }
  /*表示设置位于hover之后的li的before的left为0。实现向右移动的时候下面的线条从左往右出现*/
  li:hover ~ li::before {
    left:0;
  }
  </style>
  <ul>
    <li>第一栏</li>
    <li>第二栏</li>
    <li>第三栏</li>
    <li>第四栏</li>
    <li>第五栏</li>
  </ul>
</html>
```
## **小例子二：手机滑盖效果**
![](https://cdn.jsdelivr.net/gh/honjun/ImageHosting/sina/006bYVyvgy1fqi9ns1lmqg30j20j8hdv.gif)
```html
<style type="text/css">
  div#phone li:before{
    content: url(./img/wangwang.jpg);
    position: relative;
    display: block;
    transition: transform 1s;
  }
  
  div#phone li:after{
    content: url(./img/bujibuji.jpg);
    position: relative;
    top: -750px;
    display: block;
    transition: transform 1s;
  }
      
  div#phone li:hover:before{
    transform: translate(-40%,0);
  }

  div#phone li:hover:after{
    transform: translate(40%,0);
  }

  li{
    list-style-type: none;
    width: 500px;
    margin: 20px auto; 
  }
</style>
<div id="phone">
    <li></li>
</div>
```
## **小例子三 翻转效果**
![](https://cdn.jsdelivr.net/gh/honjun/ImageHosting/sina/006bYVyvgy1fqi9vp78f9g30kb0kmnhn.gif)
```html
<html>
  <style>
    *,
    *::after,
    *::before {
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
    }

    nav a {
      position: relative;
      display: inline-block;
      margin: 15px 25px;
      outline: none;
      color: #fff;
      text-decoration: none;
      text-transform: uppercase;
      letter-spacing: 1px;
      font-weight: 400;
      text-shadow: 0 0 1px rgba(255,255,255,0.3);
      font-size: 1.35em;
    }

    nav a:hover,
    nav a:focus {
      outline: none;
    }
    .cl-effect-2 a {
      line-height: 44px;
      -webkit-perspective: 1000px;
      -moz-perspective: 1000px;
      perspective: 1000px;
    }

    .cl-effect-2 a span {
      position: relative;
      display: inline-block;
      padding: 0 14px;
      background: #2195de;
      -webkit-transition: -webkit-transform 0.3s;
      -moz-transition: -moz-transform 0.3s;
      transition: transform 0.3s;
      -webkit-transform-origin: 50% 0;
      -moz-transform-origin: 50% 0;
      transform-origin: 50% 0;
      -webkit-transform-style: preserve-3d;
      -moz-transform-style: preserve-3d;
      transform-style: preserve-3d;
      text-align: center;
    }

    .cl-effect-2 a span::before {
      position: absolute;
      top: 100%;
      left: 0;
      width: 100%;
      height: 100%;
      background: #0965a0;
      content: attr(data-hover);
      -webkit-transition: background 0.3s;
      -moz-transition: background 0.3s;
      transition: background 0.3s;
      -webkit-transform: rotateX(-90deg);
      -moz-transform: rotateX(-90deg);
      transform: rotateX(-90deg);
      -webkit-transform-origin: 50% 0;
      -moz-transform-origin: 50% 0;
      transform-origin: 50% 0;
      text-align: center;
    }

    .cl-effect-2 a:hover span,
    .cl-effect-2 a:focus span {
      -webkit-transform: rotateX(90deg) translateY(-22px);
      -moz-transform: rotateX(90deg) translateY(-22px);
      transform: rotateX(90deg) translateY(-22px);
    }

    .cl-effect-2 a:hover span::before,
    .cl-effect-2 a:focus span::before {
      background: #28a2ee;  
    }
    .cl-effect-19 a {
      line-height: 2em;
      -webkit-perspective: 800px;
      -moz-perspective: 800px;
      perspective: 800px;
    }

    .cl-effect-19 a span {
      position: relative;
      display: inline-block;
      width: 100%;
      padding: 0 14px;
      background: #e35041;
      -webkit-transition: -webkit-transform 0.4s, background 0.4s;
      -moz-transition: -moz-transform 0.4s, background 0.4s;
      transition: transform 0.4s, background 0.4s;
      -webkit-transform-style: preserve-3d;
      -moz-transform-style: preserve-3d;
      transform-style: preserve-3d;
      -webkit-transform-origin: 50% 50% -60px;
      -moz-transform-origin: 50% 50% -60px;
      transform-origin: 50% 50% -60px;
      text-align: center;
    }

    .cl-effect-19 a span::before {
      position: absolute;
      top: 0;
      left: 100%;
      width: 100%;
      height: 100%;
      background: #b53a2d;
      content: attr(data-hover);
      -webkit-transition: background 0.4s;
      -moz-transition: background 0.4s;
      transition: background 0.4s;
      -webkit-transform: rotateY(90deg);
      -moz-transform: rotateY(90deg);
      transform: rotateY(90deg);
      -webkit-transform-origin: 0 50%;
      -moz-transform-origin: 0 50%;
      transform-origin: 0 50%;
      pointer-events: none;
      text-align: center;
    }

    .cl-effect-19 a:hover span,
    .cl-effect-19 a:focus span {
      background: #b53a2d;
      -webkit-transform: rotateY(-90deg);
      -moz-transform: rotateY(-90deg);
      transform: rotateY(-90deg);
    }

    .cl-effect-19 a:hover span::before,
    .cl-effect-19 a:focus span::before {
      background: #ef5e50;
    }
  </style>
  <section class="color-4">
    <nav class="cl-effect-2" id="cl-effect-2">
      <a href="#cl-effect-2"><span data-hover="上下翻转">上下翻转</span></a>
    </nav>
    <nav class="cl-effect-19" id="cl-effect-19">
      <a href="#cl-effect-19"><span data-hover="左右翻转">左右翻转</span></a>
    </nav>
  </section>
</html>
```