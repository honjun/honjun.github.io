title: Win10小技巧之创建不可删除文件夹，还能保护隐私哦~
author: hojun
avatar: /images/favicon.png
authorDesc: 一个好奇的人
categories: 技术
date: 2018-03-24 19:50:37
authorLink:
authorAbout:
tags:
 - win10
keywords: win10小技巧
description: 教你怎么使用Win10创建不可删除文件夹...
photos:
 - http://wx4.sinaimg.cn/large/006bYVyvgy1fpo5wapk60j30dw08oglj.jpg
---
![](http://wx4.sinaimg.cn/large/006bYVyvgy1fpo5wapk60j30dw08oglj.jpg)
首先使用快捷键WIN+R打开“运行”对话框。并输入cmd 打开WINDOWS命令行程序
![](http://wx4.sinaimg.cn/large/006bYVyvgy1fpo5lse5p0j30b406eaa3.jpg)
CD进入到你想要创建文件夹路径
![](http://wx1.sinaimg.cn/large/006bYVyvgy1fpo5lnbhwrj30r90eaweg.jpg)
输入命令`md 文件夹名..\`创建不可删除文件夹
```cmd
C:\Users\hj531\Desktop>md hojun..\
```
你会发现该路径下 已经建好一个文件夹
![](http://wx2.sinaimg.cn/large/006bYVyvgy1fpo5m2ltu8j307705f75c.jpg)
你可以尝试删除这个文件夹，会发现它会报找不到该项目
![](http://wx1.sinaimg.cn/large/006bYVyvgy1fpo5lxi27xj30ch07p3yl.jpg)
那要怎么删除这个文件夹呢？还是使用cmd命令行程序。
在对应的路径下输入命令`rd 文件夹名`即可删除该文件夹
```cmd
C:\Users\hj531\Desktop>rd hojun..\
```
我们试着往该文件夹中拖放其他文件夹，接着你会发现：啊咧！文件夹呢？？！！，还自动多了一个不带点点的文件夹？？
![](http://wx4.sinaimg.cn/large/006bYVyvgy1fpo5lidmy6j307o04yq45.jpg)
![](http://wx2.sinaimg.cn/large/006bYVyvgy1fpo5s87r49j30s00dmaaq.jpg)
是不是觉得很坑爹？先不要着急，就在有点点的文件下搜索你刚刚放入的文件夹名
![](http://wx4.sinaimg.cn/large/006bYVyvgy1fpo5s3791ej30l50dlgmj.jpg)
你会发现可以搜索到。那要怎么打开这个文件夹呢？
只需要在地址栏中输入`\文件夹名`，即可打开
![](http://wx3.sinaimg.cn/large/006bYVyvgy1fpo5sda6l2j30l60dm3zf.jpg)
若是前一步没有记住该文件夹名怎么办？别急，只要删除掉那个自动生成的文件夹(不带点点的那个)。就可以让内部文件夹现行。

**总结：这个小技巧实用性挺强，有以下优点**

 - 不可删除 防止自己误删
 - 内部文件不可见可以保护自己的隐私

**感谢大家阅读**
