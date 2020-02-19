title: Uni App小白学习笔记(四)
author: hojun
avatar: https://cdn.jsdelivr.net/gh/honjun/ImageHosting/sina/006bYVyvgy1ftand2qurdj303c03cdfv.jpg
authorLink: /about/hojun.html
authorDesc: 一个好奇的人
categories: 技术
comments: true
date: 2019-09-14 10:00:05
authorAbout:
series: uniapp
tags: uniapp
keywords: uniapp题库
description:
photos:
---
### 前言

出了前三篇教程，感觉看的人很少。可能是uniapp目前使用的人太少了，可能他不够成熟，背后又不是大厂。不过嘛这系列教程是几个月前就准备好了的，不给他写完不符合我的性格。但后面的教程的节骤会比较快2333333~

### 实现多选题

回归正题，这篇教程开始实现多选题，首选项要思考多选题怎么和用户交互。一时没有想可以参考同类刷题APP的交互方式。这里参考驾考宝典的多选题实现。

首先，和单选题不同的是，在选项下面多了个确认按钮。当用户没有点击确认按钮，去点击选项的时候，使选项变灰。表示已被选择。待用户选完所有选项后，点击提交。再去判断某一个选项是否为正确选项。

### CSS讲解

上一篇主要讲解的是methods的逻辑，这一篇就来讲解css控制来实现正确答案和错误答案颜色改变的实现吧。
选项的结构如下：
```html
<ul :class="{active: isActive}">
  <li class="option" :class="[question.answer.indexOf('A') !== -1 ? 'green' : 'red', select_a == true ? 'gray' : 'black']" @click="select('A')">
    <i>A</i>
    <view class="option-text">{{question.optionA}}</view>
  </li>
```
一开始，isActive为false，即ul上没有active这个class，当点击提交了isActive才为true。然后看下li的class。首先option:
```css
.option:first-child {
  margin-top: 10px;
}
.option {
  min-height: 100upx;
}
.option i {
  font-style: normal;
  line-height: 32px;
  color: #4680fe;
  text-align: center;
  display: inline-block;
  border: 1px solid #4680fe;
  height: 32px;
  width: 32px;
  margin: 0 10px 0 10px;
  float: left;
  border-radius: 25px;
}
```
没啥好说的，就是一开始默认样式。
```html
:class="[question.answer.indexOf('A') !== -1 ? 'green' : 'red', 
``
:class不想解释，后面用indexOf('A') !== -1判断是否是正确答案，是的话给加green，不是加的red。但不是一开始就显示的，原因在于css是这样写的：
```css
.active .green i {
  color: #fff;
  background-color: #1AAD19;
  border: 1px solid #1AAD19;
}
.active .red.gray i {
  color: #fff;
  background-color: #FF3333;
  border: 1px solid #FF3333;
}
.active .green {
  color: #1AAD19;
}
.active .red.gray {
  color: #FF3333;
}
```
只有active存在时才有对应样式，即用户点击了提交才会变色。
```html
select_a == true ? 'gray' : 'black'
```
select_a表示是否选择了A，ture表示选择了A，给加上gray，否则加上black。（black其实没写这个类的css,因为默认就是黑色）

### 其他代码
```js
import question_data from '../multiple_choice.js'
  export default {
    data() {
      return {
        question_data: question_data,
        count: 0,
        type: '多选题',
        question: {},
        select_option: '',
        selected: false,
        startPoint: {},
        endPoint: {},
        page_index: 0,
        isActive: false,
        select_a: false,
        select_b: false,
        select_c: false,
        select_d: false,
      }
    },
    onLoad() {
      this.question = this.question_data[0]
      this.count = this.question_data.length
    },
    methods: {
      commit() {
        this.isActive = true
      },
      select(option) {
        // if (this.selected) return
        if (option !== this.question.answer) {
          switch (option) {
            case 'A':
              this.select_a = !this.select_a
              break
            case 'B':
              this.select_b = !this.select_b
              break
            case 'C':
              this.select_c = !this.select_c
              break
            case 'D':
              this.select_d = !this.select_d
              break
            default:
                break
          }
        }
        this.selected = true
      },
      ......
      ......
```
文章里贴太多代码了不好，后面会把代码发布到github上获公众号上。
哦，差点忘了给出多选题的json的效果图。如下：（json还是之前那波操作，网址在图里）
![](https://cdn.jsdelivr.net/gh/honjun/ImageHosting/picgo/20190914112800.png)
![](https://cdn.jsdelivr.net/gh/honjun/ImageHosting/picgo/20190914112842.png)
To be Continued......