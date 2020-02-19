title: SVG深入浅出
author: hojun
avatar: https://cdn.jsdelivr.net/gh/honjun/ImageHosting/sina/006bYVyvgy1ftand2qurdj303c03cdfv.jpg
authorDesc: 一个好奇的人
categories: 技术
date: 2018-03-15 00:36:54
authorLink: /about/hojun.html
authorAbout:
tags:
 - svg
keywords: SVG
description:
photos:
---
## **什么是SVG？**

 - SVG 指可伸缩矢量图形 (Scalable Vector Graphics)
 - SVG 用来定义用于网络的基于矢量的图形
 - SVG 使用 XML 格式定义图形
 - SVG 图像在放大或改变尺寸的情况下其图形质量不会有所损失
 - SVG 是万维网联盟的标准
 - SVG 与诸如 DOM 和 XSL 之类的 W3C 标准是一个整体

## **SVG 的历史和优势**

在 2003 年一月，SVG 1.1 被确立为 W3C 标准。
参与定义 SVG 的组织有：太阳微系统、Adobe、苹果公司、IBM 以及柯达。
与其他图像格式相比，使用 SVG 的优势在于：

 - SVG 可被非常多的工具读取和修改（比如记事本）
 - SVG 与 JPEG 和 GIF 图像比起来，尺寸更小，且可压缩性更强。
 - SVG 是可伸缩的
 - SVG 图像可在任何的分辨率下被高质量地打印
 - SVG 可在图像质量不下降的情况下被放大
 - SVG 图像中的文本是可选的，同时也是可搜索的（很适合制作地图）
 - SVG 可以与 Java 技术一起运行
 - SVG 是开放的标准
 - SVG 文件是纯粹的 XML
 - SVG 的主要竞争者是 Flash。

与 Flash 相比，SVG 最大的优势是与其他标准（比如 XSL 和 DOM）相兼容。而 Flash 则是未开源的私有技术。

## **SVG 实例**
下面的例子是一个简单的 SVG 文件的例子。SVG 文件必须使用 .svg 后缀来保存：

```html
<?xml version="1.0" standalone="no"?>

<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" 
"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">

<svg width="100%" height="100%" version="1.1"
xmlns="http://www.w3.org/2000/svg">

<circle cx="100" cy="50" r="40" stroke="black"
stroke-width="2" fill="red"/>

</svg>
```
代码解释：
第一行包含了 XML 声明。请注意 standalone 属性！该属性规定此 SVG 文件是否是“独立的”，或含有对外部文件的引用。

standalone="no" 意味着 SVG 文档会引用一个外部文件 - 在这里，是 DTD 文件。

第二和第三行引用了这个外部的 SVG DTD。该 DTD 位于 “http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd”。该 DTD 位于 W3C，含有所有允许的 SVG 元素。

SVG 代码以 `<svg>` 元素开始，包括开启标签 `<svg>` 和关闭标签 `</svg>` 。这是根元素。width 和 height 属性可设置此 SVG 文档的宽度和高度。version 属性可定义所使用的 SVG 版本，xmlns 属性可定义 SVG 命名空间。

SVG 的 `<circle>` 用来创建一个圆。cx 和 cy 属性定义圆中心的 x 和 y 坐标。如果忽略这两个属性，那么圆点会被设置为 (0, 0)。r 属性定义圆的半径。

stroke 和 stroke-width 属性控制如何显示形状的轮廓。我们把圆的轮廓设置为 2px 宽，黑边框。

fill 属性设置形状内的颜色。我们把填充颜色设置为红色。

关闭标签的作用是关闭 SVG 元素和文档本身。

## **SVG 形状**
SVG 有一些预定义的形状元素，可被开发者使用和操作：

 - 矩形 `<rect>`
 - 圆形 `<circle>`
 - 椭圆 `<ellipse>`
 - 线 `<line>`
 - 折线 `<polyline>`
 - 多边形 `<polygon>`
 - 路径 `<path>`

### rect例子

```
<svg width="100%" height="100%" version="1.1"
xmlns="http://www.w3.org/2000/svg">
    <rect width="300" height="100"
    style="fill:rgb(0,0,255);stroke-width:1;
    stroke:rgb(0,0,0)"/>
</svg>
代码解释：
rect 元素的 width 和 height 属性可定义矩形的高度和宽度
style 属性用来定义 CSS 属性
CSS 的 fill 属性定义矩形的填充颜色（rgb 值、颜色名或者十六进制值）
CSS 的 stroke-width 属性定义矩形边框的宽度
CSS 的 stroke 属性定义矩形边框的颜色
```

CSS 的 fill 属性定义矩形的填充颜色（rgb 值、颜色名或者十六进制值）
CSS 的 stroke-width 属性定义矩形边框的宽度
CSS 的 stroke 属性定义矩形边框的颜色

CSS 的 fill-opacity 属性定义填充颜色透明度（合法的范围是：0 - 1）
CSS 的 stroke-opacity 属性定义笔触颜色的透明度（合法的范围是：0 - 1）

让我们看一下另一个包含新属性的例子：
```html
<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" 
"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">

<svg width="100%" height="100%" version="1.1"
xmlns="http://www.w3.org/2000/svg">

<rect x="20" y="20" width="250" height="250"
style="fill:blue;stroke:pink;stroke-width:5;
fill-opacity:0.1;stroke-opacity:0.9"/>

</svg>
```
例子解释：
x 属性定义矩形的左侧位置（例如，x="0" 定义矩形到浏览器窗口左侧的距离是 0px）
y 属性定义矩形的顶端位置（例如，y="0" 定义矩形到浏览器窗口顶端的距离是 0px）
CSS 的 fill-opacity 属性定义填充颜色透明度（合法的范围是：0 - 1）
CSS 的 stroke-opacity 属性定义笔触颜色的透明度（合法的范围是：0 - 1）
rx 和 ry 属性可使矩形产生圆角。

### `<circle>` 标签
`<circle>` 标签可用来创建一个圆。

请把下面的代码拷贝到记事本，然后把文件保存为 "circle1.svg"。把此文件放入您的web目录：
```html
<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" 
"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">

<svg width="100%" height="100%" version="1.1"
xmlns="http://www.w3.org/2000/svg">

<circle cx="100" cy="50" r="40" stroke="black"
stroke-width="2" fill="red"/>

</svg>
```
代码解释：
cx 和 cy 属性定义圆点的 x 和 y 坐标。如果省略 cx 和 cy，圆的中心会被设置为 (0, 0)
r 属性定义圆的半径。

### `<ellipse>` 标签
`<ellipse>` 标签可用来创建椭圆。椭圆与圆很相似。不同之处在于椭圆有不同的 x 和 y 半径，而圆的 x 和 y 半径是相同的。

请把下面的代码拷贝到记事本，然后把文件保存为 "ellipse1.svg"。把此文件放入您的 web 目录：
```html
<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" 
"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">

<svg width="100%" height="100%" version="1.1"
xmlns="http://www.w3.org/2000/svg">

<ellipse cx="300" cy="150" rx="200" ry="80"
style="fill:rgb(200,100,50);
stroke:rgb(0,0,100);stroke-width:2"/>

</svg>
```
代码解释：
cx 属性定义圆点的 x 坐标
cy 属性定义圆点的 y 坐标
rx 属性定义水平半径
ry 属性定义垂直半径

### `<line>` 标签
`<line>` 标签用来创建线条。

请把下面的代码拷贝到记事本，然后把文件保存为 "line1.svg"。把此文件放入您的 web 目录：
```html
<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" 
"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">

<svg width="100%" height="100%" version="1.1"
xmlns="http://www.w3.org/2000/svg">

<line x1="0" y1="0" x2="300" y2="300"
style="stroke:rgb(99,99,99);stroke-width:2"/>

</svg>
```
代码解释：
x1 属性在 x 轴定义线条的开始
y1 属性在 y 轴定义线条的开始
x2 属性在 x 轴定义线条的结束
y2 属性在 y 轴定义线条的结束

### `<polygon>` 标签
`<polygon>` 标签用来创建含有不少于三个边的图形。

请把下面的代码拷贝到记事本，然后把文件保存为 "polygon1.svg"。把此文件放入您的 web 目录：
```html
<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" 
"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">

<svg width="100%" height="100%" version="1.1"
xmlns="http://www.w3.org/2000/svg">

<polygon points="220,100 300,210 170,250"
style="fill:#cccccc;
stroke:#000000;stroke-width:1"/>

</svg>
```
代码解释：
points 属性定义多边形每个角的 x 和 y 坐标
### `<polyline>` 标签
`<polyline>` 标签用来创建仅包含直线的形状。

请把下面的代码拷贝到记事本，然后把文件保存为 "polyline1.svg"。把此文件放入您的 web 目录：
```html
<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" 
"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">

<svg width="100%" height="100%" version="1.1"
xmlns="http://www.w3.org/2000/svg">

<polyline points="0,0 0,20 20,20 20,40 40,40 40,60"
style="fill:white;stroke:red;stroke-width:2"/>

</svg>
```
### `<path>` 标签
`<path>` 标签用来定义路径。

下面的命令可用于路径数据：

 - M moveto  移动到 (x y)+
 - Z closepath  关闭路径 (none)
 - L lineto  画线到 (x y)+
 - H horizontal lineto  水平线到 x+
 - V vertical lineto  垂直线到 y+
 - C curveto  三次贝塞尔曲线到 (x1 y1 x2 y2 x y)+
 - S smooth curveto  光滑三次贝塞尔曲线到  (x2 y2 x y)+
 - Q quadratic Bézier curveto  二次贝塞尔曲线到  (x1 y1 x y)+
 - T smooth quadratic Bézier curveto  光滑二次贝塞尔曲线到 (x y)+
 - A elliptical arc  椭圆弧 (rx ry x-axis-rotation large-arc-flag sweep-flag x y)+
 - R Catmull-Rom curveto*  Catmull-Rom曲线 x1 y1 (x y)+

请把下面的代码拷贝到记事本，然后把文件保存为 "path1.svg"。把此文件放入您的 web 目录：
```html
<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" 
"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">

<svg width="100%" height="100%" version="1.1"
xmlns="http://www.w3.org/2000/svg">

<path d="M250 150 L150 350 L350 350 Z" />

</svg>
```
上面的例子定义了一条路径，它开始于位置 250 150，到达位置 150 350，然后从那里开始到 350 350，最后在 250 150 关闭路径。

### SVG 滤镜
在 SVG 中，可用的滤镜有：

 - feBlend
 - feColorMatrix
 - feComponentTransfer
 - feComposite
 - feConvolveMatrix
 - feDiffuseLighting
 - feDisplacementMap
 - feFlood
 - feGaussianBlur
 - feImage
 - feMerge
 - feMorphology
 - feOffset
 - feSpecularLighting
 - feTile
 - feTurbulence
 - feDistantLight
 - fePointLight
 - feSpotLight

**必须在 `<defs>` 标签中定义 SVG 滤镜。**

### 高斯模糊（Gaussian Blur）
`<filter>` 标签用来定义 SVG 滤镜。`<filter>` 标签使用必需的 id 属性来定义向图形应用哪个滤镜？

`<filter>` 标签必须嵌套在 `<defs>` 标签内。`<defs>` 标签是 definitions 的缩写，它允许对诸如滤镜等特殊元素进行定义。

请把下面的代码拷贝到记事本，然后把文件保存为 "filter1.svg"。把此文件放入您的 web 目录：
```html
<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" 
"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">

<svg width="100%" height="100%" version="1.1"
xmlns="http://www.w3.org/2000/svg">

<defs>
<filter id="Gaussian_Blur">
<feGaussianBlur in="SourceGraphic" stdDeviation="3" />
</filter>
</defs>

<ellipse cx="200" cy="150" rx="70" ry="40"
style="fill:#ff0000;stroke:#000000;
stroke-width:2;filter:url(#Gaussian_Blur)"/>

</svg>
```
代码解释：
`<filter>` 标签的 id 属性可为滤镜定义一个唯一的名称（同一滤镜可被文档中的多个元素使用）
filter:url 属性用来把元素链接到滤镜。当链接滤镜 id 时，必须使用 # 字符
滤镜效果是通过 `<feGaussianBlur>` 标签进行定义的。fe 后缀可用于所有的滤镜
`<feGaussianBlur>` 标签的 stdDeviation 属性可定义模糊的程度
in="SourceGraphic" 这个部分定义了由整个图像创建效果

**SVG 渐变必须在 <defs> 标签中进行定义。**

### SVG 渐变
渐变是一种从一种颜色到另一种颜色的平滑过渡。另外，可以把多个颜色的过渡应用到同一个元素上。

在 SVG 中，有两种主要的渐变类型：

 - 线性渐变
 - 放射性渐变
 - 线性渐变

`<linearGradient>` 可用来定义 SVG 的线性渐变。

`<linearGradient>` 标签必须嵌套在 `<defs>` 的内部。`<defs>` 标签是 definitions 的缩写，它可对诸如渐变之类的特殊元素进行定义。

线性渐变可被定义为水平、垂直或角形的渐变：

当 y1 和 y2 相等，而 x1 和 x2 不同时，可创建水平渐变
当 x1 和 x2 相等，而 y1 和 y2 不同时，可创建垂直渐变
当 x1 和 x2 不同，且 y1 和 y2 不同时，可创建角形渐变
请把下面的代码拷贝到记事本，然后把文件保存为 "linear1.svg"。把此文件放入您的 web 目录：
```html
<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" 
"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">

<svg width="100%" height="100%" version="1.1"
xmlns="http://www.w3.org/2000/svg">

<defs>
<linearGradient id="orange_red" x1="0%" y1="0%" x2="100%" y2="0%">
<stop offset="0%" style="stop-color:rgb(255,255,0);
stop-opacity:1"/>
<stop offset="100%" style="stop-color:rgb(255,0,0);
stop-opacity:1"/>
</linearGradient>
</defs>

<ellipse cx="200" cy="190" rx="85" ry="55"
style="fill:url(#orange_red)"/>

</svg>
```
代码解释：
`<linearGradient>` 标签的 id 属性可为渐变定义一个唯一的名称
fill:url(#orange_red) 属性把 ellipse 元素链接到此渐变
`<linearGradient>` 标签的 x1、x2、y1、y2 属性可定义渐变的开始和结束位置
渐变的颜色范围可由两种或多种颜色组成。每种颜色通过一个 `<stop>` 标签来规定。offset 属性用来定义渐变的开始和结束位置。
（水平渐变）

另一个例子：
```html
<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" 
"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">

<svg width="100%" height="100%" version="1.1"
xmlns="http://www.w3.org/2000/svg">

<defs>
<linearGradient id="orange_red" x1="0%" y1="0%" x2="0%" y2="100%">
<stop offset="0%" style="stop-color:rgb(255,255,0);
stop-opacity:1"/>
<stop offset="100%" style="stop-color:rgb(255,0,0);
stop-opacity:1"/>
</linearGradient>
</defs>

<ellipse cx="200" cy="190" rx="85" ry="55"
style="fill:url(#orange_red)"/>

</svg>
```
（垂直渐变）

## 参考手册
![](https://cdn.jsdelivr.net/gh/honjun/ImageHosting/sina/006bYVyvgy1fpdse0807rj30kv6mtk6g.jpg)