title: php中功能强大的函数
author: hojun
avatar: https://cdn.jsdelivr.net/gh/honjun/ImageHosting/sina/006bYVyvgy1ftand2qurdj303c03cdfv.jpg
authorDesc: 一个好奇的人
categories: 技术
date: 2017-06-30 20:50:44
authorLink: /about/hojun.html
authorAbout:
tags:
 - php
keywords:
    php中功能强大的函数
description:
photos:
---
## **To Be Continued。。。**

## **sprintf — Return a formatted string**

`sprintf ( string $format [, mixed $args [, mixed $... ]] )`
例子
```php
<?php
$format = 'The %2$s contains %1$d monkeys';
echo sprintf($format, $num, $location);
?>
```

## **chr — 返回指定的字符**


`string chr ( int $ascii )`
返回相对应于 ascii 所指定的单个字符。
此函数与 ord() 是互补的。
例子
```php
$str = "The string ends in escape: ";
$str .= chr(27); /* 在 $str 后边增加换码符 */
/* 通常这样更有用 */
$str = sprintf("The string ends in escape: %c", 27);
?>
```

## **natsort — 用“自然排序”算法对数组排序**

`bool natsort (array &$array)`
本函数实现了一个和人们通常对字母数字字符串进行排序的方法一样的排序算法并保持原有键／值的关联，这被称为“自然排序”。本算法和通常的计算机字符串排序算法（用于 sort()）的区别见下面示例。

## **simplexml_load_string**

```php
//数组转XML
function arrayToXml($arr)
{
    $xml = "<xml>";
    foreach ($arr as $key=>$val)
    {
        if (is_numeric($val)){
            $xml.="<".$key.">".$val."</".$key.">";
        }else{
             $xml.="<".$key."><![CDATA[".$val."]]></".$key.">";
        }
    }
    $xml.="</xml>";
    return $xml;
}

//将XML转为array
function xmlToArray($xml)
{    
    //禁止引用外部xml实体
    libxml_disable_entity_loader(true);
    $values = json_decode(json_encode(simplexml_load_string($xml, 'SimpleXMLElement', LIBXML_NOCDATA)), true);        
    return $values;
}
```

## **curl**


```php
//curl实现Get和Post
//Get方式实现
public function curlByGet() {
    $url = "http://www.baidu.com";

    //初始化
    $ch = curl_init();

    //设置选项，包括URL
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_HEADER, false);

    //执行并获取HTML文档内容
    $output = curl_exec($ch);

    //释放curl句柄
    curl_close($ch);

    //打印获得的数据
    print_r($output);
}


//Post方式实现
public function curlByPost() {
    $url = "http://www.baidu.com";
    $post_data = array ("username" => "小明","password" => "12345");

    $ch = curl_init();

    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    // post数据
    curl_setopt($ch, CURLOPT_POST, true);
    // post的变量
    curl_setopt($ch, CURLOPT_POSTFIELDS, $post_data);

    $output = curl_exec($ch);
    curl_close($ch);

    //打印获得的数据
    print_r($output);
}
```