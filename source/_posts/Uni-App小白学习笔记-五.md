title: Uni App小白学习笔记(五)
author: hojun
avatar: https://cdn.jsdelivr.net/gh/honjun/ImageHosting/sina/006bYVyvgy1ftand2qurdj303c03cdfv.jpg
authorLink: /about/hojun.html
authorDesc: 一个好奇的人
categories: 技术
comments: true
date: 2019-09-14 11:31:32
authorAbout:
series: uniapp
tags: uniapp
keywords: uniapp题库
description:
photos:
---
## 前言：
这篇文章是该系列文章的最后一篇了，当然我们的题库demo还有很多功能没有实现，但是不得不告一段落了。在这篇文章我们会实现案例题，可能你会问不是还有一种判断题。但是只要你好好思考，判断题是几种题型中最简单的一种的题型，而且实现过程和单选题基本一致。so,判断题就留给聪明的你自己来实现了。

## 实现案例题

### json数据
json如下：
![](https://cdn.jsdelivr.net/gh/honjun/ImageHosting/picgo/20190914140419.png)
案例题的json和之前几种题型都不太一样，因为在一个大题中分了几小题。上图的json并不能直接由之前的网站生成。可能需要手动调成上图那样。当然若题库量很大考虑使用代码读取excel数据转换成json格式。
讲解下上图的json格式，在其中引入了sub表示小题。

### 实现逻辑
首先获取json数据，第一步默认渲染第一大题的题目，和第一大题下的第一小题，然后再左滑的时候切换到第一大题题目的第二小题。一直到第一大题的小题都切换完再切换到第二小题。到第二大题的时候又要回到第二大题的第一小题，所以要把小题的索引重置到0，重新开始。然后答题部份的逻辑的单选题一样。代码如下：
```js
data() {
  return {
    question_data: question_data,
    count: 0,
    type: '案例题',
    question: {},
    sub_item: {},
    select_option: '',
    selected: false,
    startPoint: {},
    endPoint: {},
    page_index: 0,
    sub_page_index: 0,
    isActive: false,
    status: 0,
    select_a: false,
    select_b: false,
    select_c: false,
    select_d: false,
  }
},
onLoad() {
  this.question = this.question_data[this.page_index]
  this.sub_item = this.question.sub_item[this.sub_page_index]
  this.count = this.question_data.length
},
methods: {
  commit() {
    this.isActive = true
  },
  select(option) {
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
    this.selected = true
  },
  nextQuestion() {
    this.selected = false
    this.isActive = false
    this.status = 0
    if (this.sub_page_index < this.question.sub_item.length) {
      this.sub_page_index ++
      this.sub_item = this.question.sub_item[this.sub_page_index]
    } else {
      this.page_index ++
      this.sub_page_index = 0
      this.question = this.question_data[this.page_index]
      this.sub_item = this.question.sub_item[this.sub_page_index]
    }
    this.select_a = this.select_b = this.select_c = this.select_d = false
  },
  prevQuestion() {
    this.selected = false
    this.isActive = false
    this.page_index --
    this.question = this.question_data[this.page_index]
  },
```
可能会有些长，不过认真看应该能看懂哈233333，效果如下：
![](https://cdn.jsdelivr.net/gh/honjun/ImageHosting/picgo/20190915212347.png)
uniapp系列就到此为止啦，当然，除了判断题，还可以加上评分系统，错题集等等.....
开发好了可以打包发布了：
![](https://cdn.jsdelivr.net/gh/honjun/ImageHosting/picgo/20190915213110.png)
告一段落......

### 已发现BUG

 - 题库数组越界
 - 手机端图标不能自适应