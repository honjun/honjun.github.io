title: PHP模拟登陆
author: hojun
avatar: /images/favicon.png
authorDesc: 一个好奇的人
categories: 技术
date: 2017-10-22 23:53:05
authorLink:
authorAbout:
tags:
 - php
 - 模拟登陆
keywords: 模拟登陆
description:
photos:
---
//保持一个会话
//F12中的preserve log记得勾选，（页面刷新不会清空Network）
//打码可以使用打码兔
```php
function login_get($url, $httpHeader)
{ 
    $curl = curl_init();//初始化curl模块 
    curl_setopt($curl, CURLOPT_URL, $url);//登录提交的地址
    curl_setopt($curl,CURLOPT_HEADER,1); //显示响应头header信息
    curl_setopt($curl, CURLOPT_NOBODY, 1);  //不显示显示文档document信息
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1); //返回数据不直接输出
    curl_setopt($curl, CURLOPT_ENCODING, "gzip"); //指定gzip压缩，返回乱码时使用
    $Cookie = 'Cookie:name=1;session_id=2;';
    $header4 = array(
        'Accept:image/webp,image/*,*/*;q=0.8',
        'Accept-Encoding:gzip, deflate, sdch, br',
        'Accept-Language:zh-CN,zh;q=0.8',
        'Connection:keep-alive',
        $Cookie,
        'Host:www.xxx.com',
        'Referer:www.xxx.com',
        'User-Agent:Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/55.0.2883.87 Safari/537.36',
    );
    curl_setopt($curl, CURLOPT_HTTPHEADER, $httpHeader); //指定请求头
    // curl_setopt($curl, CURLOPT_COOKIEJAR, dirname(__FILE__).'/cookie_xm.cookie');//连接结束后，比如，调用 curl_close 后，保存 cookie 信息在指定的文件中。
    // curl_setopt($curl, CURLOPT_COOKIEFILE, $cookieFile); //读取cookie 参数为文件地址
    // curl_setopt($curl, CURLOPT_COOKIE, $cookieStr); //读取cookie 参数为字符串
    curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);    //SSL 报错时使用
    curl_setopt($curl, CURLOPT_SSL_VERIFYHOST, false);    //SSL 报错时使用
    $rs = curl_exec($curl);//执行cURL

    // curl_setopt($curl, CURLINFO_HEADER_OUT, TRUE); //打印请求头
    // $request= curl_getinfo($curl); //得到请求头
    // file_put_contents("./request.txt", $request['request_header'].PHP_EOL, FILE_APPEND);
    //要提交的信息 
    file_put_contents("./login.txt", $rs.PHP_EOL, FILE_APPEND);
    preg_match('/cookiename=(.*);/iU',$rs,$pass_trace);//正则匹配到需要的cookie
    // file_put_contents("./rs.txt", $str.PHP_EOL, FILE_APPEND);
    curl_close($curl);//关闭cURL资源，并且释放系统资源
    return cookiename[0];
}
```
分离curl header和body
```php
...
$rs = curl_exec($curl);//执行cURL
//CURLINFO_HEADER_SIZE获取header的size去截取
if (curl_getinfo($curl, CURLINFO_HTTP_CODE) == '200') {
    $headerSize = curl_getinfo($curl, CURLINFO_HEADER_SIZE);
    $header = substr($rs, 0, $headerSize);
    $body = substr($rs, $headerSize);
}
...
```
post方式提交
```php
$post2 = array ( 
    'user' => 'hojun',
    'pwd' => '123456',
);
curl_setopt($curl, CURLOPT_POST, 1);//post方式提交 
//http_build_query 使用给出的关联（或下标）数组生成一个经过 URL-encode 的请求字符串
curl_setopt($curl, CURLOPT_POSTFIELDS, http_build_query($post));
```