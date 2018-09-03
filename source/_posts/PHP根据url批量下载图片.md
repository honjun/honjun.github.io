title: PHP根据url批量下载图片
author: hojun
avatar: https://wx1.sinaimg.cn/large/006bYVyvgy1ftand2qurdj303c03cdfv.jpg
authorDesc: 一个好奇的人
categories: 技术
date: 2017-07-21 00:08:46
authorLink: /about/hojun.html
authorAbout:
tags:
keywords:
description:
photos:
---
```php
<?php
$imgArr = array(
'https://wx1.sinaimg.cn/large/006bYVyvgy1fhoaywi4qaj307g037q2r.jpg',
'https://wx3.sinaimg.cn/large/006bYVyvgy1fhoaytokqnj308o02g3yd.jpg',
'https://wx4.sinaimg.cn/large/006bYVyvgy1fhf69hzfxej30ip09lmxs.jpg',
'https://wx3.sinaimg.cn/large/006bYVyvgy1fhf7a6r8ykj30jy0lcac0.jpg',
);
$count = count($imgArr);
foreach ($imgArr as $key => $url) {
	$content = file_get_contents($url);
	file_put_contents($key.'.jpg', $content);
}
```