title: Uni App小白学习笔记(二)
author: hojun
avatar: https://cdn.jsdelivr.net/gh/honjun/ImageHosting/sina/006bYVyvgy1ftand2qurdj303c03cdfv.jpg
authorLink: /about/hojun.html
authorDesc: 一个好奇的人
categories: 技术
comments: true
date: 2019-08-10 21:53:45
authorAbout:
series: uniapp
tags: uniapp
keywords: uniapp题库
description:
photos:
---
上篇文章我们已经初步搭建好了刷题App的第一个页面，这篇文章继续来开发后续一些功能。
![](https://cdn.jsdelivr.net/gh/honjun/ImageHosting/picgo/20190718220013.png)
首先，准备的题目类型有单选题、多选题、判断题、案例题四种类型。所以，需要一个供选择哪种类型的页面。先简单实现个：点击pages->右键->新建页面
![](https://cdn.jsdelivr.net/gh/honjun/ImageHosting/picgo/20190718220716.png)
页面命名为question，选择使用scss
![](https://cdn.jsdelivr.net/gh/honjun/ImageHosting/picgo/20190718221322.png)
新建的页面内容如下：
![](https://cdn.jsdelivr.net/gh/honjun/ImageHosting/picgo/20190718221838.png)
接下来开始撸代码，之前撸代码的遇到很多H5支持而App不支持的情况。所以建议先阅读文档[uni-app 跨端开发注意事项](https://uniapp.dcloud.io/matter)
注意：uni-app的tag同小程序的tag，和HTML的tag不一样，比如div要改成view，span要改成text、a要改成navigator。
所以代码要这么写：
```html
<view class="uni-padding-wrap uni-common-mt">
  <view class="uni-flex uni-row">
    <navigator url="/pages/question/single_choice/single_choice" hover-class="navigator-hover">
      <view class="uni-flex-item">
        <uni-icon type="compose"></uni-icon>
        <text class="text">单选题</text>
      </view>
    </navigator>
  </view>
</view>
```
这里就使用了[navigator](https://uniapp.dcloud.io/component/navigator)代替a标签，view代替div，text代替span。然后使用了uni-ui的Icon图标组件。需要在网页上下载
![](https://cdn.jsdelivr.net/gh/honjun/ImageHosting/picgo/20190718233215.png)
并在script中引用组件：
```js
<script>
    import uniIcon from "@/components/uni-icon/uni-icon.vue"  
    export default {
        data() {
            return {
                
            };
        },
        components: {uniIcon}
    }
</script>
```
scss如下： 需要安装编译插件。flex布局这里就不解释了，不会的自行学习。
![](https://cdn.jsdelivr.net/gh/honjun/ImageHosting/picgo/20190718233643.png)
```css
.uni-flex {
    display: flex;
    flex-direction: row;
    height: 250rpx;
    .uni-flex-item {
      flex: 1;
      .text {
          text-align: center;
          font-size: 40rpx;
      }
      .uni-icon-compose {
          font-size: 160rpx;
      }
    }
}
```
页面写好了，接下来可是看下效果。不过之前还要在首页index.vue中加代码跳转到这页面中来。
```html
<template>
  <view class="content">
    <image class="logo" src="/static/logo.png"></image>
    <view>
      <text class="title">{{title}}</text>
      <navigator url="/pages/question/question" hover-class="navigator-hover">
        <button class="item" type="primary">题库1</button>
      </navigator>
    </view>
  </view>
</template>
```
运行到浏览器效果如下：
![](https://cdn.jsdelivr.net/gh/honjun/ImageHosting/picgo/20190719002523.png)
接下来准备开发答题页面。参考其它答题类App的页面。不过开发前先要引入两个比较重要的css，在App.vue中引入：
```html
<style>
  /*每个页面公共css */
  @import "./common/uni.css";
  @import "./common/normalize.css";
</style>
```
common需要自己要目录下新建，uni.css是官方组件css样式，normalize.css是css resets(重置)。在question文件夹下新建页面one_choice（注意这里把single改one了，因为好像one才是单选题的意思。所以question.vue中也要改），代码如下：
```html
<template>
  <view class="content">
    <view class="type">
      <text class="span">第1题-单选题</text>
      <text class="span">1/5</text>
    </view>
    <p><text>[单选]</text>将（ ）年作为脱贫攻坚作风建设年，集中力量解决突出作风问题。科学确定脱贫摘帽时间，对弄虚作假、搞数字脱贫的严肃查处。实施乡村振兴战略。</p>
    <ul>
      <li class="option">
        <i>A</i>
        <view class="option-text">2022</view>
      </li>
      <li class="option">
        <i>A</i>
        <view class="option-text">2020</view>
      </li>
      <li class="option">
        <i>A</i>
        <view class="option-text">2019</view>
      </li>
      <li class="option">
        <i>A</i>
        <view class="option-text">2018</view>
      </li>
    </ul>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        
      };
    }
  }
</script>

<style lang="scss">
.content {
  position: absolute;
  height: 100%;
  margin: 0 35upx;
  font-size: 32upx;
  .type {
    margin: 20upx 0;
    font-size: 28upx;
    .span{
      &:last-child {
        float: right;
        right: 0upx;
      }
    }
  }
  .option {
    list-style: none;
    min-height: 100upx;
    &:first-child {
      margin-top: 10px;
    }
    i {
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
    .option-text {
      display: inline-block;
      width: 80%;
      height: 100%;
    }
  }
}
</style>
```
效果如下：
![](https://cdn.jsdelivr.net/gh/honjun/ImageHosting/picgo/20190719224451.png)
接下来考虑导入excel数据，推荐一个在线转换excel成json的网站www。
![](https://cdn.jsdelivr.net/gh/honjun/ImageHosting/picgo/20190723001836.png)
然后把excel表头改成自己想要的字段。题目改question，选项A改optionA，答案改answer。还要使用ctrlH替换掉Excel中的空格。然后ctrlA全选，复制到网页上。点击转换。生成json。（注意：若excel中存在空格，则会出现不能准确分割每个元素，使用ctrl+H把空格全部替换成无空格，再去转换）
![](https://cdn.jsdelivr.net/gh/honjun/ImageHosting/picgo/20190723002059.png)
接下来就是获取JSON来读取题目数据了。第一想法是使用ajax引入json数据。在uni-app中是使用uni.request来加载json，然后在将需要的数据渲染出来，在chrome浏览器中运行，发现可以得到数据，但是运行到Android端发现不行。查看文档知道app端不支持本地获取，需要服务端。于是只能将json直接写在js中使用。这里使用es6语法的export和import导入js。因为放在static下一直获取不到，将其放在question目录下，然后引入。（求知道原因的大佬告知）
![](https://cdn.jsdelivr.net/gh/honjun/ImageHosting/picgo/20190810203701.png)
```js
import question_data from '../single_choice.js'
```
To Be Continued......