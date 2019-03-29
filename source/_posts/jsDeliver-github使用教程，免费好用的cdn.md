title: jsDeliver+github使用教程，免费好用的cdn
author: hojun
avatar: 'https://wx1.sinaimg.cn/large/006bYVyvgy1ftand2qurdj303c03cdfv.jpg'
authorLink: /about/hojun.html
authorDesc: 一个好奇的人
categories: 技术
comments: true
date: 2019-01-18 23:38:41
authorAbout:
series:
tags: 
 - cdn
keywords: jsDeliver
description: 国内加载github的资源比较慢，需要使用CDN加速来优化网站打开速度，于是使用jsDeliver+github搭建免费的cdn。
photos: https://wx4.sinaimg.cn/large/006bYVyvly1fzarmsp5msj30ts0jojsb.jpg
---
前言：国内加载github的资源比较慢，需要使用CDN加速来优化网站打开速度，于是使用jsDeliver+github搭建免费的cdn。

jsDelivr 是一个免费开源的 CDN 解决方案，用于帮助开发者和站长。包含 JavaScript 库、jQuery 插件、CSS 框架、字体等等 Web 上常用的静态资源。

我们来到其官网，可以看到它的介绍Open Source CDN free, fast, and reliable。（免费、快速、可靠，不过据说可能会投毒广告，表示目前还没见过广告）
下图我们可以看到他似乎和npm,github,wordpress有某种py关系。
![](https://wx4.sinaimg.cn/large/006bYVyvly1fzarmsp5msj30ts0jojsb.jpg)

## 写给小白 了解的略过

### npm
![](https://wx1.sinaimg.cn/large/006bYVyvly1fzatxtptcoj315p0jagmc.jpg)
NPM是JavaScript的包管理器，也是世界上最大的软件注册中心。发现可重用代码的包——并以强大的新方式组装它们。每星期大约有 30 亿次的下载量，包含超过 600000 个 包（package） （即，代码模块）。来自各大洲的开源软件开发者使用 npm 互相分享和借鉴。包的结构使您能够轻松跟踪依赖项和版本。

所以jsDeliver+npm就是把npm上的包当做cdn的存储。
使用教程：
```cmd
// load any project hosted on npm
// 加载以NPM为存储的任何项目
https://cdn.jsdelivr.net/npm/package@version/file
// load jQuery v3.2.1
// 比如加载Jquery3.2.1
https://cdn.jsdelivr.net/npm/jquery@3.2.1/dist/jquery.min.js
// use a version range instead of a specific version
//使用版本范围而不是特定版本
https://cdn.jsdelivr.net/npm/jquery@3.2/dist/jquery.min.js
https://cdn.jsdelivr.net/npm/jquery@3/dist/jquery.min.js
// omit the version completely to get the latest one
//完全忽略版本以获取最新版本，不建议使用
https://cdn.jsdelivr.net/npm/jquery/dist/jquery.min.js
略......
```

### Github
![](https://wx1.sinaimg.cn/large/006bYVyvly1fzatzue2tkj31340jewey.jpg)
gitHub是一个面向开源及私有软件项目的托管平台，因为只支持git 作为唯一的版本库格式进行托管，故名gitHub。
jsDeliver+Github使用教程：
```cmd
// load any GitHub release, commit, or branch
// 加载任何Github发布、提交或分支
https://cdn.jsdelivr.net/gh/user/repo@version/file
略......
```

### WordPress
![](https://wx2.sinaimg.cn/large/006bYVyvly1fzau28wpj5j30x70jp3yq.jpg)
WordPress是一款个人博客系统，并逐步演化成一款内容管理系统软件，它是使用PHP语言和MySQL数据库开发的。用户可以在支持 PHP 和 MySQL数据库的服务器上使用自己的博客。
jsDeliver+WordPress使用教程：
```cmd
// load any plugin from the WordPress.org plugins SVN repo
// 从WordPress.org等SVN仓库加载任何插件
https://cdn.jsdelivr.net/wp/plugins/project/tags/version/file
略......
```

这里我们使用的是jsDeliver+github，所以接下来只介绍这部分使用。

## 第一步：新建github仓库
![](https://wx2.sinaimg.cn/large/006bYVyvly1fzb5clpymhj30me0gktdv.jpg)
接着在本地电脑克隆上图仓库（前提配置好本地git环境和ssh） 
命令如下：
```cmd
cd 某个目录下
git clone git@github.com:你的用户名/cdn.git
```
## 第二步：上传需要的资源
复制需要的静态资源到本地git仓库中，提交到github仓库上。
命令如下：
```cmd
cd 到git仓库目录下
// 查看状态
git status
// 添加所以改动
git add .
// 提交
git commit -m '第一次提交'
// 推送至远程仓库
git push

```
（注：jsDeliver不支持加载超过20M的资源，所以一些视频最好压缩到20M以下）
## 第三步：发布仓库
点击release发布
![](https://wx4.sinaimg.cn/large/006bYVyvly1fzb5pavaboj30rz0f2n36.jpg)
发布版本号为1.0（自定义）
![](https://wx2.sinaimg.cn/large/006bYVyvly1fzb5o06yd3j30l00iatdb.jpg)
## 第四步：通过jsDeliver引用资源

使用方法：
https://cdn.jsdelivr.net/gh/你的用户名/你的仓库名@发布的版本号/文件路径
比如： 
//加载js
https://cdn.jsdelivr.net/gh/honjun/cdn@1.0/js/jquery.js
//加载图片
https://cdn.jsdelivr.net/gh/honjun/cdn@1.0/images/hb.png