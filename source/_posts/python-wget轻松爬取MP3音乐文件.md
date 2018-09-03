title: python+wget轻松爬取MP3音乐文件
author: hojun
avatar: https://wx1.sinaimg.cn/large/006bYVyvgy1ftand2qurdj303c03cdfv.jpg
authorDesc: 一个好奇的人
categories: 技术
date: 2018-04-03 20:10:28
authorLink: /about/hojun.html
authorAbout:
tags:
 - wget
 - python
keywords: 爬取MP3
description: 
photos:
 - https://wx3.sinaimg.cn/large/006bYVyvgy1fpzqclxph8j30cs0770sv.jpg
---
![](https://wx3.sinaimg.cn/large/006bYVyvgy1fpzqclxph8j30cs0770sv.jpg)
在搞拼音学习的时候，需要对应的文字的读音。发现XX汉语上面有需要的MP3文件。如图，红框框起来的就是MP3的url地址。
![](https://wx2.sinaimg.cn/large/006bYVyvgy1fpzqcgymn6j30qc07t75m.jpg)
分析一下url，我们大致已经能得出“你”字的MP3文件对应名称为 ni3.mp3。在地址栏输入ni3.mp3，结果证实了我们的猜测。
接下来就是怎么下载资源了，糟糕的是需要读音挺多，如果你手动一个一个下载，工作量非常大！
人生苦短，我用python。哈哈当然这不是主要原因，由于python胶水语言成就了他在爬虫领域的爸爸地位。再加上wget,就可以轻松实现下载。python安装自行百度，这里重点讲下wget安装。首先，不要使用免安装或绿色版的，绿色版会少功能，相当于阉割版，免安装少dll文件，自己去找更烦。推荐使用wget-1.11.4安装版（及Setup）。安装完成后在环境变量中Path配置wget路径，到bin目录。如：`D:\Program Files (x86)\GnuWin32\bin`
准备工作做好了，接下来就是准备python代码：
```python
#coding=utf-8
from urllib import request, parse
import subprocess
import os
name = 'wo3.mp3'
url = 'https://appcdn.fanyi.baidu.com/zhdict/mp3/' + name;
path = 'mp3/' + name
cmd='wget --no-check-certificate -O %s %s ' % (path, url)
subprocess.call(cmd,shell=True)
```
代码解释：
**subprocess** 用来生成子进程，并可以通过管道连接他们的输入/输出/错误，以及获得他们的返回值。
call执行命令，返回状态码，shell=True允许shell命令时字符串形式
**wget** --no-check-certificate 不检查证书选项，多用于下载https的资源
-O /home/index http://www.baidu.com 将下载的文件存放到指定的文件夹下，同时重命名下载的文件，

当然这里的代码只是简单的测试，接下来自要运行python脚本就可以下载到MP3文件。
附：
若是你想下载github上的资源，需要release版的
![](https://wx1.sinaimg.cn/large/006bYVyvgy1fpzqcw95x5j30lz0g6mzd.jpg)
![](https://wx2.sinaimg.cn/large/006bYVyvgy1fpzqcr10zlj30ma09rq3p.jpg)