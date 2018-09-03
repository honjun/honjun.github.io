title: 一台电脑上配置两个Git账号？可能你并不需要
author: hojun
avatar: 'https://wx1.sinaimg.cn/large/006bYVyvgy1ftand2qurdj303c03cdfv.jpg'
authorLink: /about/hojun.html
authorDesc: 一个好奇的人
categories: 技术
comments: true
date: 2018-08-28 16:43:20
authorAbout:
series:
tags:
 - git
keywords: git
description: 为啥要两个？因为整了个小号哈
photos:
---
## 前言
Q:为啥要两个？
A:因为整了个小号哈
之前脑子一直陷入了死胡同里，一直觉得小号也要配置。然后网络搜索一台电脑配置两个Git账号，解决思路一般如下：(图片来自网络，侵权联系删除)
![](https://wx3.sinaimg.cn/large/006bYVyvgy1fupj741d8kj30iq0fodgb.jpg)
后来想通了，我就一个人一台电脑，小号在网页上建好仓库把大号拉进去，剩下的大号来不就好了。git的初衷就是为了更好的合作，居然忘了233333。

## 食用方式

小号在仓库>设置>成员管理中添加大号为管理员
![](https://wx4.sinaimg.cn/large/006bYVyvgy1fupj74i0v7j30vs0b3glv.jpg)
小号的任务就完成了，接下来在自己电脑上随便建个目录(命令行cmd)。
```cmd
E:\blog>mkdir hojunClub
E:\blog>cd hojunClog
```
进入目录后使用git clone命令克隆仓库代码到本地电脑
语法：git clone 仓库地址
![](https://wx2.sinaimg.cn/large/006bYVyvgy1fupj74zjw8j30jo04qwee.jpg)
进入本地仓库中，一顿瞎操作
![](https://wx1.sinaimg.cn/large/006bYVyvgy1fupj75d1koj30hj04swed.jpg)
我们这里在仓库中删除了一些东西，然后依次执行如下git命令：
git status
git add .
git commit -m 'delete'
git push origin
![](https://wx3.sinaimg.cn/large/006bYVyvgy1fupj75s4u5j30fc046a9x.jpg)
提交成功23333~