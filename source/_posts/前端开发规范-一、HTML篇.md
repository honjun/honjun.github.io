title: 前端开发规范(一、HTML篇)
author: hojun
avatar: /images/favicon.png
authorDesc: 一个好奇的人
categories: 技术
comments: true
date: 2018-06-11 22:13:04
authorLink:
authorAbout:
tags: 
 - 前端
 - html
keywords: 前端
description:
photos: https://wx3.sinaimg.cn/small/006bYVyvgy1fs7mq864jvj30zk0k0q96.jpg
---
![](https://wx3.sinaimg.cn/large/006bYVyvgy1fs7mq864jvj30zk0k0q96.jpg)
# **基本原则**
## **结构、样式、行为分离**
尽量确保文档和模板只包含 HTML 结构，样式都放到样式表里，行为都放到脚本里。

## **缩进**
统一两个空格缩进（总之缩进统一即可），不要使用 Tab 或者 Tab、空格混搭。

## **文件编码**
使用不带 BOM 的 UTF-8 编码。

在 HTML中指定编码 `<meta charset="utf-8">` ；
无需使用 @charset 指定样式表的编码，它默认为 UTF-8 （参考 @charset）；
## **一律使用小写字母**
```html
<!-- Recommended -->
<img src="google.png" alt="Google">
<!-- Not recommended -->
<A HREF="/">Home</A>
```
```css
/* Recommended */
color: #e5e5e5;
/* Not recommended */
color: #E5E5E5;
```
## **省略外链资源 URL 协议部分**
省略外链资源（图片及其它媒体资源）URL 中的 http / https 协议，使 URL 成为相对地址，避免Mixed Content 问题，减小文件字节数。

<font color="red">其它协议（ftp 等）的 URL 不省略。</font>
```html
<!-- Recommended -->
<script src="//www.google.com/js/gweb/analytics/autotrack.js"></script>
<!-- Not recommended -->
<script src="http://www.google.com/js/gweb/analytics/autotrack.js"></script>
```
```css
/* Recommended */
.example {
  background: url(//www.google.com/images/example);
}
/* Not recommended */
.example {
  background: url(http://www.google.com/images/example);
}
```
## **统一注释**

通过配置编辑器，可以提供快捷键来输出一致认可的注释模式。

---

# **HTML篇**
## **标签**

 - 自闭合（self-closing）标签，无需闭合 ( 例如： img input br hr 等 )；
 - 可选的闭合标签（closing tag），需闭合 ( 例如：`</li>` 或 `</body>` )；
 - 尽量减少标签数量；


## **Class 与 ID**

 - class 应以功能或内容命名，不以表现形式命名；
 - class 与 id 单词字母小写，多个单词组成时，采用中划线-分隔；
 - 使用唯一的 id 作为 Javascript hook, 同时避免创建无样式信息的 class；

## **属性顺序**
HTML 属性应该按照特定的顺序出现以保证易读性。

 - id
 - class
 - name
 - data-xxx
 - src, for, type, href
 - title, alt
 - aria-xxx, role

## **引号**
属性的定义，统一使用双引号。
```html
<!-- Not recommended -->
<span id='j-hook' class=text>Google</span>
<!-- Recommended -->
<span id="j-hook">Google</span>
```

## **嵌套**
a 不允许嵌套 div这种约束属于语义嵌套约束，与之区别的约束还有严格嵌套约束，比如a 不允许嵌套 a。

严格嵌套约束在所有的浏览器下都不被允许；而语义嵌套约束，浏览器大多会容错处理，生成的文档树可能相互不太一样。

### **语义嵌套约束**

`<li>` 用于 `<ul>` 或 `<ol>` 下；
`<dd>`, `<dt>` 用于 `<dl>` 下；
`<thead>`, `<tbody>`, `<tfoot>`, `<tr>`, `<td>` 用于 `<table>` 下；
### **严格嵌套约束**

inline-Level 元素，仅可以包含文本或其它 inline-Level 元素;
`<a>`里不可以嵌套交互式元素`<a>`、`<button>`、`<select>`等;
`<p>`里不可以嵌套块级元素`<div>`、`<h1>`~`<h6>`、`<p>`、`<ul>`/`<ol>`/`<li>`、`<dl>`/`<dt>`/`<dd>`、`<form>`等。
更多详情，参考WEB标准系列-HTML元素嵌套

## **布尔值属性**
HTML5 规范中 disabled、checked、selected 等属性不用设置值。
```html
<input type="text" disabled>
<input type="checkbox" value="1" checked>
<select>
  <option value="1" selected>1</option>
</select>
```
## **语义化**
没有 CSS 的 HTML 是一个语义系统而不是 UI 系统。

通常情况下，每个标签都是有语义的，所谓语义就是你的衣服分为外套， 裤子，裙子，内裤等，各自有对应的功能和含义。所以你总不能把内裤套在脖子上吧。-- 一丝

此外语义化的 HTML 结构，有助于机器（搜索引擎）理解，另一方面多人协作时，能迅速了解开发者意图。
## **HEAD**
文档类型
为每个 HTML 页面的第一行添加标准模式（standard mode）的声明， 这样能够确保在每个浏览器中拥有一致的表现。
```html
<!DOCTYPE html>
```
## **语言属性**
lang属性的取值应该遵循 BCP 47 - Tags for Identifying Languages。
```html 
<!-- 中文 -->
<html lang="zh-Hans">
<!-- 简体中文 -->
<html lang="zh-cmn-Hans">
<!-- 繁体中文 -->
<html lang="zh-cmn-Hant">
<!-- English -->
<html lang="en">
```
## **字符编码**
以无 BOM 的 utf-8 编码作为文件格式;
指定字符编码的 meta 必须是 head 的第一个直接子元素；
```html
<html>
  <head>
    <meta charset="utf-8">
    ......
  </head>
  <body>
    ......
  </body>
</html>
```
## **IE 兼容模式**
优先使用最新版本的IE 和 Chrome 内核
```html
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
```
## **SEO 优化**
```html
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <!-- SEO -->
    <title>Style Guide</title>
    <meta name="keywords" content="your keywords">
    <meta name="description" content="your description">
    <meta name="author" content="author,email address">
</head>
```
## **viewport**
viewport: 一般指的是浏览器窗口内容区的大小，不包含工具条、选项卡等内容；
width: 浏览器宽度，输出设备中的页面可见区域宽度；
device-width: 设备分辨率宽度，输出设备的屏幕可见宽度；
initial-scale: 初始缩放比例；
maximum-scale: 最大缩放比例；
为移动端设备优化，设置可见区域的宽度和初始缩放比例。
```html
<meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no" /> 
```
## **iOS 图标**
apple-touch-icon 图片自动处理成圆角和高光等效果;
apple-touch-icon-precomposed 禁止系统自动添加效果，直接显示设计原图;
```html
<!-- iPhone 和 iTouch，默认 57x57 像素，必须有 -->
<link rel="apple-touch-icon-precomposed" href="/apple-touch-icon-57x57-precomposed.png">
<!-- iPad，72x72 像素，可以没有，但推荐有 -->
<link rel="apple-touch-icon-precomposed" href="/apple-touch-icon-72x72-precomposed.png" sizes="72x72">
<!-- Retina iPhone 和 Retina iTouch，114x114 像素，可以没有，但推荐有 -->
<link rel="apple-touch-icon-precomposed" href="/apple-touch-icon-114x114-precomposed.png" sizes="114x114">
<!-- Retina iPad，144x144 像素，可以没有，但推荐有 -->
<link rel="apple-touch-icon-precomposed" href="/apple-touch-icon-144x144-precomposed.png" sizes="144x144">
```
## **favicon**
在未指定 favicon 时，大多数浏览器会请求 Web Server 根目录下的 favicon.ico 。为了保证 favicon 可访问，避免404，必须遵循以下两种方法之一：

 - 在 Web Server 根目录放置 favicon.ico 文件；
 - 使用 link 指定 favicon；

```html
<link rel="shortcut icon" href="path/to/favicon.ico">
```
## **HEAD 模板**
```html
<!DOCTYPE html>
<html lang="zh-cmn-Hans">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <title>Style Guide</title>
    <meta name="description" content="不超过150个字符">
    <meta name="keywords" content="">
    <meta name="author" content="name, email@gmail.com">
    <!-- 为移动设备添加 viewport -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- iOS 图标 -->
    <link rel="apple-touch-icon-precomposed" href="/apple-touch-icon-57x57-precomposed.png">
    <link rel="alternate" type="application/rss+xml" title="RSS" href="/rss.xml" />
    <link rel="shortcut icon" href="path/to/favicon.ico">
</head>
```