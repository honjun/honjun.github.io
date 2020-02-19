title: Jcrop截取头像上传
author: hojun
avatar: https://cdn.jsdelivr.net/gh/honjun/ImageHosting/sina/006bYVyvgy1ftand2qurdj303c03cdfv.jpg
authorDesc: 一个好奇的人
categories: 技术
date: 2017-06-03 09:09:59
authorLink: /about/hojun.html /about_hojun.html
authorAbout:
tags:
	- jquery
  - jcrop
  - 前端
keywords: 截取头像图片上传
description: 截取头像图片上传
photos: 
  - https://cdn.jsdelivr.net/gh/honjun/ImageHosting/sina/006bYVyvgy1fljtemuc42g30uy0ekgs6.gif
---
之前用Jcrop实现头像上传的功能的时候。有个缺点，是先把原始图片上传，再在页面上显示出来，供用户截取。这么以来不管用户是否保存修改头像的操作，都会执行一个上传操作并保存图片。
改进：把上传的图片转成base64格式的图片显示在页面上，仅当用户截取头像点击保存的时候再执行上传操作。

效果：
![1.gif](https://cdn.jsdelivr.net/gh/honjun/ImageHosting/sina/006bYVyvgy1fljtemuc42g30uy0ekgs6.gif)
直接上代码
index.html
```html
<html lang="en" style="overflow-x:visible;">
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="description" content="">
    <meta name="keywords" content="">
    <meta http-equiv="pragma" content="no-cache">
    <meta http-equiv="cache-control" content="no-cache">
    <meta http-equiv="expires" content="0">
    <link rel="stylesheet" type="text/css" href="./css/self_container.css">
    <link rel="stylesheet" type="text/css" href="./css/self_bootstrap.css">
    <link rel="stylesheet" type="text/css" href="./css/jquery.Jcrop.min.css">
  </head>
  <body style="overflow-x:visible;">
    <div class="self_container">
      <div class="content-wrapper" style="min-height: 800px;">
        <div class="col-md-9">
          <div class="panel panel-default panel-col">
            <div class="panel-heading">
            头像设置</div>
            <div class="panel-body">
              <form id=form1 style="display: block" enctype="multipart/form-data" class="form-horizontal" method="post">
                <div class="form-group">
                  <div class="col-md-2 control-label">
                    <b>
                    当前头像</b>
                  </div>
                  <div class="controls col-md-8 controls">
                    <img src="./img/avatar.jpg">
                  </div>
                </div>
                <div class="form-group">
                  <div class="col-md-2 control-label">
                  </div>
                  <div class="controls col-md-8 controls">
                    <p class="help-block">
                      仅支持上传JPG格式的文件。
                    </p>
                  </div>
                </div>
                <div class="form-group">
                  <div class="col-md-2 control-label">
                  </div>
                  <div class="controls col-md-8 controls">
                    <a id="upload-picture-btn" class="btn btn-primary webuploader-container" >
                      <div class="webuploader-pick">
                      上传新头像</div>
                      <div id="" style="position: absolute; top: 6px; width: 70px; height: 20px; overflow: hidden; bottom: auto; right: auto;">
                        <input id="avatar1" type="file" name="avatar" class="webuploader-element-invisible" accept="image/png,image/jpg,image/jpeg,imge/bmp,image/gif">
                        <label style="opacity: 0; width: 100%; height: 100%; display: block; cursor: pointer; background: rgb(255, 255, 255);">
                        </label>
                      </div>
                    </a>
                  </div>
                </div>
              </form>
              <form id="form2" style="display: none;" action="" method="post">
                <div class="form-group clearfix">
                  <div class="col-md-offset-2 col-md-8 controls">
                      <img id="cropbox" class="img-responsive" src="" >
                    <div class="help-block">
                    提示：请选择图片裁剪区域。</div>
                  </div>
                </div>
                <div class="form-group">
                  <div class="col-md-offset-2 col-md-8 controls">
                    <a class="btn btn-fat btn-primary" id="upload-avatar-btn" data-url="/settings/avatar/crop" data-goto-url="/settings/avatar">
                    保存
                    <input id="commit" type="button" value="保存" style="position: absolute; left: 10px; width: 55px; height: 35px; top:0px; opacity: 0;" />
                    </a>
                  </div>
                  <div class="col-md-offset-2 col-md-8 controls">
                    <a id="upload-picture-btn" class="btn btn-primary webuploader-container" >
                      <div class="webuploader-pick">
                      重新选择图片</div>
                    </a>
                  </div>
                </div>
                <input type="hidden" id="x" name="x" />
                <input type="hidden" id="y" name="y" />
                <input type="hidden" id="w" name="w" />
                <input type="hidden" id="h" name="h" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <script type="text/javascript" src="./js/jquery-2.2.3.min.js"></script>
    <script type="text/javascript" src="./js/jquery.Jcrop.min.js"></script>
    <script type="text/javascript">
      (function(){
        $("#avatar1").change(function() {
          var img = $(".img-responsive");
          var reader = new FileReader();
          reader.readAsDataURL(this.files[0]);
          reader.onload = function (e) { 
            img.attr('src',this.result);
            $("#form1").css('display','none');
            $("#form2").css('display','block');
            $('.img-responsive').Jcrop({
              boxWidth:600,
              boxHeight:300,
              aspectRatio: 1,
              onSelect: updateCoords,
            });
          }
        });
        $(".webuploader-pick").click(function() {
          location.reload();
        });
      })()
      $("#commit").click(function(){
        var avatarForm = document.getElementById('form2');
        var formData = new FormData(avatarForm);
        $(".img-responsive").each(function(){
          var blob = dataURItoBlob(this.src); // 上一步中的函数
          formData.append("avatar", blob, 'avatar.jpg');
        });
        $.ajax({
          url: 'upload.php',
          type: 'post',
          processData: false,
          contentType: false,
          // dataType: 'json',
          data: formData,
          success: function(data){
              location.reload();
          },
          error: function(){
              alert("error");
          }
        });
      })
      function dataURItoBlob(base64Data) {
        var byteString;
        if (base64Data.split(',')[0].indexOf('base64') >= 0)
          byteString = atob(base64Data.split(',')[1]);
        else
          byteString = unescape(base64Data.split(',')[1]);
        var mimeString = base64Data.split(',')[0].split(':')[1].split(';')[0];
        var ia = new Uint8Array(byteString.length);
        for (var i = 0; i < byteString.length; i++) {
          ia[i] = byteString.charCodeAt(i);
        }
        return new Blob([ia], {type:mimeString});
      }
      function updateCoords(c)
      {
        $('#x').val(c.x);
        $('#y').val(c.y);
        $('#w').val(c.w);
        $('#h').val(c.h);
      };
      function checkCoords()
      {
        if (parseInt($('#w').val())) return true;
        alert('Please select a crop region then press submit.');
        return false;
      };
    </script>
  </body>
</html>
```
upload.php
```php
<?php 
if ($_SERVER['REQUEST_METHOD']=="POST") {
    // 保存图片
    $image = $_FILES['avatar'];
    if($image['error'] == UPLOAD_ERR_OK){
        $dest='img/avatar_crop.jpg';
        move_uploaded_file($image['tmp_name'],$dest);
    }
    $targ_w = $targ_h = 160;
    $jpeg_quality = 90;
    $src = 'img/avatar_crop.jpg';
    $img_r = imagecreatefromjpeg($src);
    $dst_r = ImageCreateTrueColor( $targ_w, $targ_h );
    imagecopyresampled($dst_r, $img_r, 0, 0, $_POST['x'], $_POST['y'], $targ_w, $targ_h, $_POST['w'], $_POST['h']);
    imagejpeg($dst_r, 'img/avatar.jpg', $jpeg_quality);
    echo "success";
}
```