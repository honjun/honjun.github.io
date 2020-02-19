title: 每天一道LeetCode算法题-无重复字符的最长子串
author: hojun
avatar: 'https://cdn.jsdelivr.net/gh/honjun/ImageHosting/sina/006bYVyvgy1ftand2qurdj303c03cdfv.jpg'
authorLink: /about/hojun.html
authorDesc: 一个好奇的人
categories: 技术
comments: true
date: 2019-03-23 23:41:20
authorAbout:
series:
tags: 
 - 算法
 - LeetCode
keywords: 算法
description: LeetCode算法题-无重复字符的最长子串
photos: https://cdn.jsdelivr.net/gh/honjun/ImageHosting/sina/006bYVyvly1g1ai8cmtaej305e05adfu.jpg
---
![](https://cdn.jsdelivr.net/gh/honjun/ImageHosting/sina/006bYVyvly1g1ai70salhj30gy076gm8.jpg)
DuangDuangDuang，每日一道LeetCode，今天是第三天，可惜博客没时间写了。明天再补上。

## 今日份题目

> 给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。

**示例 1:**

输入: "abcabcbb"
输出: 3 
解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。

**示例 2:**

输入: "bbbbb"
输出: 1
解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。

**示例 3:**

输入: "pwwkew"
输出: 3
解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
     请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。

## 思考
先设第一个字符为子串，第一个字符（或子串）是否包含第二个字符，如果不包含，子串设置为arr[0]+arr[0]，继续类比子串和字符串的第三个字符，累加上去，一直到子串包含字符串数组中后一个字符为止。在设置长度为子串.length。然后第二个字符开始...第三个字符开始...

## 实现
根据自己的想法coding起来，代码还是用的JavaScript~。
代码如下：
```js
var lengthOfLongestSubstring = function(s) {
    var len = s.length;
    var maxChildStr = [];
    var max = 0;
    for (var i = 0; i < len - 1; i++) {
        maxChildStr[i] = s.charAt(i);
        var num = 0;
        for (var j = i + 1; j < len; j++) {
            if (maxChildStr[i].indexOf(s.charAt(j)) == -1) {
                maxChildStr[i] = maxChildStr[i] + s.charAt(j);
            } else {
                maxChildStr[i] = maxChildStr[i];
                num = j - i;
                max = max < num ? num : max
                break;
            }
        }
    }
    return max;
};
```
经验告诉我们第一次提交大概率是通不过的：
![image](https://cdn.jsdelivr.net/gh/honjun/ImageHosting/sina/006bYVyvly1g1gfu4byrzj30af058t8j.jpg)
提交一阵亡

好吧，要判断下输入参数的长度，在第三行加了句代码如下：
```js
if (len <= 1) return len;
```
等于0或1都直接返回长度就行。
![image](https://cdn.jsdelivr.net/gh/honjun/ImageHosting/sina/006bYVyvly1g1gfytbw3uj30c905xjr8.jpg)
提交二阵亡，很奇怪，为啥au会返回0？因为maxChildStr[i].indexOf(s.charAt(j)) == -1这个判断一直成立，所以max没有赋值到。于是debug代码如下
```js
var lengthOfLongestSubstring = function(s) {
    var len = s.length;
    if (len <= 1) return len;
    var maxChildStr = [];
    var max = 0;
    for (var i = 0; i < len - 1; i++) {
        maxChildStr[i] = s.charAt(i);
        var num = 0;
        for (var j = i + 1; j < len; j++) {
            if (maxChildStr[i].indexOf(s.charAt(j)) == -1) {
                maxChildStr[i] = maxChildStr[i] + s.charAt(j);
                num = maxChildStr[i].length;
                if (max < num) max = num;
            } else {
                maxChildStr[i] = maxChildStr[i];
                num = j - i;
                if (max < num) max = num;
                break;
            }
        }
    }
    return max;
};
```
把三元运算符改if了，因为执行效率还是if快。这样子保证每一次判断都会给max赋值。
提交三通过，执行用时：644 ms ，内存消耗：54 MB。

## 学习题解
官方给出了三种解题方案，
 
 - 暴力法
 - 滑动窗口
 - 优化的滑动窗口

### 滑动窗口

暴力法就是我们上述的那种方法，滑动窗口是啥？看了下官方的介绍不是很懂(似懂非懂，因为他没有给你实践)：

> 通过使用 HashSet 作为滑动窗口，我们可以用 O(1)O(1) 的时间来完成对字符是否在当前的子字符串中的检查。
> 滑动窗口是数组/字符串问题中常用的抽象概念。 窗口通常是在数组/字符串中由开始和结束索引定义的一系列元素的集合，即 [i, j)[i,j)（左闭，右开）。而滑动窗口是可以将两个边界向某一方向“滑动”的窗口。例如，我们将 [i, j)[i,j) 向右滑动 11 个元素，则它将变为 [i+1, j+1)[i+1,j+1)（左闭，右开）。
> 回到我们的问题，我们使用 HashSet 将字符存储在当前窗口 [i, j)[i,j)（最初 j = ij=i）中。 然后我们向右侧滑动索引 jj，如果它不在 HashSet 中，我们会继续滑动 jj。直到 s[j] 已经存在于 HashSet 中。此时，我们找到的没有重复字符的最长子字符串将会以索引 ii 开头。如果我们对所有的 ii 这样做，就可以得到答案。

直接看代码反而能够理解了：
```java
public class Solution {
    public int lengthOfLongestSubstring(String s) {
        int n = s.length();
        Set<Character> set = new HashSet<>();
        int ans = 0, i = 0, j = 0;
        while (i < n && j < n) {
            // try to extend the range [i, j]
            if (!set.contains(s.charAt(j))){
                set.add(s.charAt(j++));
                ans = Math.max(ans, j - i);
            }
            else {
                set.remove(s.charAt(i++));
            }
        }
        return ans;
    }
}
```
我们知道滑动窗口？管他是啥，就当他是是[i,j]的一个区间，从i到j之间的数，所以这里i比较小，在字符串数组左边，j比较大，在数组右边。然后去理解下核心代码：
```java
if (!set.contains(s.charAt(j))){
    set.add(s.charAt(j++));
    ans = Math.max(ans, j - i);
}
else {
    set.remove(s.charAt(i++));
}
```
如果子串set不存在s[j]（我们这里就直接把字符串类比做数组），我们就把s[j++]也加入到子串中，这样那个滑动串口的长度就会边长，比如说一开始是[]变成s[0]，然后第二轮，注意上轮有个j++，这时j=1了，判断是否存在s[1],还不存在，滑动串口就从[0,0]变成[0,1]了，j一直增加，如果子串中没有重复字符，滑动窗口就会越来越大。然后一直到存在重复，就跳到else，set.remove(s.charAt(i++)); 这个时候i还是等于0，相当于删掉子串第一个字符，一直删掉重复的那个为止。不重复了，j又开始增长，直到j到达字符串长度为止。这中间最大的j-i就是最长的子串长度了。

好了，理解了就写出js的代码：
```js
var lengthOfLongestSubstring = function(s) {
    var len = s.length;
    var maxChildStr = [];
    var max = 0, i = 0, j = 0;
    while (i < len && j < len) {
        if (maxChildStr.indexOf(s.charAt(j)) == -1) {
            maxChildStr = maxChildStr + s.charAt(j++);
            if (max < j - i) max = j - i;
        } else {
            maxChildStr = maxChildStr.substr(1);
            i++;
        }
    }
    return max;
}
```
执行用时:156 ms 内存消耗:39.7 MB。快了很多。

### 优化的滑动窗口

> 上述的方法最多需要执行 2n 个步骤。事实上，它可以被进一步优化为仅需要 n 个步骤。我们可以定义字符到索引的映射，而不是使用集合来判断一个字符是否存在。 当我们找到重复的字符时，我们可以立即跳过该窗口。
> 也就是说，如果s[j]s[j]在[i,j)[i,j)范围内有与j'重复的字符，我们不需要逐渐增加i。我们可以直接跳过[i,j']范围内的所有元素，并将i变为j'+1。

关键在理解这个j',这个j'是和j重复的那个数，比如qwerfse，这个j'就是qwe的那个e，i就设成qwer的那个r，即j'+1。这么一说懂了吧23333。
coding如下：
```js
var lengthOfLongestSubstring = function(s) {
    var len = s.length;
    var maxChildStr = [];
    var max = 0;
    for (var j = 0, i = 0; j < len; j++) {
        if (maxChildStr.indexOf(s.charAt(j)) != -1) {
            i = maxChildStr.indexOf(s.charAt(j));
            maxChildStr = maxChildStr.substr(i + 1);
        }
        maxChildStr += s.charAt(j);
        if(max < maxChildStr.length) max = maxChildStr.length;
    }
    return max;
}
```
执行用时:140 ms 内存消耗:40 MB。 表示每次提交花的时间都不一样...
好了，今天的算法学习到这里了，完。