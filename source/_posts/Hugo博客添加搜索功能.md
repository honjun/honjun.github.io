title: Hugo博客添加搜索功能
author: hojun
avatar: >-
  https://cdn.jsdelivr.net/gh/honjun/ImageHosting/sina/006bYVyvgy1ftand2qurdj303c03cdfv.jpg
authorLink: /about/hojun.html
authorDesc: 一个好奇的人
categories: 技术
comments: true
date: 2019-07-12 23:19:13
authorAbout:
series:
tags: hugo
keywords:
description:
photos:
---
## 碎碎念

由于hugo没有插件接口或者有我这小白还不知道。目前官方大部分的主题都没有搜索功能，而一些拥有搜索功能的主题大部分是使用第三方搜索，比如google站内搜索，Algolia搜索等等，google搜索服务在国内不适用，Algolia配置麻烦，每次更新文章又需要上传，虽然功能强大，但对于个人博客这种小站点末免有些杀鸡用牛刀了。而且最关键一点在于三方免费服务的不稳定性，于是还是想采用本地搜索功能。
还好，hugo官方也考虑到了用户的搜索需求，在官方文档里提供了几种解决方案（谷歌翻译）：

 - Hugo Workflow的GitHub要点。这个要点包含一个简单的工作流程，可以为您的静态网站创建搜索索引。它使用简单的Grunt脚本索引所有内容文件和lunr.js以提供搜索结果。
 - hugo-elasticsearch。通过解析前端问题为Hugo静态站点生成Elasticsearch索引。Hugo-Elasticsearch将生成换行符分隔的JSON（NDJSON）文件，该文件可以使用任何一个可用客户端批量上传到Elasticsearch 。
 - hugo-lunr。使用lunr.js将站点搜索添加到静态Hugo站点的简单方法。Hugo-lunr将在您的Hugo项目中创建任何html和markdown文档的索引文件。
 - hugo-lunr-zh。有点像Hugo-lunr，但Hugo-lunr-zh可以帮助你分开中文关键词。
 - Github Gist for Fuse.js集成。这个要点演示了如何利用Hugo现有的构建时间处理来生成客户端Fuse.js使用的可搜索JSON索引。虽然这个要点使用Fuse.js进行模糊匹配，但任何能够读取JSON索引的客户端搜索工具都可以工作。除了Hugo之外，不需要npm，grunt或其他构建时工具！
 - hugo-search-index。包含Gulp任务的库和实现搜索的预构建浏览器脚本。Gulp从项目降价文件生成搜索索引。

一开始选择的是hugo-lunr-zh，因为hugo-lunr不支持中文切词。后来使用过程中发现他生成的json文件都是切好分开的，在搜索显示的时候显的很不美观。换hugo-lunr又发现其自带搜索api功能很少，也没有样式。于是想到之前一直使用的InsightSearch插件，因为json格式都是一样的，可以只用lunr.js仅生成json，然后用InsightSearch搜索。

开发踩坑过程这里就略过了，直接说下结果的改动。希望能给大家一些参考帮助。

## 使用lunr生成供搜索用的json文件

首先，是json的生成。建议直接使用npm先下载我制作的插件hugo-lunr-diaspora。在hugo博客根目录下运行命令如下：
```cmd
npm i hugo-lunr-diaspora
```
安装好后就可根目录下的node_modules文件夹下找到hugo-lunr-diaspora目录。在`lib/index.js`中可以看到如下代码：
```js
function HugoLunr(input, output){
  var self = this;
  var stream;
  this.list = [];

  //input是输入目录，即该目录下的文件会被读取到json文件下
  this.input = 'content/posts/**';
  //output是输出，表示输出到哪个文件中，这里输出到static/lunr.json。hugo生成的时候就可以生成到public目录下。
  this.output = 'themes/Diaspora/static/lunr.json';
  
  //......
  
  //下面这段代码在最后，可以根据自己需求修改，增加一些字段。
  if (meta.data.url != undefined){
    uri = meta.data.url
  }
  
  var tags = [];
  
  if (meta.data.tags != undefined){
    tags = meta.data.tags;
  }
  
  var uri = uri.replace(/[\ |\~|\`|\!|\@|\#|\$|\%|\^|\&|\*|\(|\)|\-|\_|\+|\=|\||\[|\]|\{|\}|\;|\:|\"|\'|\,|\<|\.|\>|\?|\、|\，|\；|\。|\？|\！|\“|\”|\‘|\’|\：|\（|\）|\─|\…|\—|\·|\《|\》]/g, "");
  
  var item = {'uri' : uri , 'title' : meta.data.title, 'content':plainText, 'tags':tags};
  self.list.push(item);
```
核心代码就是上面部分了，匆必看懂。若是其他主题要把output改成对应位置。
下载好了插件后，还需在博客根目录下新建package.json，增加如下内容：
```json
{
  "scripts": {
    "index": "hugo-lunr"
  }
}
```
cmd到博客根目录下运行npm run index就可以生成lunr.json文件了。 注意更新文章后需要更新lunr.json文件。

## 使用InsightSearch插件

生成了json文件后，我们就可以使用InsightSearch行搜索了。这一步需要对主题或html有一定的了解，因为需要在主题代码中加入搜索部分。下文以Diaspora主题为例：

在layouts/partials文件下新建search.html，内容如下：
```html
<div class="ins-search">
    <div class="ins-search-mask"></div>
    <div class="ins-search-container">
        <div class="ins-input-wrapper">
            <input type="text" class="ins-search-input" placeholder="请输入关键词..."/>
            <span class="ins-close ins-selectable"><i class="icon-close"></i></span>
        </div>
        <div class="ins-section-wrapper">
            <div class="ins-section-container"></div>
        </div>
    </div>
</div>
<script>
(function (window) {
    var INSIGHT_CONFIG = {
        TRANSLATION: {
            POSTS: '文章',
            TAGS: '便签',
        },
        ROOT_URL: {{ .Site.BaseURL }},
        CONTENT_URL: '/lunr.json',
    };
    window.INSIGHT_CONFIG = INSIGHT_CONFIG;
})(window);
</script>
```
同时在head.html中加入css；footer.html中加入js:
```html
  ...
  <link rel="stylesheet" href="/css/insight.css">
  <link rel="stylesheet" href="/css/custom.css">
```
```html
  ...
  <script src="/js/custom.js"></script>
  <script src="/js/InsightSearch.js"></script>
```
页面建好了，需要看下插入哪个页面合适。我这里决定在header.html中插入：
```html
<div class="nav">
  <ul id="menu-menu" class="menu">
    {{ range .Site.Params.menu }}
        <li ><a target="{{ .target }}" href="{{ .link | absURL }}" class="pviewa">{{ .name }}</a></li>
    {{ end }}
    <div id="search-input-wrap" class="on">
      <div id="search-input-icon">
        <i class="fa fa-search"></i>
      </div>
      <span style="position: relative; display: inline-block; direction: ltr;">
        <input id="search-input" placeholder="Search..." style="position: relative; vertical-align: top;">
      </span>
    </div>
    {{ partial "search" . }}
  </ul>
  <p>&copy 2019 素锦 · Theme Diaspora Powered by Hugo</p>
</div>

```
效果如下：
![](https://cdn.jsdelivr.net/gh/honjun/ImageHosting/picgo/20190712230157.png)

完。