title: vue.js初入门(七条件渲染)
author: hojun
avatar: /images/favicon.png
authorDesc: 一个好奇的人
categories: 技术
date: 2018-05-14 22:22:17
authorLink:
authorAbout:
tags:
 - vue
 - 前端
keywords: vue
description: v-if 是“真正”的条件渲染，因为它会确保在切换过程中条件块内的事件监听器和子组件适当地被销毁和重建。
photos:
 - https://wx3.sinaimg.cn/large/006bYVyvgy1fqxbjqosvfj30cj08caah.jpg
---
![](https://wx3.sinaimg.cn/large/006bYVyvgy1fqxbjqosvfj30cj08caah.jpg)
## **v-if**
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
      <p v-if="ok">现在你看到我了</p>
      <p v-if="hide">你看不到我</p>
    </div>
    <script>
    new Vue({
      el: '#app',
      data: {
        ok: true,
        hide: false
      }
    })
    </script>
  </body>
</html>
```
细心的人可能会发现，v-if需要依赖元素，比如上一个栗子，我们不想要p标签，又使用使用v-if指令呢？
可以使用`<template>`元素。如：
```html
<template v-if="ok">现在你看到我了</template>
```
最终的渲染结果将不包含`<template>`元素。

## **v-else**
你可以使用 v-else 指令来表示 v-if 的“else 块”。
举个栗子：
```html
<div id="app">
  <p v-if="hide">hide等于true</p>
  <p v-else="hide">hide等于false</p>
</div>
<script>
new Vue({
  el: '#app',
  data: {
    hide: false
  }
})
</script>
```
<font color="red">注意：v-else 元素必须紧跟在带 v-if 或者 v-else-if 的元素的后面，否则它将不会被识别。</font>

## **v-else-if**
2.1.0 新增，举个栗子：
```html
<div v-if="type === 'A'">
  A
</div>
<div v-else-if="type === 'B'">
  B
</div>
<div v-else-if="type === 'C'">
  C
</div>
<div v-else>
  Not A/B/C
</div>
```
类似于 v-else，v-else-if 也必须紧跟在带 v-if 或者 v-else-if 的元素之后。

## **用 key 管理可复用的元素**
Vue 会尽可能高效地渲染元素，通常会复用已有元素而不是从头开始渲染。这么做除了使 Vue 变得非常快之外，还有其它一些好处。例如，如果你允许用户在不同的登录方式之间切换：
```html
<template v-if="loginType === 'username'">
  <label>Username</label>
  <input placeholder="Enter your username">
</template>
<template v-else>
  <label>Email</label>
  <input placeholder="Enter your email address">
</template>
```
那么在上面的代码中切换 loginType 将不会清除用户已经输入的内容。因为两个模板使用了相同的元素，`<input>` 不会被替换掉——仅仅是替换了它的 placeholder。
效果如下：

![](https://wx1.sinaimg.cn/large/006bYVyvgy1frb8gym4qrg30bm037aa2.gif)

这样也不总是符合实际需求，所以 Vue 为你提供了一种方式来表达“这两个元素是完全独立的，不要复用它们”。只需添加一个具有唯一值的 key 属性即可：
举个栗子：
```html
<template v-if="loginType === 'username'">
  <label>Username</label>
  <input placeholder="Enter your username" key="username-input">
</template>
<template v-else>
  <label>Email</label>
  <input placeholder="Enter your email address" key="email-input">
</template>
```
效果如下：

![](https://wx1.sinaimg.cn/large/006bYVyvgy1frb8h2gwdqg30bm037t8u.gif)

<font color="red">注意，`<label>` 元素仍然会被高效地复用，因为它们没有添加 key 属性。</font>

## **v-show**

另一个用于根据条件展示元素的选项是 v-show 指令。用法大致一样：
```html
<h1 v-show="ok">Hello!</h1>
```
不同的是带有 v-show 的元素始终会被渲染并保留在 DOM 中。v-show 只是简单地切换元素的 CSS 属性 display。

<font color="red">注意，v-show 不支持 `<template>` 元素，也不支持 v-else。</font>

## **v-if vs v-show**
v-if 是“真正”的条件渲染，因为它会确保在切换过程中条件块内的事件监听器和子组件适当地被销毁和重建。

v-if 是惰性的：如果在初始渲染时条件为假，则什么也不做——直到条件第一次变为真时，才会开始渲染条件块。

相比之下，v-show 就简单得多——不管初始条件是什么，元素总是会被渲染，并且只是简单地基于 CSS 进行切换。

一般来说，v-if 有更高的切换开销，而 v-show 有更高的初始渲染开销。因此，如果需要非常频繁地切换，则使用 v-show 较好；如果在运行时条件很少改变，则使用 v-if 较好。