title: 自动上传博客图片至新浪微博相册之Headless版
author: hojun
avatar: /images/favicon.png
authorDesc: 一个好奇的人
categories: 技术
date: 2018-04-14 19:37:44
authorLink:
authorAbout:
tags:
 - python
keywords: headless
description: 之前实现了一波Python+selenium自动上传博客图片至新浪微博相册，每次都会自动打开浏览器，再巴拉巴拉一波操作。后来在爬取网页动态页面的时候发现可以使用浏览器自带的headless(无头)
photos:
 - https://wx2.sinaimg.cn/large/006bYVyvgy1fqcg6c6d2bj30dw0b4t8z.jpg
---
![](https://wx2.sinaimg.cn/large/006bYVyvgy1fqcg6c6d2bj30dw0b4t8z.jpg)
之前实现了一波Python+selenium自动上传博客图片至新浪微博相册，每次都会自动打开浏览器，再巴拉巴拉一波操作。
后来在爬取网页动态页面的时候发现可以使用浏览器自带的headless(无头)模式，可以实现浏览器在后台巴拉巴拉一波操作，桌面上不显示。使用起来更加方便。
直接使用chrome自带的headless的时候，一样的代码却老出问题，估计是chrome的bug，于是弃坑使用的Firefox浏览器。
首先需要安装Firefox的webdriver[下载地址](https://github.com/mozilla/geckodriver/releases)。
接下来直接改代码就OK~
注意executable_path就是你的geckodriver的安装路径
代码：
```python
import os
import time
from selenium import webdriver
from selenium.webdriver.firefox.options import Options
# from selenium.webdriver.chrome.options import Options
class Connect():
    def __init__(self):
        self.UserName = '你的账号'
        self.PassWord = '你的密码'
        self.URL = 'https://weibo.com/login.php?url=http://photo.weibo.com/5673857615/albums'
    def upload(self):
        firefox_options = Options()
        firefox_options.add_argument('--headless')
        self.driver = webdriver.Firefox(firefox_options=firefox_options, executable_path='E:\python\webdriver\geckodriver.exe')
        # self.driver = webdriver.Chrome(chrome_options=chrome_options, executable_path='C:\Program Files (x86)\Google\Chrome\Application\chromedriver.exe')
        self.driver.get(self.URL)
        self.driver.find_element_by_xpath('//*[@id="loginname"]').send_keys(self.UserName)
        self.driver.find_element_by_xpath('//*[@id="pl_login_form"]/div/div[3]/div[2]/div/input').send_keys(self.PassWord)
        self.driver.find_element_by_xpath('//*[@id="pl_login_form"]/div/div[3]/div[6]/a').click()
        time.sleep(6)
        self.driver.find_element_by_xpath('//*[@id="user_info"]/div/a').click()
        time.sleep(4)
        self.driver.find_element_by_xpath('//*[@id="flash_upload"]/p/a').click()

        fr = open("E:\python\pySinaAutoUpload\imgsPath.txt", "r")
        content = fr.readlines() 
        for index,val in enumerate(content):
            imgPath = val.strip()  #去掉每行头尾空白  
            time.sleep(4)
            i = index + 1
            if i == 1:
              self.driver.find_element_by_xpath('//*[@id="common_upload"]/ul/li/form/input').send_keys(imgPath)
              time.sleep(4)
              self.driver.find_element_by_xpath('//*[@id="common_upload"]/ul/li/form/a').click()
            else:
              self.driver.find_element_by_xpath('//*[@id="common_upload"]/ul/li[' + str(i) + ']/form/input').send_keys(imgPath)
              time.sleep(4)
              self.driver.find_element_by_xpath('//*[@id="common_upload"]/ul/li[' + str(i) + ']/form/a').click()
        # 关闭文件
        fr.close()  
        time.sleep(6)
        self.driver.find_element_by_xpath('//*[@id="common_upload"]/div/a').click()
        time.sleep(4)
        self.driver.find_element_by_xpath('//*[@id="uploadPanel"]/div[2]/div[4]/a').click()
        time.sleep(4)
        count = len(content);
        fw = open("E:\python\pySinaAutoUpload\imgsUrl.txt", "w")
        for j in range(count):
          imgsUrl = self.driver.execute_script('return document.getElementsByClassName("m_photoItem m_photoItem_a")[' + str(j) + '].getElementsByTagName("img")[0].src')
          time.sleep(4)
          imgsUrl = imgsUrl.replace("small", "large")
          imgsUrl = '![](' + imgsUrl + ')'
          fw.write(imgsUrl + '\n')
          fw.flush()
        fw.close()
Connect().upload()
```