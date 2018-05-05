title: vue.js初入门(二初步认识)
author: hojun
avatar: /images/favicon.png
authorDesc: 一个好奇的人
categories: 技术
date: 2018-05-02 21:26:35
authorLink:
authorAbout:
tags:
 - 前端
 - vue
keywords: vue
description: Vue.js 的核心是一个允许你采用简洁的模板语法来声明式的将数据渲染进 DOM 的系统。让我们编辑经典的Hello代码，来尝试第一次使用Vue。
photos:
 - https://wx3.sinaimg.cn/large/006bYVyvgy1fqxbjqosvfj30cj08caah.jpg
---
![](https://wx3.sinaimg.cn/large/006bYVyvgy1fqxbjqosvfj30cj08caah.jpg)

## **vue的声明式渲染**
Vue.js 的核心是一个允许你采用简洁的模板语法来声明式的将数据渲染进 DOM 的系统。让我们编辑经典的Hello代码，来尝试第一次使用Vue。
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
      {{ message }}
    </div> 
    <script>
      var app = new Vue({
        el: '#app',
        data: {
          message: 'Hello Vue!'
        }
      })
    </script>
  </body>
</html>
```
你会在页面上看到Hello Vue！文本。具体的实现原理回在后面的文章详细介绍。

我们还可以采用v-bind的方式绑定 DOM 元素属性(省略了和上一步相同的代码)：
```html
<div id="app-2">
  <span v-bind:title="message">
    鼠标悬停查看当前时间
  </span>
</div>
<script>
  var app2 = new Vue({
    el: '#app-2',
    data: {
      message: '当前时间为：' + new Date()
    }
  })
</script>
```
这里的v-bind属性被称为指令。指令带有前缀 v-，以表示它们是 Vue.js 提供的特殊属性。v-bind将title属性和data中的message绑定在一起，每次刷新页面都会动态的改变title属性的值。

## **条件与循环**
有其他相关语言的编程经验的人来说，在页面中使用模板语言来做条件与循环再熟悉不过了，比如java的JSP、FreeMarker。PHP的Smarty，前端模板swig、Jade等等。感觉Vue中很类似。（个人观点）
Vue中的if条件：
```html
<div id="app-3">
  <p v-if="seen">if为真的时候才渲染我或者说为真的时候我才存在</p>
</div>
var app3 = new Vue({
  el: '#app-3',
  data: {
    seen: true
  }
})
```
Vue中的v-for循环:
```html
<div id="app-4">
  <ol>
    <li v-for="a in arr">
      {{ a.text }}
    </li>
  </ol>
</div>
<script>
var app4 = new Vue({
  el: '#app-4',
  data: {
    arr: [
      { text: '我是第一个元素' },
      { text: '我是第二个元素' },
      { text: '我是第三个元素' }
    ]
  }
})
</script>
```
## **处理用户输入**
v-on 指令绑定一个监听事件用于调用我们 Vue实例中定义的方法：
```html
<div id="app-5">
  <p>{{ index }}</p>
  <button v-on:click="count">加1</button>
</div>
<script>
var app5 = new Vue({
  el: '#app-5',
  data: {
    index: 1
  },
  methods: {
    count: function () {
      this.index = this.index + 1;
    }
  }
})
</script>
```
这段代码实现了每点击一次按钮index都累加1。
Vue 也提供了 v-model指令，它使得在表单输入和应用状态中做双向数据绑定变得非常轻巧
```html
<div id="app-6">
  <p>{{ message }}</p>
  <input v-model="message">
</div>
var app6 = new Vue({
  el: '#app-6',
  data: {
    message: 'Hello Vue!'
  }
})
```
手动改变input的值会是P标签的值也随之改变。
```html
<input v-model="sth" />
<input v-bind:value="sth" v-on:input="sth = $event.target.value" />
```
第一行的代码其实只是第二行的语法糖。这样理解model可能更能接受一些。
## **用组件构建（应用）**
组件系统是 Vue 另一个重要概念，因为它提供了一种抽象，让我们可以用独立可复用的小组件来构建大型应用。如果我们考虑到这点，几乎任意类型的应用的界面都可以抽象为一个组件树。
举个栗子：
```html
<div id="example">
  <my-component></my-component>
</div>
<script>
// 注册
Vue.component('my-component', {
  template: '<div>这是一个自定义组件</div>'
})
// 创建根实例
new Vue({
  el: '#example'
})
</script>
```
我们在后面再详细介绍它。