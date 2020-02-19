title: canvas两张图片合成一张
author: hojun
avatar: https://cdn.jsdelivr.net/gh/honjun/ImageHosting/sina/006bYVyvgy1ftand2qurdj303c03cdfv.jpg
authorDesc: 一个好奇的人
categories: 技术
date: 2017-06-07 10:48:51
authorLink: /about/hojun.html /about_hojun.html
authorAbout:
tags:
 - html5
 - canvas
 - 前端
keywords: 两张图片合成一张
description: 两张图片合成一张
photos:
 - https://cdn.jsdelivr.net/gh/honjun/ImageHosting/sina/006bYVyvgy1fh9c8kz38cj30dz09owl9.jpg
---
碰见一个需求，把一张图片和用户的二维码图片合成一张
![006bYVyvgy1fh9c8kz38cj30dz09owl9.jpg](https://cdn.jsdelivr.net/gh/honjun/ImageHosting/sina/006bYVyvgy1fh9c8kz38cj30dz09owl9.jpg)
参考[w3cshool](http://www.w3school.com.cn/tags/canvas_drawimage.asp)和一些资料实现需求
demo.html
```js
<html>
<body>

<p>要使用的图像：</p>
<img id="tulip" src="eg_tulip.jpg" alt="The Tulip" />

<p>画布：</p>
<canvas id="myCanvas" width="500" height="300" style="border:1px solid #d3d3d3;background:#ffffff;">
Your browser does not support the HTML5 canvas tag.
</canvas>
<p>合成的图像：</p>
<img id="tulip2" src="" alt="The Tulip" />

<script>

    var c=document.getElementById("myCanvas");
    var ctx=c.getContext("2d");
    var img=document.getElementById("tulip");
    img.onload = function(){
        ctx.drawImage(img,0,0);
        ctx.drawImage(img,100,100);
        convertCanvasToImage();
    };

    //从 canvas 提取图片 image  
    function convertCanvasToImage()
    {
        var myCanvas = document.getElementById("myCanvas");
        var dataURL = myCanvas.toDataURL("image/png");
        var img=document.getElementById("tulip2");
        img.setAttribute('src', dataURL);
        console.log(dataURL);
    }

</script>

</body>
</html>
```

注意：若toDataURL方法报错<font color="red"> Failed to execute 'toDataURL' on 'HTMLCanvasElement': Tainted canvases may not be exported.</font>
原因：是由于文件所在的域和图片和页面所在域不同，出现跨域传输的问题。
解决：1.把图片放到本地。2把demo文件放到服务器下