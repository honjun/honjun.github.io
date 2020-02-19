title: 使用Jemdoc建个人网页简历(高级篇)
author: hojun
avatar: 'https://cdn.jsdelivr.net/gh/honjun/ImageHosting/picgo/20191009004718.png'
authorLink: /about/hojun.html
authorDesc: 一个好奇的人
categories: 技术
comments: true
date: 2019-10-14 19:31:20
authorAbout:
series:
tags: jemdoc
keywords:
description:
photos: https://cdn.jsdelivr.net/gh/honjun/ImageHosting/picgo/20191010235539.jpg
---
![](https://cdn.jsdelivr.net/gh/honjun/ImageHosting/picgo/20191010235539.jpg)
上篇教程我们已经比较深入了解到了jemdoc的篇写语法，这篇教程就来讲下一些高级运用。

## 添加菜单

jemdoc只适用于做页面？NONONO，jemdoc的官网就是运用添加菜单功能实现的。
首先，你在新建一个菜单文件MENU，内容如下：
```txt
jemdoc学习
    home                [index.html]
    cheatsheet          [cheatsheet.html]
    example             [example.html]

jemdoc学习二
    testgbk             [testgbk.html]
    include             [include.html]
```

然后分别在index.jemdoc、cheatsheet.jemdoc等以上MENU包含的jemdoc中首行加入：
```jemdoc
//index.jemdoc 加这个
# jemdoc: menu{MENU}{index.html}

//cheatsheet.jemdoc 加这个
# jemdoc: menu{MENU}{cheatsheet.html}

//其他雷同
......
```
在全部重新生成一遍（这个一定要代码实现了，不然太麻烦了），就可以了：
![](https://cdn.jsdelivr.net/gh/honjun/ImageHosting/picgo/20191014234702.png)

## modeline 模式行设置

jemdoc的modeline要在首行（或头部配置），如：

```jemdoc
# jemdoc: menu{MENU}{cheatsheet.html}

// 或

# jemdoc: addcss{jemdoc.css}
# jemdoc: addjs{jemdoc.js}
```

### addcss&js
 
上图前面的就是上一步说的添加menu，而后面的则是引入css和js。
试这在录下新建个js文件夹，在下面新建jemdoc.js，内容如下：
```js
console.log("this is ./js/jemdoc.js")
```
然后新建modeline.jemdoc中引入，注意这里有个坑，我们试着在头部引入：
```jemdoc
# jemdoc: addcss{jemdo}
# jemdoc: addcss{jemdo.css}
# jemdoc: addjs{./js/jemdoc}
# jemdoc: addjs{./js/jemdoc.js}
```
生成的代码如下：(解释就写在备注那里)
```html
// 这个是jemdoc默认会生成的，自动引入jemdoc.css
<link rel="stylesheet" href="jemdoc.css" type="text/css" />

// 这个是addcss{jemdo}生成的，可以看到jemdoc自动给加了.css后缀
<link rel="stylesheet" href="jemdo.css" type="text/css" />

// 这个是addcss{jemdo.css}生成的，可以看到jemdoc没给加后缀
<link rel="stylesheet" href="jemdo.css" type="text/css" />

// 这个是addjs{./js/jemdoc}生成的，可以看到jemdoc自动给加了.js后缀
<script src="./js/jemdoc.js" type="text/javascript"></script>

// 这个是addjs{./js/jemdoc.js}生成的，可以看到jemdoc多加了个.js后缀，导至找不到js.
<script src="./js/jemdoc.js.js" type="text/javascript"></script>
```

综上所述，在使用addcss和addjs模式行的时候都不要加后缀，jemdoc会自动生成。

### 其他

```jemdoc
// 自定义页面titile
# jemdoc: title{自定义titile}

// 清除jemdoc自动包含的jemdoc.css
# jemdoc: nodefaultcss

// 添加Google Analytics（分析）支持
analytics {ANALYTICS KEY}
```

### 底部footer配置

```jemdoc
// 不要生成时间
# jemdoc: notime

// 不要生成日期
# jemdoc: nodate

// 不要生成时指向jemdoc的超链接
# jemdoc: showsource

// 不要生成footer
# jemdoc: nofooter
```
在jemdoc中首行加入：
```
# jemdoc: nofooter
```

### 方程式

```jemdoc
// 禁用LaTeX方程式支持。
# jemdoc: noeqs

// 调整方程式的大小（默认值为130）
# jemdoc: eqsize {SIZE}

// 调整方程式目录（默认eqs）。
# jemdoc: noeqs

// 禁用方程式缓存。
# jemdoc: noeqs

// 在编译方程式时包括对LATEX_PACKAGE_NAME的支持
# jemdoc: addpackage {LATEX_PACKAGE_NAME}
```

因为没用jemdoc的公式，所以上面的modeline也没用，安装太麻烦了。嵌入在jemdoc文件中的LaTeX源代码是通过调用latex和 dvipng处理的（此功能都必须可用）参考[jemdoc.jaboc.net/latex.html](http://jemdoc.jaboc.net/latex.html)，而安装这俩东西还不如用mathjax便捷~。
mathjax使用可以参考我index.jemdoc的代码。用`￥`代替`$`就行。

## 写法
可以写在一行：
```jemdoc
＃jemdoc：nodefaultcss，addcss {custom.css}
```

## html成生模版更改
这个就更加高级了，可以修改jemdoc的生成规则。
在cmd中输入
```cmd
python2 jemdoc.py --show-config
```
或者在jemdoc.py文件的133-207行可以看到对应的html配置。
首先，找出需要使用来更改哪个块，这里拿[footerend]举例。创建一个新文件myfooterend.conf，一开始内容为原来模版的：
```html
[footerend]
</div>
</div>
```
然后我们总要搞点小动作：
```html
[footerend]
<p style="color: red;">这是我改的footerend，就是为了说这句话2333~</p>
</div>
</div>
```

然后新建个myfooter.jemdoc，在用以下命令生成它：

```cmd
python2 jemdoc.py -c myfooterend.conf myfooter.jemdoc
```

效果如下
![](https://cdn.jsdelivr.net/gh/honjun/ImageHosting/picgo/20191015224152.png)

这个功能其实给了jemdoc很大的操作空间，大家可以尽情发挥自己的想像力来生成更棒的页面了~

jemdoc教程到此结束，希望各位看官已经掌握了jemdoc制作个人网页简历的技能，以上代码公众号回复demo016获取~
完。
