title: 前端自动化构建工具gulp使用
author: hojun
avatar: 'https://wx1.sinaimg.cn/large/006bYVyvgy1ftand2qurdj303c03cdfv.jpg'
authorLink: /about/hojun.html
authorDesc: 一个好奇的人
categories: 技术
comments: true
date: 2019-02-21 13:01:13
authorAbout:
series:
tags:
keywords:
description:
photos:
---
![image](https://wx2.sinaimg.cn/large/006bYVyvly1g0dz9m2v19j30ds048jrb.jpg)
## 第一步 全局安装gulp
![image](https://wx2.sinaimg.cn/large/006bYVyvly1g0tdwguhp1j30qo0g3q3o.jpg)
## 第二步 建立前端项目
![image](https://ws4.sinaimg.cn/large/006bYVyvly1g0te32epmxj30lx0k33z7.jpg)

## 安装dev
npm install gulp --save-dev

## 创建src文件夹和gulpfile.js文件

![image](https://wx4.sinaimg.cn/large/006bYVyvly1g0tfkbu662j307503da9x.jpg)
```js
var gulp = require('gulp');

gulp.task('default', function() {
  // 将你的默认的任务代码放在这
  console.log("hello gulp");
});
```
![image](https://ws3.sinaimg.cn/large/006bYVyvly1g0tf7pbokqj30hx044t8p.jpg)

