title: 'HEXO发布到Github报错?凉凉,迁移到Coding'
author: hojun
avatar: https://cdn.jsdelivr.net/gh/honjun/ImageHosting/sina/006bYVyvgy1ftand2qurdj303c03cdfv.jpg
authorDesc: 一个好奇的人
categories: 技术
comments: true
date: 2018-07-23 21:58:58
authorLink: /about/hojun.html
authorAbout:
series:
tags:
 - hexo 
keywords: hexo
description: 前几日的时候。hexo群里好多人发现hexo d报错，博主亲测结果如下：
photos:
 - https://cdn.jsdelivr.net/gh/honjun/ImageHosting/sina/006bYVyvgy1fs1s79hhsvj30m80b4q8m.jpg
---
![](https://cdn.jsdelivr.net/gh/honjun/ImageHosting/sina/006bYVyvgy1fs1s79hhsvj30m80b4q8m.jpg)
## 前言
前几日的时候。hexo群里好多人发现hexo d报错，博主亲测结果如下：
![](https://cdn.jsdelivr.net/gh/honjun/ImageHosting/sina/006bYVyvgy1ftnlycrongj30r40e9jrs.jpg)
改为https提交还是报错：
![](https://cdn.jsdelivr.net/gh/honjun/ImageHosting/sina/006bYVyvgy1ftnlwp95qwj30r50e90t7.jpg)
测试SSH key是成功的。浏览器访问github也还能访问。
![](https://cdn.jsdelivr.net/gh/honjun/ImageHosting/sina/006bYVyvgy1ftnlwpviqpj30g201xglg.jpg)
注释掉github地址，仅使用coding。轻易提交成功
![](https://cdn.jsdelivr.net/gh/honjun/ImageHosting/sina/006bYVyvgy1ftnlydhvbpj30ra0e9dgf.jpg)
配置如下：
```cof
deploy:
  type: git
  repo: 
    # github: git@github.com:honjun/honjun.github.io.git
    # github: https://github.com/honjun/honjun.github.io.git
    coding: https://git.coding.net/hojun/hojun.git
  branch: master
```
估计github被墙，凉凉*@(无所谓)*。算了，选择迁移到coding。

教程之前有写过，不过考虑到读者方便，copy过来*@(吐舌)*
## **第一步：注册coding**
[coding.net](https://coding.net/)
注册流程略。。。。
注册完成后先别急，如果你有自己购买的域名。需要把账号升级至银牌会员(只需完善信息，不收money)
![](https://cdn.jsdelivr.net/gh/honjun/ImageHosting/sina/006bYVyvly1fnu80gacdmj30j80fwwf7.jpg)
## **第二步：新建项目**
升级成功后新建项目
注意事项:

 1. 项目名要和用户名一致
 2. 要选择公开

## **第三步：配置**
创建好项目后在个人设置里面添加SSH公钥，可以参照帮助文档[配置 SSH 公钥访问代码仓库](https://coding.net/help/doc/account/ssh-key.html)
然后复制项目的https或git到hexo的配置文件_config.yml(注意，冒号后面要有个空格)
![](https://cdn.jsdelivr.net/gh/honjun/ImageHosting/sina/006bYVyvly1fnu80lum8jj30b703fglj.jpg)
如：
```yml
deploy:
  type: git
  repo: 
    github: https://github.com/honjun/honjun.github.io.git
    coding: https://git.coding.net/hojun/hojun.git
  branch: master
```

## **第四步：开启Pages服务**
cmd运行hexo g,hexo d
在Coding的项目中打开Pages服务->静态Pages,部署来源-master分支
就可以在coding.yourname.me看到你部署好的博客了
![](https://cdn.jsdelivr.net/gh/honjun/ImageHosting/sina/006bYVyvly1fnu80sdijmj30ok0btjs5.jpg)
## **第五步：绑定自定义域名**
在域名解析添加一条CNAME记录即可，如绑定二级域名xxx.你的域名.xx
![](https://cdn.jsdelivr.net/gh/honjun/ImageHosting/sina/006bYVyvly1fnu80ytrqhj30kg01sdfp.jpg)
等待生效，一般12小时左右
回到项目代码下，新建CNAME文件，内容为
```
xxx.你的域名.xx
```
再在Coding Pages服务里面绑定自定义域名
![](https://cdn.jsdelivr.net/gh/honjun/ImageHosting/sina/006bYVyvly1fnu814vtvvj30xj07h3yt.jpg)
接下来在hexo模板的footer下放置「Hosted by Coding Pages」
![](https://cdn.jsdelivr.net/gh/honjun/ImageHosting/sina/006bYVyvly1fnu81lo09qj30x209x3z5.jpg)
迁移完毕......

26日更新，github可以提交了......