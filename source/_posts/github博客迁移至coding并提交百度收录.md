title: github博客迁移至coding并提交百度收录
author: hojun
avatar: /images/favicon.png
authorDesc: 一个好奇的人
categories: 技术
date: 2018-01-25 22:44:09
authorLink:
authorAbout:
tags:
keywords:
description:
photos:
 - https://wx1.sinaimg.cn/large/006bYVyvly1fnu8apz5tsj30870870su.jpg
---
因为度娘的蜘蛛被github拉小黑屋了，为了提高访问量，决定把博客迁移至coding(github共存)。
## **第一步：注册coding**
[https://coding.net/](https://coding.net/)
注册流程略。。。。
注册完成后先别急，如果你有自己购买的域名。需要把账号升级至银牌会员(只需完善信息，不收money)
![](https://wx4.sinaimg.cn/large/006bYVyvly1fnu80gacdmj30j80fwwf7.jpg)
## **第二步：新建项目**
升级成功后新建项目
注意事项:

 1. 项目名要和用户名一致
 2. 要选择公开

## **第三步：配置**
创建好项目后在个人设置里面添加SSH公钥，可以参照帮助文档[配置 SSH 公钥访问代码仓库](https://coding.net/help/doc/account/ssh-key.html)
然后复制项目的https或git到hexo的配置文件_config.yml(注意，冒号后面要有个空格)
![](https://wx2.sinaimg.cn/large/006bYVyvly1fnu80lum8jj30b703fglj.jpg)
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
![](https://wx2.sinaimg.cn/large/006bYVyvly1fnu80sdijmj30ok0btjs5.jpg)
## **第五步：绑定自定义域名**
在域名解析添加一条CNAME记录即可，如绑定二级域名xxx.你的域名.xx
![](https://wx4.sinaimg.cn/large/006bYVyvly1fnu80ytrqhj30kg01sdfp.jpg)
等待生效，一般12小时左右
回到项目代码下，新建CNAME文件，内容为
```
xxx.你的域名.xx
```
再在Coding Pages服务里面绑定自定义域名
![](https://wx3.sinaimg.cn/large/006bYVyvly1fnu814vtvvj30xj07h3yt.jpg)
接下来在hexo模板的footer下放置「Hosted by Coding Pages」
![](https://wx2.sinaimg.cn/large/006bYVyvly1fnu81lo09qj30x209x3z5.jpg)
迁移完毕......

## **第六步：提交百度收录**
登录百度搜索资源平台->网站支持->数据引入->链接提交。即可，没有绑定过的需要先新增站点并验证。注意https和http有区别，需要自己选择，选错了会验证不了
推荐使用sitemap方式提交，推荐一个hexo的sitemap生成插件：[hexo-generator-baidu-sitemap](https://github.com/coneycode/hexo-generator-baidu-sitemap)