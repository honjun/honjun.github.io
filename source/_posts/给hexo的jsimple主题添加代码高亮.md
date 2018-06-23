title: 给hexo的jsimple主题添加代码高亮
author: hojun
avatar: /images/favicon.png
authorDesc: 一个好奇的人
categories: 技术
series: hexo折腾
date: 2017-07-02 23:13:33
authorLink:
authorAbout:
tags:
 - blog
keywords: jsimple代码高亮
description:
photos:
---
周末在家无所事事，想起来博客代码块的高亮支持不是很好，于是根据作者推荐的[hipaper](https://github.com/iTimeTraveler/hexo-theme-hipaper)去get。
对比了Hipaper和Jsimple老半天有几点发现。

 1. Jsimple使用ejs模板
 2. Hipaper使用ejs模板，css采用stylus框架。<small><之前只听说过less和sass,又涨姿势了~~~><small>

在浏览器端f12审核元素发现两个模板生成的html元素有些区别。然后就花了大量时间去找hexo是怎么把代码块自动解析成对应的html代码的。
后来在hexo群里求助得知由hexo自带highlight插件生成。这位热心的[大神](https://github.com/liaobinbin)顺手帮我搞了高亮的css代码，之后也在[jsimple](https://github.com/tangkunyin/hexo-theme-jsimple)仓库pr了代码。
得到css后依据自己的博客进行些小改动，添加了night版。然后愉快的给博客添加了代码高亮。
<font color="red">注意配置文件这里：<font>
```cof
highlight:
  enable: true //开启高亮
  line_number: true //显示行号
  auto_detect: false
  tab_replace:
```
修改之后生效需要执行
```
//清除缓存文件 (db.json) 和已生成的静态文件 (public)。
hexo clean
//重新生成
hexo g
```
这里贴出代码仅供参考：<font color="#d35400">自己改了些东西，不知道适不适用<font>
```css
.markdown-body code,.markdown-body tt
{
    padding:0;padding-top:.2em;padding-bottom:.2em;margin:0;font-size:85%;background-color:rgba(0,0,0,0.04);border-radius:3px
}
.markdown-body code::before,.markdown-body code::after,.markdown-body tt::before,.markdown-body tt::after
{
    letter-spacing:-0.2em;content:"\00a0"
}
.markdown-body code br,.markdown-body tt br
{
    display:none
}
.markdown-body del code
{
    text-decoration:inherit
}
.markdown-body pre
{
    word-wrap:normal
}
.markdown-body pre>code
{
    padding:0;margin:0;font-size:100%;word-break:normal;white-space:pre;background:transparent;border:0
}
.markdown-body .highlight
{
    margin-bottom:16px
}
.markdown-body .highlight pre
{
    margin-bottom:0;word-break:normal
}
.markdown-body pre,
.markdown-body .highlight {
  background: #f8f8f8;
  margin: 15px 0;
  padding: 15px 20px;
  border-style: solid;
  border-color: #eef1f8;
  border-width: 1px 0;
  overflow: auto;
  color: #4d4d4c;
  line-height: 22.400000000000002px;
}
.markdown-body .highlight .gutter pre,
.markdown-body .gist .gist-file .gist-data .line-numbers {
  color: #666;
  font-size: 0.85em;
}
.markdown-body pre,
.markdown-body code {
  font-family: "Source Code Pro", Consolas, Monaco, Menlo, Consolas, monospace;
}
.markdown-body code {
  background: rgba(208,211,248,0.2);
  color: #333;
  padding: 0 0.3em;
}
.markdown-body pre code {
  background: none;
  text-shadow: none;
  padding: 0;
}
.markdown-body .highlight pre {
  border: none;
  margin: 0;
  padding: 0;
}
.markdown-body .highlight table {
  margin: 0;
  width: auto;
  border: none;
}
.markdown-body .highlight td {
  border: none;
  padding: 0;
}
.markdown-body .highlight figcaption {
  font-size: 0.85em;
  color: #8e908c;
  line-height: 1em;
  margin-bottom: 1em;
}
.markdown-body .highlight figcaption:before,
.markdown-body .highlight figcaption:after {
  content: "";
  display: table;
}
.markdown-body .highlight figcaption:after {
  clear: both;
}
.markdown-body .highlight figcaption a {
  float: right;
}
.markdown-body .highlight .gutter pre {
  text-align: right;
  padding-right: 20px;
}
.markdown-body .highlight .line {
  /*height: 22.400000000000002px;*/
}
.markdown-body .highlight .line.marked {
  background: #d6d6d6;
}
.markdown-body .gist {
  margin: 0 -20px;
  border-style: solid;
  border-color: #eef1f8;
  border-width: 1px 0;
  background: #f8f8f8;
  padding: 15px 20px 15px 0;
}
.markdown-body .gist .gist-file {
  border: none;
  font-family: "Source Code Pro", Consolas, Monaco, Menlo, Consolas, monospace;
  margin: 0;
}
.markdown-body .gist .gist-file .gist-data {
  background: none;
  border: none;
}
.markdown-body .gist .gist-file .gist-data .line-numbers {
  background: none;
  border: none;
  padding: 0 20px 0 0;
}
.markdown-body .gist .gist-file .gist-data .line-data {
  padding: 0 !important;
}
.markdown-body .gist .gist-file .highlight {
  margin: 0;
  padding: 0;
  border: none;
}
.markdown-body .gist .gist-file .gist-meta {
  background: #f8f8f8;
  color: #8e908c;
  font: 0.85em -apple-system, "Arial", BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
  text-shadow: 0 0;
  padding: 0;
  margin-top: 1em;
  margin-left: 20px;
}
.markdown-body .gist .gist-file .gist-meta a {
  color: color-link;
  font-weight: normal;
}
.markdown-body .gist .gist-file .gist-meta a:hover {
  text-decoration: underline;
}
pre .comment,
pre .title {
  color: #8e908c; 
}
pre .variable,
pre .attribute,
pre .tag,
pre .regexp,
pre .ruby .constant,
pre .xml .tag .title,
pre .xml .pi,
pre .xml .doctype,
pre .html .doctype,
pre .css .id,
pre .css .class,
pre .css .pseudo {
  color: #c82829;
}
pre .number,
pre .preprocessor,
pre .built_in,
pre .literal,
pre .params,
pre .constant {
  color: #fd971f;
}
pre .class,
pre .ruby .class .title,
pre .css .rules .attribute {
  color: #718c00;
}
pre .string,
pre .value,
pre .inheritance,
pre .header,
pre .ruby .symbol,
pre .xml .cdata {
  color: #718c00;
}
pre .css .hexcolor {
  color: #3e999f;
}
pre .function,
pre .python .decorator,
pre .python .title,
pre .ruby .function .title,
pre .ruby .title .keyword,
pre .perl .sub,
pre .javascript .title,
pre .coffeescript .title {
  color: #4271ae;
}
pre .keyword,
pre .javascript .function {
  color: #8959a8;
}
pre {
  color: #525252;
}
pre .function .keyword,
pre .constant {
  color: #0092db;
}
pre .keyword,
pre .attribute {
  color: #f92672;
}
pre .number,
pre .literal {
  color: #ae81ff;
}
pre .tag,
pre .tag .title,
pre .change,
pre .winutils,
pre .flow,
pre .lisp .title,
pre .clojure .built_in,
pre .nginx .title,
pre .tex .special {
  color: #2973b7;
}
pre .symbol,
pre .symbol .string,
pre .value,
pre .regexp {
  color: #42b983;
}
pre .title {
  color: #a6e22e;
}
pre .tag .value,
pre .string,
pre .subst,
pre .haskell .type,
pre .preprocessor,
pre .ruby .class .parent,
pre .built_in,
pre .sql .aggregate,
pre .django .template_tag,
pre .django .variable,
pre .smalltalk .class,
pre .javadoc,
pre .django .filter .argument,
pre .smalltalk .localvars,
pre .smalltalk .array,
pre .attr_selector,
pre .pseudo,
pre .addition,
pre .stream,
pre .envvar,
pre .apache .tag,
pre .apache .cbracket,
pre .tex .command,
pre .prompt {
  color: #42b983;
}
pre .comment,
pre .java .annotation,
pre .python .decorator,
pre .template_comment,
pre .pi,
pre .doctype,
pre .shebang,
pre .apache .sqbracket,
pre .tex .formula {
  color: #b3b3b3;
}
pre .deletion {
  color: #ba4545;
}
pre .coffeescript .javascript,
pre .javascript .xml,
pre .tex .formula,
pre .xml .javascript,
pre .xml .vbscript,
pre .xml .css,
pre .xml .cdata {
  opacity: 0.5;
}
.night-mode .markdown-body h2
{
    border-color:#2f2f2f
}
.night-mode .markdown-body hr
{
    background-color:#2f2f2f
}
.night-mode .markdown-body,.night-mode .markdown-body p
{
    color:#999
}
.night-mode .markdown-body a
{
    color:#3dbcf5
}
.night-mode .markdown-body a:hover
{
    color:#4094c7
}
.markdown-body figure,.markdown-body pre,.markdown-body code,.markdown-body tr,.markdown-body table,.markdown-body tbody,.markdown-body table td
{
    background-color:#f8f8f8;
}
.night-mode figure,.night-mode pre,.night-mode code,.night-mode blockquote,.night-mode tr,.night-mode table,.night-mode tbody,.night-mode table td
{
    background-color:#555!important;border-color:#555!important;color:#fff!important;
}
.night-mode blockquote{
    border-color:#ddd!important;
}
```