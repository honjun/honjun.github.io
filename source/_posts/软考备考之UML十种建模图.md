title: 软考备考之UML十种建模图
author: hojun
avatar: https://cdn.jsdelivr.net/gh/honjun/ImageHosting/sina/006bYVyvgy1ftand2qurdj303c03cdfv.jpg
authorDesc: 一个好奇的人
categories: 技术
date: 2018-05-07 21:10:37
authorLink: /about/hojun.html
authorAbout:
series: 软考-软件设计师
tags:
 - 软考
 - UML
keywords: UML
description: UML九种建模图：用例图、类图、对象图、顺序图、协作图、状态图、活动图、组件图、配置图。又可以静动分为静态视图和动态视图。
photos:
 - https://cdn.jsdelivr.net/gh/honjun/ImageHosting/sina/006bYVyvgy1fr2ih3rhuog30cs06igle.gif
---
UML九种建模图：用例图、类图、对象图、顺序图、协作图、状态图、活动图、组件图、配置图。又可以静动分为静态视图和动态视图。静态图分为：用例图，类图，对象图，包图，构件图，部署图。动态图分为：状态图，活动图，协作图，序列图。

## **用例图**
用例图(Use case diagrams)描述了作为一个外部的观察者的视角对系统的印象。强调这个系统是什么而不是这个系统怎么工作。

*@(献黄瓜)*(这不是黄瓜)举个栗子：
角色是人状的图标，用例是一个椭圆，通讯是连接角色和用例的线。
![](https://cdn.jsdelivr.net/gh/honjun/ImageHosting/sina/006bYVyvgy1fr2j4lg0eug30aa024t8h.gif)

又一个栗子：
![](https://cdn.jsdelivr.net/gh/honjun/ImageHosting/sina/006bYVyvgy1fr2ih3rhuog30cs06igle.gif)

## **类图**
类图(Class diagram)通过显示出系统的类以及这些类之间的关系来表示系统。类图是静态的－它们显示出什么可以产生影响，但不会告诉你什么时候产生影响。

*@(献黄瓜)*(这不是黄瓜)举个栗子：
下面是一个顾客从零售商处预定商品的模型的类图。中心的类是Order。连接它的是购买货物的Customer和Payment。Payment有 三种形式：Cash，Check，或者Credit。订单包括OrderDetails（line item），每个这种类都连着Item。
![](https://cdn.jsdelivr.net/gh/honjun/ImageHosting/sina/006bYVyvgy1fr2j4km82rg30lh0anaa3.gif)
UML类的符号是一个被划分成三块的方框：类名，属性，和操作。抽象类的名字，像Payment是斜体的。类之间的关系是连接线。

类图的几种关系详见之前那篇文章《UML类图几种关系总结》

## **包图**
包图由包和包之间的关系构成，它是维护和控制系统总体结构的重要建模工具。设计良好的包是高内聚、低耦合的，并且对其内容的访问具有严密的控制。包的图标是一个大矩形（内容框），左上角带一个小矩形（名字框）。包与包之间的联系主要有两种：依赖（尤其是输入依赖）和泛化。

*@(献黄瓜)*(这不是黄瓜)举个栗子：
![](https://cdn.jsdelivr.net/gh/honjun/ImageHosting/sina/006bYVyvgy1fr2j4m2svqg30b607e744.gif)

## **对象图**
对象图表示在某一时刻一组对象以及他们之间的关系的图。对象图可以被看作是类图在系统某一时刻的实例。
对象图由节点以及连接这些节点的连线组成。对象图是对象也可以是类，连线表示对象间的关系。

*@(献黄瓜)*(这不是黄瓜)举个栗子：
![](https://cdn.jsdelivr.net/gh/honjun/ImageHosting/sina/006bYVyvgy1fr2j4mgretg30cq07bjr7.gif)

## **顺序图**
顺序图（又称时序图、序列图）（Sequence Diagram）是显示对象之间交互的图，这些对象是按时间顺序排列的。顺序图中显示的是参与交互的对象及其对象之间消息交互的顺序。时序图中包括的建模元素主要有：对象（Actor）、生命线（Lifeline）、控制焦点（Focus of control）、消息（Message）等等。

*@(献黄瓜)*(这不是黄瓜)举个栗子：
![](https://cdn.jsdelivr.net/gh/honjun/ImageHosting/sina/006bYVyvgy1fr2kqe8hdtg30jg0bi0sr.gif)

## **协作图**
协作图(Collaboration Diagram /Communication Diagram，也叫合作图)是一种交互图（interaction diagram），强调的是发送和接收消息的对象之间的组织结构。不关心什么时候消息被传递，只关心对象的角色。一个协作图显示了一系列的对象和在这些对象之间的联系以及对象间发送和接收的消息。对象通常是命名或匿名的类的实例，也可以代表其他事物的实例，例如协作、组件和节点。使用协作图来说明系统的动态情况。

*@(献黄瓜)*(这不是黄瓜)举个栗子：
![](https://cdn.jsdelivr.net/gh/honjun/ImageHosting/sina/006bYVyvgy1fr2kqdlgdjg30im09qwed.gif)


## **状态图**
对象拥有行为和状态。对象的状态是由对象当前的行动和条件决定的。状态图(statechart diagram)显示出了对象可能的状态以及由状态改变而导致的转移。

*@(献黄瓜)*(这不是黄瓜)举个栗子：
银行的在线登录系统
![](https://cdn.jsdelivr.net/gh/honjun/ImageHosting/sina/006bYVyvgy1fr2kqendfdg30le0b90sp.gif)

状态是用圆角矩形来表示的。转移则是使用带箭头的连线表示。触发转移的事件或者条件写在箭头的旁边。我们的图上有两个自转移。一个是在Getting SSN，另一个则在上Getting PIN。

初始状态（黑色圆圈）是开始动作的虚拟开始。结束状态也是动作的虚拟结束。

## **活动图**
活动图(activity diagram)是一个很特别的流程图。活动图和状态图之间是有关系的。状态图把焦点集中在过程中的对象身上，而活动图则集中在一个单独过程动作流程。活动图告诉了我们活动之间的依赖关系。

*@(献黄瓜)*(这不是黄瓜)举个栗子：
用户登录
![](https://cdn.jsdelivr.net/gh/honjun/ImageHosting/sina/006bYVyvgy1fr337mkxfvj30gw0ll3yv.jpg)

## **组件图**
组件图，又称构件图（Component diagram）是面向对象系统从物理方面建模时用到的图之一，显示一组构件之间的组织和依赖关系。使用组件图的思想是复用。

*@(献黄瓜)*(这不是黄瓜)举个栗子：
![](https://cdn.jsdelivr.net/gh/honjun/ImageHosting/sina/006bYVyvgy1fr2wahb73uj30kg0bvglj.jpg)

## **部署图**
部署图又称配置图（Deployment Diagrams）描述了系统运行时进行处理的结点以及在结点上活动的构件的配置。强调了物理设备以及之间的连接关系。

*@(献黄瓜)*(这不是黄瓜)举个栗子：
![](https://cdn.jsdelivr.net/gh/honjun/ImageHosting/sina/006bYVyvgy1fr2walic01j30b406bt8m.jpg)