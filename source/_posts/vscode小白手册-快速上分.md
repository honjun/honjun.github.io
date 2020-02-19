title: vscode小白手册-快速上分
author: hojun
avatar: https://cdn.jsdelivr.net/gh/honjun/ImageHosting/sina/006bYVyvgy1ftand2qurdj303c03cdfv.jpg
authorLink: /about/hojun.html
authorDesc: 一个好奇的人
categories: 技术
comments: true
date: 2019-05-28 12:37:14
authorAbout:
series:
tags:
keywords:
description:
photos:
---
切换代码主题
ctrl+K+T (推荐monokai)
打开两个目录
这个比较坑爹，只有第一个能拖进去，其他的需要点击file->Add folder to Workspace
![](https://cdn.jsdelivr.net/gh/honjun/ImageHosting/picgo/20190528130433.png)
上下移动代码行
alt+↑↓
快速复制一行
shift+alt+↑↓
打开终端
ctrl+`
制作自己的代码模板
![](https://cdn.jsdelivr.net/gh/honjun/ImageHosting/picgo/20190528141055.png)
![](https://cdn.jsdelivr.net/gh/honjun/ImageHosting/picgo/20190528180649.png)
```json
{
  "vue-template": {
		"prefix": "vh",
		"body": [
		"<!DOCTYPE html>",
		"<html lang=\"en\">",
		"<head>",
		"  <meta charset=\"UTF-8\">",
		"  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">",
		"  <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">",
		"  <title>my vue template</title>",
		"  <script src=\"./lib/vue-2.4.0.js\"></script>",
		"</head>",
		"<body>",
		"  <div id=\"app\"></div>",
		"  <script>",
		"    var vm = new Vue({",
		"      el: '#app',",
		"      data: {},",
		"      methods: {}",
		"    })",
		"  </script>",
		"</body>",
		"</html>"
		],
		"description": "my vue template"
	}
}
```
Ement快捷语法
```html
li*10 //创建10个li元素
div.className //创建<div class="className"></div>
div#idName //创建<div id="idNamw"></div>
div[attrName=name] //创建<div attrName="name"></div>
div>li>a //创建<div><li><a></a></li></div>
div+p+span //创建<div></div><p></p><span></span>
div{文本文字} //创建<div>文本文字</div>
div>(header>ul>li*2>a)+footer>p //括号用于在复杂的 Emmet 缩写中处理一组子树
```
```html
<div>
    <header>
        <ul>
            <li><a href=""></a></li>
            <li><a href=""></a></li>
        </ul>
    </header>
    <footer>
        <p></p>
    </footer>
</div>
```
```html
div+div>p>span+em^^^bq //使用 ^ 运算符，能够提升元素在生成树中的一个级别
```
```html
<div></div>
<div>
    <p><span></span><em></em></p>
</div>
<blockquote></blockquote>
```