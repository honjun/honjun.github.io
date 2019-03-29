title: 每天一道LeetCode算法题-寻找两个有序数组的中位数
author: hojun
avatar: 'https://wx1.sinaimg.cn/large/006bYVyvgy1ftand2qurdj303c03cdfv.jpg'
authorLink: /about/hojun.html
authorDesc: 一个好奇的人
categories: 技术
comments: true
date: 2019-03-28 17:19:30
authorAbout:
series:
tags: 
 - 算法
 - LeetCode
keywords: 算法
description: LeetCode算法题-寻找两个有序数组的中位数
photos: https://ws3.sinaimg.cn/small/006bYVyvly1g1ai8cmtaej305e05adfu.jpg
---
![](https://ws4.sinaimg.cn/large/006bYVyvly1g1ai70salhj30gy076gm8.jpg)
每天一道LeetCode算法题，说是这么说，我这都间隔好几天了2333333。回归正题，看官们请看今天的题目描述：

## 题目描述

> 给定两个大小为 m 和 n 的有序数组 nums1 和 nums2。
> 请你找出这两个有序数组的中位数，并且要求算法的时间复杂度为 O(log(m + n))。
> 你可以假设 nums1 和 nums2 不会同时为空。

**示例**
```js
nums1 = [1, 3]
nums2 = [2]
则中位数是 2.0

nums1 = [1, 2]
nums2 = [3, 4]
则中位数是 (2 + 3)/2 = 2.5
```

## 思考

要求算法的时间复杂度为 O(log(m + n))？？？，我终于知道为啥这题标的是困难了。我等咸鱼选择放弃，还是直接学习官方题解好了2333333~

## 题解

方法：递归法。
为了解决这个问题，我们需要理解“中位数的作用是什么”。在统计中，中位数被用来：

> 将一个集合划分为两个长度相等的子集，其中一个子集中的元素总是大于另一个子集中的元素。

首先，让我们在任一位置 i 将 A 划分成两个部分：
```js
          left_A             |        right_A
    A[0], A[1], ..., A[i-1]  |  A[i], A[i+1], ..., A[m-1]
```
由于 A 中有 m 个元素， 所以我们有 m+1 种划分的方法（i = 0 ∼ m）。
采用同样的方式，我们在任一位置 j 将 B 划分成两个部分：
```js
          left_B             |        right_B
    B[0], B[1], ..., B[j-1]  |  B[j], B[j+1], ..., B[n-1]
```
将 left_A 和 left_B 放入一个集合，并将 right_A 和 right_B 放入另一个集合。 再把这两个新的集合分别命名为 left_part 和 right_part：
```js
          left_part          |        right_part
    A[0], A[1], ..., A[i-1]  |  A[i], A[i+1], ..., A[m-1]
    B[0], B[1], ..., B[j-1]  |  B[j], B[j+1], ..., B[n-1]
```
如果我们可以确认：
```js
len(left_part) = len(right_part)
max(left_part) ≤ min(right_part)
```
那么，我们已经将 \{\text{A}, \text{B}\}{A,B} 中的所有元素划分为相同长度的两个部分，且其中一部分中的元素总是大于另一部分中的元素。那么：
median = (max(left_part) + min(right_part)) / 2
要确保这两个条件，我们只需要保证：
​ 