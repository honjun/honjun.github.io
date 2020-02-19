title: 炫酷音乐播放器-Azusa!
author: hojun
avatar: 'https://cdn.jsdelivr.net/gh/honjun/ImageHosting/sina/006bYVyvgy1ftand2qurdj303c03cdfv.jpg'
authorLink: /about/hojun.html
authorDesc: 一个好奇的人
categories: 技术
comments: true
date: 2019-04-09 19:39:09
authorAbout:
series:
tags: 特效
keywords:
description:
photos: https://cdn.jsdelivr.net/gh/honjun/ImageHosting/sina/006bYVyvly1g1wmh1w4yjj31050lb7dq.jpg
---
![](https://cdn.jsdelivr.net/gh/honjun/ImageHosting/sina/006bYVyvly1g1wmh1w4yjj31050lb7dq.jpg)

又是一期新的特效安利，咳咳，准确说应该是第二期。如上图，这次介绍的就是上次说过的炫酷音乐播放器——Azusa!

## Azusa
Three.js开发，媲美AE特效的网页端音乐播放器！
作者大佬：[EYHN](https://github.com/EYHN)
Azusa代码仓库：[github.com/EYHN/Azusa](https://github.com/EYHN/Azusa)
demo预览：[www.hojun.cn/azusa](https://www.hojun.cn/azusa)
gif图预览：
![](https://cdn.jsdelivr.net/gh/honjun/ImageHosting/sina/006bYVyvly1g1wowl8bygg30dw0757wi.gif)
视频预览：
{% bili 48789169 %}

## 网页使用教程

参考Azusa仓库地址的教程的umd部分：
```html
<div id="bg"></div>
<canvas id="app"></canvas>

<script src="https://cdn.jsdelivr.net/npm/three"></script>
<script src="./lib/azusa.min.js"></script>
<script>

  const azusa = new Azusa({
    view: document.getElementById('app'),
    subdivisionSize: 1024,
    cutEnd: 256
  });

  azusa.audio.load({
    src: './example/media/cha.mp3',
    onPrgress: (xhr) => {
      console.log((xhr.loaded / xhr.total * 100) + '% loaded');
    }
  });

  azusa.audio.setVolume(0.5);

  window.addEventListener('resize', () => {
    azusa.resize(window.innerWidth, window.innerHeight);
  })

  const container = document.getElementById('bg')
  container && (container.style.backgroundImage = "url(./example/media/9s.jpg)")

</script>
```

**注意**

 - 上面份代码跑不起来，原因是新版的three舍弃了一些方法。于是查看作者的commit信息，发现作者开发的使用使用的是three.js的0.85.0版本。所以需要指明three版本，博主试过0.102以下版本都行。
 - 降低了thress.js版本后还需要在服务器环境下运行才能查看效果。
 - 音乐在新版谷歌浏览器下不能制动播放，要加用户交互才行

## 博主修改过程

第一步，使用git clone 命令 克隆Azusa github源码。
```git
git clone git@github.com:EYHN/Azusa.git
```
看源码虽然吃力，但是了解这个项目最好的途径。

第二步，修改example的代码，解决之前发现的问题。
```html
<link rel="stylesheet" href="https://cdn.bootcss.com/font-awesome/5.8.1/css/all.min.css"><style>
<script src="./js/three.js"></script>
<script src="./js/azusa.js"></script>
<script
  src="https://code.jquery.com/jquery-3.3.1.min.js"
  integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
  crossorigin="anonymous"></script>
```
直接将three和需要的js下载到本地，防止资源丢失导致不可以。其中three.js是从npm下载的0.85版本。还引入了font-awesome图标库和jquery的依赖。

```js
const azusa = new Azusa({
  view: document.getElementById('app'),
  subdivisionSize: 1024,
  cutEnd: 256
});
const container = document.getElementById('bg')
container && (container.style.backgroundImage = "url('https://cdn.jsdelivr.net/gh/honjun/ImageHosting/sina/006bYVyvly1g1tbar03aaj31hc0u0hdv.jpg')")
azusa.audio.load({
  src: './media/s.mp3',
  onPrgress: (xhr) => {
    if(xhr.loaded == 11005954) {
      console.log('加载完成');
    };
  }
});
azusa.audio.setVolume(0.5);

window.addEventListener('resize', () => {
  azusa.resize(window.innerWidth, window.innerHeight);
})
$('.play').click(function(){
  if ($(this).hasClass('fa-play')) {
    azusa.audio.play();
    console.log('zzbf')
    $(this).addClass('fa-pause');
    $(this).removeClass('fa-play');
  } else {
    azusa.audio.stop();
    $(this).addClass('fa-play');
    $(this).removeClass('fa-pause');
  }
});
```
修改js的代码，使用播放按钮控制音乐播放，停止。解决新版Chrome浏览器下不能自动播放的问题。暂时不能使音乐暂停再续播，因为没在代码里找到pause的方法，只找到了个stop停止的方法，但是会导致音乐重新播放。其中stop还需要修改azusa.js代码给它定义实现，代码如下：
```js
Audio.prototype.stop = function(){
  this.sound.stop();
};
```
至于我为啥知道sound有stop方法，当然是看源码知道的啊。然后随带把load方法里面的play也去掉了，点击播放的时候再调用play方法。

## 未解决bug
网页打开后极短时间内点击播放按钮并不能播放音乐，要延迟个二三秒钟点击播放按钮才解决，有大佬知道原因的欢迎留言~

完。