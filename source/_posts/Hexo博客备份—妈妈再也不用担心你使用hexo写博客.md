title: Hexo博客备份—妈妈再也不用担心你使用hexo写博客
author: hojun
avatar: /images/favicon.png
authorDesc: 一个好奇的人
categories: 技术
series: hexo折腾
date: 2018-01-25 22:06:39
authorLink:
authorAbout:
tags:
 - hexo
keywords:
description:
photos:
 - https://wx2.sinaimg.cn/mw690/006bYVyvgy1fo604rrdgmj30dw0b7mxf.jpg
---
今天搜了下hexo博客备份，发现好多都是用git命令备份的，于是推荐款好用的hexo备份插件：
[hexo-git-backup](https://github.com/coneycode/hexo-git-backup)
## **git-backup使用说明(翻译至README)：**
### **安装**
如果您的hexo版本是2.xx，则应安装如下：
```cmd
$ npm install hexo-git-backup@0.0.91 --save
```
如果版本是3.xx，你应该安装如下：
```cmd
$ npm install hexo-git-backup --save
```
### **更新**
(windows不需要$符)
如果使用--save进行安装，则在更新时必须先删除。
```cmd
$ npm remove hexo-git-backup
$ npm install hexo-git-backup --save
```
### **配置**
你应该配置这个文件_config.yml如下。
```
backup:
    type: git
    repository:
       github: git@github.com:xxx/xxx.git,branchName
       gitcafe: git@github.com:xxx/xxx.git,branchName
```
比如博主就新建了个backup分支用于备份
博主的配置如下
```cmd
backup:
  type: git
  message: backup my blog of https://honjun.github.io/
  repository:
    github: https://github.com/honjun/honjun.github.io.git,backup
```
### **使用**
```cmd
hexo backup 
```
or
```cmd
hexo b
```
Options

如果你要备份你的主题，只需添加theme: your theme name,your theme name在_config.yml。
```yml
backup:
    type: git
    theme: coney,landscape,xxx
    repository:
       github: git@github.com:xxx/xxx.git,branchName
       gitcafe: git@github.com:xxx/xxx.git,branchName
```
**注意：如果您按照上述方式操作，themes/coney/.git则会删除目录**

如果你想DIY提交消息，只需添加“消息：更新xxx”。
```yml
backup:
    type: git
    message: update xxx
    repository:
       github: git@github.com:xxx/xxx.git,branchName
       gitcafe: git@github.com:xxx/xxx.git,branchName
```
现在你可以备份所有的博客！

### **问题**

您的计算机许可可能会造成一些麻烦。

**错误：EISDIR，打开是由权限引起的。只要做'sudo hexo b'**
```cmd
sudo hexo b
```
参考[hexo 的备份插件](https://www.v2ex.com/t/143022)