title: Uni App小白学习笔记(三)
author: hojun
avatar: https://cdn.jsdelivr.net/gh/honjun/ImageHosting/sina/006bYVyvgy1ftand2qurdj303c03cdfv.jpg
authorLink: /about/hojun.html
authorDesc: 一个好奇的人
categories: 技术
comments: true
date: 2019-09-13 16:50:26
authorAbout:
series: uniapp
tags: uniapp
keywords: uniapp题库
description:
photos:
---
上一章我们已经可以获取到题目数据了，接下来开始进行业务逻辑处理了。首先，使用@click="select('A')"绑定选项的点击事件。在method中创建该方法，我们先来构思下这个逻辑。点击选项触发一个方法。在方法里能获取传入的选项，然后和题目数据中的answer比对。若相等则说明选择了正确答案，将其元素颜色改成绿色，表示答对了；若不等，说明选择了错误答案，将其元素颜色改成红色，表示答错了，还要在正确答案的选项颜色改为绿色，告诉用户正确答案。这一步和上一步操作有重复的部分，所以可以合并，只判断错误的情况，然后不管如何都显示正确答案为绿色。
代码如下：
```html
...
<ul :class="{active: isActive}">
  <li class="option" :class="status == 1 ? 'red' : (question.answer == 'A' ? 'green' : '')"  @click="select('A')">
    <i>A</i>
    <view class="option-text">{{question.optionA}}</view>
  </li>
  ...
</ul>
...
...
<script>
  import question_data from '../single_choice.js'
  export default {
    data() {
      return {
        question_data: question_data,
        count: 0,
        type: '单选题',
        question: {},
        select_option: '',
        selected: false,
        startPoint: {},
        endPoint: {},
        page_index: 0,
        isActive: false,
        status: 0,
      }
    },
    onLoad() {
      this.question = this.question_data[0]
      this.count = this.question_data.length
    },
    methods: {
      select(option) {
        if (this.selected) return
        if (option !== this.question.answer) {
          switch (option) {
            case 'A':
              this.status = 1
              break
            case 'B':
              this.status = 2
              break
            case 'C':
              this.status = 3
              break
            case 'D':
              this.status = 4
              break
            default:
                break
          }
        }
        console.log(this.status + option)
        this.selected = true
        this.isActive = true
      },
...
```
这里用status表示选项的状态，用isActive来实现颜色的控制。（因为app端不支持ref和dom操作）
接下来实现下一题上一题的切换。首先确立下一题的操作是手指在屏幕上向左滑动，滑动事件使用touchstart和touchend实现。在判断右滑动的时候切换上一题，代码如下：
```js
nextQuestion() {
  this.selected = false
  this.isActive = false
  this.status = 0
  this.page_index ++
  this.question = this.question_data[this.page_index]
},
prevQuestion() {
  this.selected = false
  this.isActive = false
  this.page_index --
  this.question = this.question_data[this.page_index]
},
/**
 * @name 开始滑动
 */
touchstart(e) {
  this.startPoint={
    pageX:e.pageX||e.changedTouches[0].pageX,
    pageY:e.pageY||e.changedTouches[0].pageY,
  }
},

/**
 * @name 滑动结束
 */
touchend(e) {
  this.endPoint={
    pageX:e.mp.changedTouches[0].pageX,
    pageY:e.mp.changedTouches[0].pageY,
  }
  // 判断是左滑动还是右滑动 当横向位移大于10，纵向位移大于100，则判定为滑动事件
  var disX=this.endPoint.pageX-this.startPoint.pageX;//计算移动的位移差
  var disY=this.endPoint.pageY-this.startPoint.pageY;
  if(Math.abs(disX)>10||Math.abs(disY)>100){
    if(Math.abs(disX)>Math.abs(disY)){//判断是横向滑动还是纵向滑动
      if(disX>10){
        this.prevQuestion()
      };
      if(disX<-10){
        this.nextQuestion()
      };
    }
  }
},
```
![](https://cdn.jsdelivr.net/gh/honjun/ImageHosting/picgo/20190913225916.png)
好了，单选题的题库练习已经完成了，下一往篇带大家实现其他题型。
To be continued......
