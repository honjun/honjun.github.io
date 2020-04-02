title: win10子系统kali-linux安装图形化界面总结
author: hojun
avatar: 'https://cdn.jsdelivr.net/gh/honjun/ImageHosting/picgo/20191009004718.png'
authorLink: /about/hojun.html
authorDesc: 一个好奇的人
categories: 技术
comments: true
date: 2020-03-25 20:04:54
authorAbout:
series:
tags:
 - linux
 - kali
keywords:
description:
photos: https://cdn.jsdelivr.net/gh/honjun/ImageHosting/picgo/20200325213838.png
---

![](https://cdn.jsdelivr.net/gh/honjun/ImageHosting/picgo/20200325213838.png)
## 前言
最近练习ctf用到了kali。之前是有个虚拟机的，后来发现win10专业版自带有linux子系统。于是就安装使用了一下。由于网上一些安装图形化界面的教程因为时间太久等原因有些不能用了。所以整理了这份文档，供后来人避坑。

## 环境

系统：win10专业版
开启：开发者模式和Windows功能（适用于Linux的Windows子系统）

## 下载&安装
打开win10自带的Microsoft Store(应用商店)，搜索linux，就可以找到Kali:
![](https://cdn.jsdelivr.net/gh/honjun/ImageHosting/picgo/20200325065919.png)

等它下载安装好就可以打开它了：
![](https://cdn.jsdelivr.net/gh/honjun/ImageHosting/picgo/20200325065952.png)

一开始会让你创建用户名和密码，注意：用户名最好用小写英文，密码不要忘记。后面要用到。
当然，我们也可以用root用户，这样就可以避免频繁输入sudo，避免因权限而带来的操作问题。
按Ctrl+D退出登录，并打开Windows命令行（WIN+R 输入CMD）输入如下命令：
```cmd
kali config --default-user root
net stop LxssManager
net start LxssManager
```
然后再打开kali就是root用户了，在kali下修改root密码：
```shell
passwd root
```

## 换中科大Kali源

感谢[科大LUG](https://lug.ustc.edu.cn/wiki/start)
先备份原文件
```shell
mv /etc/apt/sources.list /etc/apt/sources.list.bak
```
创建新的/etc/apt/sources.list
```shell
nano /etc/apt/sources.list 
```
![](https://cdn.jsdelivr.net/gh/honjun/ImageHosting/picgo/20200325223226.png)
输入以下内容保存并退出
```shell
deb https://mirrors.ustc.edu.cn/kali kali-rolling main non-free contrib
deb-src https://mirrors.ustc.edu.cn/kali kali-rolling main non-free contrib
```
再简单地update一下
```shell
apt-get update 
```

## 安装图形化界面
按顺序执行如下命令：(时间较长，请耐心等待)
```shell
apt-get install kali-desktop-xfce
```
```shell
apt-get install xorg
```
这步要输个Y(yes)，然后在这个界面选择第一个就行
![](https://cdn.jsdelivr.net/gh/honjun/ImageHosting/picgo/TLW(~7{V~E~RET(N84MC22E.png)
```shell
apt-get install xfce4
```
```shell
apt-get install xrdp
```
```shell
sudo sed -i 's/port=3389/port=3390/g' /etc/xrdp/xrdp.ini
sudo echo xfce4-session >~/.xsession
sudo service xrdp restart
```
接着win+R打开运行栏，输入cmd，输入命令ipconfig查看自己ip。注意你用的网线就是以太网适配器ipv4，用的无线就是无线局域网适配器 WLAN下的ipv4。
再次win+R打开运行栏，输入mstsc，打开远程桌面，输入自己的ip地址xxx.xxx.xxx.xxx:3390，点击连接：
![](https://cdn.jsdelivr.net/gh/honjun/ImageHosting/picgo/20200325225052.png)
就可以进到如下页面：
![](https://cdn.jsdelivr.net/gh/honjun/ImageHosting/picgo/20200325120857.png)
输入kali用户名和密码就可以进入到kali的图形化界面了
![](https://cdn.jsdelivr.net/gh/honjun/ImageHosting/picgo/20200325225311.png)

完。

参考：
https://www.cnblogs.com/liudaye/p/10597043.html
https://blog.csdn.net/qq_37339132/article/details/100052782
https://baijiahao.baidu.com/s?id=1596652006568524478&wfr=spider&for=pc