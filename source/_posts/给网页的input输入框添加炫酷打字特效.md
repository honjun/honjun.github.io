title: 给网页的input输入框添加炫酷打字特效
author: hojun
avatar: 'https://wx1.sinaimg.cn/large/006bYVyvgy1ftand2qurdj303c03cdfv.jpg'
authorLink: /about/hojun.html
authorDesc: 一个好奇的人
categories: 技术
comments: true
date: 2018-09-02 22:48:03
authorAbout:
series:
tags:
 - 特效
 - js
keywords: 打字特效
description: 这篇文章源自是《打字特效》的详细版。有盆友问博主关于评论框打字特效是怎么实现的？
photos:
---
## 前言
有盆友问博主关于评论框打字特效是怎么实现的？所以更新了这篇教程，源自是《打字特效》的详细版。（代码可以关注公众号回复demo004获取）
![](https://wx1.sinaimg.cn/large/006bYVyvgy1fuvkxfym4og30if06ign8.gif)

重申一遍，最初见到这个打字特效是在atom编译器中，有一个打字特效插件(activate-power-mode)。效果如下图，atom和特效插件的安装过程问百度就行啦，这里不做介绍。
![](https://wx3.sinaimg.cn/large/006bYVyvgy1fuvljmg8wzg30sp0i1kjm.gif)

## 欢迎主角

有请我们这次介绍的主角，js版activate-power-mode，github仓库地址github.com/disjukr/activate-power-mode。
仓库下的README.md有介绍食用方法：
![](https://wx2.sinaimg.cn/large/006bYVyvgy1fuvlw9l26nj30mn0frmxu.jpg)
现将其下载下来：
![](https://wx2.sinaimg.cn/large/006bYVyvgy1fuvlza8ctpj30tp0db3zz.jpg)
解压缩后的文件如下：(我们需要的js文件在dist文件夹下)
![](https://wx3.sinaimg.cn/large/006bYVyvgy1fuvme18nsvj30fa08o0t7.jpg)
在目录下新建一个index.html，插入如下代码
```html
<html>
  <head></head>
  <body>
    <textarea style="position: relative; top: 20%; left: 20%;" cols="100" rows="30"></textarea>
  </body>
  <script src="activate-power-mode.js"></script>
  <script>
  POWERMODE.colorful = true; // 火花各种颜色
  POWERMODE.shake = false; // 关闭打字屏幕颤抖效果
  document.body.addEventListener('input', POWERMODE);
  </script>
</html>
```
食用注意事项：

 - 注意js引入路径是否正确
 - 只要有js的input事件都会触发(试过改成click，只有鼠标点击的时候会触发)
 
浏览器打开效果：
![](https://wx1.sinaimg.cn/large/006bYVyvgy1fuvme0v76rg30c506hdil.gif)
是不是很简单，这篇教程就到这里啦。
