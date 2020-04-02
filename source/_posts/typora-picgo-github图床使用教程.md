title: typora+picgo+github图床使用教程
author: hojun
avatar: 'https://cdn.jsdelivr.net/gh/honjun/ImageHosting/picgo/20191009004718.png'
authorLink: /about/hojun.html
authorDesc: 一个好奇的人
categories: 技术
comments: true
date: 2020-04-02 19:30:35
authorAbout:
series:
tags:
keywords:
description:
photos: https://cdn.jsdelivr.net/gh/honjun/picbed/pic/image-20200402194210824.png
---

![image-20200402194210824](https://cdn.jsdelivr.net/gh/honjun/picbed/pic/image-20200402194210824.png)

## 前言
最近typora更新添加了内置picgo上传，这对我这个使用picgo+github当图床的来说是大好消息。先说下picgo+github使用过程中发现的问题，其实主要怪github。因为github服务器在国外，近一阵子不知咋回时，picgo上传到github的时候老是会失败，我只能将图片暂时保存在本地，等国内到github网络恢复正常的时候再上传图片。这对于我们的写作体验来说是极差的，有时候可能就懒得写了。而typora内置支持picgo的出现刚好拯救的这种坏情况。
## picgo

picgo这里就不多介绍了，相信大部分小伙伴都在用了。这里我们需要picgo2.2以上版本，低版本的小伙伴就需要更新了哦。网络不佳的可以看文末分享233333。[下载地址](https://github.com/Molunerfinn/PicGo/releases)。下载下来安装，接着参考官方文档配置github图床即可。[官方文档](https://picgo.github.io/PicGo-Doc/zh/guide/config.html#github%E5%9B%BE%E5%BA%8A)
配置好后类似如下：

![image-20200402203301387](https://cdn.jsdelivr.net/gh/honjun/picbed/pic/image-20200402203301387.png)


## Typora
typora相当于markdown编辑器，当然和它类似的产品有很多很多。印象笔记、蚂蚁笔记、有道云笔记、为知笔记等等。所以typora刚出来的时候我还是喜欢用subline，老实说打开速度比subline快的编辑器估乎没碰见过。不过typora+picgo吸引力就不一样了，更高产了233333。
首先，要能内置picgo要typora新版本，我这里是0.9.86。[typora官网](https://www.typora.io/)。下载对应操作系统版本安装即可。下载不下来的可以看文末分享。下载好后点击文件->偏好设置

![image-20200402201539052](https://cdn.jsdelivr.net/gh/honjun/picbed/pic/image-20200402201539052.png)

接着点击图像->上传服务（选picgoapp，是最简单的一种方式），picgo路径->选择到你安装picgo的位置。最后可以点击验证图片上传选项来测试picgo是否添加成功。

![image-20200402201714180](https://cdn.jsdelivr.net/gh/honjun/picbed/pic/image-20200402201714180.png)

使用的时候就直接把图片复制（拖动）到typora中，然后再右键上传即可。可以注意到typora自动把图片保到了本地。所以就算网络问题上传到github失败了，我们本地还是有图片的。只要等某一天网络恢复了再上传即可~

![image-20200402203508916](https://cdn.jsdelivr.net/gh/honjun/picbed/pic/image-20200402203508916.png)

关注公众号回复picgo获取资源23333

完。