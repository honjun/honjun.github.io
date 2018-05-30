title: vue.js初入门(十一组件-上篇)
author: hojun
avatar: /images/favicon.png
authorDesc: 一个好奇的人
categories: 技术
date: 2018-05-20 20:45:37
authorLink:
authorAbout:
tags:
 - vue
 - 前端
keywords: vue
description:
photos:
 - https://wx3.sinaimg.cn/large/006bYVyvgy1fqxbjqosvfj30cj08caah.jpg
---
![](https://wx3.sinaimg.cn/large/006bYVyvgy1fqxbjqosvfj30cj08caah.jpg)
## **什么是组件？**
组件（Component）是 Vue.js 最强大的功能之一。组件可以扩展 HTML 元素，封装可重用的代码。在较高层面上，组件是自定义元素， Vue.js 的编译器为它添加特殊功能。在有些情况下，组件也可以是原生 HTML 元素的形式，以 is 特性扩展。
## **全局注册使用**
举个栗子：
```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Vue初入门</title>
    <script src="https://cdn.bootcss.com/vue/2.4.2/vue.min.js"></script>
  </head>
  <body>
    <div id="app">
      <my-component></my-component>
    </div>
    <script>
      //全局注册
      Vue.component('my-component', {
        template: '<div>A custom component!</div>'
      })
      new Vue({ el: '#app' })
    </script>
  </body>
</html>
```
## **局部注册使用**
举个栗子：
```html
<div id="app">
  <my-component></my-component>
</div>
<script>
  var Child = {
    template: '<div>局部注册</div>'
  }
  var vm = new Vue({
    el: '#app',
    components: {
      // <my-component> 将只在父模板可用
      'my-component': Child
    }
  })
</script>
```
## **DOM 模版解析说明**
当使用 DOM 作为模版时（例如，将 el 选项挂载到一个已存在的元素上）, 你会受到 HTML 的一些限制，因为 Vue 只有在浏览器解析和标准化 HTML 后才能获取模版内容。尤其像这些元素 `<ul> ， <ol>， <table> ， <select>` 限制了能被它包裹的元素， `<option>` 只能出现在其它元素内部。

在自定义组件中使用这些受限制的元素时会导致一些问题，例如：
```html
<table>
<my-row>...</my-row>
</table>
```
自定义组件 `<my-row>` 被认为是无效的内容，因此在渲染的时候会导致错误。变通的方案是使用特殊的 is 属性：
```html
<table> 
<tr is="my-row"></tr> 
</table> 
```
## **data 必须是函数**
如果不是函数，比如：
```js
<script>
  Vue.component('button-counter', {
    data: {
      count: 0
    },
    template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>'
  })
  new Vue({ el: '#app' })
</script>
```
2.4版vue会直接报错：
![](https://wx1.sinaimg.cn/large/006bYVyvgy1fri3bslpvuj30cu051jrc.jpg)
正确的用法应该使用函数：
```html
<div id="app">
  <button-counter></button-counter>
  <button-counter></button-counter>
  <button-counter></button-counter>
</div>
<script>
  Vue.component('button-counter', {
    data: function () {
      return {
        count: 0
      }
    },
    template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>'
  })
  new Vue({ el: '#app' })
</script>
```
