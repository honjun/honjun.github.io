title: 手把手教你搭建HEXO博客(三)
author: hojun
avatar: https://wx1.sinaimg.cn/large/006bYVyvgy1ftand2qurdj303c03cdfv.jpg
authorDesc: 一个好奇的人
categories: 技术
series: 手把手教你搭建HEXO博客
date: 2018-06-08 23:37:04
authorLink: /about/hojun.html
authorAbout:
tags:
 - hexo
 - 博客
keywords: hexo
description: 为什么推荐hexo+github？最重要两点：简单、免费。
photos:
 - https://wx4.sinaimg.cn/small/006bYVyvgy1fs1s79hhsvj30m80b4q8m.jpg
---
![](https://wx4.sinaimg.cn/large/006bYVyvgy1fs1s79hhsvj30m80b4q8m.jpg)
手把手教你搭建HEXO+Github博客 （系列教程三）

 - 为什么推荐hexo+github？ 
 - 最重要两点：简单、免费

## **安装HEXO**
先在本地新建个blog文件夹（随意）
![](https://wx3.sinaimg.cn/large/006bYVyvgy1fs42tl19jjj30oy0er76i.jpg)
在cmd命令行进入到blog文件夹下。（win+R打开运行对话框，输入cmd打开命令行程序）
![](https://wx3.sinaimg.cn/large/006bYVyvgy1fs42tjwqe3j30t30f7jsz.jpg)
heox主页上的就是安装命令（npm install hexo-cli -g），复制下来
![](https://wx3.sinaimg.cn/large/006bYVyvgy1fs42tix5trj30su0dhjti.jpg)
在cmd从粘贴，回车确认命令，安装。安装需要时间，请耐心等待
![](https://wx4.sinaimg.cn/large/006bYVyvgy1fs42tif1iuj30t50f6jtd.jpg)
安装成功后，运行初始化命令(hexo init hojunBlog)
![](https://wx2.sinaimg.cn/large/006bYVyvgy1fs42th8zvsj30sn0f8q8t.jpg)
hexo官网也有部署命令的教程
![](https://wx2.sinaimg.cn/large/006bYVyvgy1fs42tgnlq2j30t60gjtc5.jpg)
初始化好后，进入文件夹，输入命令安装依赖 npm install(安装需要时间，请耐心等待)
（网好的请无视）若网络较差，可以使用淘宝镜像：
命令:npm install -g cnpm --registry=https://registry.npm.taobao.org
使用就是把npm改成cnpm即可。
网好的作者这里继续使用npm
![](https://wx1.sinaimg.cn/large/006bYVyvgy1fs42tg3mm5j30t50f7k32.jpg)
安装完成后，输入hexo s -p 5555(在端口5555启动服务)
![](https://wx3.sinaimg.cn/large/006bYVyvgy1fs42tfed4hj30t80f7dpv.jpg)
在网页上输入localhost:5555预览一下（localhost表示本地访问，小伙伴是看不到的）
![](https://wx1.sinaimg.cn/large/006bYVyvgy1fs42tekcydj31000j0k2a.jpg)

## **安装sublime**
sublime不是必要的，只是编辑文本用的编辑器。不过安利大家推荐：
百度搜索sublime，进入官网下载
![](https://wx3.sinaimg.cn/large/006bYVyvgy1fs42tdyzfuj30sl0ef0ut.jpg)
点击按钮下载
![](https://wx2.sinaimg.cn/large/006bYVyvgy1fs42tdesx5j30zg0h7woe.jpg)
下载好后确认安装
![](https://wx4.sinaimg.cn/large/006bYVyvgy1fs42tcqmh8j30t60gj79t.jpg)
我们将其安装在D盘：
![](https://wx4.sinaimg.cn/large/006bYVyvgy1fs42tbw18ej30t60gjtf7.jpg)
安装完成后，打开程序
![](https://wx2.sinaimg.cn/large/006bYVyvgy1fs42tawt44j30t60gjthw.jpg)
直接将博客文件夹拖入编辑器
![](https://wx4.sinaimg.cn/large/006bYVyvgy1fs42ta9hibj30t60gjn2h.jpg)
打开config文件，需要修改的地方有：网站名，介绍，关键字（这部分自己取），url(即是“http://用户名.github.io)。使用Ctrl+S保存文件
![](https://wx4.sinaimg.cn/large/006bYVyvgy1fs42t91tj5j31050lcqdq.jpg)
现在我们打开github获取仓库地址,点击头像->Your profile
![](https://wx4.sinaimg.cn/large/006bYVyvgy1fs42t7vw7cj30t60gjgq6.jpg)
点击对应的仓库
![](https://wx1.sinaimg.cn/large/006bYVyvgy1fs42t7e1kzj30t60gjtcu.jpg)
点击Clone or download，复制仓库地址
![](https://wx4.sinaimg.cn/large/006bYVyvgy1fs42t6uctmj30t60gjq89.jpg)
在config的最后找到deploy，输入如下内容（注意要有空格和缩进，不然会报错）
![](https://wx3.sinaimg.cn/large/006bYVyvgy1fs42t54pvhj30v20hln30.jpg)
接下来还需要安装git插件，命令 npm install hexo-deployer-git --save
![](https://wx1.sinaimg.cn/large/006bYVyvgy1fs42t5xfk3j30t60gjq6j.jpg)
安装好后输入hexo g生成命令
![](https://wx1.sinaimg.cn/large/006bYVyvgy1fs42t3t2ahj30rw0eotg4.jpg)
输入hexo d部署到github
![](https://wx4.sinaimg.cn/large/006bYVyvgy1fs42t4iuwaj30s10elwnr.jpg)
第一提交会提示您配置github的邮箱和用户名
![](https://wx3.sinaimg.cn/large/006bYVyvgy1fs42t30g0lj30rx0eqn5a.jpg)
根据提示配置
![](https://wx3.sinaimg.cn/large/006bYVyvgy1fs42t20a1uj30ru0ekjyw.jpg)
在弹出的输入框中输入用户名，密码登录
![](https://wx2.sinaimg.cn/large/006bYVyvgy1fs42t11faaj30so0etwii.jpg)
显示出INFO Deploy done: git表示成功发布到github上
![](https://wx3.sinaimg.cn/large/006bYVyvgy1fs42t0fro1j30rx0ep12s.jpg)
在浏览器上输入 "用户名.github.io" 即可访问自己的博客（你可以把这个链接发布给小伙伴啦）
![](https://wx2.sinaimg.cn/large/006bYVyvgy1fs42szjvzzj30zn0icwh9.jpg)
To Be Continued...(未完待续)
[视频教程-hexo安装](http://baijiahao.baidu.com/builder/preview/s?id=1602625496419176522)
[视频教程-sublime安装](http://baijiahao.baidu.com/builder/preview/s?id=1602625553939166110)
[视频教程-hexo发布](http://baijiahao.baidu.com/builder/preview/s?id=1602720282034365017)