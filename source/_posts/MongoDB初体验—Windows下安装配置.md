title: MongoDB初体验—Windows下安装配置
author: hojun
avatar: 'https://wx1.sinaimg.cn/large/006bYVyvgy1ftand2qurdj303c03cdfv.jpg'
authorLink: /about/hojun.html
authorDesc: 一个好奇的人
categories: 技术
comments: true
date: 2018-10-15 23:40:52
authorAbout:
series:
tags:
 - 数据库
keywords: MongoDB
description: Windows下MongoDB安装配置
photos:
 - https://wx2.sinaimg.cn/small/006bYVyvly1fw87q4pvsvj30ys0hcgxr.jpg
---
第一步，去mongoDB官网下载安装包。
![](https://wx2.sinaimg.cn/large/006bYVyvly1fw87q4pvsvj30ys0hcgxr.jpg)
选择社区版，点击所以版本（All Version Binaries）
![](https://wx2.sinaimg.cn/large/006bYVyvly1fw9bhieck5j30yi0iqabp.jpg)
我们选择3.2.4版本的安装包，（有教程）
![](https://wx2.sinaimg.cn/large/006bYVyvly1fw9bohceilj30t90ez42y.jpg)
下载好后安装
![](https://wx4.sinaimg.cn/large/006bYVyvly1fw95f6ak5yj30dv0at0vk.jpg)
自定义安装
![](https://ws4.sinaimg.cn/large/006bYVyvly1fw95fr7fivj30dv0at74r.jpg)
安装在E盘
![](https://ws4.sinaimg.cn/large/006bYVyvly1fw95tim958j30dv0atmxl.jpg)
在安装目录下新建Data下再新建三个文件夹，data用来保存数据库文件
![](https://ws4.sinaimg.cn/large/006bYVyvly1fw95qe5v3jj30jw0gxjsu.jpg)
![](https://ws3.sinaimg.cn/large/006bYVyvly1fw9brpgzetj30dz09hq3i.jpg)
使用管理员打开cmd，进入安装目录下（E:\MongoDB\Server\3.2\bin>mongod）运行如下命令：其中--dbpath E:\MongoDB\Data\data就是指定数据库文件保存位置。
```cmd
E:\MongoDB\Server\3.2\bin>mongod --dbpath E:\MongoDB\Data\data --journal --storageEngine=mmapv1
```
可以看到生成了数据文件
![](https://ws1.sinaimg.cn/large/006bYVyvly1fw99fxw27ij30ju0dwmyt.jpg)
在网页上访问端口也能出现信息
![](https://ws1.sinaimg.cn/large/006bYVyvly1fw9a0c8878j30mj0c03yl.jpg)
接着我们在etc目录下创建配置文件。
![](https://wx4.sinaimg.cn/large/006bYVyvly1fw9c454y8jj30eq09twey.jpg)
文件内容如下：
```cfg
#需要按照安装目录自行修改
#数据库路径 
dbpath=E:\MongoDB\Data\data\
#日志输出文件路径
logpath=E:\MongoDB\Data\logs\mongodb.log
#错误日志采用追加模式，配置这个选项后mongodb的日志会追加到现有的日志文件，而不是从新创建一个新文件
logappend=true
#启用日志文件，默认启用
journal=true
#这个选项可以过滤掉一些无用的日志信息，若需要调试使用请设置为false
quiet=false
#端口号 默认为27017
port=27017
#指定存储引擎（默认先不加此引擎，如果报错了，大家在加进去）
storageEngine=mmapv1
httpinterface=true
```
我们可以配合cfg配置文件使用如下命令打开MongoDB web控制台，其实我们在上边配置文件中已经加入，默认也可以访问。
```cmd
mongod --config E:\MongoDB\Data\etc\mongo.cfg --httpinterface 
```
注意访问端口为28017
![](https://ws2.sinaimg.cn/large/006bYVyvly1fw9akyynnaj30u40hgtaq.jpg)
使用如下命令可以为MongoDB创建Windows服务
```cmd
mongod --config E:\MongoDB\Data\etc\mongo.cfg --httpinterface --install --serviceName "MongoDB"
```
参考docs.mongodb.com/v3.2/tutorial/install-mongodb-on-windows/
参考www.cnblogs.com/jacksoft/p/6910709.html
