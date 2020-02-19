title: yaml基本语法及实现Hexo二级导航栏功能
author: hojun
avatar: 'https://cdn.jsdelivr.net/gh/honjun/ImageHosting/sina/006bYVyvgy1ftand2qurdj303c03cdfv.jpg'
authorLink: /about/hojun.html
authorDesc: 一个好奇的人
categories: 技术
comments: true
date: 2019-01-08 23:55:01
authorAbout:
series: hexo-sakura主题
tags:
 - sakura
 - hexo
 - yaml
keywords: Hexo二级导航栏
description: 咳咳，在实现hexo二级导航栏功能之前，我们先学习下yaml语法。（yaml就是hexo中_config.yml文件使用的语言
photos: https://cdn.jsdelivr.net/gh/honjun/ImageHosting/sina/006bYVyvly1fyzlm1pnvqj30zo0iie81.jpg
---
咳咳，在实现hexo二级导航栏功能之前，我们先学习下yaml语法。（yaml就是hexo中_config.yml文件使用的语言)
## 以下内容摘至阮一峰老师的博客

### 简介
YAML 语言（发音 /ˈjæməl/ ）的设计目标，就是方便人类读写。它实质上是一种通用的数据串行化格式。

它的基本语法规则如下。

 - 大小写敏感
 - 使用缩进表示层级关系
 - 缩进时不允许使用Tab键，只允许使用空格。
 - 缩进的空格数目不重要，只要相同层级的元素左侧对齐即可

`#` 表示注释，从这个字符一直到行尾，都会被解析器忽略。
YAML 支持的数据结构有三种。

 - 对象：键值对的集合，又称为映射（mapping）/ 哈希（hashes） / 字典（dictionary）
 - 数组：一组按次序排列的值，又称为序列（sequence） / 列表（list）
 - 纯量（scalars）：单个的、不可再分的值

这次我们实现过程主要是使用对象和数组。

### 对象

对象的一组键值对，使用冒号结构表示。
```yml
animal: pets
```
转为 JavaScript 如下。
```yml
{ animal: 'pets' }
```
Yaml 也允许另一种写法，将所有键值对写成一个行内对象。
```yml
hash: { name: Steve, foo: bar } 
```
转为 JavaScript 如下。
```yml
{ hash: { name: 'Steve', foo: 'bar' } }
```
### 数组
一组连词线开头的行，构成一个数组。
```yml
- Cat
- Dog
- Goldfish
```
转为 JavaScript 如下。
```yml
[ 'Cat', 'Dog', 'Goldfish' ]
```
数组也可以采用行内表示法。
```yml
animal: [Cat, Dog]
```
转为 JavaScript 如下。
```yml
{ animal: [ 'Cat', 'Dog' ] }
```
### 四、复合结构
对象和数组可以结合使用，形成复合结构。
```yml
languages:
 - Ruby
 - Perl
 - Python 
websites:
 YAML: yaml.org 
 Ruby: ruby-lang.org 
 Python: python.org 
 Perl: use.perl.org
```
转为 JavaScript 如下。
```yml
{ languages: [ 'Ruby', 'Perl', 'Python' ],
  websites: 
   { YAML: 'yaml.org',
     Ruby: 'ruby-lang.org',
     Python: 'python.org',
     Perl: 'use.perl.org' } }
```
好了，了解到这里就能运用起来实现我们的二级导航栏功能的配置了。

首先我们看下一般的目录配置
```yml
menu:
  home: / || home
  about: /about/ || user
  tags: /tags/ || tags
  categories: /categories/ || th
  archives: /archives/ || archive
  #schedule: /schedule/ || calendar
  #sitemap: /sitemap.xml || sitemap
  #commonweal: /404/ || heartbeat
```
类似这种，前面的是目录名，后边的是path(路径)和图标的class名(中间用||隔开)
我们可以看下现在要实现的这种菜单导航栏的需求
![](https://cdn.jsdelivr.net/gh/honjun/ImageHosting/sina/006bYVyvly1fyzlm1pnvqj30zo0iie81.jpg)
前面横着部分可以和上面配置一样实现，下边竖着的部分又要怎么实现呢。

稍微改了下_config的菜单配置如下：
```yml
menus:
  首页: { path: /, fa: fa-fort-awesome faa-shake }
  归档: { path: /archives, fa: fa-archive faa-shake, submenus: { 
    技术: { path: /categories/技术/, fa: fa-code }, 
    生活: { path: /categories/生活/, fa: fa-file-text-o }, 
    资源: { path: /categories/资源/, fa: fa-cloud-download }, 
    随想: { path: /categories/随想/, fa: fa-commenting-o },
    转载: { path: /categories/转载/, fa: fa-book }
  } }
  清单: { path: javascript:;, fa: fa-list-ul faa-vertical, submenus: { 
    书单: { path: /tags/悦读/, fa: fa-th-list faa-bounce }, 
    番组: { path: /video, fa: fa-film faa-vertical }, 
    歌单: { path: /music, fa: fa-headphones },
    图集: { path: /tags/图集/, fa: fa-photo }
  } }
  留言板: { path: /comment, fa: fa-pencil-square-o faa-tada }
  友人帐: { path: /links, fa: fa-link faa-shake }
  赞赏: { path: /donate, fa: fa-heart faa-pulse }
  关于: { path: /, fa: fa-leaf faa-wrench , submenus: { 
    我？: { path: /about, fa: fa-meetup}, 
    主题: { path: /theme-sakura, fa: iconfont icon-sakura },
    Lab: { path: /lab, fa: fa-cogs },
  } }
  客户端: { path: /client, fa: fa-android faa-vertical }
  RSS: { path: /atom.xml, fa: fa-rss faa-pulse }
```
在学习了阮一峰老师的那部分内容应该能看懂上图的配置了。接下来就是模板中怎么遍历出菜单了。
废话不多说，直接上代码：（注意这里是ejs模板的代码，swig、pub等模板代码还需自己照瓢画葫芦）
```html
<ul id="menu-new" class="menu">
  //这里是开始循环外层菜单（就是横着的那部分）
  <% for (var menu in theme.menus){ %>
    <li>
      //a标签里当然是输出菜单的路径咯
      <a href="<%- url_for(theme.menus[menu].path) %>">
        <span class="faa-parent animated-hover">
          //i标签里输出菜单的icon的class咯
          <i class="fa  <%= theme.menus[menu].fa %>" aria-hidden="true"></i>
          //这里输出菜单名咯
          <%= menu %>
        </span>
      </a>
      //这里判断有没有二级菜单，有的话遍历出二级菜单（就是竖着的那部分）
      <% if (theme.menus[menu].submenus) { %>
        <ul class="sub-menu">
          //遍历出二级菜单（就是竖着的那部分）
          <% for (var submenu in theme.menus[menu].submenus){ %>
            <li>
              //a标签里当然是输出二级菜单的路径咯
              <a href="<%- url_for(theme.menus[menu].submenus[submenu].path) %>">
                //i标签里输出二级菜单的icon的class咯
                <i class="fa <%= theme.menus[menu].submenus[submenu].fa %>" aria-hidden="true"></i>
                //这里输出二级菜单名咯
                <%= submenu %>
              </a>
            </li>
          <% } %>
        </ul>
      <% } %>
    </li>
  <% } %>
</ul>
```
可以看出我是用行内对象来实现的，后来想想用数组实现会比较简单，当是那样会用下标0、1、2等代替具体的值，而不是像现在有具体的含义的属性path,fa等，数组实现没有这种方式易懂。就没有改成数组了。

到此hexo二级导航栏功能实现，完。


