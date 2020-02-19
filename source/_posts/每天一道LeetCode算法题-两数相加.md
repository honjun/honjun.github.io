title: 每天一道LeetCode算法题-两数相加
author: hojun
avatar: 'https://cdn.jsdelivr.net/gh/honjun/ImageHosting/sina/006bYVyvgy1ftand2qurdj303c03cdfv.jpg'
authorLink: /about/hojun.html
authorDesc: 一个好奇的人
categories: 技术
comments: true
date: 2019-03-22 21:14:41
authorAbout:
series:
tags: 
 - 算法
 - LeetCode
keywords: 算法
description: LeetCode算法题-两数相加
photos: https://cdn.jsdelivr.net/gh/honjun/ImageHosting/sina/006bYVyvly1g1ai8cmtaej305e05adfu.jpg
---
![](https://cdn.jsdelivr.net/gh/honjun/ImageHosting/sina/006bYVyvly1g1ai70salhj30gy076gm8.jpg)
DuangDuangDuang，每日刷LeetCode！

## 题目描述

> 给出两个 非空 的链表用来表示两个非负的整数。其中，它们各自的位数是按照 逆序 的方式存储的，并且它们的每个节点只能存储 一位 数字。
> 如果，我们将这两个数相加起来，则会返回一个新的链表来表示它们的和。
> 您可以假设除了数字 0 之外，这两个数都不会以 0 开头。

**示例：**
```
输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
输出：7 -> 0 -> 8
原因：342 + 465 = 807
```

## 独立思考

代码语言选择javaScript
看到那个原因，可以先把链表转成数字，再把数字相加求和，再转成链表。
coding...
官方给定义了链表的结构，超级简单......
```js
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    
};
```
经过coding...debug...coding...debug，终于出了份能够通过了运行的代码，listNodeSum 方法用递归和n倍数这个小花招实现链表转数字~ 
```js
var listNodeSum = function (listNode, n) {
  if (listNode.next != null) {
    return listNode.val*n + listNodeSum(listNode.next, n*10);
  } else {
    return listNode.val*n;
  }
}

var addTwoNumbers = function(l1, l2) {
    var l1Num = listNodeSum(l1, 1);
    var l2Num = listNodeSum(l2, 1);
    var sum = l1Num + l2Num;
    var list = new ListNode(0);
    var curr = list;
    while (sum > 10) {
        curr.next = new ListNode(Math.floor(sum % 10));
        sum = Math.floor(sum / 10);
        curr = curr.next;
    }
    if (sum < 10) {
        curr.next = new ListNode(sum);
    }
    // console.log(showListNode(list.next));
    return list.next;
};
```
再附带一个把链表打印显示的方法：(也是用了递归)
```js
var showListNode = function (listNode) {
  if (listNode.next !== null) {
    return listNode.val + "->" + showListNode(listNode.next);
  } else {
    return listNode.val;
  }
}
```
提交后发现：
![image](https://cdn.jsdelivr.net/gh/honjun/ImageHosting/sina/006bYVyvly1g1bwkcqaqwj30fy06ajr9.jpg)
提交一阵亡，好吧，debug之后是等于10的时候没判断到，while (sum > 10) 要改成 while (sum >= 10) 

继续提交：
![image](https://cdn.jsdelivr.net/gh/honjun/ImageHosting/sina/006bYVyvly1g1bwnd9mzsj30li070dfw.jpg)
提交二阵亡，好吧，大数溢出了。看样子这个解题思路行不通2333333~

## 官方题解
不会就要去先学习嘛，看了官方题解：

就像你在纸上计算两个数字的和那样，我们首先从最低有效位也就是列表 l1l1 和 l2l2 的表头开始相加。由于每位数字都应当处于 0 \ldots 90…9 的范围内，我们计算两个数字的和时可能会出现“溢出”。例如，5 + 7 = 125+7=12。在这种情况下，我们会将当前位的数值设置为 22，并将进位 carry = 1carry=1 带入下一次迭代。进位 carrycarry 必定是 00 或 11，这是因为两个数字相加（考虑到进位）可能出现的最大和为 9 + 9 + 1 = 199+9+1=19。

伪代码如下：

 - 将当前结点初始化为返回列表的哑结点。
 - 将进位 carrycarry 初始化为 00。
 - 将 pp 和 qq 分别初始化为列表 l1l1 和 l2l2 的头部。
 - 遍历列表 l1l1 和 l2l2 直至到达它们的尾端。
 - 将 xx 设为结点 pp 的值。如果 pp 已经到达 l1l1 的末尾，则将其值设置为 00。
 - 将 yy 设为结点 qq 的值。如果 qq 已经到达 l2l2 的末尾，则将其值设置为 00。
 - 设定 sum = x + y + carrysum=x+y+carry。
 - 更新进位的值，carry = sum / 10carry=sum/10。
 - 创建一个数值为 (sum \bmod 10)(summod10) 的新结点，并将其设置为当前结点的下一个结点，然后将当前结点前进到下一个结点。
 - 同时，将 pp 和 qq 前进到下一个结点。
 - 检查 carry = 1carry=1 是否成立，如果成立，则向返回列表追加一个含有数字 11 的新结点。
 - 返回哑结点的下一个结点。
 - 请注意，我们使用哑结点来简化代码。如果没有哑结点，则必须编写额外的条件语句来初始化表头的值。

java代码如下：
```java
public ListNode addTwoNumbers(ListNode l1, ListNode l2) {
    ListNode dummyHead = new ListNode(0);
    ListNode p = l1, q = l2, curr = dummyHead;
    int carry = 0;
    while (p != null || q != null) {
        int x = (p != null) ? p.val : 0;
        int y = (q != null) ? q.val : 0;
        int sum = carry + x + y;
        carry = sum / 10;
        curr.next = new ListNode(sum % 10);
        curr = curr.next;
        if (p != null) p = p.next;
        if (q != null) q = q.next;
    }
    if (carry > 0) {
        curr.next = new ListNode(carry);
    }
    return dummyHead.next;
}
```
复杂度分析

 - 时间复杂度：O(\max(m, n))O(max(m,n))，假设 mm 和 nn 分别表示 l1l1 和 l2l2 的长度，上面的算法最多重复 \max(m, n)max(m,n) 次。
 - 空间复杂度：O(\max(m, n))O(max(m,n))， 新列表的长度最多为 \max(m,n) + 1max(m,n)+1。


## 继续解题

看了官方题解后又是豁然开朗，感觉我就是神了那种状态，balabala，js版很快就出来了。
```js
var addTwoNumbers = function(l1, l2) {
var dummyHead = new ListNode(0);
var p = l1, q = l2, curr = dummyHead;
var carry = 0;
while (p != null || q != null) {
  var x = (p != null) ? p.val : 0;
  var y = (q != null) ? q.val : 0;
  var sum = carry + x + y;
  carry = Math.floor(sum / 10);
  curr.next = new ListNode(sum % 10);
  curr = curr.next;
  if (p != null) p = p.next;
  if (q != null) q = q.next;
}
if (carry > 0) {
  curr.next = new ListNode(carry);
}
return dummyHead.next
};
```
执行用时： 328 ms 内存消耗： 38.2 MB。
其实就是把官方题解的java代码翻译成js代码~ 总结下这代码思想：就是一位一位的求和，先个位再十位再百位千位这样加下去，满十进一，存在carry里面（carry = Math.floor(sum / 10);），所以carry初始值为0（carry = 0;），所以sum的值就要加上carry(sum = carry + x + y;)，然后carry再赋值，若是没满十又重新变为0。 还有就是curr便是当前的ListNode，每次新增next节点后（curr.next = new ListNode(sum % 10);），都要进行重新移动指针（这里请允许我用指针来形容一下下）到next的节点，所以curr = curr.next;，于是就能next->next->next下去。
好了，今天的算法学习到这里了，完。