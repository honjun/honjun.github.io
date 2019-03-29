title: 每天一道LeetCode算法题-两数之和
author: hojun
avatar: 'https://wx1.sinaimg.cn/large/006bYVyvgy1ftand2qurdj303c03cdfv.jpg'
authorLink: /about/hojun.html
authorDesc: 一个好奇的人
categories: 技术
comments: true
date: 2019-03-21 13:09:41
authorAbout:
series:
tags: 
 - 算法
 - LeetCode
keywords: 算法
description: LeetCode算法题-两数之和
photos: https://ws3.sinaimg.cn/small/006bYVyvly1g1ai8cmtaej305e05adfu.jpg
---
![](https://ws4.sinaimg.cn/large/006bYVyvly1g1ai70salhj30gy076gm8.jpg)
## 前言
这是博主在LeetCode上刷的第一道题。说来惭愧，算法书看了不止一本，但是看书的时候书里的练习都没有怎么思考，直接看的参考答案，导致了对算法的研究仅仅停留在了解这种程度，缺乏实战所以在平时coding中也不会将算法知识代入使用。于是开始了LeetCode刷题之旅~

## 题目描述

> 给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。
> 你可以假设每种输入只会对应一个答案。但是，你不能重复利用这个数组中同样的元素。

**示例:**
```
给定 nums = [2, 7, 11, 15], target = 9

因为 nums[0] + nums[1] = 2 + 7 = 9
所以返回 [0, 1]
```

## 开始解题

### 自己思考

数组？两个数之和？两个两个一组，双层循环遍历所有可能，判断之和是否相等，即可找出答案。
coding偷懒，选择了JavaScript
```js
var twoSum = function(nums, target) {
    var len = nums.length;
    for (var i = 0; i < len; i++) {
        for (var j = i + 1; j < len; j++) {
            if (nums[i] + nums[j] == target) {
                return [i, j];
            }
        }
    }
};
```
执行用时：172 ms，内存消耗：34.6 MB。

### 交流学习

自己用笨方法解题后又去看了下官方给的java题解。
一共有三种方法：

 - 暴力法
 - 两遍哈希表
 - 一遍哈希表

#### 两遍哈希表

其中，暴力法和就是上面那种解法。先来看“两遍哈希表”的解法，官方解释如下：

使用两次迭代。在第一次迭代中，我们将每个元素的值和它的索引添加到表中。然后，在第二次迭代中，我们将检查每个元素所对应的目标元素（target - nums[i]target−nums[i]）是否存在于表中。注意，该目标元素不能是 nums[i]nums[i] 本身！

```java
public int[] twoSum(int[] nums, int target) {
    Map<Integer, Integer> map = new HashMap<>();
    for (int i = 0; i < nums.length; i++) {
        map.put(nums[i], i);
    }
    for (int i = 0; i < nums.length; i++) {
        int complement = target - nums[i];
        if (map.containsKey(complement) && map.get(complement) != i) {
            return new int[] { i, map.get(complement) };
        }
    }
    throw new IllegalArgumentException("No two sum solution");
}
```

豁然开朗，可以使用哈希表（散列表）啊，直接通过哈希表的key能够快速的找到元素，就不用遍历了。js可以使用Map实现：
```js
var twoSum = function(nums, target) {
    var numsMap = new Map();
    var len = nums.length;
    for (var i = 0; i < len; i++) {
        numsMap.set(nums[i], i);
    }
    for (var [key, value] of numMap) {
      if (numMap.has(target - key) && target != value*2) {
          return [numMap.get(target - key), value];
      }
    }
};
```
这里我们构建的map把数组的下标和值换个位置，这样我们可以直接用map.has(key)方法来快速查找是否有需要的值。所以第一个循环的时候使用的语句是numsMap.set(nums[i], i)。

接着注意第二个循环，自己思考的时候，第二个循环直接拿来循环map，然后提交给报错了，尴尬。
![](https://wx1.sinaimg.cn/large/006bYVyvly1g1agixgr19j309r05u745.jpg)
提交一阵亡！
我们代入这个例子可以看出，我们这里不应该用value\*2，而应该使用key\*2。修改后提交：
```js
for (var [key, value] of numMap) {
  if (numMap.has(target - key) && target != key*2) {
      return [numMap.get(target - key), value];
  }
}
```
![](https://ws3.sinaimg.cn/large/006bYVyvly1g1agn5jdpej3092065745.jpg)
提交二阵亡！
咳咳，不是说好不能重复，好吧，是解题重复使用，输入随便重复几次。因为map的key如果重复设置的话是会覆盖掉的，只保留最后一次的值，也不会记录之前的值。于是偷瞄下答案。哦~第二个循环还是循环的nums，这样子我们就能比较nums的下标i和map的值value是否相等来判断是不是同一个下标使用了两次，如果不相等说明是对的解。判断的代码就是这句numsMap.get(complement) != i
```js
var twoSum = function(nums, target) {
    var numsMap = new Map();
    var len = nums.length;
    for (var i = 0; i < len; i++) {
        numsMap.set(nums[i], i);
    }
    for (var i = 0; i < len; i++) {
      var complement = target - nums[i];
      if (numsMap.has(complement) && numsMap.get(complement) != i) {
          return [i, numsMap.get(complement)];
      }
    }
};
```
提交三通过~ 执行用时：96 ms，内存消耗：36 MB。 速度是快了，内存居然要36M，怀疑LeetCode是不是测js的内存不是很准确。

#### 一遍哈希表
和两边哈希表同理，只是把创建map和查找map合成一步了。这里就直接给出代码了：
```js
var twoSum = function(nums, target) {
    var numMaps = new Map();
    var len = nums.length;
    for (var i = 0; i < len; i++) {
        var complement = target - nums[i];
        if (numMaps.has(complement)) {
          return [numMaps.get(complement), i];
        }
        numMaps.set(nums[i], i);
    }
};
```
执行用时：96 ms，内存消耗：34.9 MB。

需要注意的是，map.set操作要放在判断后面，这样i刚好比map快一步，省去了numMaps.get(complement) != i这个判断，也避免了之前错误2那种情况。

### 评论区大佬

除了官方的题解外还有评论区大佬的解题思路，我这里随便翻了几页。

#### 妙用IndexOf解题
```js
var twoSum = function(nums, target) {
    var result = [];

    for (var i = 0; i < nums.length; i++) {
        var other = target - nums[i];
        var otherInx = nums.lastIndexOf(other);
        if (otherInx !== -1 && i !== otherInx) {
            return [i,otherInx];
        }
    }
};
```
执行用时：204 ms，内存消耗：34.2 MB。

 - indexOf 是查某个指定的字符串在字符串首次出现的位置（索引值） （也就是从前往后查）
 - lastIndexOf 是从右向左查某个指定的字符串在字符串中最后一次出现的位置（也就是从后往前查）

#### 直接用数组
```js
var twoSum = function(nums, target) {
    var a=[];
    for(var i=0;i<nums.length;i++){
        var tmp=target-nums[i];
        if(a[tmp]!==undefined){return [a[tmp],i]}
        a[nums[i]]=i;
    }
};
```
执行用时：92 ms，内存消耗：34.6 MB。

这个其实有点桶排序的思想，用下标来直接表示值。不过缺点很明显，如果有个很大的数，就要建立一个很大的数组。还是推荐使用哈希表23333~

好了，今天的算法学习到这里了，完