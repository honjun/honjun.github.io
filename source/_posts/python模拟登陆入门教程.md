title: python模拟登陆入门教程
author: hojun
avatar: /images/favicon.png
authorDesc: 一个好奇的人
categories: 技术
date: 2018-04-12 01:25:19
authorLink:
authorAbout:
tags:
 - python
 - 爬虫
keywords: python模拟登陆
description: 找了一个不带验证码登陆的简单网站（图床001网）做python的模拟登陆入门教程：
photos:
 - https://wx3.sinaimg.cn/large/006bYVyvgy1fpu48ng5ooj30k00boq2w.jpg
---
找了一个不带验证码登陆的简单网站（图床001网）做python的模拟登陆入门教程：
### **第一步**
首先打开浏览器，按F12打开开发人员工具 ，切换到network,勾选Preserve log和Disable cache。切换Application，右键clear网站cookie。
![](https://wx3.sinaimg.cn/large/006bYVyvgy1fq988tzsscj30le07r0tu.jpg)
![](https://wx4.sinaimg.cn/large/006bYVyvgy1fq988ottarj30jh084mxn.jpg)
然后人工登录一遍
![](https://wx3.sinaimg.cn/large/006bYVyvgy1fq988jotjxj30m307uta3.jpg)
![](https://wx3.sinaimg.cn/large/006bYVyvgy1fq988en0zxj30mt0e27cw.jpg)
![](https://wx2.sinaimg.cn/large/006bYVyvgy1fq9889k96hj30jz0jstd5.jpg)
### **第二步**
分析每个步骤,可以得出2点重要信息

 - 在访问首页还未登录的时候，服务器就给我们传递了一个名为PHPSESSIONID的cookie。（后台99%是php开发的）。
 - 在登录表单中含有一个隐藏域，名为auth_token，在登录的时候需要post过去

### **第三步**
知道这两点注意事项就可以开始撸代码了:

```python
# coding=utf-8
from urllib import request
from urllib import error
from urllib import parse
from http import cookiejar
import ssl
import re

try:
    _create_unverified_https_context = ssl._create_unverified_context
except AttributeError:
    # Legacy Python that doesn't verify HTTPS certificates by default
    pass
else:
    # Handle target environment that doesn't support HTTPS verification
    ssl._create_default_https_context = _create_unverified_https_context

if __name__ == '__main__':
    try:
        #首页地址
        index_url = 'https://www.tuchuang001.com/'
        #User-Agent信息                   
        user_agent = r'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.140 Safari/537.36'
        #Headers信息
        head = {'User-Agnet': user_agent, 'Connection': 'keep-alive'}
        
        #声明一个CookieJar对象实例来保存cookie
        cookie = cookiejar.CookieJar()
        #利用urllib.request库的HTTPCookieProcessor对象来创建cookie处理器,也就CookieHandler
        cookie_support = request.HTTPCookieProcessor(cookie)
        #通过CookieHandler创建opener 此opener中所有通信的cookie都会在cj对象中记录。这个cookie是没有域限制的，也就是全局cookie
        opener = request.build_opener(cookie_support)
        #创建Request对象
        req1 = request.Request(url=index_url, headers=head)
        #使用自己创建的opener的open方法
        response1 = opener.open(req1)
        html = response1.read().decode('utf-8')
        # 匹配auth_token
        reg = r'name="auth_token" value="(.*?)"'
        auth_token = re.compile(reg)
        auth_token = re.findall(auth_token, html)
        #登陆地址
        login_url = 'https://www.tuchuang001.com/login'    
        #登陆Form_Data信息
        Login_Data = {}
        Login_Data['auth_token'] = auth_token[0]
        Login_Data['login-subject'] = '你的账号'
        Login_Data['password'] = '你的密码'
        #使用urlencode方法转换标准格式
        loginPostData = parse.urlencode(Login_Data).encode('utf-8')
        req2 = request.Request(url=login_url, data=loginPostData, headers=head)
        response2 = opener.open(req2)
        html2 = response2.read().decode('utf-8')
        # 匹配用户名
        reg = r'<span class="text phone-hide">(.*?)</span>'
        userName = re.compile(reg)
        userName = re.findall(userName, html2)
        print(userName)
    except error.URLError as e:
        if hasattr(e, 'code'):
            print("HTTPError:%d" % e.code)
        elif hasattr(e, 'reason'):
            print("URLError:%s" % e.reason)

```
看注释基本能看懂代码了，我这里就不再讲解