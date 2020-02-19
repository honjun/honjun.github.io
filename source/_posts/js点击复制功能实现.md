title: js点击复制功能实现
author: hojun
avatar: https://cdn.jsdelivr.net/gh/honjun/ImageHosting/sina/006bYVyvgy1ftand2qurdj303c03cdfv.jpg
authorDesc: 一个好奇的人
categories: 技术
date: 2017-07-17 22:06:13
authorLink: /about/hojun.html
authorAbout:
tags:
keywords:
description:
photos:
---
今天实现了了下js复制功能
参照https://developer.mozilla.org/zh-CN/docs/Web/API/Document/execCommand#命令

实现代码 
```html
<meta charset="utf-8">
<!-- 记得导入jquery -->
<script src="http://cdn.static.runoob.com/libs/jquery/1.10.2/jquery.min.js">
<a class="copy_url_a" style="cursor: pointer;">复制链接</a>
<textarea style="opacity: 0; z-index: -1; position: absolute; left: 0px;" class="copy_url_input">http://www.baidu.co1m</textarea>
<script type="text/javascript"> 
	$(function(){
	    $('.copy_url_a').click(function(){
	        var textarea_url = $(this).siblings('.copy_url_input').get(0);
	        console.log(textarea_url);
	        var currentFocus = document.activeElement;
	        textarea_url.select();
	        document.execCommand("copy")
	        currentFocus.focus();
	        alert("已复制好，可贴粘。"); 
	    })
	})
</script> 


<a class="copy_url_a" style="cursor: pointer;">复制链接</a>
<input style="opacity: 0; z-index: -1; position: absolute; left: 0px;" class="copy_url_input" value="http://www.baidu.co2m">

<script type="text/javascript">
	$(function(){
	    $('.copy_url_a').click(function(){
	        var inputText = $(this).siblings('.copy_url_input').get(0);
	        var currentFocus = document.activeElement;
	        inputText.focus();
	        inputText.setSelectionRange(0, inputText.value.length);
	        document.execCommand('copy');
	        currentFocus.focus();
	    })
	})
</script>
```
<font color="red">注意：Firefox不能document.execCommand('copy', true);这样写</font>
### **select方法 参考w3c**

> select()方法用于选取密码域中的文本。

```html
<html>
  <head>
    <script type="text/javascript">
        function selText()
        {
            document.getElementById('password1').select()
        }
    </script>
  </head>
  <body>
    <form>
      <input type="password" id="password1" value="thgrt456" />
      <input type="button" onclick="selText()" value="Select text" />
    </form>
  </body>
</html>
```

> select() 方法用于选择该元素中的文本。

 
```html
<html>
  <head>
  <script type="text/javascript">
      function selText()
      {
          document.getElementById("txt1").select()
      }
  </script>
  </head>
  <body>
    <textarea id="txt1">Hello world....</textarea>
    <input type="button" value="Select text" onclick="selText()">
  </body>
</html>
```

> select()方法用于选取文本域中的内容。

```html
<html>
  <head>
    <script type="text/javascript">
        function selText()
        {
            document.getElementById("myText").select()
        }
    </script>
  </head>
  <body>
    <form>
      <input size="25" type="text" id="myText" value="A cat played with a ball">
      <input type="button" value="Select text" onclick="selText()"> 
    </form>
  </body>
</html>
```
### **setSelectionRange方法**
The HTMLInputElement.setSelectionRange()方法可以设置一个 input 元素中的文本选中内容的起始位置和结束位置。

在较新的浏览器中，你可以通过一个可选的参数来指定文本被被选中过程中的方向。比如通过点击和拖动从结束位置往起始位置选中一个字符串。

每次调用这个这个方法会更新HTMLInputElement.selectionStart, selectionEnd, 和 selectionDirection 这3条属性。

#### **语法EDIT**
```
inputElement.setSelectionRange(selectionStart, selectionEnd, [optional] selectionDirection);
```
#### **参数**

 - selectionStart 被选中的第一个字符的位置。
 - selectionEnd 被选中的最后一个字符的 下一个 位置。
 - selectionDirection (可选) 一个指明选择方向的字符串，有"forward","backward"和"none"
   3个可选值, 分别表示"从前往后", "从后往前"和"选择方向未知或不重要"。

### **setSelectionRange方法**
当一个HTML文档切换到设计模式(designMode)时，文档对象暴露execCommand方法，该方法允许运行命令来操纵可编辑区域的内容。大多数命令影响文档的选择（粗体，斜体等），而其他命令插入新元素（添加链接）或影响整行（缩进）。当使用 contentEditable时，调用 execCommand() 将影响当前活动的可编辑元素。

#### **语法EDIT**
```
bool = document.execCommand(aCommandName, aShowDefaultUI, aValueArgument)
```
#### **返回值**
一个 Boolean ，如果是 false 则表示操作不被支持或未被启用。

#### **参数**

 - aCommandName 一个 DOMString ，命令的名称。可用命令列表请参阅 命令 。
 - aShowDefaultUI 一个 Boolean 是否展示用户界面，一般为 false。Mozilla 没有实现。
 - aValueArgument 一些命令需要一些额外的参数值（如insertimage需要提供这个image的url）。默认为null。

#### **命令**

 1. backColor 修改文档的背景颜色。在styleWithCss模式下，则只影响容器元素的背景颜色。这需要一个<color>
    类型的字符串值作为参数传入。注意，IE浏览器用这个设置文字的背景颜色。
 2. bold 开启或关闭选中文字或插入点的粗体字效果。IE浏览器使用 `<strong>`标签，而不是`<b>`标签。
 3. contentReadOnly 通过传入一个布尔类型的参数来使能文档内容的可编辑性。(IE浏览器不支持)
 4. copy
    拷贝当前选中内容到剪贴板。启用这个功能的条件因浏览器不同而不同，而且不同时期，其启用条件也不尽相同。使用之前请检查浏览器兼容表，以确定是否可用。
 5. createLink 将选中内容创建为一个锚链接。这个命令需要一个HREF
    URI字符串作为参数值传入。URI必须包含至少一个字符，例如一个空格。（浏览器会创建一个空链接）
 6. cut 
    剪贴当前选中的文字并复制到剪贴板。启用这个功能的条件因浏览器不同而不同，而且不同时期，其启用条件也不尽相同。使用之前请检查浏览器兼容表，以确定是否可用。
 7. decreaseFontSize  给选中文字加上 small 标签，或在选中点插入该标签。(IE浏览器不支持)
 8. delete 删除选中部分.
 9. enableInlineTableEditing 启用或禁用表格行和列插入和删除控件。(IE浏览器不支持)
 10. enableObjectResizing 启用或禁用图像和其他对象的大小可调整大小手柄。(IE浏览器不支持)
 11. fontName 在插入点或者选中文字部分修改字体名称. 需要提供一个字体名称字符串 (例如："Arial")作为参数。
 12. fontSize 在插入点或者选中文字部分修改字体大小. 需要提供一个HTML字体尺寸 (1-7) 作为参数。
 13. foreColor 在插入点或者选中文字部分修改字体颜色. 需要提供一个颜色值字符串作为参数。
 14. formatBlock 添加一个HTML块式标签在包含当前选择的行, 如果已经存在了，更换包含该行的块元素 (在 Firefox中,
   BLOCKQUOTE 是一个例外 -它将包含任何包含块元素). 需要提供一个标签名称字符串作为参数。几乎所有的块样式标签都可以使用(例如.
   "H1", "P", "DL", "BLOCKQUOTE"). (IE浏览器仅仅支持标题标签 H1 - H6, ADDRESS, 和
   PRE,使用时还必须包含标签分隔符 < >, 例如 "`<H1>`".)
 15. forwardDelete 删除光标所在位置的字符。 和按下删除键一样。
 16. heading 添加一个标题标签在光标处或者所选文字上。 需要提供标签名称字符串作为参数 (例如. "H1", "H6"). (IE 和
   Safari不支持)
 17. hiliteColor 更改选择或插入点的背景颜色。需要一个颜色值字符串作为值参数传递。 UseCSS
   必须开启此功能。(IE浏览器不支持)
 18. increaseFontSize 在选择或插入点周围添加一个BIG标签。(IE浏览器不支持)
 19. indent 缩进选择或插入点所在的行， 在 Firefox 中, 如果选择多行，但是这些行存在不同级别的缩进, 只有缩进最少的行被缩进。
 20. insertBrOnReturn 控制当按下Enter键时，是插入 br 标签还是把当前块元素变成两个。(IE浏览器不支持)
 21. insertHorizontalRule 在插入点插入一个水平线（删除选中的部分）
 22. insertHTML 在插入点插入一个HTML字符串（删除选中的部分）。需要一个个HTML字符串作为参数。(IE浏览器不支持)
 23. insertImage 在插入点插入一张图片（删除选中的部分）。需要一个image SRC
   URI作为参数。这个URI至少包含一个字符。空白字符也可以（IE会创建一个链接其值为null）
 24. insertOrderedList 在插入点或者选中文字上创建一个有序列表
 25. insertUnorderedList 在插入点或者选中文字上创建一个无序列表。
 26. insertParagraph 在选择或当前行周围插入一个段落。(IE会在插入点插入一个段落并删除选中的部分.)
 27. insertText 在光标插入位置插入文本内容或者覆盖所选的文本内容。
 28. italic 在光标插入点开启或关闭斜体字。 (Internet Explorer 使用 EM 标签，而不是 I )
 29. justifyCenter 对光标插入位置或者所选内容进行文字居中。
 30. justifyFull 对光标插入位置或者所选内容进行文本对齐。
 31. justifyLeft 对光标插入位置或者所选内容进行左对齐。
 32. justifyRight 对光标插入位置或者所选内容进行右对齐。
 33. outdent 对光标插入行或者所选行内容减少缩进量。
 34. paste 在光标位置粘贴剪贴板的内容，如果有被选中的内容，会被替换。剪贴板功能必须在 user.js 配置文件中启用。参阅 [1].
 35. redo 重做被撤销的操作。
 36. removeFormat 对所选内容去除所有格式
 37. selectAll 选中编辑区里的全部内容。
 38. strikeThrough 在光标插入点开启或关闭删除线。
 39. subscript 在光标插入点开启或关闭下角标。
 40. superscript 在光标插入点开启或关闭上角标。
 41. underline 在光标插入点开启或关闭下划线。
 42. undo 撤销最近执行的命令。
 43. unlink 去除所选的锚链接的<a>标签
 44. useCSS  切换使用 HTML tags 还是 CSS 来生成标记. 要求一个布尔值 true/false 作为参数。注:
   这个属性是逻辑上的倒退 (例如. use false to use CSS, true to use
   HTML).(IE不支持)该属性已经废弃，使用 styleWithCSS 代替。
 45. styleWithCSS 用这个取代 useCSS 命令。 参数如预期的那样工作, i.e. true
     modifies/generates 风格的标记属性, false 生成格式化元素。

#### **例子**

```html
An example of how to use it on CodePen.
快速实现复制到剪贴板：

<p>点击复制后在右边textarea CTRL+V看一下</p>
<input type="text" id="inputText" value="测试文本"/>
<input type="button" id="btn" value="复制"/>
<textarea rows="4"></textarea>
<script type="text/javascript">
    var btn = document.getElementById('btn');
    btn.addEventListener('click', function(){
        var inputText = document.getElementById('inputText');
        var currentFocus = document.activeElement;
        inputText.focus();
        inputText.setSelectionRange(0, inputText.value.length);
        document.execCommand('copy', true);
        currentFocus.focus();
    });
</script>
```

