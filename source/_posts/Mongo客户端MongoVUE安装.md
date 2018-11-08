title: Mongo客户端MongoVUE安装
author: hojun
avatar: 'https://wx1.sinaimg.cn/large/006bYVyvgy1ftand2qurdj303c03cdfv.jpg'
authorLink: /about/hojun.html
authorDesc: 一个好奇的人
categories: 技术
comments: true
date: 2018-10-16 23:23:39
authorAbout:
series:
tags:
 - 数据库
keywords: MongoVUE
description: Mongo客户端MongoVUE安装
photos:
---
咳咳，假设已经有了安装包，我这安装包是1.6.9版本。点击next开始安装。
![](https://wx2.sinaimg.cn/large/006bYVyvly1fwacijfvf0j30dz0bf74l.jpg)
这里博主选择安装在E盘，你们可以任意，自己找的到就好。
![](https://ws2.sinaimg.cn/large/006bYVyvly1fwacl8ragtj30dz0bfaae.jpg)
安装好后如下，拖入安装目录，替换exe文件。
![](https://ws1.sinaimg.cn/large/006bYVyvly1fwada00mvij30tt0hsdit.jpg)
接着在cmd进入到Mongo目录下，运行上篇文章的命令。
```cmd
mongod --config E:\MongoDB\Data\etc\mongo.cfg
```
替换后双击打开如下图，点击加号新建数据库
![](https://ws1.sinaimg.cn/large/006bYVyvly1fwadd81c1yj30g90aw3z7.jpg)
name随便输，server本地填127.0.0.1（服务器填IP），点击test测试成功后点击save即可。
![](https://wx4.sinaimg.cn/large/006bYVyvly1fwadt3dpb7j30g80axab1.jpg)
点击connect连接数据库
![](https://wx4.sinaimg.cn/large/006bYVyvly1fwaeim5s9jj30bs08y74h.jpg)
再打开个cmd，使用mongo启动，使用use hojun新建名为hojun的数据库。
![](https://wx1.sinaimg.cn/large/006bYVyvly1fwaeldbsevj30j70a8jrx.jpg)
使用db.test.insert({name:"hojun", age:"18"})。新建数据表并添加数据（不添加数据表是不会存在的）
![](https://ws2.sinaimg.cn/large/006bYVyvly1fwaeqtxt1bj30g608udg6.jpg)
在MongoVUE下可以看到数据库内容。
![](https://ws2.sinaimg.cn/large/006bYVyvly1fwafmjzfd9j30n50ifdhh.jpg)

这样操作确实有些不太方便，决定给Mongo配置环境变量和安装服务。先给其生成服务，如下命令（需要用管理员模式运行cmd）：
![](https://wx2.sinaimg.cn/large/006bYVyvly1fwag7357owj30pe02n745.jpg)
在控制面板>系统和安全>管理工具下找到服务。或者直接在控制面板页搜索服务即可。
![](https://ws1.sinaimg.cn/large/006bYVyvly1fwag89cpqsj30gb0ba0ue.jpg)
找到MongoDB服务，并启动它（若找不到应该是上一步命令没在管理员cmd运行模式下执行）
![](https://ws4.sinaimg.cn/large/006bYVyvly1fwagamw5m1j30ow0hkwhp.jpg)
接下来配置环境变量，复制MongoDB的bin地址。
![](https://ws2.sinaimg.cn/large/006bYVyvly1fwafzg3bc7j30hd0cdaba.jpg)
在控制面板>系统和安全>系统>高级系统设置下点击环境变量。
![](https://wx1.sinaimg.cn/large/006bYVyvly1fwag0y2kuej30ix0g675m.jpg)
找到Path变量。点击新增，输入目录点击确定即可。
![](https://ws4.sinaimg.cn/large/006bYVyvly1fwag2j0ylrj30i40gd406.jpg)
然后就可以在任意目录下使用mongo命令开启数据库了。
![](https://wx4.sinaimg.cn/large/006bYVyvly1fwag5epn1kj30is09q3yx.jpg)