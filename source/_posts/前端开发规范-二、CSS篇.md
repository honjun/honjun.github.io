title: 前端开发规范(二、CSS篇)
author: hojun
avatar: /images/favicon.png
authorDesc: 一个好奇的人
categories: 技术
comments: true
date: 2018-06-13 21:57:40
authorLink:
authorAbout:
tags:
 - 前端
 - css
keywords: 前端
description:
photos: https://wx3.sinaimg.cn/small/006bYVyvgy1fs7mq864jvj30zk0k0q96.jpg
---
![](https://wx3.sinaimg.cn/large/006bYVyvgy1fs7mq864jvj30zk0k0q96.jpg)
# **CSS**

## **代码组织**

 - 以组件为单位组织代码段；
 - 制定一致的注释规范；
 - 组件块和子组件块以及声明块之间使用一空行分隔，子组件块之间三空行分隔；
 - 如果使用了多个 CSS 文件，将其按照组件而非页面的形式分拆，因为页面会被重组，而组件只会被移动；


良好的注释是非常重要的。请留出时间来描述组件（component）的工作方式、局限性和构建它们的方法。不要让你的团队其它成员 来猜测一段不通用或不明显的代码的目的。

提示：通过配置编辑器，可以提供快捷键来输出一致认可的注释模式。
```css

/* ==========================================================================
   组件块
 ============================================================================ */
/* 子组件块
 ============================================================================ */
.selector {
  padding: 15px;
  margin-bottom: 15px;
}
/* 子组件块
 ============================================================================ */
.selector-secondary {
  display: block; /* 注释*/
}
```

## **Class 和 ID**

 - 使用语义化、通用的命名方式；
 - 使用连字符 - 作为 ID、Class 名称界定符，不要驼峰命名法和下划线；
 - 避免选择器嵌套层级过多，尽量少于 3 级；
 - 避免选择器和 Class、ID 叠加使用；

出于性能考量，在没有必要的情况下避免元素选择器叠加 Class、ID 使用。

元素选择器和 ID、Class 混合使用也违反关注分离原则。如果HTML标签修改了，就要再去修改 CSS 代码，不利于后期维护。

```css
/* Not recommended */
.red {}
.box_green {}
.page .header .login #username input {}
ul#example {}
/* Recommended */
#nav {}
.box-video {}
#username input {}
#example {}
```

## **声明顺序**
相关属性应为一组，推荐的样式编写顺序

 - Positioning
 - Box model
 - Typographic
 - Visual

由于定位（positioning）可以从正常的文档流中移除元素，并且还能覆盖盒模型（box model）相关的样式，因此排在首位。盒模型决定了组件的尺寸和位置，因此排在第二位。

其他属性只是影响组件的内部（inside）或者是不影响前两组属性，因此排在后面。
```css
.declaration-order {
  /* Positioning */
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 100;
  /* Box model */
  display: block;
  box-sizing: border-box;
  width: 100px;
  height: 100px;
  padding: 10px;
  border: 1px solid #e5e5e5;
  border-radius: 3px;
  margin: 10px;
  float: right;
  overflow: hidden;
  /* Typographic */
  font: normal 13px "Helvetica Neue", sans-serif;
  line-height: 1.5;
  text-align: center;
  /* Visual */
  background-color: #f5f5f5;
  color: #fff;
  opacity: .8;
  /* Other */
  cursor: pointer;
}
```
## **引号使用**

url() 、属性选择符、属性值使用双引号。

```css
/* Recommended */
@import url("//www.google.com/css/maia.css");
html {
  font-family: "open sans", arial, sans-serif;
}
.selector[type="text"] {
}
```

## **媒体查询（Media query）的位置**
将媒体查询放在尽可能相关规则的附近。不要将他们打包放在一个单一样式文件中或者放在文档底部。如果你把他们分开了，将来只会被大家遗忘。
```css
.element { ... }
.element-avatar { ... }
.element-selected { ... }
@media (max-width: 768px) {
  .element { ...}
  .element-avatar { ... }
  .element-selected { ... }
}
```
## **不要使用 @import**

与 `<link>` 相比，@import 要慢很多，不光增加额外的请求数，还会导致不可预料的问题。

替代办法：

 - 使用多个 元素；
 - 通过 Sass 或 Less 类似的 CSS 预处理器将多个 CSS 文件编译为一个文件；
 - 其他 CSS 文件合并工具；

## **链接的样式顺序：**

<font color="red">a:link -> a:visited -> a:hover -> a:active（LoVeHAte）</font>
选择字体
在 Web 上应用字体，是一门技术，同时也是一门艺术. 由于计算机历史发展的原因，西文有大量优秀的字体可供选择，可对于中文来说就是一项挑战. 主流操作系统提供的本地中文字体极少，另一方面中文字体组成的特殊性，其体积过于庞大，无法良好地使用 webfont. 所以编写健壮的 font-family 是一件需要深思熟虑的事情.

以下列出各种平台下合适的中西文字体：

桌面端 Mac, Windows, Linux 上适合网页显示的优秀中文字体

Mac|Windows|Linux
:-:|:-:|:-:
冬青黑体 Hiragino Sans GB|中易宋体 SimSun|文泉驿微米黑 WenQuanYi Microhei
黑体-简（华文黑体）Heiti SC (STHeiti)|微软雅黑 Microsoft YaHei |宋体-简（华文宋体）Songti SC (STSong)

移动端 iOS, Android 上适合网页显示的优秀中文字体

iOS|Android
:-:|:-:
黑体-简（华文黑体）Heiti SC (STHeiti)|思源黑体 Noto Sans CJK SC
|Droid Sans Fallback

主流操作系统上适合网页显示的优秀西文字体

无衬线|衬线|等宽
:-:|:-:|:-:
Lucida Grande | Georgia | Menlo
Helvetica Neue | Times New Roman | Courier
Arial | |

抛开宋/明体长时间作为系统默认字体，所产生的审美疲劳，宋/明体相比黑体是更合适作为内文字体. 大多的宋/明体针对内文设计，横细直粗，造型方正，笔画在小字号的情况下，不会糊在一起，给人一种素雅的感觉. 而黑体笔画粗壮有力，引人注目，更适合作为标题使用.

但大部分人已经习惯在网页上阅读黑体，以及宋/明体在字重过大的情况下，显示效果还是不太理想. 所以内文默认提供黑体，可选择性的切换宋/明体.

```css
p { font-family: "Georgia", "Times New Roman", "Songti SC", "SimSun", serif; }
h1, h2, h3, h4, h5, h6 { font-family: "Lucida Grande", "Helvetica Neue", "Arial", "Hiragino Sans GB", "Noto Sans CJK SC", "Heiti SC", "Microsoft YaHei", "WenQuanYi Microhei", sans-serif; }
```
## 垂直的旋律

### 音阶

Robert Bringhurst 在《The Elements of Typographic Style》谈到字号大小之间的比例，形似于音乐中的音阶. 作曲时以某个特定的音阶为基础，才会形成特定的风格. 字号的排版同样如此，有规律的字号变化，才会形成特定的排版风格.

将内文以 16px 作为字号 
标题 h1, h2, h3, h4, h5, h6 以 16px 作为字号基础，按同比例的递减
```css
p  { font-size: 16px; }
h1 { font-size: 2em; }
h2 { font-size: 1.8em; }
h3 { font-size: 1.6em; }
h4 { font-size: 1.4em; }
h5, h6 { font-size: 1.2em; }
```
### 节拍

此外，Robert Bringhurst 还谈到版式中的空间就像音乐中的时间(Space in typography is like time in music)，言下之意，把握间距（行高）就如把握节拍. 节拍是对时间的分割，倘若抢拍便失去节奏. 文字的间距（行高）亦是对空间的分割，不一致间距（行高）比例，便会失去「垂直的旋律」.

将内文以 1.7em 作为行高
标题 h1, h2, h3, h4, h5, h6 以 1.5em 作为行高.
```css
p { line-height: 1.7em; }
h1, h2, h3, h4, h5, h6 { line-height: 1.5em; }
```

## 段首缩进 VS 段落间距

段落分隔对于中文排版而言也是特别重要，主要以「段首缩进」和「段落间距」两种方式表现，它们的唯一目的就是将段落分隔.

「段首缩进」主要用于印刷书籍，节省纵向空间，保持文本连贯，但一般在网页上的阅读速度较快，会使文字过于密集产生压力. 相反「段落间距」主要用于网页，充分利用网页无限的纵向空间，保障文本块的整洁，同时给予长篇阅读休息的间隙. 所以一般网页排版，会考虑选择「段落间距」，可以设置以下属性实现「段落间距」.
```css
p { margin-bottom: 1.7em; }
h1, h2, h3, h4, h5, h6 {
  margin-top: .7em;
  margin-bottom: 0.2em;
}
```

## 对齐

汉字的方块性质构成了汉字独有的艺术美感，使其具有工整的特点，从而显现出中文排版的重要原则：所有元素都是正方体. 但从二十世纪开始使用标点后，以及中西文混排的情况越来越多，为了保证「禁则处理」和「齐头尾」实现，可能需要在不同条件下进行适当的断词处理.

「禁則」是来自日语的排版术语，主要指的就是禁止一些标点等字符出现在行首或行尾的规则，大致相当于汉语常说的「避头尾」.
可以设置以下属性实现「齐头尾」，其中inter-ideographic意思是「通过调整单词和字符之间的留白来实现两端对齐」.
```css
p {
text-align: justify;
text-justify: inter-ideographic;
}
```
但这样的「齐头尾」并不是完美的，主要由于技术遗留原因，在 Windows 和 Linux 上的 webkit 浏览器并没有实现 inter-ideographic 导致中西文混排的时候，容易出现过度拉伸字间距的情况。

![](https://wx1.sinaimg.cn/large/006bYVyvgy1fs8fulcte0j30jj0bxdja.jpg)

为此有一种不优雅的解决方案，在极易出现字间距拉伸的小尺寸屏幕（手机）上使用「断词处理」，避免字间距拉伸，可是这样也带来「无视避头尾规则」和「西文单词断词」的坏毛病. 这是用一种不优雅解决另一种不优雅，按需抉择吧.

可以设置以下属性进行「断词处理」

```css
p { word-break: break-all; }
```