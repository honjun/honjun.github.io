title: 使用Jemdoc建个人网页简历(初级篇)
author: hojun
avatar: https://cdn.jsdelivr.net/gh/honjun/ImageHosting/sina/006bYVyvgy1ftand2qurdj303c03cdfv.jpg
authorLink: /about/hojun.html
authorDesc: 一个好奇的人
categories: 技术
comments: true
date: 2019-10-08 12:33:39
authorAbout:
series:
tags: jemdoc
keywords:
description:
photos: https://cdn.jsdelivr.net/gh/honjun/ImageHosting/picgo/20191010235539.jpg
---
![](https://cdn.jsdelivr.net/gh/honjun/ImageHosting/picgo/20191010235539.jpg)
## jemdoc是什么？
jemdoc是一种用于创建网站的基于文本的轻量标记语言。它需要一个用jemdoc标记编写的文本文件，一个可选的配置文件和一个可选的菜单文件。（类似markdown）jemdoc的灵感来自于AsciiDoc，这是一个文本文件格式。AsciiDoc很棒，AsciiDoc的许多想法都复制到了jemdoc中。主要区别在于jemdoc更简单（您可以说故意功能较差）并且语法更加一致。

**目标**
 
 - 简单，一致的语法。
 - LaTeX方程支持。
 - 表支持。
 - 可移植性。（单个）jemdoc Python文件+单个css文件+您的输入文件→html。
 - 基于CSS，因此格式设置细节独立于jemdoc。
 - 生成干净的， 符合标准的 XHTML 1.1。
 - 最少的花哨，但如果需要，可以简单地回退到原始html。

## 食用方式
### 环境
依赖python2环境，建议pyhton2.7~。
题外话：若安装了python2和python3，可以在安装目录里修改python.exe文件为python2.exe和python3.exe来区分python版本，使用的时候命令为 python2 xxx.py 表示用python2命令运行xxx.py。python3的用法相同。
![](https://cdn.jsdelivr.net/gh/honjun/ImageHosting/picgo/20190528214259.png)

### 下载
去[jemdoc官网](http://jemdoc.jaboc.net/download.html)下载jemdoc.py。对的，你没看错，就只要一个.py代码文件就行了。不过建议顺带下载使用官方的[示例CSS文件:jemdoc.css](http://jemdoc.jaboc.net/dist/jemdoc.css)。

### 食用
新建example.jemdoc文件,(建议和jemdoc.py同级目录，比较好写命令)
在example.jemdoc文件中可以尝试复制下官方的example的内容:
```jemdoc
[https://jemnz.com/ Jacob Mattingley] ([www@jemnz.com])

If the first line of the file starts with +\# jemdoc+, special functions like [menu.html menus] will be used.

== Example
Here are some *text* /features/. I could [http://cvxmod.net/ link somewhere] or insert a raw link to another page like [download.html]. I could use +monospace+, too.

I could write special characters like \#, \$ and \+ by just using a backslash (\\) in front of those characters. Or automatically detect an [www@jemnz.com email address].

~~~
Save the file as +index.jemdoc+, say, and simply call +jemdoc index+ (after [download.html downloading jemdoc], of course).
~~~

== Next bit, next heading level two
=== Getting into level three now

Why not use a list
- to explain the way you do lists?
- to demonstrate how a line\n break might work?

Or perhaps a
. Multilevel
  .. Numbered list
  .. Is more
. Useful?

: {Definition} lists, especially when there are many definitions
: {Can be useful} for explaining things

== Finally, a few more blocks
This `section' features "smart quotes".

~~~
{Simple block}
This is a simple text block, with a title. Notice how the previous line has only one set of braces (\{\}).
~~~

~~~
{Interactive Python listing}{pyint}
>>> print 'Interactive Python code.'
'Interactive Python code.'
~~~

~~~
{}{}
Plain code block with no title.
~~~

You might need 2--3 different-sized dashes---they can be useful. Now we're done!
```
接下来就是生成网页了，这里我并没有将jemdoc添加到环境目录中，所以不能使用官方文档的那种命令方法：
```cmd
jemdoc example.jemdoc
```
只能使用普通的python命令，不过也没差多少，这就是没折腾的原因了，python命令如下：
```cmd
python jemdoc.py example.jemdoc
```
注意上面是默认你安装的是pyhton2版本的，若是按我的题外话来安装的命令如下：
```cmd
python2 jemdoc.py example.jemdoc
```
![](https://cdn.jsdelivr.net/gh/honjun/ImageHosting/picgo/20191010220347.png)
然后就会在目录下生成index.html文件，打开页面如下：
![](https://cdn.jsdelivr.net/gh/honjun/ImageHosting/picgo/20191010221535.png)
注意他这里其实默认加载了jemdoc.css(官方css),所以前面叫下载的css也要放到同级目录哦，当然你自己写个css引入也行。

### 语法

想尝鲜的可以参考官方教程先耍一波~
[官方教程](http://jemdoc.jaboc.net/cheatsheet.html)

使用教程编写中...To be continued...