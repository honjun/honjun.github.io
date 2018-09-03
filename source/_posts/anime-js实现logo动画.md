title: anime.js实现logo动画
author: hojun
avatar: https://wx1.sinaimg.cn/large/006bYVyvgy1ftand2qurdj303c03cdfv.jpg
authorDesc: 一个好奇的人
categories: 技术
series: hexo折腾
date: 2018-03-14 20:34:51
authorLink: /about/hojun.html
authorAbout:
tags:
 - 前端
 - js
keywords: anime.js
description: 实现自己的logo动画~
photos: https://wx4.sinaimg.cn/large/006bYVyvgy1fpct2gy98rj30ez09ojrf.jpg
---
{% raw %}
<link rel="stylesheet" href="/css/hojunlogo.css" />
<div id="logoAmine">
  <canvas class="fireworks"></canvas>
  <section id="lineDrawing">
    <svg class="logo" width="25rem" height="25rem" viewBox="0 0 800 384">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <rect id="dot-js" fill="#000000" x="80" y="352" width="32" height="32" rx="16"></rect>
        <g id="lines" transform="translate(128.000000, 256.000000)">
          <path d="M16,-70 L16,128 L16,64 C16,37.490332 37.490332,16 68,16 C90.509668,16 112,37.490332 112,64 L112,128" stroke="#e72a0f" stroke-width="32"></path>
          <path d="M192,112 C165.490332,112 144,90.509668 144,64 C144,37.490332 165.490332,16 192,16 C218.509668,16 240,37.490332 240,64 C240,90.509668 218.509668,112 192,112"  stroke="#feee00" stroke-width="32"></path>
          <path d="M272,0 L272,228 C252,248 232,228 230,218" stroke="#0097dc" stroke-width="32"></path>
          <path d="M304,0 L304,64 C304,90.509668 325.490332,112 352,112 C378.509668,112 400,90.509668 400,64 L400,0" stroke="#4cd137" stroke-width="32"></path>
          <path d="M433,128 L433,64 C433,37.490332 454.490332,16 481,16 C507.509668,16 529,37.490332 529,64 L529,128" stroke="#9f559d" stroke-width="32" stroke-dasharray="150"d></path>
        </g>
      </g>
    </svg>
  </section>
</div>
<script type="text/javascript" src="/js/anime.min.js"></script>
<script type="text/javascript" src="/js/hojunlogo.js"></script>
{% endraw %}
之前无聊浏览特效的时候，发现了anime.js的logo动画特效，于是也想整个自己的logo动画。
着手coding的时候，发现没那么简单(｡•ˇ‸ˇ•｡)

## **第一个难点 SVG**
之前接触到的SVG一直都是“不失真的矢量图”这么一个概念，但是这次的特效需要用到svg的`<path>`标签


w3c介绍：
```txt
<path> 标签用来定义路径。
下面的命令可用于路径数据：
    M = moveto
    L = lineto
    H = horizontal lineto
    V = vertical lineto
    C = curveto
    S = smooth curveto
    Q = quadratic Belzier curve
    T = smooth quadratic Belzier curveto
    A = elliptical Arc
    Z = closepath
注释：以上所有命令均允许小写字母。大写表示绝对定位，小写表示相对定位。

请把下面的代码拷贝到记事本，然后把文件保存为 "path1.svg"。把此文件放入您的 web 目录：

<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" 
"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">

<svg width="100%" height="100%" version="1.1"
xmlns="http://www.w3.org/2000/svg">

<path d="M250 150 L150 350 L350 350 Z" />

</svg>
上面的例子定义了一条路径，它开始于位置 250 150，到达位置 150 350，然后从那里开始到 350 350，最后在 250 150 关闭路径。
```
通过以上介绍能够稍微理解path作用，了解更多请浏览作者的另一篇文章[SVG深入浅出](http://www.hojun.cn/2018/03/15/SVG深入浅出)

## **第二个难点 贝赛尔曲线**
在我了解了SVG的大致原理后，自以为已经接近成功的大门。于是用ps做了一幅png格式的logo图片
![](https://wx4.sinaimg.cn/large/006bYVyvgy1fpct76iedsj30dw06wmx4.jpg)
接着把png转svg格式图片，[在线转换工具](http://www.pngtosvg.com/)
最后把SVG的path数据插入代码。Σ(っ °Д °;)っ发现并不是自己想要的效果。
通过阅读官方文档和特效代码发现anime.js的动画是根据路径来呈现的，所以我应该提供的SVG的`<path>`只是一条线段就够了。

----------

又回到起点，从新开始使用`<path>`提供的命令画logo。
第一个h，好办的，只要把n的左边那条直线的Y坐标改长点就行。
第二个o,没有现成的o，只能在a上面动手脚，可是`<path>`的C命令就是三次贝塞尔曲线。表示不太会画，肿么办(*/ω＼*)?
上网找资料呗~ 找到张鑫旭大牛的一片文章[深度掌握SVG路径path的贝塞尔曲线指令](http://www.zhangxinxu.com/wordpress/2014/06/deep-understand-svg-path-bezier-curves-command/)还有dayu提供的[任意二次、三次贝塞尔曲线呈现工具](http://dayu.pw/svgcontrol/)
![](https://wx1.sinaimg.cn/large/006bYVyvgy1fpct2bximcj30jh0b5jrf.jpg)
已知a的三条弧线
![](https://wx4.sinaimg.cn/large/006bYVyvgy1fpct26viiaj305r05udft.jpg)即需要求红框里的两个点。需要求甚解的童鞋请参照这篇文章[使用贝塞尔曲线拟合圆](http://www.cnblogs.com/ArthurQQ/articles/1730214.html)
不需要的童鞋可以发挥一下自带的我看看看看看出来，上图已经很明显了，o即圆形是上下左右对称的，通过对称的特性就可以得到那两个点的坐标。
第三个j,自由发挥了o(*￣︶￣*)o
第四个u,参考n把它给倒过来(⌒▽⌒)
第五个n,现成的有，大功告成ヾ(^▽^*)))

[效果预览](http://www.hojun.cn/2018/03/14/anime-js实现logo动画/)
感谢[anime.js](http://animejs.com)以及[51web](http://www.5iweb.com.cn/resource/5iweb2017070301/index.html)提供的特效代码
