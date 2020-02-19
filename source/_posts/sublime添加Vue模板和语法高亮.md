title: sublime添加Vue模板和语法高亮
author: hojun
avatar: 'https://cdn.jsdelivr.net/gh/honjun/ImageHosting/sina/006bYVyvgy1ftand2qurdj303c03cdfv.jpg'
authorLink: /about/hojun.html
authorDesc: 一个好奇的人
categories: 技术
comments: true
date: 2018-10-08 22:12:02
authorAbout:
series:
tags:
 - sublime
keywords:
description:
photos:
---
## 版本：sublime text 3
### 安装VuejsCompletePackage高亮插件
Preferences->PackageControl
![](https://cdn.jsdelivr.net/gh/honjun/ImageHosting/sina/006bYVyvgy1fw01a7pdl8j30f509yjrk.jpg)
输入InstallPackage
![](https://cdn.jsdelivr.net/gh/honjun/ImageHosting/sina/006bYVyvgy1fw01b56fuhj30lm0aejrq.jpg)
输入Vue，选择安装VuejsCompletePackage
![](https://cdn.jsdelivr.net/gh/honjun/ImageHosting/sina/006bYVyvgy1fw01qh46dhj30om0dnq4d.jpg)
无高亮|有高亮 效果对比
![](https://cdn.jsdelivr.net/gh/honjun/ImageHosting/sina/006bYVyvgy1fw01rjzi74j30fk0b63z0.jpg)
![](https://cdn.jsdelivr.net/gh/honjun/ImageHosting/sina/006bYVyvgy1fw01s2v9fxj30f50bs3z2.jpg)
### 安装SublimeTmpl模板插件并配置
继续上一步，安装SublimeTmpl
![](https://cdn.jsdelivr.net/gh/honjun/ImageHosting/sina/006bYVyvgy1fw01xzzyzqj30nv0b4wfa.jpg)
Preferences->BrowsePackages
进入SublimeTmpl->templates，新建一个vue.tmpl
![](https://cdn.jsdelivr.net/gh/honjun/ImageHosting/sina/006bYVyvgy1fw02094n9yj30pb0g0tam.jpg)
vue.tmpl内容如下。
![](https://cdn.jsdelivr.net/gh/honjun/ImageHosting/sina/006bYVyvgy1fw024y1bqcj30i00cjdgk.jpg)
PackageSetings>SublimeTmpl>MenuDefault
![](https://cdn.jsdelivr.net/gh/honjun/ImageHosting/sina/006bYVyvgy1fw025q4f63j30lb0df0t9.jpg)
添加如下内容
![](https://cdn.jsdelivr.net/gh/honjun/ImageHosting/sina/006bYVyvgy1fw026o7qbnj30hg0dm0td.jpg)
PackageSetings>SublimeTmpl>KeyBindingsDefault
![](https://cdn.jsdelivr.net/gh/honjun/ImageHosting/sina/006bYVyvgy1fw02765ug2j30l60icgmg.jpg)
添加如下内容。使用ctrl+alt+v就能快速创建vue模板。
![](https://cdn.jsdelivr.net/gh/honjun/ImageHosting/sina/006bYVyvgy1fw027ygdsfj30l20fx3zv.jpg)
PackageSetings>SublimeTmpl>SetingsDefault
![](https://cdn.jsdelivr.net/gh/honjun/ImageHosting/sina/006bYVyvgy1fw02byfzijj30le0gk0tm.jpg)
嗯，这里应该是添加绑定高亮。可是新版sublime没有文件夹，只有.package文件。也不知道怎么绑定。求大佬教。
![](https://cdn.jsdelivr.net/gh/honjun/ImageHosting/sina/006bYVyvgy1fw03bkfs9rj30i30a9gma.jpg)