title: 新浪图床迁移至github教程
author: hojun
avatar: https://cdn.jsdelivr.net/gh/honjun/ImageHosting/sina/006bYVyvgy1ftand2qurdj303c03cdfv.jpg
authorLink: /about/hojun.html
authorDesc: 一个好奇的人
categories: 技术
comments: true
date: 2019-05-27 23:42:13
authorAbout:
series:
tags:
keywords:
description: 
photos: https://cdn.jsdelivr.net/gh/honjun/ImageHosting/picgo/20190528000025.png
---
![](https://cdn.jsdelivr.net/gh/honjun/ImageHosting/picgo/20190528000025.png)

## 碎碎念

本博客站的所有图片已经从新浪图床迁移至github了。因为从前几天起，新浪微博的图床开始断断续续的防盗链，时好时坏，严重影响体验。

这篇教程就是就是为了帮助同样用了新浪图床的道友，快速把图片迁移到其他图床~

因为之前有过用其他小平台图床，然后炸图的经历，加强了我对图床的忧患意识。于是在换到新浪图床的时候，在github上找到了一个python备份markdown图片的仓库。具体可以参考[python备份hexo博客图片](https://www.hojun.cn/2018/03/29/python%E5%A4%87%E4%BB%BDhexo%E5%8D%9A%E5%AE%A2%E5%9B%BE%E7%89%87/)这篇文章。

在迁移图片的时候也是对那份代码有所改进，代码已推送至仓库的debug分支[markdown-img-backup](https://github.com/honjun/markdown-img-backup/tree/debug)。接下来就是使用这份代码着手迁移图片：

## 安装python

因为是python代码，所以需要安装python环境。(推荐安装python3版本，因为这份代码只改了python3版本的，当然若已安装python2可以参考着修改使用就行)。
安装步骤：百度python -> 下载 -> 安装 就行。

题外话：若安装了python2和python3，可以在安装目录里修改python.exe文件为python2.exe和python3.exe来区分python版本，使用的时候命令为 python2 xxx.py 表示用python2命令运行xxx.py。python3的用法相同。
![](https://cdn.jsdelivr.net/gh/honjun/ImageHosting/picgo/20190528214259.png)

## 下载代码

![](https://cdn.jsdelivr.net/gh/honjun/ImageHosting/picgo/20190528212126.png)
来到github仓库页面，首先点击右上角star为下载加速(buff加成)，接着点击下载clone or download。若已经安装git环境可以使用git clone下载仓库。若无git环境可以直接点击Download ZIP下载压缩文件。

## 使用代码

因为博主仅使用了py3版本的代码，这里就讲解下py3版本的代码吧。

### 第一步 配置目录

需要在以下代码里配置下载备份图片md的目录：
```python
def backup():
    try:
        # 备份指定文件的img 这里一般是你的_posts文件夹 + 需要备份的md名称
        download(str('你的markdown文件路径' + sys.argv[1]))
    except IndexError:
        # 备份文件夹下的所有img (上一步若没给参数，会遍历目录下的所有md)
        search('你的markdown文件路径', '.md')
```
### 第二步 选择匹配规则

因为md的图片除了标准的md格式外还有其他格式，我这里就给出了其他的一些正则规则。
```python
    # 匹配markdown图片格式 ![img](imgurl)
    img_reg = r'\!{1}\[(.*?)\]\((.*?)\)'
    # 匹配以下形式的封面图，若不photos则替换就行
    #photos: 
    # - imgurl
    result = re.findall('photos\:\n \- (.*?)\n', text)
    # 匹配以下形式的封面图 photos: imgurl
    result = re.findall('photos\: (.*?)\n', text)
    # 匹配fancybox插件语法 {% fb_img imgurl desc %} 也可以修改用来匹配其他img插件的语法
    result = re.findall('\{\% fb_img (.*?) ', text)
    # 匹配html <img src="imgurl">
    result = re.findall('src\=\"(.*?)\"', text)
```

### 第三步 选择下载目录

```python
f_img = open('img/' + img_name, 'wb')
```
这段代码的意思就是打开img目录，你可以在python目录痛级新建个img文件夹就可以把图片下载到里头了。

```python
urlname = img_url.split(u"/")
img_name = filename + '_' + \
str(i) + '_md_' + img_quote + str(urlname[len(urlname) - 1])
img_name = img_quote + str(urlname[len(urlname) - 1])
# img_name = str(urlname[len(urlname) - 1])
print (img_name + '~~~' + img_url)
```
这段代码这是获取图片名的代码，可以根据需求修改文件名称样式。

### 第四步 备份图片

cd到python目录，运行命令`python3 markdown-img-backup`即可开始下载。

### 第五步 上传至github

 - github上新建仓库
 - 使用git clone克隆仓库到本地
 - 复制图片到本地仓库目录
 - git add .
 - git commit -m "提交图片"
 - git push

接下来后续就可以使用picgo+github+jsdeliver搭建图床了。可参考TRHX教程，To be continued。

[Github+jsDelivr+PicGo 打造稳定快速、高效免费图床](https://www.itrhx.com/2019/08/01/A27-image-hosting/)
