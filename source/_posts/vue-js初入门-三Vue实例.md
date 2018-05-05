title: vue.js初入门(三Vue实例)
author: hojun
avatar: /images/favicon.png
authorDesc: 一个好奇的人
categories: 技术
date: 2018-05-05 16:10:51
authorLink:
authorAbout:
tags:
 - vue
 - 前端
keywords: Vue实例
description: 在实例化 Vue 时，需要传入一个选项对象，它可以包含数据、模板、挂载元素、方法、生命周期钩子等选项。
photos:
 - https://wx3.sinaimg.cn/large/006bYVyvgy1fqxbjqosvfj30cj08caah.jpg
---
## **创建实例语法**
```js
var vm = new Vue({
// 选项
})
```
在实例化 Vue 时，需要传入一个选项对象，它可以包含数据、模板、挂载元素、方法、生命周期钩子等选项。
## **属性与方法**
每个 Vue 实例都会代理其 data 对象里所有的属性：
```js
// 我们的数据对象
var data = { a: 1 }

// 该对象被加入到一个 Vue 实例中
var vm = new Vue({
  data: data
})

// 获得这个实例上的属性
// 返回源数据中对应的字段
vm.a == data.a // => true

// 设置属性也会影响到原始数据
vm.a = 2
data.a // => 2

// ……反之亦然
data.a = 3
vm.a // => 3
```
当一个 Vue 实例被创建时，它向 Vue 的响应式系统中加入了其 data 对象中能找到的所有的属性。当这些属性的值发生改变时，视图将会产生“响应”，即匹配更新为新的值。

值得注意的是:只有当实例被创建时 data 中存在的属性才是响应式的。也就是说如果你添加一个新的属性，比如：
```js
vm.b = 'hi'
```
那么对 b 的改动将不会触发任何视图的更新。
那么如果对var data对象改动会如何呢？
```html
<div id="app"> 
 {{ c }}
</div> 
<script>
  var data = { a: 1, b: 2 }
  //在实例化之前，页面上能输出3
  // data.c = 3

  var vm = new Vue({
    el: '#app',
    data: data
  })
  //在实例化之后，报错：c is not defined
  data.c = 3;

  console.log(data)
</script>
```
如果我们需要改变它呢？假设一开始它为空或不存在。我们可以设置一些初始值。比如：
```js
data: {
  a: '',
  b: 0,
  c: false,
  d: [],
  e: null
}
```

注意：如果使用了Object.freeze()方法，这会阻止修改现有的属性，也意味着响应系统无法再追踪变化。
```html
<div id="app">
  <p>{{ foo }}</p>
  <!-- 这里的 `foo` 不会更新！ -->
  <button v-on:click="foo = 'baz'">Change it</button>
</div>
<script>
var obj = {
  foo: 'bar'
}

Object.freeze(obj)

new Vue({
  el: '#app',
  data: obj
})
</script>
```
MDN解释如下：Object.freeze() 方法可以冻结一个对象，冻结指的是不能向这个对象添加新的属性，不能修改其已有属性的值，不能删除已有属性，以及不能修改该对象已有属性的可枚举性、可配置性、可写性。也就是说，这个对象永远是不可变的。该方法返回被冻结的对象。

除了数据属性，Vue 实例还暴露了一些有用的实例属性与方法。它们都有前缀 $，以便与用户定义的属性区分开来。例如：
```js
var data = { a: 1 }
var vm = new Vue({
  el: '#example',
  data: data
})

vm.$data === data // => true
vm.$el === document.getElementById('example') // => true

// $watch 是一个实例方法
vm.$watch('a', function (newValue, oldValue) {
  // 这个回调将在 `vm.a` 改变后调用
})
```
## 实例生命周期

![](http://wx1.sinaimg.cn/large/006bYVyvgy1fr0i9wvg1ej30xc2cft9s.jpg)

## Vue1.0和2.0的对比

vue 1.0|vue 2.0|说明
:-|:-|:-
init|beforeCreate|组件实例刚被创建，组件属性计算之前，如data属性等
created|created|组件实例化创建完成，属性已绑定，但DOM还未生成，`$el`属性还不存在
beforeComoile|beforeMount|模板编译/挂载之前
compiled|mounted|模板编译/挂载之后
ready|mounted|模板编译/挂载之后（不保证组件已在document中)
-|beforeUpdate|组件更新之前
-|updated|组件更新之后
-|activated|for keep-alive,组件被激活时调用
-|deactivated|for keep-alive,组件被移除时调用
attached|-|在 `vm.$el` 插入 DOM 时调用。必须是由指令或实例方法插入。
detached|-|在 `vm.$el` 从 DOM 中删除时调用。必须是由指令或实例方法删除
beforeDestory|beforeDestory|组件销毁前调用
destroyed|destroyed|组件销毁后调用