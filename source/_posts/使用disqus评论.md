title: 使用disqus评论
author: hojun
avatar: /images/favicon.png
authorDesc: 一个好奇的人
categories: 技术
series: hexo折腾
date: 2018-03-07 23:07:28
authorLink:
authorAbout:
tags:
 - hexo
keywords:
description:
photos:
---
Disqus网址：[https://disqus.com/](https://disqus.com/)
## **Disqus配置使用**
注册步骤省略(注意要科学上网)
![](http://wx4.sinaimg.cn/large/006bYVyvgy1fp5ueed0g7j30w40fc3zl.jpg)

----------

![](http://wx3.sinaimg.cn/large/006bYVyvgy1fp5ueoj1o6j30ok0fedik.jpg)

----------

![](http://wx2.sinaimg.cn/large/006bYVyvgy1fp5uejc7soj30hk0h6jrs.jpg)

WebsiteName 是 hojun，所以主题配置文件(_config.yml)的disqus_shortname就填 hojun (就填你自己的)

----------

![](http://wx3.sinaimg.cn/large/006bYVyvgy1fp5u1517d6j30ps0gzta2.jpg)

----------

![](http://wx1.sinaimg.cn/large/006bYVyvgy1fp5u0zx5ctj30qv0f1wf0.jpg)

----------

![](http://wx2.sinaimg.cn/large/006bYVyvgy1fp5u0uxtidj30mq0h8gmt.jpg)

----------

![](http://wx1.sinaimg.cn/large/006bYVyvgy1fp5u1a42d6j30ia0ho74y.jpg)

以下是我的配置和comment部分代码：
```yml
disqus_shortname: hojun
```

```html
<% if (config.disqus_shortname && page.comments) { %>
<div id="disqus_thread"></div>
<script>
    /**
     *  RECOMMENDED CONFIGURATION VARIABLES: EDIT AND UNCOMMENT THE SECTION BELOW TO INSERT DYNAMIC VALUES FROM YOUR PLATFORM OR CMS.
     *  LEARN WHY DEFINING THESE VARIABLES IS IMPORTANT: https://disqus.com/admin/universalcode/#configuration-variables
     */
     var disqus_config = function () {
     this.page.url = '<%- post.permalink %>';
     this.page.identifier = '<%- post.path %>';
     };
    (function() { // DON'T EDIT BELOW THIS LINE
        var d = document, disqus_shortname = '<%= config.disqus_shortname %>',s = d.createElement('script');
        s.src = 'https://'+disqus_shortname+'.disqus.com/embed.js';
        s.setAttribute('data-timestamp', +new Date());
        (d.head || d.body).appendChild(s);
    })();
</script>
```
参考https://www.jianshu.com/p/d68de067ea74?open_source=weibo_search