title: vue.js初入门(一)
author: hojun
avatar: /images/favicon.png
authorDesc: 一个好奇的人
categories: 技术
date: 2018-04-29 21:20:35
authorLink:
authorAbout:
tags:
 - vue
 - 前端
keywords: Vue
description: Vue.js（读音 /vjuː/, 类似于 view） 是一套构建用户界面的渐进式框架。
photos:
 - https://wx4.sinaimg.cn/large/006bYVyvgy1fqtwjv30w8j30n50hzt97.jpg
---
## **什么是Vue?**
Vue.js（读音 /vjuː/, 类似于 view） 是一套构建用户界面的渐进式框架。与其他重量级框架不同的是，Vue采用自底向上增量开发的设计。Vue 的核心库只关注视图层，并且非常容易学习，非常容易与其它库或已有项目整合。另一方面，Vue完全有能力驱动采用单文件组件和Vue生态系统支持的库开发的复杂单页应用。

Vue.js 的目标是通过尽可能简单的 API 实现响应的数据绑定和组合的视图组件。
Vue.js 不支持 IE8 及其以下版本，因为 Vue.js 使用了 IE8 不能实现的ECMAScript 5 特性。 Vue.js 支持所有兼容 ECMAScript 5 的浏览器。
## **安装**
(建议在优质的网络环境下的时候进行实践操作。网速不够的可以使用npm的淘宝镜像)

首先要有node环境和npm包管理工具。
安装node的时候一般会默认连带安装npm，所以建议直接安装node就行。（这里就不介绍怎么安装node了，自行百度）
这里我们使用vue-cli脚手架来安装vue。
所以先安装cli:
打开cmd命令行工具，输入npm安装命令(我在这里选择全局安装 <-g>)
```cmd
npm install -g vue-cli
```
安装可能需要一些时间，请耐心等待。
安装成功后效果如图：
![](https://wx2.sinaimg.cn/large/006bYVyvgy1fqtwjq2xrcj30kh0j5glw.jpg)

----------

接下来使用webpack安装vue项目模板，输入命令：(hi-vue是项目名，可以自定义)
```cmd
vue init webpack hi-vue
```
默认安装最新稳定版，若需要安装1.0版本则需指定版本号，命令如下：
```cmd
vue init webpack#1.0 hi-vue
```
接下来配置一些信息：
![](https://wx4.sinaimg.cn/large/006bYVyvgy1fqtvnz36jrj307700x0k0.jpg)
项目的名称？输入 “y” 回车确认
![](https://wx2.sinaimg.cn/large/006bYVyvgy1fqtwcfpcujj30bh01pgld.jpg)
项目说明？输入 “vue-js初入门”
作者？输入 “y” 回车确认
![](http://wx4.sinaimg.cn/large/006bYVyvgy1fqtvo44f7aj30qp01kq2r.jpg)
提供两个模式选项(推荐第二种)
Runtime + Compiler: recommended for most users  //运行加编译
Runtime-only: about 6KB lighter min+gzip, but templates (or any Vue-specific HTML) are ONLY allowed in .vue files - render functions are required elsewhere //小6kb,但需要使用.vue文件来开发
![](https://wx3.sinaimg.cn/large/006bYVyvgy1fqtvnu34n6j306t00u0lk.jpg)
安装vue-router?
![](https://wx4.sinaimg.cn/large/006bYVyvgy1fqtwcacxlfj308p00u0qc.jpg)
使用ESlint来规范你的代码？
![](https://wx3.sinaimg.cn/large/006bYVyvgy1fqtvo9bgqwj30bw01u0sj.jpg)
使用哪种规则？Standard
![](https://wx2.sinaimg.cn/large/006bYVyvgy1fqtvoegf17j309g013gld.jpg)
安装unit测试？输入 “n” 回车确认
安装e2e测试？输入 “n” 回车确认
![](https://wx3.sinaimg.cn/large/006bYVyvgy1fqtwbzr8zzj30od025dfn.jpg)
选择安装方式？选择npm
请耐心等待安装完成~(建议网速好的时候安装)
![](https://wx2.sinaimg.cn/large/006bYVyvgy1fqtwcl7f1nj30p509s3yk.jpg)
安装完成效果如图：
![](https://wx1.sinaimg.cn/large/006bYVyvgy1fqtwc4wfeij30gs04tdfn.jpg)
根据指示运行命令：
```cmd
cd hi-vue
npm run dev
```
打开浏览器，在地址栏输入localhost:8080。得到如下效果:
![](https://wx4.sinaimg.cn/large/006bYVyvgy1fqtwjv30w8j30n50hzt97.jpg)