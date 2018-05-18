title: vue.js初入门(九事件处理)
author: hojun
avatar: /images/favicon.png
authorDesc: 一个好奇的人
categories: 技术
date: 2018-05-17 18:32:49
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
## **监听事件**
Vue提供了v-on指令来监听DOM事件
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
      <button v-on:click="counter += 1">增加 1</button>
      <p>这个按钮被点击了 {{ counter }} 次。</p>
    </div>
    <script>
    var vm = new Vue({
      el: '#app',
      data: {
        counter: 0
      }
    })
    </script>
  </body>
</html>
```
## **写在方法中**
许多事件处理的逻辑都很复杂，所以直接把 JavaScript 代码写在 v-on 指令中是不可行的。因此 v-on 可以接收一个方法来调用。
```html
<div id="app">
  <button v-on:click="add">增加 1</button>
  <p>这个按钮被点击了 {{ counter }} 次。</p>
</div>
<script>
var vm = new Vue({
  el: '#app',
  data: {
    counter: 0
  },
  methods: {
    add: function(event) {
      this.counter += 1
    }
  }
})
</script>
```
## **内联处理器方法**
除了直接绑定到一个方法，也可以用内联 JavaScript 语句：
```html
<div id="app">
  <button v-on:click="add(1)">增加 1</button>
  <button v-on:click="add(2)">增加 2</button>
  <p>这个按钮被点击了 {{ counter }} 次。</p>
</div>
<script>
var vm = new Vue({
  el: '#app',
  data: {
    counter: 0
  },
  methods: {
    add: function(n) {
      this.counter += n
    }
  }
})
</script>
```
有时也需要在内联语句处理器中访问原始的 DOM 事件。可以用特殊变量 $event 把它传入方法：
```html
<div id="app">
  <button v-on:click="add(1,$event)">增加 1</button>
  <p>这个按钮被点击了 {{ counter }} 次。</p>
</div>
<script>
var vm = new Vue({
  el: '#app',
  data: {
    counter: 0
  },
  methods: {
    add: function(n, event) {
      if (event) {
        alert(event.target.tagName)
      }
      this.counter += n
    }
  }
})
</script>
```
## **事件修饰符**
在事件处理程序中调用 event.preventDefault() 或 event.stopPropagation() 是非常常见的需求。尽管我们可以在 methods 中轻松实现这点，但更好的方式是：methods 只有纯粹的数据逻辑，而不是去处理 DOM 事件细节。

为了解决这个问题， Vue.js 为 v-on 提供了 事件修饰符。通过由点(.)表示的指令后缀来调用修饰符。

 - .stop
 - .prevent
 - .capture
 - .self
 - .once

```html
<!-- 阻止单击事件冒泡 -->
<a v-on:click.stop="doThis"></a>
<!-- 提交事件不再重载页面 -->
<form v-on:submit.prevent="onSubmit"></form>
<!-- 修饰符可以串联  -->
<a v-on:click.stop.prevent="doThat"></a>
<!-- 只有修饰符 -->
<form v-on:submit.prevent></form>
<!-- 添加事件监听器时使用事件捕获模式 -->
<!-- 即元素自身触发的事件先在此处处理，然后才交由内部元素进行处理 -->
<div v-on:click.capture="doThis">...</div>
<!-- 只当在 event.target 是当前元素自身时触发处理函数 -->
<!-- 即事件不是从内部元素触发的 -->
<div v-on:click.self="doThat">...</div>

<!-- 点击事件将只会触发一次 -->
<a v-on:click.once="doThis"></a>
```
注意：使用修饰符时，顺序很重要；相应的代码会以同样的顺序产生。因此，用 v-on:click.prevent.self 会阻止所有的点击，而 v-on:click.self.prevent 只会阻止对元素自身的点击。
**2.1.4 新增**

```html
<!-- 点击事件将只会触发一次 -->
<a v-on:click.once="doThis"></a>
```
不像其它只能对原生的 DOM 事件起作用的修饰符，.once 修饰符还能被用到自定义的组件事件上。如果你还没有阅读关于组件的文档，现在大可不必担心。

**2.3.0 新增**
**Vue 还对应 addEventListener 中的 passive 选项提供了 .passive 修饰符。**
```html
<!-- 滚动事件的默认行为 (即滚动行为) 将会立即触发 -->
<!-- 而不会等待 `onScroll` 完成  -->
<!-- 这其中包含 `event.preventDefault()` 的情况 -->
<div v-on:scroll.passive="onScroll">...</div>
```
这个 .passive 修饰符尤其能够提升移动端的性能。 
注意：不要把 .passive 和 .prevent 一起使用，因为 .prevent 将会被忽略，同时浏览器可能会向你展示一个警告。请记住，.passive 会告诉浏览器你不想阻止事件的默认行为。

## **按键修饰符**
在监听键盘事件时，我们经常需要检查常见的键值。Vue 允许为 v-on 在监听键盘事件时添加按键修饰符：
```html
<!-- 只有在 `keyCode` 是 13 时调用 `vm.submit()` -->
<input v-on:keyup.13="submit">
```
记住所有的 keyCode 比较困难，所以 Vue 为最常用的按键提供了别名：
```html
<!-- 同上 -->
<input v-on:keyup.enter="submit">

<!-- 缩写语法 -->
<input @keyup.enter="submit">
```
全部的按键别名：

 - .enter
 - .tab
 - .delete (捕获“删除”和“退格”键)
 - .esc
 - .space
 - .up
 - .down
 - .left
 - .right

可以通过全局 config.keyCodes 对象自定义按键修饰符别名：
```html
// 可以使用 `v-on:keyup.f1`
Vue.config.keyCodes.f1 = 112
```
**自动匹配按键修饰符**
**2.5.0 新增**

你也可直接将 KeyboardEvent.key 暴露的任意有效按键名转换为 kebab-case 来作为修饰符：
```html
<input @keyup.page-down="onPageDown">
```
在上面的例子中，处理函数仅在 $event.key === 'PageDown' 时被调用。

有一些按键 (.esc 以及所有的方向键) 在 IE9 中有不同的 key 值, 如果你想支持 IE9，它们的内置别名应该是首选。

## **系统修饰键**
**2.1.0 新增**
可以用如下修饰符来实现仅在按下相应按键时才触发鼠标或键盘事件的监听器。

 - .ctrl
 - .alt
 - .shift
 - .meta

注意：在 Mac 系统键盘上，meta 对应 command 键 (⌘)。在 Windows 系统键盘 meta 对应 Windows 徽标键 (⊞)。在 Sun 操作系统键盘上，meta 对应实心宝石键 (◆)。在其他特定键盘上，尤其在 MIT 和 Lisp 机器的键盘、以及其后继产品，比如 Knight 键盘、space-cadet 键盘，meta 被标记为“META”。在 Symbolics 键盘上，meta 被标记为“META”或者“Meta”。

例如：
```html
<!-- Alt + C -->
<input @keyup.alt.67="clear">

<!-- Ctrl + Click -->
<div @click.ctrl="doSomething">Do something</div>
```
请注意修饰键与常规按键不同，在和 keyup 事件一起用时，事件触发时修饰键必须处于按下状态。换句话说，只有在按住 ctrl 的情况下释放其它按键，才能触发 keyup.ctrl。而单单释放 ctrl 也不会触发事件。如果你想要这样的行为，请为 ctrl 换用 keyCode：keyup.17。

**.exact 修饰符**
**2.5.0 新增**

.exact 修饰符允许你控制由精确的系统修饰符组合触发的事件。
```html
<!-- 即使 Alt 或 Shift 被一同按下时也会触发 -->
<button @click.ctrl="onClick">A</button>

<!-- 有且只有 Ctrl 被按下的时候才触发 -->
<button @click.ctrl.exact="onCtrlClick">A</button>

<!-- 没有任何系统修饰符被按下的时候才触发 -->
<button @click.exact="onClick">A</button>
```
**鼠标按钮修饰符**
**2.2.0 新增**

 - .left
 - .right
 - .middle

这些修饰符会限制处理函数仅响应特定的鼠标按钮。

## **为什么在 HTML 中监听事件?**
你可能注意到这种事件监听的方式违背了关注点分离 (separation of concern) 这个长期以来的优良传统。但不必担心，因为所有的 Vue.js 事件处理方法和表达式都严格绑定在当前视图的 ViewModel 上，它不会导致任何维护上的困难。实际上，使用 v-on 有几个好处：

 - 扫一眼 HTML 模板便能轻松定位在 JavaScript 代码里对应的方法。
 - 因为你无须在 JavaScript 里手动绑定事件，你的 ViewModel 代码可以是非常纯粹的逻辑，和 DOM 完全解耦，更易于测试。
 - 当一个 ViewModel 被销毁时，所有的事件处理器都会自动被删除。你无须担心如何自己清理它们。
