title: EasyAppointments使用采坑记
author: hojun
avatar: 'https://wx1.sinaimg.cn/large/006bYVyvgy1ftand2qurdj303c03cdfv.jpg'
authorLink: /about/hojun.html
authorDesc: 一个好奇的人
categories: 技术
comments: true
date: 2019-02-25 19:38:50
authorAbout:
series:
tags: 搞事
keywords: Easy Appointments
description: EasyAppointments使用采坑记
photos: https://wx2.sinaimg.cn/small/006bYVyvly1g0izaf8exdj30z30ig0uq.jpg
---
## What is Easy!Appointments?
![](https://wx2.sinaimg.cn/large/006bYVyvly1g0izaf8exdj30z30ig0uq.jpg)
官方介绍：Easy！Appointments是一个高度可定制的Web应用程序，允许您的客户通过Web预约。此外，它还可以将您的数据与Google日历同步，以便您可以将其与其他服务结合使用。它是一个开源项目，您甚至可以下载和安装它用于商业用途。Easy！Appointments将与您现有的网站顺利运行，因为它可以安装在服务器的单个文件夹中，当然，两个站点都可以共享同一个数据库。（那啥，为了搞个预约系统在网上找到这个Easy!Appointments开源项目的）。值得一提的是，Easy！Appiontments还有WordPress插件，插件地址->[easyappointments](https://wordpress.org/plugins/easyappointments/)

## 使用前准备
![](https://ws1.sinaimg.cn/large/006bYVyvly1g0izul709hj30lf0ea75f.jpg)
首先，点击Latest Version下载最新版本，对其感兴趣的也可以点击Source Code去其github仓库学习了解。
下载好后，别急，我们继续往下翻官网：
![](https://wx1.sinaimg.cn/large/006bYVyvly1g0j01xxrjvj30p80gtdid.jpg)
看不懂外语，使用谷歌浏览器自带的翻译。
![](https://wx2.sinaimg.cn/large/006bYVyvly1g0j0931qj9j30p40f8mz3.jpg)
通过文档知道我们需要Apache / Nginx，PHP和MySQL运行环境，以及对Easy！Appointments的一些配置，才能使用。

## 安装Apache / Nginx，PHP和MySQL
我们选择phpstudy一键懒人包，为啥选择phpstudy，因为phpstudy有强大的切换功能，多种组合自由切换。能够适应多种情况。直接下载了phpstudy的2018版本
![](https://wx1.sinaimg.cn/large/006bYVyvly1g0j0ra134jj30od0hh480.jpg)
双击安装，我这里安装在D盘：
![](https://ws2.sinaimg.cn/large/006bYVyvly1g0j3ai2ljrj30bl05wjrj.jpg)
来到安装目录下，双击运行
![](https://ws2.sinaimg.cn/large/006bYVyvly1g0j3cszoa1j30gb0dywg8.jpg)
注意，这里需要使用php7.0版本，5.5、7.2试过都没反应哦。然后可能会提示需要VC11和14的运行库，因为我们用的是7.0，所以安装VC14。去phpstudy自动弹出来的网站下载即可，若是没弹出来这说明电脑已经有该运行库了，可以直接使用。
![](https://wx4.sinaimg.cn/large/006bYVyvly1g0j3hcpnbnj30gi09bgmf.jpg)
启动服务后，在游览器上输入localhost可以看到hello world。说明我们环境已经基本搭建好。

## 配置Easy!Apppointments
搭好环境后，就需要配置Easy！Appointments了。先把下载下来的最新版本文件解压出来后放到`D:\phpStudy\PHPTutorial\WWW`（phpstudy网站根目录）下，重命名为easy(比较简短)。根据官方文档显示，那啥建议参照github上的，比较详细，如下：
![](https://wx4.sinaimg.cn/large/006bYVyvly1g0j44mtrxhj30qt0ajmyl.jpg)

>将“config-sample.php”文件重命名为“config.php”并设置服务器属性。

我设置的属性代码如下：
```php
//------------------------------------------------------------------------
// GENERAL SETTINGS
// ------------------------------------------------------------------------

const BASE_URL      = 'http://localhost/easy';
const LANGUAGE      = 'chinese';
const DEBUG_MODE    = FALSE;

// ------------------------------------------------------------------------
// DATABASE SETTINGS
// ------------------------------------------------------------------------

const DB_HOST       = 'localhost:3306';
const DB_NAME       = 'easy';
const DB_USERNAME   = 'root';
const DB_PASSWORD   = 'root';

```
然后如果就你这样运行localhost/easy，在提交得那一步是会报错的，参考了github参考的issue后，get到了解决方案。[分支地址](https://github.com/oxteam/easyappointments/commit/3dde409f729067ba21fcb1b8a10ce03a35484623)或看下三张图改
![](https://ws1.sinaimg.cn/large/006bYVyvly1g0j4gi3il5j30j509tq3k.jpg)
![](https://ws3.sinaimg.cn/large/006bYVyvly1g0j4gz7avyj30jt07aglz.jpg)
![](https://ws3.sinaimg.cn/large/006bYVyvly1g0j4h94kgnj30kf09o750.jpg)

改好后就能成功执行了，祝你好运~

## 配置QQ邮箱发送Email

首先，需要开启php_open_ssl扩展：
![](https://ws1.sinaimg.cn/large/006bYVyvly1g0iwifl7x6j30qm0jndip.jpg)

接着在`\application\config\email.php`配置信息，我的配置如下：
```php
// QQ email
$config['useragent'] = 'Easy!Appointments';
$config['protocol'] = 'smtp'; // or 'smtp'
$config['mailtype'] = 'html'; // or 'text'
$config['smtp_host'] = 'smtp.qq.com';
$config['smtp_user'] = '你用来发送邮件的QQ号'; 
$config['smtp_pass'] = '在QQ邮箱网页上获取的授权码';
$config['smtp_crypto'] = 'ssl'; // or 'tls'
$config['smtp_port'] = 465;
```
配置好了即可在预约、取消等操作的时候收到邮件~

完。