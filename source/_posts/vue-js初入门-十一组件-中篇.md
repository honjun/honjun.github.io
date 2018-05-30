title: vue.js初入门(十一组件-中篇)
author: hojun
avatar: /images/favicon.png
authorDesc: 一个好奇的人
categories: 技术
date: 2018-05-21 20:23:38
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
在 Vue 中，父子组件的关系可以总结为 props down, events up 。父组件通过 props 向下传递数据给子组件，子组件通过 events 给父组件发送消息。
![](https://wx2.sinaimg.cn/large/006bYVyvgy1frj8fdhm2nj30ly0hydg6.jpg)
## **使用Props传递数据**
组件实例的作用域是孤立的。这意味着不能并且不应该在子组件的模板内直接引用父组件的数据。可以使用 props 把数据传给子组件。

prop 是父组件用来传递数据的一个自定义属性。子组件需要显式地用 props 选项 声明 “prop”：
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
      <child message="hello!"></child>
    </div>
    <script>
      new Vue({
        el: '#app',
        components: {
          child: {
            props: ['message'],
            template: '<span>{{ message }}</span>'
          }
        }
      })
    </script>
  </body>
</html>
```
## **camelCase(驼峰命名法) vs. kebab-case(短横线命名法)**
因为HTML 特性不区分大小写。当使用非字符串模版时，名字形式为 camelCase(驼峰命名法) 的 prop 用作特性时，需要转为 kebab-case(短横线命名法)（短横线隔开）：
```html
<div id="app">
  <child my-message="hello!"></child>
</div>
<script>
  new Vue({
    el: '#app',
    components: {
      child: {
        props: ['myMessage'],
        template: '<span>{{ myMessage }}</span>'
      }
    }
  })
</script>
```
## **动态 Props**
类似于用 v-bind 绑定 HTML 特性到一个表达式，也可以用 v-bind 绑定动态 props 到父组件的数据。每当父组件的数据变化时，也会传导给子组件：
```html
<div id="app">
  <div>
    <input v-model="parentMsg">
    <br>
    <child v-bind:my-message="parentMsg"></child>
   <!-- <child :my-message="parentMsg"></child>-->
  </div>
</div>
<script>
  new Vue({
    el: '#app',
    data: {
      parentMsg: 'Message from parent'
    },
    components: {
      child: {
        props: ['myMessage'],
        template: '<span>{{myMessage}}</span>'
      }
    }
  })
</script>
```
## **字面量语法 vs 动态语法**
初学者常犯的一个错误是使用字面量语法传递数值：
```html
<!-- 传递了一个字符串"1" --> 
<comp some-prop="1"></comp> 
```
因为它是一个字面 prop ，它的值以字符串 "1"。如果想传递一个实际的数字，需要使用 v-bind ，从而让它的值被当作 JavaScript 表达式计算：
```html
<!-- 传递实际的数字 --> 
<comp v-bind:some-prop="1"></comp>
```
## **单向数据流**
prop 是单向绑定的：当父组件的属性变化时，将传导给子组件，但是不会反过来。这是为了防止子组件无意修改了父组件的状态——这会让应用的数据流难以理解。

另外，每次父组件更新时，子组件的所有 prop 都会更新为最新值。这意味着你不应该在子组件内部改变 prop 。如果你这么做了，Vue 会在控制台给出警告。

通常有两种改变 prop 的情况：

prop 作为初始值传入，子组件之后只是将它的初始值作为本地数据的初始值使用；

prop 作为需要被转变的原始值传入。

更确切的说这两种情况是：

定义一个局部 data 属性，并将 prop 的初始值作为局部数据的初始值。

定义一个 computed 属性，此属性从 prop 的值计算得出。

**注意在 JavaScript 中对象和数组是引用类型，指向同一个内存空间，如果 prop 是一个对象或数组，在子组件内部改变它会影响父组件的状态。**

## **Prop 验证**
组件可以为 props 指定验证要求。如果未指定验证要求，Vue 会发出警告。当组件给其他人使用时这很有用。

prop 是一个对象而不是字符串数组时，它包含验证要求：
```js
Vue.component('example', {
  props: {
    // 基础类型检测 （`null` 意思是任何类型都可以） 
    propA: Number,
    // 多种类型 
    propB: [String, Number],
    // 必传且是字符串 
    propC: {
      type: String,
      required: true 
    },
    // 数字，有默认值 
    propD: {
      type: Number,
      default: 100 
    },
    // 数组／对象的默认值应当由一个工厂函数返回 
    propE: {
      type: Object,
      default: function () {
        return { message: 'hello' }
      }
    },
    // 自定义验证函数 
    propF: {
      validator: function (value) {
        return value > 10 
      }
    }
  }
})
```
type 可以是下面原生构造器：

 - String
 - Number
 - Boolean
 - Function
 - Object
 - Array

type 也可以是一个自定义构造器，使用 instanceof 检测。

当 prop 验证失败了， Vue 将拒绝在子组件上设置此值，如果使用的是开发版本会抛出一条警告。