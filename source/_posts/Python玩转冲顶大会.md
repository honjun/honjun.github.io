title: Python玩转冲顶大会
author: hojun
avatar: https://wx1.sinaimg.cn/large/006bYVyvgy1ftand2qurdj303c03cdfv.jpg
authorDesc: 一个好奇的人
categories: 技术
date: 2018-01-11 21:59:56
authorLink: /about/hojun.html
authorAbout:
tags:
keywords:
description:
photos:
 - https://wx1.sinaimg.cn/large/006bYVyvly1fns338d693j304v04va9z.jpg
---
在玩跳一跳的时候，发现有人用python+Tesseract-ORC开发了冲顶大会的辅助。由于之前折腾过验证码识别安装过Tesseract，于是就花点时间玩了下这个冲顶大会的辅助。
代码及安装包:
[github地址](https://github.com/Skyexu/TopSup)
[tesseract-ocr-setup-3.05.01](https://pan.baidu.com/s/1kWPV6YV)
[简体中文chi_sim](https://pan.baidu.com/s/1pMPhzVd)
## **第一步：安装下载代码**
pc上装有git的可以使用git clone代码到本地 
![](https://wx1.sinaimg.cn/large/006bYVyvgy1fnrqtlpr61j30tn0cijsw.jpg)
或者点击DownloadZIP下载压缩包到本地(解压到哪看自己喜欢)
## **第二步，配置环境**
安装python，推荐安装python3，会带有pip。python2可能会没有pip,需要自己安装(至于怎么安装请自行百度)。[python3百度云](https://pan.baidu.com/s/1eSZYGT0)
接着安装adb - [adb百度云](https://pan.baidu.com/s/1nwsHrtf)
配置path变量，在我的电脑(此电脑)上右键属性或控制面板\系统和安全\系统
![png](https://wx1.sinaimg.cn/large/006bYVyvgy1fncp8mi1x4j30i808a0ta.jpg)
点击高级系统设置->环境变量->系统变量里找到path->编辑->添加
分别加入这三个(对应的是软件安装的位置，装在哪填的就是那里，可能和博主的会有出入)，其中第二个是pip的地址![png](https://wx2.sinaimg.cn/large/006bYVyvgy1fncpbd2bo6j30ag01xweb.jpg)

可以在cmd(怎么打开cmd请自行百度)里输出如下命令测试是否安装成功
```cmd
C:\>python --version
Python 3.6.4
C:\>adb version
Android Debug Bridge version 1.0.31
```
最后一步进入项目根目录执行pip install -r requirements.txt
```cmd
E:\gitR\wechat_jump_game>pip install -r requirements.txt
```
安装可能会有点慢，还会卡住，卡住需要敲敲回车才能继续下载，否则会下载失败。建议使用pip的国内镜像下载(自行百度)
## **第三步：安装Tesseract-ORC 3.05.01**
![](https://wx1.sinaimg.cn/large/006bYVyvgy1fnrr4ryrquj30dz0aujrw.jpg)
这里可以选择安装中文语言包也可以不勾选（建议不勾选，下载速度慢。）自行下载语言包放到安装目录(C:\Program Files (x86)\Tesseract-OCR\tessdata)下即可
![](https://wx2.sinaimg.cn/large/006bYVyvgy1fnrr512duvj30dz0aumxm.jpg)
## **第四步：运行代码**
 1.安卓手机打开 USB 调试，设置 > 开发者选项 > USB 调试
 2.电脑与手机 USB 线连接，确保执行 adb devices 可以找到设备 ID
 3.打开cmd，并进入项目目录，运行python GetQuestionAndroid.py

效果如下
![](https://wx1.sinaimg.cn/large/006bYVyvgy1fnrqtpw6arj30zh0jqn0g.jpg)

## **第五步：调整截图位置**
当然，因为大家的设备不一致，屏幕大小不一，所以一般是不会成功的，还需要调整截图位置
可以在TopSup\common\ocr.py里保存截图来调试
保存截图的代码如下

```python
question_im = image.crop((50, 320, 1450, 550))
choices_im = image.crop((140, 550, 1000, 1070))
if os.path.isfile('question.png'):
    try:
        os.remove('question.png')
    except Exception:
        pass
if os.path.isfile('choices.png'):
    try:
        os.remove('choices.png')
    except Exception:
        pass
question_im.save('question.png')
choices_im.save('choices.png')
```

截图如下(二值化过的)
![](https://wx1.sinaimg.cn/large/006bYVyvgy1fnrqt1ubg2j312w06et8j.jpg)

----------


![](https://wx3.sinaimg.cn/large/006bYVyvgy1fnrqtfd1y5j30nw0egq2q.jpg)
新版将需要配置的参数统一调整到 config/configure.conf中，可以在这个文件中直接改
[region]
 **题目与选项区域**
question_region = 50, 350, 1000, 560
choices_region = 75, 535, 1000, 1200

 **题目和选项一起的区域**
combine_region = 50, 350, 1000, 1200

[tesseract]
 **windows**
 **tesseract 安装路径**
tesseract_cmd = C:\\Program Files (x86)\\Tesseract-OCR\\tesseract

 **语言包目录和参数**
tessdata_dir_config = --tessdata-dir "C:\\Program Files (x86)\\Tesseract-OCR\\tessdata" --psm 6

 **mac 环境, 文件夹分割请使用 / 代替 \\ 如** '/usr/local/Cellar/tesseract/3.05.01/bin/tesseract'