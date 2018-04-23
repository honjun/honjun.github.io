title: OwO-可爱的js表情符号插件
author: hojun
avatar: /images/favicon.png
authorDesc: 一个好奇的人
categories: 技术
date: 2018-04-22 21:32:40
authorLink:
authorAbout:
tags:
keywords:
description:
photos:
---
{% raw %}
<link rel="stylesheet" href="/demo/css/OwO.min.css">
<textarea class="OwO-textarea" style="width: 100%; height: 50px; margin-bottom: 10px; padding: 10px;"></textarea>
<div class="OwO"></div>
<script src="/demo/js/OwO.min.js"></script>
<script>
    var OwO_demo = new OwO({
        logo: 'OωO表情',
        container: document.getElementsByClassName('OwO')[0],
        target: document.getElementsByClassName('OwO-textarea')[0],
        api: '/demo/json/OwO.json',
        position: 'down',
        width: '100%',
        maxHeight: '250px'
    });
</script>
{% endraw %}
*@(便便)*
marked.js
```js
Renderer.prototype.em = function(text) {
  var match = text.match(/@\((\S*?)\)/g);
  if(match) {
    var emoji = match[0].substring(2);
    emoji = emoji.substring(0, emoji.length-1);
    emoji = '<img class="owoemoji" src="/OwO/img/' + emoji + '.png">';
    return emoji;
  }
  return '<em>' + text + '</em>';
};
```
```css
/*OwO emoji*/
.owoemoji {
  display: inline-block !important;
  position: relative;
  top: 10px;
  margin: 0 !important;
  padding: 0;
}
```