title: npm发布自己的插件
author: hojun
avatar: 'https://wx1.sinaimg.cn/large/006bYVyvgy1ftand2qurdj303c03cdfv.jpg'
authorLink: /about/hojun.html
authorDesc: 一个好奇的人
categories: 技术
comments: true
date: 2019-02-07 18:05:58
authorAbout:
series:
tags: npm
keywords:
description:
photos: https://ws1.sinaimg.cn/small/006bYVyvly1g005a1hrhbj308c03pq2p.jpg
---
这里拿之前写的hexo-tag-bili插件为例。（后来发现之前已经有[Z4Tech](https://github.com/Z4Tech/hexo-tag-bilibili)大大发布过类似的插件了，纯当学习于是继续完成了这个插件）

## 准备npm账号

若是没有npm账号，在cmd中输入如下npm addUser命令注册账号
![](https://ws1.sinaimg.cn/large/006bYVyvly1fzy1qf2or8j30ia04tt8q.jpg)
若是已有npm账号，在cmd中输入如下npm login命令登录账号
![](https://ws4.sinaimg.cn/large/006bYVyvly1fzy8hrpd4dj30i6051glo.jpg)

## 新建插件
选择一个目录新建我们的插件文件夹（这里为hexo-tag-bili）。
cd到目录下，运行npm init初始化
![](https://wx3.sinaimg.cn/large/006bYVyvly1fzy3bdxo55j30h70acdg4.jpg)
这里解释下上图参数的意思：（直接打回车即空白的部分，表示默认用前面括号中的内容）

 - name 项目名称
 - version 项目版本号
 - description 项目描述
 - entry point 项目主入口文件
 - test command 项目启动时脚本命令
 - git repository git仓库地址（可以将这个项目放到你的 Git 仓库里）
 - keywords 关键词
 - author 作者
 - license 项目要发行的时候需要的证书，平时玩玩忽略它

![](https://wx1.sinaimg.cn/large/006bYVyvly1fzy3buus2ij30fw0d8dg3.jpg)

## 编写插件

接下来新建index.js作为插件入口文件，又因为我这个插件功能简单，就直接在index中实现功能就好了。代码如下：(为啥这么写请参考hexo官方文档)
```js
/**
* hexo-tag-bili
* https://github.com/honjun/hexo-tag-bili.git
* 
* Syntax:
* {% bili video_id %} or {% bili video_id page %} 
* 
* Example: 
*   https://www.bilibili.com/video/av24897960
*   {% bili 24897960 %}
*   https://www.bilibili.com/video/av24897960/?p=2
*   {% bili 24897960 2 %}
*/
hexo.extend.tag.register('bili', function(args){
  var id = args[0];
  var page = args[1] || '';
  return `<div style="position: relative; width: 100%; height: 0; padding-bottom: 75%;"><iframe src="//player.bilibili.com/player.html?aid=${id}&page=${page}" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" style="position: absolute; width: 100%; height: 100%; left: 0; top: 0;"></iframe></div>`;
});

```
## 发布插件

插件写好了，按道理是要测试下的咳咳，表示之前有直接使用，这就不测试了哈，直接使用`npm publish`发布到npm上。
```npm
npm publish
```
发布后我们就可以使用npm命令下载我们的插件了。
```npm
npm i hexo-tag-bili --save
```
安装好后可以在hexo博客目录的node_modules目录下找到我们的hexo-tag-bili插件。然后就可以使用
```markdown
{% bili video_id page %}
```
来插入B站视频了！

## 其他

把插件源代码发布到github仓库。(略......）

## 感谢
[largeQ](http://www.imooc.com/article/70068)
[酷酷小七](https://blog.csdn.net/weixin_37861326/article/details/80569226)
[kuke_kuke](https://blog.csdn.net/qq_33599109/article/details/80018064)
[dkvirus](https://my.oschina.net/dkvirus/blog/1068813)
[Z4Tech](https://github.com/Z4Tech/hexo-tag-bilibili)