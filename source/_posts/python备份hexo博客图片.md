title: python备份hexo博客图片
author: hojun
avatar: /images/favicon.png
authorDesc: 一个好奇的人
categories: 技术
date: 2018-03-29 22:27:19
authorLink:
authorAbout:
tags:
 - python
 - hexo
keywords: 图片备份
description: 使用python备份hexo博客图片
photos:
 - https://wx3.sinaimg.cn/large/006bYVyvgy1fpu48ng5ooj30k00boq2w.jpg
---
使用hexo搭建博客的小伙伴们，你们的博客图片资源存放在哪里呢？
有的直接存在博客网站中(github,coding或自己的服务器)；有的存在云存储上；有的存在不知名的第三方图床上等等。
这些方案存在以下问题：
放github上访问速度太卡，云存储要收费，免费的怕运营不了多长时间。图床，容易GG。
慎重提醒大家：不要保存在不知名的第三方图床上。
一开始作者就是存在第三方图床，后来图床停止服务了，导致博客图片全GG,花了一整夜从新上传图片。![](https://wx4.sinaimg.cn/large/006bYVyvgy1fpu48sazmdj30de08xglo.jpg)
接着我使用了某浪微博相册来保存图片（自动上传图片请参考我另一篇文章），然而一朝被蛇咬，十年怕井绳。万一某浪也GG不玩了或图片禁止外部访问了。那博客图片不是又炸了。
![](https://wx4.sinaimg.cn/large/006bYVyvgy1fpu48xd72tj307s07paa2.jpg)
于是一直想备份图片到自己本地，机缘巧合看见某大神已经用python实现过这个功能（github.com/wangshub/markdown-img-backup玩跳一跳的程序员也许会眼熟）。
![](https://wx3.sinaimg.cn/large/006bYVyvgy1fpu48ng5ooj30k00boq2w.jpg)
身为一个python新手，秉着大无畏精神，勇于和bug相爱相杀，clone了代码，因为电脑上是py3版本的环境，略微修改了py3版本的代码，使用过程中顺带修复了一个正则贪婪匹配的bug。详见作者的debug分支github.com/honjun/markdown-img-backup/tree/debug。

----------

**使用说明：**
第一步：在代码中修改你的markdown文件路径
第二步：在py脚本的同路径下建立“img”文件夹保存图片，或修改保存图片路径的代码
第三步：cmd运行脚本 python md_image_backup_py3.py 
参数说明：

 - 不传默认备份所有
 - md文件名（仅备份该文件）
