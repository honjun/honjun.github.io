title: 距离玩BeatSaber还差...
author: hojun
avatar: https://wx1.sinaimg.cn/large/006bYVyvgy1ftand2qurdj303c03cdfv.jpg
authorDesc: 一个好奇的人
categories: 生活
comments: true
date: 2018-07-26 23:12:31
authorLink: /about/hojun.html
authorAbout:
series:
tags:
 - game
 - flag
keywords:
description:
photos:
 - https://wx1.sinaimg.cn/small/006bYVyvgy1ftnojwzxbxj31110jhdnm.jpg
---
以前一直有一种想法，开发出一种玩出实际价值的游戏......
BeatSaber的出现感觉那奇葩想法好像能实现，据说这游戏的锻炼效果比打网球还好~
{% raw %}
<style>
#distance2{
  font-size:2.5em;
  color:#ffffff;
}
#distance2{
  -webkit-animation: neon1 1.5s ease-in-out infinite alternate;
  -moz-animation: neon1 1.5s ease-in-out infinite alternate;
  animation: neon1 1.5s ease-in-out infinite alternate; 
}

#distance1{
  font-size:2.5em;
  color:#ffffff;
}
#distance1{
  -webkit-animation: neon2 1.5s ease-in-out infinite alternate;
  -moz-animation: neon2 1.5s ease-in-out infinite alternate;
  animation: neon2 1.5s ease-in-out infinite alternate;
}
@-webkit-keyframes neon1 {
  from {
    text-shadow: 0 0 10px #fff,
               0 0 20px  #fff,
               0 0 30px  #fff,
               0 0 40px  #FF1177,
               0 0 70px  #FF1177,
               0 0 80px  #FF1177,
               0 0 100px #FF1177,
               0 0 150px #FF1177;
  }
  to {
    text-shadow: 0 0 5px #fff,
               0 0 10px #fff,
               0 0 15px #fff,
               0 0 20px #FF1177,
               0 0 35px #FF1177,
               0 0 40px #FF1177,
               0 0 50px #FF1177,
               0 0 75px #FF1177;
  }
}
@-webkit-keyframes neon2 {
  from {
    text-shadow: 0 0 10px #fff,
               0 0 20px  #fff,
               0 0 30px  #fff,
               0 0 40px  #228DFF,
               0 0 70px  #228DFF,
               0 0 80px  #228DFF,
               0 0 100px #228DFF,
               0 0 150px #228DFF;
  }
  to {
    text-shadow: 0 0 5px #fff,
               0 0 10px #fff,
               0 0 15px #fff,
               0 0 20px #228DFF,
               0 0 35px #228DFF,
               0 0 40px #228DFF,
               0 0 50px #228DFF,
               0 0 75px #228DFF;
  }
}
</style>
<video width="100%" poster="https://wx1.sinaimg.cn/large/006bYVyvgy1ftnojwzxbxj31110jhdnm.jpg" preload="auto" controls>
  <source src="https://steamcdn-a.akamaihd.net/steam/apps/256708187/movie_max.webm?utm_source=cowlevel" type="video/webm">
  您的浏览器不支持 video 属性。
</video>
<span id="distance1"> 距离玩BeatSaber还差: &nbsp;</span>
<span id="distance2"></span>
<script>
let total = 4000;
let bjh = 9.78;
let tth = 27.13;
let wbhb = 21.89;
let distance = total - bjh - tth - wbhb;
document.getElementById('distance2').innerHTML = distance + '￥';
</script>
{% endraw %}