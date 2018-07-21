title: 《实战ES2015》之var、let、const
author: hojun
avatar: /images/favicon.png
authorDesc: 一个好奇的人
categories: 技术
comments: true
date: 2018-07-16 21:59:26
authorLink:
authorAbout:
series: 《实战ES2015》
tags:
 - 悦读
 - js
 - es5
keywords: ES5
description: 一直想学习ECMAScript(ES)，但是一直没有行动，这次从网上找到这本书（讲的是ES5），还是准备看下再去接触ES6。
photos:
 - https://wx2.sinaimg.cn/small/006bYVyvgy1ftc1xvhj97j30me0gcmyh.jpg
---
![](https://wx2.sinaimg.cn/large/006bYVyvgy1ftc1xvhj97j30me0gcmyh.jpg)

## 前言

一直想学习ECMAScript(ES)，但是一直没有行动，这次从网上找到这本书（讲的是ES5），还是准备看下再去接触ES6。
## let 与 var 的异同点比较

异同点|let|var
:-:|:-:|:-:
定义变量|v|v
可被释放|v|v
可被提升||v
重复定义检查|v|
可被用于块状作用域|v|

var可以让同一个变量名在同一个作用域里被定义多次，而这种“特性”很可能会导致一些问题。而使用let定义，当同一个变量名在同一个域内被定义第二次时，便会抛出错误，以警示开发者修改代码

下面这段代码科直观的说明for循环中使用var和let的区别
```js
const arr1 = []
for (var i = 0; i < 3; ++i) {
    arr1.push(() => i)
}
const arr2 = arr1.map(x => x())

const arr3 = []
for (let i = 0; i < 3; ++i) {
    arr3.push(() => i)
}
const arr4 = arr3.map(x => x())
console.log('var: ' + arr2.join(',')) //=>var: 3,3,3
console.log('let: ' + arr4.join(',')) //let : 1,2,3
```

## const 
const的实现原理确实只限创造一个不可变的内存绑定，而在某些情况下，并非值不可变。
```js
const foo= {
    a: 1，
    b: 2
}
```
foo对象字面量定义的内存存储空间

内存偏移值（假设）|内容
:-:|:-:
0|Object foo
1|Property a
2|Property b

const在这段代码中所起到的作用是：将常量foo与内存偏移值为0的内存空间绑定起来并锁死。然而内存偏移值分别为1和2的a和b属性并没有得到强绑定，导致了以下情况的发生。
```js
const foo = {
    a: 1
}
foo.a = 2
foo.b = 3

console.log(foo.a) //=>2
console.log(foo.b) //=>3
```
字符串、数字、布尔值等值类型因为只使用了一段内存空间，并不会有如上这种问题。对象、数组等稀疏引用类型值会存在这种问题。

### 如何解决

我们只要配合ES5中的Object.freeze()方法
```js
"use strict"
Object.deepFreeze = function(obj) {
    var propNames = Object.getOwnPropertyNames(obj)
    
    propNames.forEach(function(name) {
        var prop = obj[name]
        if (typeof prop == 'object' && prop !== null)
            Object.deepFreeze(prop)
    })
    
    return Object.freeze(obj)
}

const obj = Object.deepFreeze({
    a: {
        b: 1
    }
})
obj.a.c = 2 //Uncaught TypeError: Can't add property c, object is not extensible
obj.a.b = 2 //Uncaught TypeError: Cannot assign to read only property 'b' of object '#<Object>'
console.log(obj)
```

除了let会产生块级作用域以为，const同样可以产生块级作用域，其定义的常量也同样遵循变量在作用域中的生命周期。也就是说，与我们熟知的全局变量不同的是，使用const定义的常量同样是可以灵活使用的，比如定义一些只针对缪戈作用域或是某个函数、算法内的常量。

一旦js引擎进入一个作用域时，会先扫描该作用域内的定义语句。且被扫描到的变量名都会进入未声明阶段。以下代码来理解这点:
```html
<script type="text/javascript">
  var foo = 1;
  (function() {
    console.log(foo); //1
  })()
</script>
```
```html
<script type="text/javascript">
  var foo = 1;
  (function() {
    console.log(foo); //undefined
    var foo = 2;
  })()
</script>
```

闭包的原理便是利用高阶函数来产生能够穿透作用域的引用
```html
<script type="text/javascript">
function outter() {
    const innerVariable = 'foobar'
    
    return function() {
        return innerVariable
    }
}

const fn = outter()
console.log(fn()) //=>foobar
</script>
```

未完待续......Continued......