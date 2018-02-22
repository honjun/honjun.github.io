title: 虚拟机安装ubuntu16.04.2
author: hojun
avatar: /images/favicon.png
authorDesc: 一个好奇的人
categories: 技术
date: 2017-06-04 20:07:31
authorLink: /about_hojun.html
authorAbout:
tags:
	- linux
	- php
	- mysql
	- nginx
	- vmware
	- sublime
	- ubuntu
keywords: 虚拟机安装ubuntu16.04.2
description: 虚拟机安装ubuntu16.04.2
photos:
    - https://wx4.sinaimg.cn/mw690/006bYVyvgy1fhaiekora3j30ez07v74c.jpg
---
## **ubuntu镜像下载地址**

http://www.cnblogs.com/phpzhou/p/6288762.html

## **VMware安装教程**

http://www.cnblogs.com/phpzhou/p/6288762.html
注意 win10虚拟机最好使用VMware12.5.5最新版的
![006bYVyvgy1fhaiekora3j30ez07v74c.jpg](https://wx4.sinaimg.cn/mw690/006bYVyvgy1fhaiekora3j30ez07v74c.jpg)

## **安装LNMP环境**

参照http://www.cnblogs.com/ddling/p/5906109.html
参照http://www.cnblogs.com/phpzhou/p/6288762.html

注：若nginx服务启动重启报错，可以检查下配置文件是否ok 命令sudo nginx -t
注：若访问localhost报403。1.是否给目录授权 命令 sudo chmod -R [目录]；2.检查路径下是否有index文件（index.html\index.php等等）

## **安装sublime text 3**

参照http://www.cnblogs.com/hester/p/5617713.html
安装package control 
```
import urllib.request,os,hashlib; h = 'df21e130d211cfc94d9b0905775a7c0f' + '1e3d39e33b79698005270310898eea76'; pf = 'Package Control.sublime-package'; ipp = sublime.installed_packages_path(); urllib.request.install_opener( urllib.request.build_opener( urllib.request.ProxyHandler()) ); by = urllib.request.urlopen( 'http://packagecontrol.io/' + pf.replace(' ', '%20')).read(); dh = hashlib.sha256(by).hexdigest(); print('Error validating download (got %s instead of %s), please try manual install' % (dh, h)) if dh != h else open(os.path.join( ipp, pf), 'wb' ).write(by) 
```