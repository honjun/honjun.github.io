title: OwO-可爱的js表情符号插件
author: hojun
avatar: /images/favicon.png
authorDesc: 一个好奇的人
categories: 技术
series: hexo折腾
date: 2018-04-22 21:32:40
authorLink:
authorAbout:
tags:
 - js
keywords: 表情
description: 然而这并不是真正的目的，真正目的是为了在文章里添加表情*@(得意)@(得意)@(得意)*~~~
photos:
 - https://wx4.sinaimg.cn/large/006bYVyvgy1fqdqbfhns2j30b40b074f.jpg
---
![](https://wx4.sinaimg.cn/large/006bYVyvgy1fqdqbfhns2j30b40b074f.jpg)
表情图片给我们带来了很多欢乐，我们使用着各种表情表述自己的心情，拉动聊天气氛~（虽然常常聊着聊着就成了斗图大赛）。但是啊，系不系开心就好*@(哈哈)*~

今天给各位博主带来了一个js表情插件,效果如下*@(高兴)*：

{% raw %}
<link rel="stylesheet" href="/OwO/css/OwO.min.css">
<textarea class="OwO-textarea" style="width: 100%; height: 50px; margin-bottom: 10px; padding: 10px;"></textarea>
<div class="OwO"></div>
<script src="/OwO/js/OwO.min.js"></script>
<script>
    var OwO_OwO = new OwO({
        logo: 'OωO表情',
        container: document.getElementsByClassName('OwO')[0],
        target: document.getElementsByClassName('OwO-textarea')[0],
        api: '/OwO/json/OwO.json',
        position: 'down',
        width: '100%',
        maxHeight: '250px'
    });
</script>
{% endraw %}

首先感谢OwOde作者DIYgod，项目开源在github上https://github.com/DIYgod/OwO。

## 使用教程
### 安装

```js
$ npm install owo --save
```
或者直接去github下载源码

### 使用

#### HTML

```html
<link rel="stylesheet" href="OwO.min.css">
<!-- ... -->
<div class="OwO"></div>
<!-- ... -->
<script src="OwO.min.js"></script>
```

#### JS

```js
var OwO_demo = new OwO({
    logo: 'OωO表情',
    container: document.getElementsByClassName('OwO')[0],
    target: document.getElementsByClassName('OwO-textarea')[0],
    api: './OwO.json',
    position: 'down',
    width: '100%',
    maxHeight: '250px'
});
```

然而这并不是真正的目的，真正目的是为了在文章里添加表情*@(得意)@(得意)@(得意)*~~~
让自己的文章充满画面感*@(赞一个)*，就像现在一样*@(鼓掌)*。

## **怎么实现呢？**
### **第一步约定语法**
我们约定 `*@(表情名)*` 为插入表情的语法
### **第二步解析markdown**
博主使用的是hexo搭建的博客，在node_modules中找到解析markdown的js文件(可以看我的另一篇关于lozad.js文章有介绍)
`\node_modules\_marked@0.3.6@marked\lib\marked.js`
![image](https://wx2.sinaimg.cn/large/006bYVyvgy1fljpj5cg8ej308f00p741.jpg)
这里偷了一个小懒(其实是新建的搞不定*@(无奈)*)，直接使用em即斜体的语法，在内部加了个正则匹配，来识别我们的表情语法。具体代码如下：
marked.js
```js
Renderer.prototype.em = function(text) {
  var match = text.match(/@\((\S*?)\)/g);
  if(match) {
    var str = '';
    var mlength = match.length;
    for (var i = 0; i < mlength; i++) {
      var emoji = match[i].substring(2);
      emoji = emoji.substring(0, emoji.length-1);
      //对应的表情图片地址，图片可自定义。表情名=图片名，并统一为png格式
      emoji = '<img class="owoemoji" src="/OwO/img/' + emoji + '.png">';
      str += emoji;
    }
    return str;
  }
  return '<em>' + text + '</em>';
};
```
### **第三步添加hover效果**
添加表情hover贱贱的抖动css效果*@(滑稽)*
```css
/*OwO emoji*/
.owoemoji {
  display: inline-block !important;
  position: relative;
  top: 10px;
  margin: 0 !important;
  padding: 0;
}
.owoemoji:hover {
  animation: owo-face 5s infinite ease-in-out;
}

@keyframes owo-face {
    2% {
        transform: translate(0, 1.5px) rotate(1.5deg);
    }
    4% {
        transform: translate(0, -1.5px) rotate(-0.5deg);
    }
    太长略过...
}
```
好了，接下来就可以在你的markdown里面使用`*@(表情名)*`来添加表情，添加你的创作乐趣了！
祝大家开心生活，越活越年轻*@(脸红)*~