title: base64 DataUrl blod file canvas图片格式转换
author: hojun
avatar: /images/favicon.png
authorDesc: 一个好奇的人
categories: 技术
date: 2017-06-07 11:15:47
authorLink: /about_hojun.html
authorAbout:
tags:
 - 前端
keywords: 图片格式转换
description: 图片格式转换
photos:
---

## **//img元素转base64 元素应为 `<img src="xxx.jpg">`这种格式**

```
function getBase64Image(img) {
    var canvas = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;
    var ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0, img.width, img.height);
    var dataURL = canvas.toDataURL("image/jpeg");
    return dataURL // return dataURL.replace("data:image/png;base64,", ""); 
}
```

## **//把base64图片数据转成blod，通过formdata提交**

```
function dataURItoBlob(base64Data) {
	var byteString;
	if (base64Data.split(',')[0].indexOf('base64') >= 0)
	    byteString = atob(base64Data.split(',')[1]);
	else
	    byteString = unescape(base64Data.split(',')[1]);
	var mimeString = base64Data.split(',')[0].split(':')[1].split(';')[0];
	var ia = new Uint8Array(byteString.length);
	for (var i = 0; i < byteString.length; i++) {
		ia[i] = byteString.charCodeAt(i);
	}
	return new Blob([ia], {type:mimeString});
}
```

## **//file转base64**

```
$("XXX").change(function() {
	var img = $(this).siblings("img");
	var reader = new FileReader();
    reader.readAsDataURL(this.files[0]);
    reader.onload = function (e) { 
      img.attr('src',this.result); 
    }
});
```

## **//file转url 此url是个blob**

 url（blob:http://localhost/a8cb6497-9c33-4d8d-8b6d-04a90db64eba），可以实现预览。

```
function getObjectURL(file) {
    var url = null;
    if(window.createObjectURL != undefined) { // basic
      url = window.createObjectURL(file);
    } else if(window.URL != undefined) { // mozilla(firefox)
      url = window.URL.createObjectURL(file);
    } else if(window.webkitURL != undefined) { // webkit or chrome
      url = window.webkitURL.createObjectURL(file);
    }
    //console.log(url);
    return url;
 }
```

## ** //blob:http://localhost/转base64**

这里使用了ajax，不知道还有什么实现方法
```
    //getObjectURL 上一步用到的函数
    objUrl = getObjectURL(this.files[i]);
    var xhr = new XMLHttpRequest;
    xhr.responseType = 'blob';
    
    xhr.open('GET', blobUrl);
    xhr.send();
    
    xhr.onload = function() {
        var recoveredBlob = xhr.response;
        //console.log(recoveredBlob) 结果为 Blob {size: 6683, type: "image/jpeg"}
        
        var reader = new FileReader;
        
        reader.readAsDataURL(recoveredBlob);
        
        reader.onload = function() {
           var blobAsDataUrl = reader.result;
           //console.log(blobAsDataUrl) 结果为 base64 图片数据
        };
    };
```

## **// 把image 转换为 canvas对象**

```
function convertImageToCanvas()
{
    var image = document.getElementById("myImg");
    // 创建canvas DOM元素，并设置其宽高和图片一样
    var canvas = document.createElement("myCanvas");
    canvas.width = image.width;
    canvas.height = image.height;
    // 坐标(0,0) 表示从此处开始绘制，相当于偏移。
    var ctx = canvas.getContext("2d");
    image.onload = function(){
        ctx.drawImage(image,0,0);
    };
}
```

## **//从 canvas 提取图片 image**

```
function convertCanvasToImage()
{
    var myCanvas = document.getElementById("myCanvas");
    var dataURL = myCanvas.toDataURL("image/png");
    var img=document.getElementById("tulip2");
    img.setAttribute('src', dataURL);
    console.log(dataURL);
}
```