title: php本地虚拟域名配置和端口的一些折腾
author: hojun
avatar: 'https://wx1.sinaimg.cn/large/006bYVyvgy1ftand2qurdj303c03cdfv.jpg'
authorLink: /about/hojun.html
authorDesc: 一个好奇的人
categories: 技术
comments: true
date: 2018-09-16 23:05:06
authorAbout:
series:
tags:
 - php
keywords: 虚拟域名
description: 
photos:
---
## 前言
最近从拾php爬虫项目，在配置虚拟域名的时候碰到一些坑，特写篇文章记录一下。
声明：博主使用的php环境是wamp

## 配置虚拟域名 
这里默认80端口，往下将介绍非80的情况。
### 第一步
找到apache的httpd.conf配置文件。目录如下(仅供参考)D:\wamp64\bin\apache\apache2.4.18\conf\httpd.conf
使用搜索功能找到下面两项，去掉前面的 `#` 表示开启
LoadModule rewrite_module modules/mod_rewrite.so
Include conf/extra/httpd-vhosts.conf

### 第二步
找到apache的httpd-vhosts.conf的配置文件。目录如下(仅供参考)D:\wamp64\bin\apache\apache2.4.18\conf\extra\httpd-vhosts.conf
添加新的虚拟域名，文件中给出了个例子
```conf
<VirtualHost *:80>
  ServerName localhost
  DocumentRoot D:/wamp64/www
  <Directory  "D:/wamp64/www/">
    Options +Indexes +FollowSymLinks +MultiViews
    AllowOverride All
    Require local
  </Directory>
</VirtualHost>
```
根据上面的例子，自己添加一个类似的：
```conf
<VirtualHost *:80>
  //这个就是虚拟域名
  ServerName hojun.test.com
  //域名对应的文件目录
  DocumentRoot D:/wamp64/www/test/
  <Directory  "D:/wamp64/www/test/">
    Options +Indexes +FollowSymLinks +MultiViews
    AllowOverride All
    Require local
  </Directory>
</VirtualHost>
```
这里需要我们在网站根目录（www）下新建一个test目录。为了方便看效果，在目录中新建一个index.php文件,内容如下：
```php
<?
phpinfo();
```

### 第三步
找到hosts文件，位置在这里C:\Windows\System32\drivers\etc\hosts。
可以用记事本或其他文本编辑器打开。但是不能直接在这个目录下修改。建议将其拷贝到桌面修改后在复制回去。或者可以尝试用管理员打开文本编辑器。
推荐用拷到桌面的那种方法。在hosts文件中加入虚拟域名的配置
```conf
127.0.0.1       hojun.test.com
```

### 第四步
重启apache或wamp环境，打开浏览器输入hojun.test.com，得到如下页面，表示虚拟域名配置成功！
![image](https://ws2.sinaimg.cn/large/006bYVyvgy1fvbtipw9l7j30uy0e8762.jpg)

## 非80端口情况
上面几步是在80端口下的得情况，假设我们在的apache在8080端口，那么第一步的httpd.conf下的端口监听应该是这样的
```conf
#Listen 12.34.56.78:80
Listen 0.0.0.0:8080
Listen [::0]:8080
```
第二步的虚拟域名例子是这样的：
```conf
<VirtualHost *:8080>
  ServerName localhost
  DocumentRoot D:/wamp64/www
  <Directory  "D:/wamp64/www/">
    Options +Indexes +FollowSymLinks +MultiViews
    AllowOverride All
    Require local
  </Directory>
</VirtualHost>

<VirtualHost *:8080>
  ServerName hojun.test.com
  DocumentRoot D:/wamp64/www/test/
  <Directory  "D:/wamp64/www/test/">
    Options +Indexes +FollowSymLinks +MultiViews
    AllowOverride All
    Require local
  </Directory>
</VirtualHost>
```
然后hosts中按道理应该这么写：
```conf
127.0.0.1:8080       hojun.test.com
```
结果虚拟域名不能访问。
![image](https://wx3.sinaimg.cn/large/006bYVyvgy1fvbu8gwapfj30r00g2q3l.jpg)
抱着好奇心又去弄了一个虚拟域名，一样的index.php，里头phpinfo。
```conf
<VirtualHost *:8080>
  ServerName hojun.at.com
  DocumentRoot D:/wamp64/www/at/
  <Directory  "D:/wamp64/www/at/">
    Options +Indexes +FollowSymLinks +MultiViews
    AllowOverride All
    Require local
  </Directory>
</VirtualHost>
```
然后hosts这么配置
```conf
127.0.0.1:8080       hojun.test.com
127.0.0.1       hojun.at.com
```
结果hojun.test.com和hojun.at.com都无法访问。
![image](https://ws4.sinaimg.cn/large/006bYVyvgy1fvbu9bm699j30p50f50tc.jpg)
尝试在浏览器上输入hojun.test.com:8080，无法访问。
尝试在浏览器上输入hojun.at.com:8080，成功访问到了phpinfo。
![image](https://ws2.sinaimg.cn/large/006bYVyvgy1fvbtipw9l7j30uy0e8762.jpg)
好了，虽然还是有些地方感觉疑惑但是没去深究。不知道有没有不用加端口的形式就能访问的配置方法，知道的大佬可以留言指导下~