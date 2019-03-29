title: Github
author: hojun
avatar: https://wx1.sinaimg.cn/large/006bYVyvgy1ftand2qurdj303c03cdfv.jpg
authorDesc: 一个好奇的人
categories: 技术
date: 2018-03-24 21:00:24
authorLink: /about/hojun.html
authorAbout:
tags:
 - github
keywords: github
description: github日常使用
photos:
 - https://wx3.sinaimg.cn/large/006bYVyvgy1fpqj9by1tsj308w08wgln.jpg
---
## 本地仓库推送至github
git init
coding...
git add . 
git commit -m "balabala"
github上新建仓库（最好同名）复制链接
git remote add origin + 你的链接
git pull -–rebase origin master
git push -u origin master

## 平时推送
git add . 
git commit -m "balabala"
git push

## github仓库克隆到本地coding再推送
git clone 仓库链接
coding......
git add . 
git commit -m "balabala"
git push

## PR
1.github网页上fork源仓库
2.git clone 自己fork的项目
3.git remote add upstream 源仓库
4.git remote -v
5.git checkout -b 新的分支
6.change code
7.git status
8.git add .
9.git commit -m "说明"
10.git push origin 分支名
11.github网页上提交pr(New pull request)
