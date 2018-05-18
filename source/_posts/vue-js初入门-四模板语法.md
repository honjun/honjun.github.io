title: vue.js初入门(四模板语法)
author: hojun
avatar: /images/favicon.png
authorDesc: 一个好奇的人
categories: 技术
date: 2018-05-06 22:07:47
authorLink:
authorAbout:
tags:
 - 前端
 - vue
keywords: vue
description: 数据绑定最常见的形式就是使用“Mustache”语法 (双大括号) 的文本插值......
photos:
 https://wx3.sinaimg.cn/small/006bYVyvgy1fqxbjqosvfj30cj08caah.jpg
---
![](https://wx3.sinaimg.cn/large/006bYVyvgy1fqxbjqosvfj30cj08caah.jpg)
## **文本**
数据绑定最常见的形式就是使用“Mustache”语法 (双大括号) 的文本插值：
```html
<div id="app">
  <div>{{ msg }}</div>
</div>
<script>
  var vm = new Vue({
    el: '#app',
    data: {
      msg: '文本文本文本'
    }
  })
</script>
```
无论何时，绑定的数据对象上 msg 属性发生了改变，插值处的内容都会更新。
通过使用 v-once 指令，你也能执行一次性地插值，当数据改变时，插值处的内容不会更新。
```html
<div id="app">
  <div>{{ html }}</div>
  <div v-once>{{ html }}</div>
</div>
<script>
  var vm = new Vue({
    el: '#app',
    data: {
      html: '初始值'
    }
  })
  //更新值
  vm._data.html = '更新值'
</script>
```
效果：![](https://wx4.sinaimg.cn/small/006bYVyvgy1fr1zn4qicaj309i0233yb.jpg)

## **输出html**
双大括号会将数据解释为纯文本，而非 HTML 。为了输出真正的 HTML ，你需要使用 v-html 指令：
```html
<div id="app">
  <div v-html="html"></div>
  <div>{{ html }}</div>
</div>
<script>
  var vm = new Vue({
    el: '#app',
    data: {
      html: '<h1>这是h1</h1>'
    }
  })
</script>
```
效果：![](https://wx2.sinaimg.cn/small/006bYVyvgy1fr1zpl03qcj306y048t8k.jpg)

## **属性**
双大括号不能在 HTML 属性中使用，该使用 v-bind 指令：
```html
<div id="app">
  <div id="{{ dynamicId }}"></div>
  <div v-bind:id="dynamicId"></div>
</div>
<script>
  var vm = new Vue({
    el: '#app',
    data: {
      dynamicId: 'divId'
    }
  })
</script>
```
效果：![](https://wx4.sinaimg.cn/small/006bYVyvgy1fr1zpqh59pj309705bglm.jpg)
这对布尔值的属性也有效 —— 如果条件被求值为 false 的话该属性会被移除

## **使用 JavaScript 表达式**
```html
<div id="app">
  {{512*2}}<br>
  {{ ok ? 'YES' : 'NO' }}<br>
  {{ message.split('').reverse().join('') }}
  <div v-bind:id="'list-' + id">JavaScript 表达式</div>
</div>
<script>
  new Vue({
    el: '#app',
    data: {
      ok: true,
      message: 'VUE',
      id : 1
    }
  })
</script>
```
有个限制就是，每个绑定都只能包含单个表达式，所以下面的例子都不会生效。
```html
<!-- 这是语句，不是表达式 -->
{{ var a = 1 }}
<!-- 流控制也不会生效，请使用三元表达式 -->
{{ if (ok) { return message } }}
```
## **过滤器**
Vue.js 允许你自定义过滤器，被用作一些常见的文本格式化。过滤器应该被添加在双大括号插值的尾部，由“管道符”指示：
```html
{{ message | capitalize }}
```
如下过滤器代码实现大写首字母：
```html
<div id="app">
  {{ message | capitalize }}
</div>
<script>
new Vue({
  el: '#app',
  data: {
  message: 'vue'
  },
  filters: {
    capitalize: function (value) {
      if (!value) return ''
      value = value.toString()
      return value.charAt(0).toUpperCase() + value.slice(1)
    }
  }
})
</script>
```
过滤器可以串联：
```html
{{ message | filterA | filterB }}
```
过滤器是 JavaScript 函数，因此可以接受参数：
```html
{{ message | filterA('arg1', arg2) }}
```
这里，字符串 'arg1' 将传给过滤器作为第二个参数， arg2 表达式的值将被求值然后传给过滤器作为第三个参数。

## **指令**
指令 (Directives) 是带有 v- 前缀的特殊特性。指令特性的值预期是单个 JavaScript 表达式 (v-for 是例外情况，稍后我们再讨论)。指令的职责是，当表达式的值改变时，将其产生的连带影响，响应式地作用于 DOM。回顾我们在vue.js初入门二中看到的例子：
```html
<div id="app-3">
  <p v-if="seen">if为真的时候才渲染我或者说为真的时候我才存在</p>
</div>
<script>
var app3 = new Vue({
  el: '#app-3',
  data: {
    seen: true
  }
})
</script>
```

这里，v-if 指令将根据表达式 seen 的值的真假来插入/移除 `<p>` 元素。
一些指令能够接收一个“参数”，在指令名称之后以冒号表示。例如，v-bind 指令可以用于响应式地更新 HTML 特性：
```html
<a v-bind:href="url">...</a>
```
在这里 href 是参数，告知 v-bind 指令将该元素的 href 特性与表达式 url 的值绑定。

另一个例子是 v-on 指令，它用于监听 DOM 事件：
```html
<a v-on:click="doSomething">...</a>
```

v-bind和v-on,详见vue.js初入门二。
## **缩写**
**v-bind 缩写**
```html
<!-- 完整语法 -->
<a v-bind:href="url">...</a>
<!-- 缩写 -->
<a :href="url">...</a>
```
**v-on 缩写**
```html
<!-- 完整语法 -->
<a v-on:click="doSomething">...</a>
<!-- 缩写 -->
<a @click="doSomething">...</a>
```
## **修饰符**
修饰符（Modifiers）是以半角句号 . 指明的特殊后缀，用于指出一个指定应该以特殊方式绑定。例如，.prevent 修饰符告诉 v-on 指令对于触发的事件调用 event.preventDefault()：

```html
<form v-on:submit.prevent="onSubmit"></form>
```