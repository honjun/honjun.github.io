title: vue.js初入门(六Class和Style绑定)
author: hojun
avatar: /images/favicon.png
authorDesc: 一个好奇的人
categories: 技术
date: 2018-05-12 19:24:32
authorLink:
authorAbout:
tags:
 - vue
 - 前端
keywords: vue
description: class 与 style 是 HTML 元素的属性，用于设置元素的样式，我们可以用 v-bind 来设置样式属性。v-bind 在处理 class 和 style 时， 专门增强了它。
photos:
 - https://wx3.sinaimg.cn/small/006bYVyvgy1fqxbjqosvfj30cj08caah.jpg
---
![](https://wx3.sinaimg.cn/large/006bYVyvgy1fqxbjqosvfj30cj08caah.jpg)
class 与 style 是 HTML 元素的属性，用于设置元素的样式，我们可以用 v-bind 来设置样式属性。v-bind 在处理 class 和 style 时， 专门增强了它。表达式的结果类型除了字符串之外，还可以是对象或数组。

## **Class**
### **对象**
**我们可以为 v-bind:class 设置一个对象，从而动态的切换 class:**
```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Vue初入门</title>
    <style>
      .active {
        width: 100px;
        height: 100px;
        background: #F00;
      }
    </style>
    <script src="https://cdn.bootcss.com/vue/2.4.2/vue.min.js"></script>
  </head>
  <body>
    <div id="app">
      <div v-bind:class="{ active: isActive }"></div>
    </div>
    <script>
      new Vue({
        el: '#app',
        data: {
          isActive: true
        }
      })
    </script>
  </body>
</html>
```
### **字符串**
```html
<style>
.active {
  width: 100px;
  height: 100px;
  background: green;
}
.text-danger {
  background: red;
}
</style>
</head>
<body>
<div id="app">
  <div class="static"
     v-bind:class="{ active: isActive, 'text-danger': hasError }">
  </div>
</div>

<script>
new Vue({
  el: '#app',
  data: {
    isActive: true,
    hasError: true
  }
})
</script>
```
**我们也可以直接绑定数据里的一个对象：**
```html
<div id="app">
  <div v-bind:class="classObject"></div>
</div>

<script>
new Vue({
  el: '#app',
  data: {
    classObject: {
      active: true,
      'text-danger': true
    }
  }
})
</script>
```
### **计算属性**
**我们也可以在这里绑定返回对象的计算属性。这是一个常用且强大的模式：**
```html
new Vue({
  el: '#app',
  data: {
  isActive: true,
  error: null
  },
  computed: {
    classObject: function () {
      return {
        active: this.isActive && !this.error,
        'text-danger': this.error && this.error.type === 'fatal',
      }
    }
  }
})
```
**我们可以把一个数组传给 v-bind:class**
```html
<div id="app">
  <div v-bind:class="[activeClass, errorClass]"></div>
</div>

<script>
new Vue({
  el: '#app',
  data: {
    activeClass: 'active',
    errorClass: 'text-danger'
  }
})
</script>
```
**我们还可以使用三元表达式来切换列表中的 class ：**
```html
<div v-bind:class="[isActive ? activeClass : '', errorClass]"></div> 
```

## **style(内联样式)**

v-bind:style 的对象语法十分直观——看着非常像 CSS，但其实是一个 JavaScript 对象。CSS 属性名可以用驼峰式 (camelCase) 或短横线分隔 (kebab-case，记得用单引号括起来) 来命名：
**我们可以在 v-bind:style 直接设置样式：**
```html
<div id="app">
  <div v-bind:style="{ color: activeColor, fontSize: fontSize }">Vue</div>
</div>

<script>
new Vue({
  el: '#app',
  data: {
    activeColor: 'green',
  fontSize: '30px'
  }
})
</script>
```
**建议直接绑定到一个样式对象：**
```html
<div v-bind:style="styleObject"></div>

data: {
  styleObject: {
    color: 'red',
    fontSize: '13px'
  }
}
```
**v-bind:style 的数组语法可以将多个样式对象应用到同一个元素上：**
```html
<div v-bind:style="[baseStyles, overridingStyles]"></div>
```
### **自动添加前缀**
当 v-bind:style 使用需要添加浏览器引擎前缀的 CSS 属性时，如 transform，Vue.js 会自动侦测并添加相应的前缀。