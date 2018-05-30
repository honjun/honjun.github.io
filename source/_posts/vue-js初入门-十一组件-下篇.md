title: vue.js初入门(十一组件-下篇)
author: hojun
avatar: /images/favicon.png
authorDesc: 一个好奇的人
categories: 技术
date: 2018-05-22 21:12:20
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
## **自定义事件**
我们知道，父组件是使用 props 传递数据给子组件，但如果子组件要把数据传递回去，应该怎样做？那就是自定义事件！
使用 v-on 绑定自定义事件
每个 Vue 实例都实现了事件接口(Events interface)，即：

 - 使用 $on(eventName) 监听事件
 - 使用 $emit(eventName) 触发事件

另外，父组件可以在使用子组件的地方直接用 v-on 来监听子组件触发的事件。

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
  <p>{{ total }}</p> 
  <button-counter v-on:increment="incrementTotal"></button-counter> 
  <button-counter v-on:increment="incrementTotal"></button-counter> 
</div>
<script>
  Vue.component('button-counter', {
    template: '<button v-on:click="increment">{{ counter }}</button>',
    data: function () {
      return {
        counter: 0
      }
    },
    methods: {
      increment: function () {
        this.counter += 1
        this.$emit('increment')
      }
    },
  })
  new Vue({
    el: '#app',
    data: {
      total: 0
    },
    methods: {
      incrementTotal: function () {
        this.total += 1
      }
    }
  })
</script>
  </body>
</html>
```
如下：
![](https://wx3.sinaimg.cn/large/006bYVyvgy1frkedmbjtgg307805eq2y.gif)
## **给组件绑定原生事件**
有时候，你可能想在某个组件的根元素上监听一个原生事件。可以使用 .native 修饰 v-on 。例如：
```html
<my-component v-on:click.native="doTheThing"></my-component>
```
## **使用自定义事件的表单输入组件**
自定义事件也可以用来创建自定义的表单输入组件，使用 v-model 来进行数据双向绑定。牢记，表单控件进行数据绑定时的语法：
```html
<input v-model="something"> 
```
仅仅是一个语法糖：
```html
<input v-bind:value="something" v-on:input="something = $event.target.value"> 
```
所以在组件中使用时，它相当于下面的简写：
```html
<input v-bind:value="something" v-on:input="something = arguments[0]">
```
所以要让组件的 v-model 生效，它必须：

 - 接受一个 value 属性
 - 在有新的 value 时触发 input 事件

举个栗子：
```html
<div id="app">
  <my-input label="Message" v-model="message" ></my-input> 
</div>
<script>
Vue.component('my-input', {
  template: '\ 
  <div class="form-group">\
  <label v-bind:for="randomId">{{ label }}:</label>\
  <input v-bind:id="randomId" v-bind:value="value" v-on:input="onInput">\
  </div>\
  ',
  props: ['value', 'label'],
  data: function () {
    return {
      randomId: 'input-' + Math.random()
    }
  },
  methods: {
    onInput: function (event) {
    this.$emit('input', event.target.value)
    }
  },
})
new Vue({
  el: '#v-model-example',
  data: {
    message: 'hello' 
  }
})
</script>
```
## **非父子组件通信**
有时候非父子关系的组件也需要通信。在简单的场景下，使用一个空的 Vue 实例作为中央事件总线：
```js
var bus = new Vue()
```
```js
// 触发组件 A 中的事件 
bus.$emit('id-selected', 1)
```
```js
// 在组件 B 创建的钩子中监听事件 
bus.$on('id-selected', function (id) {
// ... 
})
```
## **使用 Slots 分发内容**
在使用组件时，常常要像这样组合它们：
```html
<app> 
  <app-header></app-header> 
  <app-footer></app-footer> 
</app> 
```
注意两点：

 - `<app>` 组件不知道它的挂载点会有什么内容。挂载点的内容是由`<app>`的父组件决定的。
 - `<app>` 组件很可能有它自己的模版。

为了让组件可以组合，我们需要一种方式来混合父组件的内容与子组件自己的模板。这个过程被称为 内容分发 (或 “transclusion” 如果你熟悉 Angular)。Vue.js 实现了一个内容分发 API ，参照了当前 Web组件规范草案，使用特殊的 `<slot>` 元素作为原始内容的插槽。

## **编译作用域**
在深入内容分发 API 之前，我们先明确内容的编译作用域。假定模板为：
```html
<child-component> 
{{ message }}
</child-component> 
```
message 应该绑定到父组件的数据，还是绑定到子组件的数据？答案是父组件。组件作用域简单地说是：

父组件模板的内容在父组件作用域内编译；子组件模板的内容在子组件作用域内编译。

一个常见错误是试图在父组件模板内将一个指令绑定到子组件的属性/方法：
```html
<!-- 无效 --> 
<child-component v-show="someChildProperty"></child-component> 
```
假定 someChildProperty 是子组件的属性，上例不会如预期那样工作。父组件模板不应该知道子组件的状态。

如果要绑定子组件内的指令到一个组件的根节点，应当在它的模板内这么做：
```html
Vue.component('child-component', {
  // 有效，因为是在正确的作用域内 
  template: '<div v-show="someChildProperty">Child</div>',
  data: function () {
  return {
    someChildProperty: true 
  }
}
})
```
类似地，分发内容是在父组件作用域内编译。
## **单个 Slot**
除非子组件模板包含至少一个 `<slot>` 插口，否则父组件的内容将会被丢弃。当子组件模板只有一个没有属性的 slot 时，父组件整个内容片段将插入到 slot 所在的 DOM 位置，并替换掉 slot 标签本身。

最初在 `<slot>` 标签中的任何内容都被视为备用内容。备用内容在子组件的作用域内编译，并且只有在宿主元素为空，且没有要插入的内容时才显示备用内容。

假定 my-component 组件有下面模板：
```html
<div> 
  <h2>I'm the child title</h2> 
  <slot> 
  如果没有分发内容则显示我。
  </slot> 
</div> 
```
父组件模版：
```html
<div> 
  <h1>I'm the parent title</h1> 
  <my-component> 
    <p>This is some original content</p> 
    <p>This is some more original content</p> 
  </my-component> 
</div> 
```
渲染结果：
```html
<div> 
  <h1>I'm the parent title</h1> 
  <div> 
    <h2>I'm the child title</h2> 
    <p>This is some original content</p> 
    <p>This is some more original content</p> 
  </div> 
</div> 
```
## **具名Slots**
`<slot>` 元素可以用一个特殊的属性 name 来配置如何分发内容。多个 slot 可以有不同的名字。具名 slot 将匹配内容片段中有对应 slot 特性的元素。

仍然可以有一个匿名 slot ，它是默认 slot ，作为找不到匹配的内容片段的备用插槽。如果没有默认的 slot ，这些找不到匹配的内容片段将被抛弃。

例如，假定我们有一个 app-layout 组件，它的模板为：
```html
<div class="container"> 
  <header> 
    <slot name="header"></slot> 
  </header> 
  <main> 
    <slot></slot> 
  </main> 
  <footer> 
    <slot name="footer"></slot> 
  </footer> 
</div> 
```
父组件模版：
```html
<app-layout> 
  <h1 slot="header">Here might be a page title</h1> 
  <p>A paragraph for the main content.</p> 
  <p>And another one.</p> 
  <p slot="footer">Here's some contact info</p> 
</app-layout> 
```
渲染结果为：
```html
<div class="container"> 
  <header> 
    <h1>Here might be a page title</h1> 
  </header> 
  <main> 
    <p>A paragraph for the main content.</p> 
    <p>And another one.</p> 
  </main> 
  <footer> 
    <p>Here's some contact info</p> 
  </footer> 
</div> 
```
在组合组件时，内容分发 API 是非常有用的机制。

## **动态组件**
多个组件可以使用同一个挂载点，然后动态地在它们之间切换。使用保留的 <component> 元素，动态地绑定到它的 is 特性：
```js
var vm = new Vue({
  el: '#example',
  data: {
    currentView: 'home' 
  },
  components: {
    home: { /* ... */ },
    posts: { /* ... */ },
    archive: { /* ... */ }
  }
})
```
```html
<component v-bind:is="currentView"> 
<!-- 组件在 vm.currentview 变化时改变！ --> 
</component> 
```
也可以直接绑定到组件对象上：
```html
var Home = {
  template: '<p>Welcome home!</p>' 
}
var vm = new Vue({
  el: '#example',
  data: {
    currentView: Home
  }
})
```
**keep-alive**
如果把切换出去的组件保留在内存中，可以保留它的状态或避免重新渲染。为此可以添加一个 keep-alive 指令参数：
```html
<keep-alive> 
  <component :is="currentView"> 
  <!-- 非活动组件将被缓存！ --> 
  </component> 
</keep-alive> 
```
在API 参考查看更多 <keep-alive> 的细节。

## **杂项**
编写可复用组件
在编写组件时，记住是否要复用组件有好处。一次性组件跟其它组件紧密耦合没关系，但是可复用组件应当定义一个清晰的公开接口。

Vue 组件的 API 来自三部分 - props, events 和 slots ：

 - Props 允许外部环境传递数据给组件
 - Events 允许组件触发外部环境的副作用
 - Slots 允许外部环境将额外的内容组合在组件中。

使用 v-bind 和 v-on 的简写语法，模板的缩进清楚且简洁：

## **子组件索引**
尽管有 props 和 events ，但是有时仍然需要在 JavaScript 中直接访问子组件。为此可以使用 ref 为子组件指定一个索引 ID 。例如：
```html
<div id="parent"> 
  <user-profile ref="profile"></user-profile> 
</div> 
```
```js
var parent = new Vue({ el: '#parent' })
// 访问子组件 
var child = parent.$refs.profile
```
当 ref 和 v-for 一起使用时， ref 是一个数组或对象，包含相应的子组件。

`$refs` 只在组件渲染完成后才填充，并且它是非响应式的。它仅仅作为一个直接访问子组件的应急方案——应当避免在模版或计算属性中使用 `$refs` 。

## **异步组件**
在大型应用中，我们可能需要将应用拆分为多个小模块，按需从服务器下载。为了让事情更简单， Vue.js 允许将组件定义为一个工厂函数，动态地解析组件的定义。Vue.js 只在组件需要渲染时触发工厂函数，并且把结果缓存起来，用于后面的再次渲染。例如：
```js
Vue.component('async-example', function (resolve, reject) {
setTimeout(function () {
resolve({
template: '<div>I am async!</div>' 
})
}, 1000)
})
```
工厂函数接收一个 resolve 回调，在收到从服务器下载的组件定义时调用。也可以调用 reject(reason) 指示加载失败。这里 setTimeout 只是为了演示。怎么获取组件完全由你决定。推荐配合使用 ：Webpack 的代码分割功能：
```html
Vue.component('async-webpack-example', function (resolve) {
// 这个特殊的 require 语法告诉 webpack 
// 自动将编译后的代码分割成不同的块， 
// 这些块将通过 Ajax 请求自动下载。 
require(['./my-async-component'], resolve)
})
```
你可以使用 Webpack 2 + ES2015 的语法返回一个 Promise resolve 函数：
```html
Vue.component(
'async-webpack-example',
() => System.import('./my-async-component')
)
```
如果你是 Browserify 用户,可能就无法使用异步组件了,它的作者已经表明 Browserify 是不支持异步加载的。如果这个功能对你很重要，请使用 Webpack。

## **组件命名约定**
当注册组件（或者 props）时，可以使用 kebab-case ，camelCase ，或 TitleCase 。Vue 不关心这个。
```js
// 在组件定义中 
components: {
// 使用 camelCase 形式注册 
'kebab-cased-component': { /* ... */ },
'camelCasedComponent': { /* ... */ },
'TitleCasedComponent': { /* ... */ }
}
```
在 HTML 模版中，请使用 kebab-case 形式：
```html
<!-- 在HTML模版中始终使用 kebab-case --> 
<kebab-cased-component></kebab-cased-component> 
<camel-cased-component></camel-cased-component> 
<title-cased-component></title-cased-component> 
```
当使用字符串模式时，可以不受 HTML 的 case-insensitive 限制。这意味实际上在模版中，你可以使用 camelCase 、 PascalCase 或者 kebab-case 来引用你的组件和 prop：
```html
<!-- 在字符串模版中可以用任何你喜欢的方式! --> 
<my-component></my-component> 
<myComponent></myComponent> 
<MyComponent></MyComponent> 
```
如果组件未经 slot 元素传递内容，你甚至可以在组件名后使用 / 使其自闭合：
```
<my-component/> 
```
当然，这只在字符串模版中有效。因为自闭的自定义元素是无效的 HTML ，浏览器原生的解析器也无法识别它。