title: 软考备考之前趋图PV操作
author: hojun
avatar: /images/favicon.png
authorDesc: 一个好奇的人
categories: 技术
date: 2018-05-30 12:55:31
authorLink:
authorAbout:
tags:
 - 软考
keywords: 软考
description: P操作，我们可以看作是获得或者请求、消耗一个信号量。 V操作，我们可以看作是释放或者发送一个信号量。
photos:
---
[来源](https://blog.csdn.net/mengmei16/article/details/49453869)https://blog.csdn.net/mengmei16/article/details/49453869
 我们对于P、V的含义肯定不陌生。

P（S）：①将信号量S的值减1，即S=S-1；
       ②如果S>=0，则该进程继续执行；否则该进程置为等待状态，排入等待队列。
V（S）：①将信号量S的值加1，即S=S+1；
       ②如果S>0，则该进程继续执行；否则释放队列中第一个等待信号量的进程。

   概念理解的再透彻，也不过是纸上谈兵。

例：看一道我们在软考中经常遇到的题，每次都束手无策的那道。

![](https://wx1.sinaimg.cn/large/006bYVyvgy1fre3kkgn7cj30kb0b6acl.jpg)

P操作，我们可以看作是获得或者请求、消耗一个信号量。

V操作，我们可以看作是释放或者发送一个信号量。


我们可以这样理解：看前驱图，

P1执行完之后，会向P2和P3分别发送两个信号S1和S2（所以a处填V（S1）V（S2）；

然后是P2执行，P2执行之前，要先获得S1（所以b处填P（S1））;

P2执行完之后，会向P3发送一个信号S3（所以b下一处为V（S3））；

P3执行之前，要先获得P2发送给P3的信号，也要获得P1发送给P3的信号（所以c处填（P（S2）P（S3）））；P3执行完后，会向P4发送一个信号S4（所以c下一处为V（S4））；

P4执行之前，要先获得P3发送给P4的信号方可执行（所以d处填P（S4））。