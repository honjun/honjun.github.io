title: 《算法图解》之K最近邻算法
author: hojun
avatar: /images/favicon.png
authorDesc: 一个好奇的人
categories: 技术
date: 2018-06-05 20:45:26
authorLink:
authorAbout:
tags:
 - 算法
 - 悦读
keywords: K最近邻算法
description: 请看下边的水果，是橙子还是柚子呢？我知道，柚子通常比橙子更大、更红。
photos:
---
## **前言**

### **橙子还是柚子**

请看下边的水果，是橙子还是柚子呢？我知道，柚子通常比橙子更大、更红。
![](https://wx3.sinaimg.cn/large/006bYVyvgy1fs04fvrlqcj309k05qglr.jpg)
我的思维过程类似于这样：我脑子里有个图表。
![](https://wx3.sinaimg.cn/large/006bYVyvgy1fs04fw8h2qj30f00cbdgs.jpg)
一般而言，柚子更大、更红。这个水果又大又红，因此很可能是柚子。但下面这样的水果呢？
![](https://wx2.sinaimg.cn/large/006bYVyvgy1fs04fx1zsuj30f40ao3zv.jpg)
如果判断这个水果是橙子还是柚子呢？一种办法是看它的邻居。来看看离它最近的三个邻居。
![](https://wx4.sinaimg.cn/large/006bYVyvgy1fs04fyci8ej30eg09paaz.jpg)
在这三个邻居中，橙子比柚子多，因此这个水果很可能是橙子。祝贺你，你刚才就是使用K最近邻（k-nearestneighbours，KNN）算法进行了分类！这个算法非常简单。
![](https://wx1.sinaimg.cn/large/006bYVyvgy1fs04fyz8noj30r708cmy8.jpg)
KNN算法虽然简单却很有用！要对东西进行分类时，可首先尝试这种算法。下面来看一个更真实的例子。

## **创建推荐系统**

假设你是Netflix，要为用户创建一个电影推荐系统。从本质上说，这类似于前面的水果问题！
你可以将所有用户都放入一个图表中。
![](https://wx2.sinaimg.cn/large/006bYVyvgy1fs04fzgqx7j30f10angn3.jpg)
这些用户在图表中的位置取决于其喜好，因此喜好相似的用户距离较近。假设你要向Priyanka推荐电影，可以找出五位与他最接近的用户。
![](https://wx1.sinaimg.cn/large/006bYVyvgy1fs04fzwj31j30ee0atwg2.jpg)
假设在对电影的喜好方面，Justin、JC、Joey、Lance和Chris都与Priyanka差不多，因此他们喜欢的电影很可能Priyanka也喜欢！
![](https://wx3.sinaimg.cn/large/006bYVyvgy1fs04g0epdrj30oy06atad.jpg)
有了这样的图表以后，创建推荐系统就将易如反掌：只要是Justin喜欢的电影，就将其推荐给Priyanka。

## **特征抽取**

在前面的水果示例中，你根据个头和颜色来比较水果，换言之，你比较的特征是个头和颜色。现在假设有三个水果，你可抽取它们的特征。
![](https://wx1.sinaimg.cn/large/006bYVyvgy1fs04g0xi62j30hn081q3q.jpg)
再根据这些特征绘图。
![](https://wx1.sinaimg.cn/large/006bYVyvgy1fs04g1ecghj30el0aoaad.jpg)
从上图可知，水果A和B比较像。下面来度量它们有多像。要计算两点的距离，可使用毕达哥拉斯公式。
![](https://wx1.sinaimg.cn/large/006bYVyvgy1fs04g1unk3j30c9034t8s.jpg)
例如，A和B的距离如下。
![](https://wx3.sinaimg.cn/large/006bYVyvgy1fs04g2bo8wj30bk089t8x.jpg)
A和B的距离为1。你还可计算其他水果之间的距离。
![](https://wx2.sinaimg.cn/large/006bYVyvgy1fs04njk3rtj30f30araas.jpg)
这个距离公式印证了你的直觉：A和B很像。

假设你要比较的是Netflix用户，就需要以某种方式将他们放到图表中。因此，你需要将每位用户都转换为一组坐标，就像前面对水果所做的那样。
![](https://wx3.sinaimg.cn/large/006bYVyvgy1fs04g2rjp1j30bl07cjrv.jpg)
在能够将用户放入图表后，你就可以计算他们之间的距离了。
下面是一种将用户转换为一组数字的方式。用户注册时，要求他们指出对各种电影的喜欢程度。这样，对于每位用户，都将获得一组数字！
![](https://wx4.sinaimg.cn/large/006bYVyvgy1fs04g3emq1j30m00ah0ub.jpg)
Priyanka和Justin都喜欢爱情片且都讨厌恐怖片。Morpheus喜欢动作片，但讨厌爱情片（他讨厌好好的动作电影毁于浪漫的桥段）。前面判断水果是橙子还是柚子时，每种水果都用2个数字表示，你还记得吗？在这里，每位用户都用5个数字表示。
![](https://wx1.sinaimg.cn/large/006bYVyvgy1fs04g3wui2j30c20540sy.jpg)
在数学家看来，这里计算的是五维（而不是二维）空间中的距离，但计算公式不变。
![](https://wx3.sinaimg.cn/large/006bYVyvgy1fs04g4cgg4j30l603bwf3.jpg)
这个公式包含5个而不是2个数字。
这个距离公式很灵活，即便涉及很多个数字，依然可以使用它来计算距离。你可能会问，涉及5个数字时，距离意味着什么呢？这种距离指出了两组数字之间的相似程度。
![](https://wx3.sinaimg.cn/large/006bYVyvgy1fs04g569c8j30j808bmy9.jpg)
这是Priyanka和Justin的距离。

## **余弦相似度**

前面计算两位用户的距离时，使用的都是距离公式。还有更合适的公式吗？在实际工作中，经常使用余弦相似度（cosine similarity）。假设有两位品味类似的用户，但其中一位打分时更保守。他们都很喜欢Manmohan Desai的电影Amar Akbar Anthony，但Paul给了5星，而Rowan只给4星。如果你使用距离公式，这两位用户可能不是邻居，虽然他们的品味非常接近。余弦相似度不计算两个矢量的距离，而比较它们的角度，因此更适合处理前面所说的情况。本书不讨论余弦相似度，但如果你要使用KNN，就一定要研究研究它！