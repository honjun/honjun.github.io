title: 使用Jemdoc建个人网页简历(中级篇)
author: hojun
avatar: 'https://cdn.jsdelivr.net/gh/honjun/ImageHosting/picgo/20191009004718.png'
authorLink: /about/hojun.html
authorDesc: 一个好奇的人
categories: 技术
comments: true
date: 2019-10-13 23:50:29
authorAbout:
series:
tags: jemdoc
keywords:
description:
photos: https://cdn.jsdelivr.net/gh/honjun/ImageHosting/picgo/20191010235539.jpg
---
![](https://cdn.jsdelivr.net/gh/honjun/ImageHosting/picgo/20191010235539.jpg)
上篇教程我们已经初步了解到了jemdoc的使用，这篇教程就来深入学习它。

## 详细语法
可以结合官方文档和本篇教程一起学习，官方文档：[http://jemdoc.jaboc.net/cheatsheet.html](http://jemdoc.jaboc.net/cheatsheet.html)

新建cheatsheet.jemdoc，在里面使用教程上的语法
```jemdoc

/斜字体/

*加粗*

+等宽（li和cs等宽）+

+等宽（cs和li等宽）+

不等宽（li占的比cs小哦）

不等宽（cs占的比li大哦）

连字符-连字符

破折号1--破折号1

破折号2---破折号2

省略号...省略号

不间断空格~不间断空格(最重要的作用就是换行时不被打断)

# 注释？？

\C is ©

\R is ®

\M is · 

“单引号文字”写为“单引号文字”

“双引号文字”写为“双引号文字”

jemdoc's的撇号jemdoc's的输入自动转换

\n 强制手动换行

段落由空白行分隔（即空一行才可以另起一段）下面这句话
（我是第二行了的）是会在同一行/段的哦

LaTeX方程(暂不能用哦)

#s (and only #s) must be quoted in URLs

= 标题一
== 标题二
=== 标题三
==== 标题四

[https://www.hojun.cn/ 这是超链接写法] 

邮箱哦：([hojun@qq.com])

这个会跳转到当前目录的[other.html]，和超链接类似。

这是无序列表:

- 无序列表
  -- 二级无序列表
      --- 三级无序列表
- 无序列表

这是有序列表:

. level1
  .. level2
    ... level3
. level1

:{定义解释块}balabala,这里解释，比如下面例子

:{233}233是一个网络用语，大致意思就是啊哈哈，非常好笑的意思。233来源于猫扑表情第233号，是一张捶地大笑的表情，因此不少网友就喜爱在贴吧和论坛发帖的时候加上一句233，用来表示哈哈大笑的意思。


~~~
{简单块，这里是标题}
This is a simple text block, with a title. Notice how the previous line has only one set of braces (\{\}).
~~~

~~~
{这个是代码块标题，后面那个是代码高亮，好像仅支持py}{python}
def putbsbs(l):
  for i in range(len(l)):
    l[i] = '\\b' + l[i] + '\\b'

  return l
~~~

~~~
{}{}
啥都不写就是不要标题~
~~~

{{<h2>}}这是用inline html escaping包裹的h2，语法结束记的要换行，不然有bug{{</h2>}}

~~~
{}{raw}
要写html代码记的用raw，而不是楼上的：
<form>
First name: <input type="text" name="firstname"><br>
Last name: <input type="text" name="lastname">
</form>
~~~

#include{include.jemdoc}

#includeraw{include.html}

~~~
{}{img_left}{https://jemnz.com/jacobm2.png}{Jacob Mattingley}{120px}{160px}{https://www.baidu.com}
加图片
{}{img_left}{图片url}{描述图像}{宽}{高}{点击图片跳转的链接}
 (后面三个参数可以省略)
{}{img_left}{图片url}{描述图像}
~~~

```

以上代码公众号回复demo016获取


## 解决中文乱码
首先得知道乱码的原因，博主经过调试发现乱码的原因还是最常见的文件字符编码问题。

**解决方法：**
1、在新建jemdoc的时候选择新建gbk编码的文件
![](https://cdn.jsdelivr.net/gh/honjun/ImageHosting/picgo/20191014003121.png)
2、(以下两种任选一种)
 - 打开jemdoc.py，查找`charset=utf-8`修改为`charset=gbk`，再运行命令生成html即可。
 - 运行命令后打开生成的html，查找`charset=utf-8`修改为`charset=gbk`即可。
 
本来决定就这篇讲讲完的，可是内容比之前想像的多很多,于是有了[高级篇]()，这篇好好一个一个语法尝试过去应该能学到很多~