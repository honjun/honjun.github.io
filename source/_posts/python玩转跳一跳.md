title: python玩转跳一跳
author: hojun
avatar: https://wx1.sinaimg.cn/large/006bYVyvgy1ftand2qurdj303c03cdfv.jpg
authorDesc: 一个好奇的人
categories: 技术
date: 2018-01-08 22:24:34
authorLink: /about/hojun.html
authorAbout:
tags:
 - python
keywords:
description:
photos:
 - https://wx2.sinaimg.cn/large/006bYVyvgy1fnby03e12fg30al0al1gt.gif
---
2018年刚来就发生了很多事，咳咳。微信的跳一跳上线到python辅助工具出现到今天github上的star数量就达到了11万！(估计大部分都是为了玩游戏来的)。元旦时候就想使用这个工具顺带接触下python,有事一直拖到现在。
[github传送门](https://github.com/wangshub/wechat_jump_game)
[官方教程点这里](https://github.com/wangshub/wechat_jump_game/wiki/Android-%E5%92%8C-iOS-%E6%93%8D%E4%BD%9C%E6%AD%A5%E9%AA%A4)
这里只介绍windows系统的Android教程...mac请自力更生(不难的)

----------

博主采用的是方法一：
## **第一步，下载代码**
pc上装有git的可以使用git clone代码到本地
![png](https://wx2.sinaimg.cn/large/006bYVyvgy1fncp8ul4snj30sz0dyq4o.jpg)

----------

或者点击DownloadZIP
![png](https://wx3.sinaimg.cn/large/006bYVyvgy1fncp8gyztqj30d506lt8y.jpg)下载压缩包到本地(解压到哪看自己喜欢)
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

## **第三步，手机连接usb开始测试**

 1. 安卓手机打开 USB 调试，设置 > 开发者选项 > USB 调试
 2. 电脑与手机 USB 线连接，确保执行 adb devices 可以找到设备 ID
 3. 界面转至微信跳一跳游戏，点击开始游戏
 4. 以管理员身份打开cmd，并进入项目目录，运行 python wechat_jump_auto.py ，如果手机弹出界面显示 USB 授权，请点击确认
 5. 请按照你的机型或手机分辨率从 ./config/ 文件夹找到相应的配置，把对应的 config.json里面的内容 拷贝到default.json
 6. 如果屏幕分辨率能成功探测，会直接调用 config 目录的配置，不需要复制
 7. 优先按机型去找，找不到再按分辨率 如果都没有请找一个接近的自己的分辨率，或者调节一下找到合适的参数

**如果运行很完美请忽略以下内容，尽量不要刷到1000分以上，容易被微信关小黑屋**

接下来讲解怎么调参数，用记事本或其他编译器打开wechat_jump_auto.py
读完开头就能大概了解参数配置
```python
# DEBUG 开关，需要调试的时候请改为 True，不需要调试的时候为 False
DEBUG_SWITCH = True //记得改True哦，会记录截图和log(不过一般截图识别的中心点是没问题的)。调好了在改回false


# Magic Number，不设置可能无法正常执行，请根据具体截图从上到下按需
# 设置，设置保存在 config 文件夹中
config = config.open_accordant_config()
under_game_score_y = config['under_game_score_y']
# 长按的时间系数，请自己根据实际情况调节  这里就是关键了
press_coefficient = config['press_coefficient']
# 二分之一的棋子底座高度，可能要调节
piece_base_height_1_2 = config['piece_base_height_1_2']
# 棋子的宽度，比截图中量到的稍微大一点比较安全，可能要调节
piece_body_width = config['piece_body_width']
```
知道该怎么做后在去修改default.json。如果你的机型有对应的配置文件，请改对应的那个。
```json
{
    "under_game_score_y": 300, 
    "press_coefficient": 1.392,  // 这个就是我们要调整的参数了
    "piece_base_height_1_2": 20, 
    "piece_body_width": 70
}
修改press_coefficient的值，调的小跳的近，调的大跳的远。边改边测试哦。对了，结束python脚本运行是Ctrl+C哦。
```

----------

适度游戏，健康生活，快去学习！