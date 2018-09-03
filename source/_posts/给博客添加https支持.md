title: 给博客添加https支持
author: hojun
avatar: https://wx1.sinaimg.cn/large/006bYVyvgy1ftand2qurdj303c03cdfv.jpg
authorDesc: 一个好奇的人
categories: 技术
series: hexo折腾
date: 2017-07-04 20:01:34
authorLink: /about/hojun.html
authorAbout:
tags:
 - blog
keywords: 给博客添加https支持
description:
photos:
 - https://wx3.sinaimg.cn/small/006bYVyvgy1fh9g38krrtg30eq08cwec.gif
---
![006bYVyvgy1fh9g38krrtg30eq08cwec.gif](https://wx3.sinaimg.cn/mw690/006bYVyvgy1fh9g38krrtg30eq08cwec.gif)
参照：https://zhuanlan.zhihu.com/p/22667528

## **前提要求:**

 - 个人域名

## **第一步注册cloudflare**
怎么注册？
## **第二步AddSite**
[传送门](https://www.cloudflare.com/a/add-site)
输入自己域名，一步一步往下走就行了。
最后会出现
![006bYVyvgy1fh9guphto2j30ld0frjsl.jpg](https://wx1.sinaimg.cn/large/006bYVyvgy1fh9guphto2j30ld0frjsl.jpg)
并给你两个Nameservers地址，然后自己去域名提供商的地方去改(腾讯云在控制台有)
![006bYVyvgy1fh9guj158kj30lq0a7aag.jpg](https://wx1.sinaimg.cn/large/006bYVyvgy1fh9guj158kj30lq0a7aag.jpg)
## **第三步开启小绿锁**
![006bYVyvgy1fh9gubvym2j30no02ydfu.jpg](https://wx1.sinaimg.cn/large/006bYVyvgy1fh9gubvym2j30no02ydfu.jpg)
点击图标，SLL选择Full
![006bYVyvgy1fh9gu7dnrqj30mg0a13yt.jpg](https://wx4.sinaimg.cn/large/006bYVyvgy1fh9gu7dnrqj30mg0a13yt.jpg)
## **第四步配置Page Rules**
点击上面那个Page Rules(漏斗)的小图片
添加如下：
![006bYVyvgy1fh9gu35ps0j30mn0cwjsb.jpg](https://wx3.sinaimg.cn/large/006bYVyvgy1fh9gu35ps0j30mn0cwjsb.jpg)

OK，接下来就是等待小绿锁生效吧(时间比较长，明天在看吧)