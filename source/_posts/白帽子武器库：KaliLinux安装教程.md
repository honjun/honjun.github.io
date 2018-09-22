title: 白帽子武器库：KaliLinux安装教程
author: hojun
avatar: 'https://wx1.sinaimg.cn/large/006bYVyvgy1ftand2qurdj303c03cdfv.jpg'
authorLink: /about/hojun.html
authorDesc: 一个好奇的人
categories: 技术
comments: true
date: 2018-09-05 15:56:30
authorAbout:
series:
tags:
 - linux
keywords: Kali Linux
description: Kali Linux是基于Debian的Linux发行版， 设计用于数字取证操作系统。面向专业的渗透测试和安全审计。
photos:
 - https://wx1.sinaimg.cn/small/006bYVyvgy1fuxz448hsnj311s0lcnn8.jpg
---
## 前言
### Kali介绍
Kali Linux是基于Debian的Linux发行版， 设计用于数字取证操作系统。面向专业的渗透测试和安全审计。
 - 集成化：预装超过300个渗透测试工具
 - 兼容好：Kali可以安装到手机、PC和树莓派等
 - 安全性：Kali Linux开发团队由一群可信任的人组成,他们只能在使用多种安全协议的时候提交包或管理源。
 - 免费用： Kali Linux一如既往的免费。你永远无需为Kali Linux付费。

## 前期准备
### 下载安装虚拟机
使用的是windows电脑，选择VMwareWorkstation虚拟机。
### 下载Kali镜像
去Kali官网下载镜像文件（网上说32位的兼容性好，于是选择了32位的2018.3版本）
关注公众号回复damo006获得镜像百度云地址
## 开始安装
打开VMware>文件>新建虚拟机
![image](https://wx3.sinaimg.cn/large/006bYVyvgy1fuxvwq4yh6j30cm08jmxr.jpg)
点击下一步
![image](https://wx2.sinaimg.cn/large/006bYVyvgy1fuxvxmenkxj30dz0by0ti.jpg)
这里选择稍后再安装操作系统
![image](https://ws1.sinaimg.cn/large/006bYVyvgy1fuxw20ns8aj30dz0bymxk.jpg)
选择linux,版本里找不到Kali,可以选择Ubuntu和Debian都行（不要选64位）
![image](https://wx3.sinaimg.cn/large/006bYVyvgy1fuxw3qk1luj30dz0byq38.jpg)
虚拟机名称就改成Kali（自定义），位置这里采用默认的，也可以自定义
![image](https://wx3.sinaimg.cn/large/006bYVyvgy1fuxw4ufehbj30dz0byjrk.jpg)
默认下一步
![image](https://ws3.sinaimg.cn/large/006bYVyvgy1fuxw6x95yij30dz0byweu.jpg)
这里点击自定义硬件
![image](https://wx4.sinaimg.cn/large/006bYVyvgy1fuxw8fft82j30dz0bygly.jpg)
新CD/DVD>使用ISO映像文件>选择Kali的镜像。设置好后点击关闭
![image](https://ws3.sinaimg.cn/large/006bYVyvgy1fuxwbmyz5xj30kf0gw0td.jpg)
点击完成
![image](https://ws2.sinaimg.cn/large/006bYVyvgy1fuxwdfwjmij30dz0byq3a.jpg)
点击开启此虚拟机
![image](https://ws4.sinaimg.cn/large/006bYVyvgy1fuxweq32atj30uo0jdjt7.jpg)
进入如下页面后
![image](https://ws1.sinaimg.cn/large/006bYVyvgy1fuxwiuvud7j30pr0fdn1w.jpg)
键盘↓键移动到Install,敲击Enter键开始安装。
![image](https://ws1.sinaimg.cn/large/006bYVyvgy1fuxwkk814aj30mf0fuq7m.jpg)
选择简体中文>汉字...等等
![image](https://ws2.sinaimg.cn/large/006bYVyvgy1fuxwliwpyuj30qt0gvgm7.jpg)
分区选择第一个向导
![image](https://ws1.sinaimg.cn/large/006bYVyvgy1fuxwric6ugj30pe0e4jrr.jpg)
选择第一个（新手推荐）中间还有部创建开机密码的步骤。这里无截图略过~
![image](https://ws4.sinaimg.cn/large/006bYVyvgy1fuxws80jkkj30pq0c574i.jpg)
网络镜像选择否！
![image](https://wx4.sinaimg.cn/large/006bYVyvgy1fuxxg5cvx7j30o40d33yn.jpg)
提示安装好后重启虚拟机（进度条可能没走完），就是上面有个播放的按钮下拉里面可以选择重启。
![image](https://ws1.sinaimg.cn/large/006bYVyvgy1fuxxk20u47j30pg0fs0w5.jpg)
注意：启动过程中使用的用户名为root,密码为你自己设的。
duangduangduang,启动如下。Kali的logo是不是很酷，接下来点击安装Tools。
![image](https://wx2.sinaimg.cn/large/006bYVyvgy1fuxxn3ja90j30t60i7asu.jpg)
双击打开桌面上那个光盘一样的东东。把压缩包拖到Home去。
![image](https://wx3.sinaimg.cn/large/006bYVyvgy1fuxxpo9vtjj30r90gl75l.jpg)
点击左侧第二个，打开终端。
![image](https://wx2.sinaimg.cn/large/006bYVyvgy1fuxxramm5xj30o20ejakt.jpg)
输入ls命令，可以看到我们的安装包，在输入tar -zxvf VM，然后敲击Tab补全，再敲击Enter进行解压。
![image](https://wx1.sinaimg.cn/large/006bYVyvgy1fuxxuecouqj30nk0ccqca.jpg)
解压好后，ls可以看到我们的解压文件。cd进入，输入./vmware-install.pl运行脚本安装Tools。
![image](https://ws4.sinaimg.cn/large/006bYVyvgy1fuxxwt7a86j30k20ed7ga.jpg)
一路Enter确认即可，出现Enjoy说明安装完成。
![image](https://wx1.sinaimg.cn/large/006bYVyvgy1fuxxzolnfhj30mp0fitlf.jpg)
重新启动虚拟机
![image](https://wx2.sinaimg.cn/large/006bYVyvgy1fuxy0ef7lkj30k407itac.jpg)
重启后发现虚拟机桌面很小，我们可以在设置中调整它的分辨率和你的显示器一致，这样全屏的时候就会铺满屏幕。
![image](https://ws2.sinaimg.cn/large/006bYVyvgy1fuxz2hbyc3j30qv0dnadh.jpg)
好了，虚拟机安装Kali完成了~
![image](https://wx1.sinaimg.cn/large/006bYVyvgy1fuxz448hsnj311s0lcnn8.jpg)