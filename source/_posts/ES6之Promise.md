title: ES6之Promise
author: hojun
avatar: https://cdn.jsdelivr.net/gh/honjun/ImageHosting/sina/006bYVyvgy1ftand2qurdj303c03cdfv.jpg
authorDesc: 一个好奇的人
categories: 技术
date: 2018-03-26 20:39:36
authorLink: /about/hojun.html
authorAbout:
tags:
 - es6
keywords: Promise
description: Promise详解
photos:
 - https://cdn.jsdelivr.net/gh/honjun/ImageHosting/sina/006bYVyvgy1fpqj2739epj30m80go3yt.jpg
---
![](https://cdn.jsdelivr.net/gh/honjun/ImageHosting/sina/006bYVyvgy1fpqj2739epj30m80go3yt.jpg)
**Promise 对象用于表示一个异步操作的最终状态（完成或失败），以及其返回的值。**

----------


## **语法**
```html
new Promise( function(resolve, reject) {...} /* executor */  );
```

----------


## **参数**
`executor`
executor是带有 resolve 和 reject 两个参数的函数 。Promise构造函数执行时立即调用executor 函数， resolve 和 reject 两个函数作为参数传递给executor（executor 函数在Promise构造函数返回新建对象前被调用）。resolve 和 reject 函数被调用时，分别将promise的状态改为fulfilled（完成）或rejected（失败）。executor 内部通常会执行一些异步操作，一旦完成，可以调用resolve函数来将promise状态改成fulfilled，或者在发生错误时将它的状态改为rejected。
如果在executor函数中抛出一个错误，那么该promise 状态为rejected。executor函数的返回值被忽略

----------


## **描述**
Promise 对象是一个代理对象（代理一个值），被代理的值在Promise对象创建时可能是未知的。它允许你为异步操作的成功和失败分别绑定相应的处理方法（handlers）。 这让异步方法可以像同步方法那样返回值，但并不是立即返回最终执行结果，而是一个能代表未来出现的结果的promise对象
**一个 Promise有以下几种状态:**

 - pending: 初始状态，既不是成功，也不是失败状态。
 - fulfilled: 意味着操作成功完成。
 - rejected: 意味着操作失败。

pending 状态的 Promise 对象可能触发fulfilled 状态并传递一个值给相应的状态处理方法，也可能触发失败状态（rejected）并传递失败信息。当其中任一种情况出现时，Promise 对象的 then 方法绑定的处理方法（handlers ）就会被调用（then方法包含两个参数：onfulfilled 和 onrejected，它们都是 Function 类型。当Promise状态为fulfilled时，调用 then 的 onfulfilled 方法，当Promise状态为rejected时，调用 then 的 onrejected 方法， 所以在异步操作的完成和绑定处理方法之间不存在竞争）。

因为 Promise.prototype.then 和  Promise.prototype.catch 方法返回promise 对象， 所以它们可以被链式调用。

![](https://cdn.jsdelivr.net/gh/honjun/ImageHosting/sina/006bYVyvgy1fpqj0k8jedj30m9089q38.jpg)

----------


## **属性**
Promise.length
length属性，其值总是为 1 (构造器参数的数目).
Promise.prototype
表示 Promise 构造器的原型.

----------


## **方法**
Promise.all(iterable)
这个方法返回一个新的promise对象，该promise对象在iterable参数对象里所有的promise对象都成功的时候才会触发成功，一旦有任何一个iterable里面的promise对象失败则立即触发该promise对象的失败。这个新的promise对象在触发成功状态以后，会把一个包含iterable里所有promise返回值的数组作为成功回调的返回值，顺序跟iterable的顺序保持一致；如果这个新的promise对象触发了失败状态，它会把iterable里第一个触发失败的promise对象的错误信息作为它的失败错误信息。Promise.all方法常被用于处理多个promise对象的状态集合。（可以参考jQuery.when方法---译者注）
Promise.race(iterable)
当iterable参数里的任意一个子promise被成功或失败后，父promise马上也会用子promise的成功返回值或失败详情作为参数调用父promise绑定的相应句柄，并返回该promise对象。
Promise.reject(reason)
返回一个状态为失败的Promise对象，并将给定的失败信息传递给对应的处理方法
Promise.resolve(value)
返回一个状态由给定value决定的Promise对象。如果该值是一个Promise对象，则直接返回该对象；如果该值是thenable(即，带有then方法的对象)，返回的Promise对象的最终状态由then方法执行决定；否则的话(该value为空，基本类型或者不带then方法的对象),返回的Promise对象状态为fulfilled，并且将该value传递给对应的then方法。通常而言，如果你不知道一个值是否是Promise对象，使用Promise.resolve(value) 来返回一个Promise对象,这样就能将该value以Promise对象形式使用。

----------


## **Promise 原型**

### **属性**

Promise.prototype.constructor
返回被创建的实例函数.  默认为 Promise 函数.

### **方法**

Promise.prototype.catch(onRejected)
添加一个拒绝(rejection) 回调到当前 promise, 返回一个新的promise。当这个回调函数被调用，新 promise 将以它的返回值来resolve，否则如果当前promise 进入fulfilled状态，则以当前promise的完成结果作为新promise的完成结果.
Promise.prototype.then(onFulfilled, onRejected)
添加解决(fulfillment)和拒绝(rejection)回调到当前 promise, 返回一个新的 promise, 将以回调的返回值来resolve.
Promise.prototype.finally(onFinally)
添加一个事件处理回调于当前promise对象，并且在原promise对象解析完毕后，返回一个新的promise对象。回调会在当前promise运行完毕后被调用，无论当前promise的状态是完成(fulfilled)还是失败(rejected)

----------


## **创建Promise**
Promise 对象是由关键字 new 及其构造函数来创建的。该构造函数会?把一个叫做“处理器函数”（executor function）的函数作为它的参数。这个“处理器函数”接受两个函数——resolve 和 reject ——作为其参数。当异步任务顺利完成且返回结果值时，会调用 resolve 函数；而当异步任务失败且返回失败原因（通常是一个错误对象）时，会调用reject 函数。
```js
const myFirstPromise = new Promise((resolve, reject) => {
  // ?做一些异步操作，最终会调用下面两者之一:
  //
  //   resolve(someValue); // fulfilled
  // ?或
  //   reject("failure reason"); // rejected
});
```
想要某个函数?拥有promise功能，只需让其返回一个promise即可。
```js
function myAsyncFunction(url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.onload = () => resolve(xhr.responseText);
    xhr.onerror = () => reject(xhr.statusText);
    xhr.send();
  });
};
```
## **示例**

### **非常简单的例子**

```js
?let myFirstPromise = new Promise(function(resolve, reject){
    //当异步代码执行成功时，我们才会调用resolve(...), 当异步代码失败时就会调用reject(...)
    //在本例中，我们使用setTimeout(...)来模拟异步代码，实际编码时可能是XHR请求或是HTML5的一些API方法.
    setTimeout(function(){
        resolve("成功!"); //代码正常执行！
    }, 250);
});

myFirstPromise.then(function(successMessage){
    //successMessage的值是上面调用resolve(...)方法传入的值.
    //successMessage参数不一定非要是字符串类型，这里只是举个例子
    console.log("Yay! " + successMessage);
});
```

### **高级一点的例子**

本例展示了 Promise 的一些机制。 testPromise() 方法在每次点击 `<button>` 按钮时被调用，该方法会创建一个promise 对象，使用 window.setTimeout() 让Promise等待 1-3 秒不等的时间来填充数据（通过Math.random()方法）。

Promise 的值的填充过程都被日志记录（logged）下来，这些日志信息展示了方法中的同步代码和异步代码是如何通过Promise完成解耦的。

```js
'use strict';
var promiseCount = 0;

function testPromise() {
    let thisPromiseCount = ++promiseCount;

    let log = document.getElementById('log');
    log.insertAdjacentHTML('beforeend', thisPromiseCount +') 开始 (<small>同步代码开始</small>)<br/>');

    // 新构建一个 Promise 实例：使用Promise实现每过一段时间给计数器加一的过程，每段时间间隔为1~3秒不等
    let p1 = new Promise(
        // resolver 函数在 Promise 成功或失败时都可能被调用
       (resolve, reject) => {
            log.insertAdjacentHTML('beforeend', thisPromiseCount +
                ') Promise 开始 (<small>异步代码开始</small>)<br/>');
            // 创建一个异步调用
            window.setTimeout(
                function() {
                    // 填充 Promise
                    resolve(thisPromiseCount);
                }, Math.random() * 2000 + 1000);
        }
    );

    // Promise 不论成功或失败都会调用 then
    // catch() 只有当 promise 失败时才会调用
    p1.then(
        // 记录填充值
        function(val) {
            log.insertAdjacentHTML('beforeend', val +
                ') Promise 已填充完毕 (<small>异步代码结束</small>)<br/>');
        })
    .catch(
        // 记录失败原因
       (reason) => {
            console.log('处理失败的 promise ('+reason+')');
        });

    log.insertAdjacentHTML('beforeend', thisPromiseCount +') Promise made (<small>Sync code terminated</small>)<br/>');
}
```
## **常用栗子**
### **Promise链式调用**
在过去，做多重的异步操作，会导致经典的回调地狱，我们把回调附加到被返回的promise上代替以往的做法，形成一个promise 链：
```js
// 回调地狱
doSomething(function(result) {
  doSomethingElse(result, function(newResult) {
    doThirdThing(newResult, function(finalResult) {
      console.log('Got the final result: ' + finalResult);
    }, failureCallback);
  }, failureCallback);
}, failureCallback);

//采用Promise链式调用之后
doSomething().then(function(result) {
  return doSomethingElse(result);
})
.then(function(newResult) {
  return doThirdThing(newResult);
})
.then(function(finalResult) {
  console.log('Got the final result: ' + finalResult);
})
.catch(failureCallback);
```
then里的参数是可选的，catch(failureCallback) 是 then(null, failureCallback) 的缩略形式。如下所示，也可以用 arrow functions（箭头函数）来表示：
```js
doSomething()
.then(result => doSomethingElse(result))
.then(newResult => doThirdThing(newResult))
.then(finalResult => {
  console.log(`Got the final result: ${finalResult}`);
})
.catch(failureCallback);
```
### **catch之后的链式操作**
在一个失败操作（即一个 catch）之后可以继续使用链式操作，即使链式中的一个动作失败之后还能有助于新的动作继续完成。请阅读下面的例子：
```js
new Promise((resolve, reject) => {
    console.log('Initial');

    resolve();
})
.then(() => {
    throw new Error('Something failed');
    
    console.log('Do this');
})
.catch(() => {
    console.log('Do that');
})
.then(() => {
    console.log('Do this whatever happened before');
});
```