title: python+Chrome爬取动态异步生成的页面内容
author: hojun
avatar: /images/favicon.png
authorDesc: 一个好奇的人
categories: 技术
date: 2018-04-04 19:41:20
authorLink:
authorAbout:
tags:
 - python
keywords: 爬取动态异步生成的页面内容
description: 
photos:
 - https://wx3.sinaimg.cn/large/006bYVyvgy1fpzqclxph8j30cs0770sv.jpg
---
背景需求，发送一个中文，返回拼音+声调。

----------

## **解决之道一** 
百度一下 “汉字转拼音api”，是否有相关免费的api，还真的找到个“showapi易源接口”。可惜它不带声调。
百度一下“python汉字转拼音+声调”，找到一篇“Python: 汉字转拼音（带声调）”的文章。哈哈，按照功能实现需求了。咳咳，有些跑题。为了贴近标题，提供解决之道二。
## **解决之道二**
百度一下某个汉字，比如“我”，打开百度汉字，如图：
![](https://wx1.sinaimg.cn/large/006bYVyvgy1fq0v93g70oj30n00eut9g.jpg)
发现会有很多资源，拼音、部首、笔画、五行、基本释义等等。
![](https://wx3.sinaimg.cn/large/006bYVyvgy1fpzqclxph8j30cs0770sv.jpg)
准备用python爬。直接用urllib.request爬取，发现得到的刚好没有这些资源，怎么回事？
![](https://wx3.sinaimg.cn/large/006bYVyvgy1fpu48ng5ooj30k00boq2w.jpg)
在浏览器下发现有这么一串js
```js
 <script>window.basicInfo = {"name":"\u6211","type":"wo、rd","radical":null,"strokes":"7","definition":"w\u01d2#wo3#\u81ea\u79f0\uff0c\u81ea\u5df1\uff0c\u4ea6\u6307\u81ea\u5df1\u4e00\u65b9\uff1a\uff5e\u4eec\u3002\uff5e\u89c1\uff08\u6211\u81ea\u5df1\u7684\u770b\u6cd5\uff09\u3002\uff5e\u8f88\u3002\uff5e\u4faa\uff08\u6211\u4eec\uff09\u3002\u81ea\uff5e\u3002\uff5e\u76c8\u5f7c\u7aed\u3002"};</script>
```
 将unicode转中文后得到：
 ```zh
 name":"我","type":"word","radical":null,"strokes":"7","definition":"wǒ#wo3#自称，自己，亦指自己一方：～们。～见（我自己的看法）。～辈。～侪（我们）。自～。～盈彼竭。"
 ```
 说明对应的这些内容是由js动态生成的。
 我们需要能爬到动态的内容，可以使用selenium+chrome得到。
 ![](https://wx3.sinaimg.cn/large/006bYVyvgy1fq0uvkbjosj30fb08caa0.jpg)
 为什么不用PhantomJS？

 - 一、PhantomJS暂停开发
 - 二、新版本的Selenium不再支持PhantomJS

我们可以用chrome的headless模式，当然对chrome有要求，版本需要>=60（windows）>=59(linux)。还需要对应的chromeDriver
chromeDriver要求和配置可以参照我的另一篇文章《Python+selenium自动上传博客图片至新浪微博相册》

上代码~
```python
from selenium import webdriver
from selenium.webdriver.chrome.options import Options

chrome_options = Options()
chrome_options.add_argument('--headless')
chrome_options.add_argument('--disable-gpu')
driver = webdriver.Chrome(chrome_options=chrome_options, executable_path='C:\Program Files (x86)\Google\Chrome\Application\chromedriver.exe')
driver.get("http://hanyu.baidu.com/s?wd=%E4%BD%A0&from=zici")
print(driver.page_source)
```
duang~duang~duang~就这么成功爬取到了js动态生成的内容