title: Hexo博客中添加表情插件emojis
author: hojun
avatar: 'https://cdn.jsdelivr.net/gh/honjun/ImageHosting/sina/006bYVyvgy1ftand2qurdj303c03cdfv.jpg'
authorLink: /about/hojun.html
authorDesc: 一个好奇的人
categories: 技术
comments: true
date: 2019-04-05 11:16:58
authorAbout:
series:
tags: hexo
keywords: emojis
description: Hexo博客中添加表情插件emojis
photos:
---

## 各位看官大姥爷
{% emoji_hj people/clapping-hands %}今天我们来介绍hexo的emoji表情插件。

## hexo-tag-emojis-byhj
该插件开发发布于今天(2019.4.5)，由昨天晚上开始规划。{% emoji_hj people/thinking-face %}嗯，计划详细准备充分技术人员一个顶俩。

先说说昨天，找到joypixels这个表情符号网站，提供了一份免费使用的表情。之前一直想做这插件，怕表情侵权耽搁了。
![](https://cdn.jsdelivr.net/gh/honjun/ImageHosting/sina/006bYVyvly1g1s6s9zsd6j311y0lcq9y.jpg)
![](https://cdn.jsdelivr.net/gh/honjun/ImageHosting/sina/006bYVyvly1g1s6uskvlhj311l0lc75z.jpg)

感谢小爱莉童鞋{% emoji_hj people/backhand-index-pointing-right %}[SimonKing](https://kurumi.ink)帮忙下的表情包 以及 joypixels 提供的免费个人使用的表情包
## 安装
使用npm安装，命令如下{% emoji_hj people/backhand-index-pointing-down %}
```js
npm i hexo-tag-emojis-byhj --save
```
就是这里，本来是高高兴兴的写插件教程，结果发现了个深坑。一旦使用了代码块语法后就不能识别出代码块之前到第一个表情标签之后的标题！！！什么鬼bug!
经过调试hexo的tag->post->highlight->Render->markdown，最终定位的到marked.js的Lexer.prototype.token的heading判断代码块。看了下版本"marked@^0.3.9"，去官方看了下0.6.2，{% emoji_hj people/downcast-face-with-sweat %}
![](https://cdn.jsdelivr.net/gh/honjun/ImageHosting/sina/006bYVyvly1g1s5neqie7j30nc0dgmxw.jpg)
而且连heading的正则都不一样的，果断更新到最新代码，解决了这个bug。
我将issue提交至hexo后，官方也通过更新了marked的代码版本，之后安装hexo的小伙伴可以放心使用本插件了~
![](https://cdn.jsdelivr.net/gh/honjun/ImageHosting/sina/006bYVyvly1g1ugsfdceoj30nm0dxgmp.jpg)
## 使用
使用之前先要引入css:(建议在文章模板页引入，因为你只在写文章的时候使用表情，按需加载)。当然也可以不引人css，自己写一个css样式，以下的css只是.emoji-hj的表情图片的样式，主要就是控制大小、行内块元素以及hover能跳动的css动画。有更好的css样式可以自由发挥。而且欢迎pr到github仓库。
```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/honjun/hexo-tag-emojis-byhj/css/emoji.css">
```
接着就可以直接在md中使用emoji标签了，语法如下：
```md
{% emoji_hj src, [className] %}
```
例如：
```md
{% emoji_hj people/thinking-face %}
```
当然了，如果只是这样用户体验太差，使用起来不够方便，于是做了个页面[hexo-tag-emojis-byhj插件目前所有的表情](https://www.hojun.cn/2019/04/05/hexo-tag-emojis-byhj%E6%8F%92%E4%BB%B6%E7%9B%AE%E5%89%8D%E6%89%80%E6%9C%89%E7%9A%84%E8%A1%A8%E6%83%85/)。在这个页面直接点击表情就能复制相应的代码，粘贴到自己文章中，耍起来就很方便了{% emoji_hj people/smiling-face-with-sunglasses %}。

## 赞赏作者
觉得插件好的可以赞赏作者啊{% emoji_hj people/money-mouth-face %}
![](https://cdn.jsdelivr.net/gh/honjun/cdn@1.6/img/custom/donate/WeChanSQ.jpg)