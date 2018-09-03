title: Python+selenium自动上传博客图片至新浪微博相册
author: hojun
avatar: https://wx1.sinaimg.cn/large/006bYVyvgy1ftand2qurdj303c03cdfv.jpg
authorDesc: 一个好奇的人
categories: 技术
date: 2018-02-12 20:57:04
authorLink: /about/hojun.html
authorAbout:
tags:
 - python
keywords: 自动上传博客图片
description: 写博客的时候每次使用图片都得先上传到新浪微博，然后在得到链接插入到markdown中。这样操作多来几次就受不了，于是就使用python+selenium自动上传博客图片。
photos:
---
## **Why?**
写博客的时候每次使用图片都得先上传到新浪微博，然后在得到链接插入到markdown中。这样操作多来几次就受不了，于是就使用python+selenium自动上传博客图片。
![](https://wx4.sinaimg.cn/large/006bYVyvgy1fodyhqpzlwg311y0lce81.gif)
## **第一步 安装环境**
Python3
[python3百度云](https://pan.baidu.com/s/1eSZYGT0)
selenium
```cmd
//打开cmd运行
pip install selenium
```
安装chromedriver - [各版本下载地址](http://chromedriver.storage.googleapis.com/index.html)

|chromedriver版本|支持的Chrome版本|
|:--:|:--:|
| v2.35 | v62-64 |
| v2.34 | v61-63 |
| v2.33 | v60-62 |
| v2.32 | v59-61 |
| v2.31 | v58-60 |
| v2.30 | v58-60 |
| v2.29 | v56-58 |
| v2.28 | v55-57 |
| v2.27 | v54-56 |
| v2.26 | v53-55 |
| v2.25 | v53-55 |
| v2.24 | v52-54 |
| v2.23 | v51-53 |
| v2.22 | v49-52 |
| v2.21 | v46-50 |
| v2.20 | v43-48 |
| v2.19 | v43-47 |
| v2.18 | v43-46 |
| v2.17 | v42-43 |
| v2.13 | v42-45 |
| v2.15 | v40-43 |
| v2.14 | v39-42 |
| v2.13 | v38-41 |
| v2.12 | v36-40 |
| v2.11 | v36-40 |
| v2.10 | v33-36 |
| v2.9 | v31-34 |
| v2.8 | v30-33 |
| v2.7 | v30-33 |
| v2.6 | v29-32 |
| v2.5 | v29-32 |
| v2.4 | v29-32 |


## **第二步 获取XPath**
首先打开登录页面，得到需要的账号、密码、登录的XPath(按F12打开开发者工具)
得到账号的XPath如下图(其他同理,注意是input标签哦)：
![](http://wx3.sinaimg.cn/large/006bYVyvgy1fojdfv7wkpj30zg0i947b.jpg)
得到上传照片按钮的XPath
![](http://wx2.sinaimg.cn/large/006bYVyvgy1fojdfrctosj30zk0fvtbf.jpg)
得到普通上传的XPath
![](http://wx3.sinaimg.cn/large/006bYVyvgy1fojdfniefuj30z00g3aby.jpg)
得到选择图片的Xpath
![](http://wx4.sinaimg.cn/large/006bYVyvgy1fojdfjtq1yj30z00gpwgu.jpg)
以下省略1000字......

## **第三步 撸代码调试**
代码如下(简单易懂吧)：
```python
import os
from selenium import webdriver
import time
class Connect():
    def __init__(self):
        self.UserName = '你的账号'
        self.PassWord = '你的密码'
        # 微相册的登录地址
        self.URL = 'https://weibo.com/login.php?url=http://photo.weibo.com/5673857615/albums'
    def upload(self):
        # chromedriver的安装地址(默认)
        self.driver = webdriver.Chrome('C:\Program Files (x86)\Google\Chrome\Application\chromedriver.exe')
        # 最大化浏览器窗口
        self.driver.maximize_window()
        self.driver.get(self.URL)
        # 输入账号
        self.driver.find_element_by_xpath('//*[@id="loginname"]').send_keys(self.UserName)
        # 输入密码
        self.driver.find_element_by_xpath('//*[@id="pl_login_form"]/div/div[3]/div[2]/div/input').send_keys(self.PassWord)
        # 点击登录(我这里忽略需要验证码的情况 可以用打码平台解决，或手动输入)
        self.driver.find_element_by_xpath('//*[@id="pl_login_form"]/div/div[3]/div[6]/a').click()
        # 等待3秒
        time.sleep(3)
        # 点击上传照片
        self.driver.find_element_by_xpath('//*[@id="user_info"]/div/a').click()
        time.sleep(3)
        # 点击普通上传
        self.driver.find_element_by_xpath('//*[@id="flash_upload"]/p/a').click()
        # 打开需要记录上传的图片地址的txt
        fr = open("E:\python\pySinaAutoUpload\imgsPath.txt", "r")
        content = fr.readlines() 
        # 循环上传图片
        for index,val in enumerate(content):
            imgPath = val.strip()  #去掉每行头尾空白  
            time.sleep(3)
            i = index + 1
            if i == 1:
              self.driver.find_element_by_xpath('//*[@id="common_upload"]/ul/li/form/input').send_keys(imgPath)
              time.sleep(3)
              self.driver.find_element_by_xpath('//*[@id="common_upload"]/ul/li/form/a').click()
            else:
              self.driver.find_element_by_xpath('//*[@id="common_upload"]/ul/li[' + str(i) + ']/form/input').send_keys(imgPath)
              time.sleep(3)
              self.driver.find_element_by_xpath('//*[@id="common_upload"]/ul/li[' + str(i) + ']/form/a').click()
        # 关闭文件
        fr.close()  
        time.sleep(3)
        # 点击下一步
        self.driver.find_element_by_xpath('//*[@id="common_upload"]/div/a').click()
        time.sleep(3)
        # 点击保存并发布
        self.driver.find_element_by_xpath('//*[@id="uploadPanel"]/div[2]/div[4]/a').click()
        time.sleep(3)
        # 得到上传文件的个数
        count = len(content);
        # 打开记录上传图片的URL的txt
        fw = open("E:\python\pySinaAutoUpload\imgsUrl.txt", "w")
        # 循环得到图片Url
        for j in range(count):
          imgsUrl = self.driver.execute_script('return document.getElementsByClassName("m_photoItem m_photoItem_a")[' + str(j) + '].getElementsByTagName("img")[0].src')
          time.sleep(3)
          imgsUrl = imgsUrl.replace("small", "large");
          fw.write(imgsUrl + '\n')
          fw.flush()
        fw.close()
Connect().upload()
```
## **第四步 编写bat批处理文件简化操作**
为什么用bat? 一开始是想直接拖到.py文件上运行的，可以改了注册表重启什么的还是不管用
**getPath.bat // 得到图片路径**
```bat
@Echo Off&Setlocal Enabledelayedexpansion
Del /q E:\python\pySinaAutoUpload\imgsPath.txt
For /l %%a in (1,1,9) do (Call Set "f=%%%%~a"
(If defined f Dir /a-d /b /s !f!)>>E:\python\pySinaAutoUpload\imgsPath.txt)
For /f "tokens=*" %%i in (imgsPath.txt) do (
Ren "%%~dpni_New%%~xi" "%%~nxi"
)
exit
```
upload.bat //运行py
```bat
cd E:\python\pySinaAutoUpload\
python uploadImgs.py
```

好了，到此告一段落了，等有时间补上使用py模拟登陆的解决方案

参考：http://blog.csdn.net/justheretobe/article/details/50939021