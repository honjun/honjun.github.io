var isindex=true;var title="";var visitor="Hi."
function getXiaomMai(){
	var fxm = $(".fixed-xm");
    if(fxm.css("display") == 'none'){
        return true;
    } else {
        return false;
    }
}
// 人物功能
$(function(){
	'use strict';
	var Util = (function(){
		var prefix = 'hojun_storage_';
		var StorageGetter = function(key){
			return localStorage.getItem(prefix + key);
		}
		var StorageSetter = function(key, value){
			return localStorage.setItem(prefix + key, value)
		}
		return {
			StorageGetter:StorageGetter,
			StorageSetter:StorageSetter
		}
	})();
	var isXM = Util.StorageGetter('isXM');
	if(isXM == 'true'){
		$(".fixed-xm").css("display","none");
        $("#spig").css("display","block");
	} else {
		$(".fixed-xm").css("display","block");
        $("#spig").css("display","none");
	}
    var Characters = new Array("/images/xiaomai/xm_cry.png","/images/xiaomai/xm_sleep.png","/images/xiaomai/xm_nap.png","/images/xiaomai/xm_angry.png","/images/xiaomai/xm_laugh.png","/images/xiaomai/xm_eat.png","/images/xiaomai/xm_drink.png","/images/xiaomai/xm_happy.png","/images/xiaomai/xm_jump.png","/images/xiaomai/xm_fun.png","/images/xiaomai/xm_sad.png");
    var i = 0;
    $("body").on("click","#ChangePic",function(){
        i++;
        var length = Characters.length;
        var pic = Characters[i%length];
        $("#xiaomai").css('background',"url(" +pic+ ") no-repeat");
    });
    $("body").on("click","#Disappear",function(){
        $(".fixed-xm").css("display","block");
        $("#spig").css("display","none");
        Util.StorageSetter('isXM',false);
    });
    $(".fixed-xm").click(function(){
        var audio = document.getElementById('xm_audio');
        audio.play();
        $(".fixed-xm").css("display","none");
        $("#spig").css("display","block");
        Util.StorageSetter('isXM',true);
    })
});

//右键菜单
///////////////////////////////////
jQuery(document).ready(function ($) {
    $("#spig").mousedown(function (e) {
        if(e.which==3){
        showMessage("恭喜你，发现秘密通道:<br /><br /><a href=\"/.index.html\" title=\"\">首页</a>&nbsp;<a href=\"javascript:void(0)\" id=\"ChangePic\">换心情</a>&nbsp;<a href=\"javascript:void(0)\" id=\"Disappear\">躲起来</a>",10000);
        $("#xiaomai").css('background',"url(/images/xiaomai/xm_happy.png) no-repeat");
        }
    });
    $("#spig").bind("contextmenu", function(e) {
        return false;
    });
});

//鼠标在消息上时
jQuery(document).ready(function ($) {
    $("#message").hover(function () {
       $("#message").fadeTo("100", 1);
     });
});


//鼠标在上方时
jQuery(document).ready(function ($) {
    //$("#xiaomai").jrumble({rangeX: 2,rangeY: 2,rangeRot: 1});
    $("#xiaomai").mouseover(function () {
        $("#xiaomai").fadeTo("300", 0.3);
        msgs = ["手拿开，我就跟你玩~", "本小助理可远观不可亵玩！","无聊了吗？听几首歌放松一下吧~<br /><br /><a href=\"http://www.hojun.cn/2018/02/18/喜欢的音乐/\" target=\"_bank\" title=\"\">Music</a>", "我会隐身哦！嘿嘿！", "别动手动脚的，把手拿开！！", "再不把手拿开小心我横竖竖你！！", "hojun，他摸我，呜呜呜呜~~~", "你把手拿开我就出来！","无聊了吗？听几首歌放松一下吧~<br /><br /><a href=\"http://music.163.com\" target=\"_bank\" title=\"\">Music</a> "];
        var i = Math.floor(Math.random() * msgs.length);
        showMessage(msgs[i]);
    });
    $("#xiaomai").mouseout(function () {
        $("#xiaomai").fadeTo("300", 1)
    });
});

//开始
jQuery(document).ready(function ($) {
        if (isindex) { //如果是主页
            var now = (new Date()).getHours();
            if (now > 0 && now <= 6) {
                showMessage(visitor + ' 你是夜猫子呀？还不睡觉，明天起的来么你？', 6000);
                $("#xiaomai").css('background',"url(/images/xiaomai/xm_sleep.png) no-repeat");
            } else if (now > 6 && now <= 11) {
                showMessage(visitor + ' 早上好 还想再睡会儿~', 6000);
                $("#xiaomai").css('background',"url(/images/xiaomai/xm_sad.png) no-repeat");
            } else if (now > 11 && now <= 14) {
                showMessage(visitor + ' 中午了，吃饭了么？不要饿着了，饿死了谁来挺我呀！', 6000);
                $("#xiaomai").css('background',"url(/images/xiaomai/xm_eat.png) no-repeat");
            } else if (now > 14 && now <= 18) {
                showMessage(visitor + ' 中午的时光真难熬！怎么可以没可乐！', 6000);
                $("#xiaomai").css('background',"url(/images/xiaomai/xm_drink.png) no-repeat");
            } else {
                showMessage(visitor + ' 快来逗我玩吧！我好无聊啊~~', 6000);
                $("#xiaomai").css('background',"url(/images/xiaomai/xm_nap.png) no-repeat");
            }
        }
        else {
            showMessage('欢迎' + visitor + '来到<span style="color:#0099cc;">hojun Blog</span> ' + title + ' ', 6000);
        }
        $(".spig").animate({
            top: $(".spig").offset().top + 40,
            left: document.body.offsetWidth - 160
        },
    	{
    	    queue: false,
    	    duration: 1000
    	});
 //   window.setTimeout(function () {
 //       showMessage("下面播报明日天气<iframe name=\"xidie\" src=\"http://m.weather.com.cn/m/pn1/weather.htm\"frameborder=\“0\” scrolling=\"no\" height=\"15px\"  width=\"130px\" allowtransparency=\"true\" ></iframe>", 10000);
 //   },
	// 4000);
});

//鼠标在某些元素上方时
jQuery(document).ready(function ($) {
    $('h2 a').click(function () {//标题被点击时
        showMessage('正在用吃奶的劲加载《<span style="color:#0099cc;">' + $(this).text() + '</span>》请稍候');
    });
    $('h2 a').mouseover(function () {
        showMessage('要看看《<span style="color:#0099cc;">' + $(this).text() + '</span>》这篇文章么？');
    });
    $('#prev-page').mouseover(function(){
        showMessage('要翻到上一页吗?');
    });
    $('#next-page').mouseover(function(){
        showMessage('要翻到下一页吗?');
    });
    $('#index-links li a').mouseover(function () {
        showMessage('去 <span style="color:#0099cc;">' + $(this).text() + '</span> 逛逛');
    });
    $('.comments').mouseover(function () {
        showMessage('<span style="color:#0099cc;">' + visitor + '</span> 向评论栏出发吧！');
    });
    $('#submit').mouseover(function () {
        showMessage('确认提交了么？');
    });
    $('#s').focus(function () {
        showMessage('输入你想搜索的关键词再按Enter(回车)键就可以搜索啦!');
    });
    $('#go-prev').mouseover(function () {
        showMessage('点它可以后退哦！');
    });
    $('#go-next').mouseover(function () {
        showMessage('点它可以前进哦！');
    });
    $('#refresh').mouseover(function () {
        showMessage('点它可以重新载入此页哦！');
    });
    $('#go-home').mouseover(function () {
        showMessage('点它就可以回到首页啦！');
    });
    $('#addfav').mouseover(function () {
        showMessage('点它可以把此页加入书签哦！');
    });
    $('#nav-two a').mouseover(function () {
        showMessage('嘘，从这里可以进入控制面板的哦！');
    });
    $('.post-category a').mouseover(function () {
        showMessage('点击查看此分类下得所有文章');
    });
    $('.post-heat a').mouseover(function () {
        showMessage('点它可以直接跳到评论列表处.');
    });
    $('#tho-shareto span a').mouseover(function () {
        showMessage('你知道吗?点它可以分享本文到'+$(this).attr('title'));
    });
    $('#switch-to-wap').mouseover(function(){
        showMessage('点击可以切换到手机版博客版面');
    });
});


//无聊讲点什么
jQuery(document).ready(function ($) {
    window.setInterval(function () {
        if(!getXiaomMai()){
            return;
        }
        $("#xiaomai").css('background',"url(/images/xiaomai/xm_laugh.png) no-repeat");
        msgs = ["咳咳咳咳咳~", "好无聊哦，你都不陪我玩~", "无聊了吗？听几首歌放松一下吧~<br /><br /><a href=\"http://music.163.com\" target=\"_bank\" title=\"\">Music</a>","…@……!………", "^%#&*!@*(&#)(!)(", "我是hojun的小小助理哦~_~", "我可爱吧！嘻嘻!~^_^!~~","谁淫荡呀?~谁淫荡?，你淫荡呀!~~你淫荡！~~","从前有座山，山上有座庙，庙里有个老和尚给小和尚讲故事，讲：“从前有座……”","无聊了吗？听几首歌放松一下吧~<br /><br /><a href=\"http://music.163.com\" target=\"_bank\" title=\"\">Music</a> "];
        var i = Math.floor(Math.random() * msgs.length);
        showMessage(msgs[i], 10000);
    }, 35000);
});

//无聊动动
jQuery(document).ready(function ($) {
    window.setInterval(function () {
    	var xm = $("#xiaomai");
        if(!getXiaomMai()){
            return;
        }
        msgs = ["无聊了~", "乾坤大挪移！", "我飘过来了！~", "我飘过去了", "我得意地飘！~飘！~","无聊了吗？听几首歌放松一下吧~<br /><br /><a href=\"http://music.163.com\" target=\"_bank\" title=\"\">Music</a> "];
        var i = Math.floor(Math.random() * msgs.length);
        if (i<4) {
            xm.css('background',"url(/images/xiaomai/xm_jump.png) no-repeat");
        } else {
            xm.css('background',"url(/images/xiaomai/xm_fun.png) no-repeat");
        }
        s = [0.1, 0.2, 0.3, 0.4, 0.5, 0.6,0.7,0.75,-0.1, -0.2, -0.3, -0.4, -0.5, -0.6,-0.7,-0.75];
        var i1 = Math.floor(Math.random() * s.length);
        var i2 = Math.floor(Math.random() * s.length);
            $(".spig").animate({
            left: document.body.offsetWidth/2*(1+s[i1]),
            top:  document.body.offsetheight/2*(1+s[i1])
        },
		{
		    duration: 2000,
		    complete: showMessage(msgs[i])
		});
    }, 45000);
});

//评论资料
jQuery(document).ready(function ($) {
    $("#author").click(function () {
        showMessage("留下你的尊姓大名！");
        $(".spig").animate({
            top: $("#author").offset().top - 70,
            left: $("#author").offset().left - 170
        },
		{
		    queue: false,
		    duration: 1000
		});
    });
    $("#email").click(function () {
        showMessage("留下你的邮箱，不然你的头像是小怪物喽！");
        $(".spig").animate({
            top: $("#email").offset().top - 70,
            left: $("#email").offset().left - 170
        },
		{
		    queue: false,
		    duration: 1000
		});
    });
    $("#url").click(function () {

        showMessage("快快告诉我你的家在哪里，好让我去参观参观！");
        $(".spig").animate({
            top: $("#url").offset().top - 70,
            left: $("#url").offset().left - 170
        },
		{
		    queue: false,
		    duration: 1000
		});
    });
    $("#comment").click(function () {
        showMessage("认真填写哦！不然会被认作垃圾评论的！我的乖乖~");
        $(".spig").animate({
            top: $("#comment").offset().top - 70,
            left: $("#comment").offset().left - 170
        },
		{
		    queue: false,
		    duration: 1000
		});
    });
});

//滚动条移动
jQuery(document).ready(function ($) {
    var f = 100;
    $(window).scroll(function () {
        if(!getXiaomMai()){
            return;
        }
        $(".spig").animate({
            top: $(window).scrollTop() + f +0
        },
		{
		    queue: false,
		    duration: 1000
		});
    });
});

//鼠标点击时
jQuery(document).ready(function ($) {
    var stat_click = 0;
    $("#xiaomai").click(function () {
        if (!ismove) {
            stat_click++;
            if (stat_click > 4 && stat_click <= 8) {
                msgs = ["你有完没完呀？", "干嘛动我呀！小心我咬你！"];
                var i = Math.floor(Math.random() * msgs.length);
                $("#xiaomai").css('background',"url('/images/xiaomai/xm_angry.png') no-repeat");
                //showMessage(msgs[i]);
            } else if (stat_click > 8) {
                msgs = ["你有完没完呀？", "你已经摸我" + stat_click + "次了，人家脸都红色...", "不要摸我了，我会告诉hojun哥哥来打你的哦！"];
                var i = Math.floor(Math.random() * msgs.length);
                $("#xiaomai").css('background',"url('/images/xiaomai/xm_cry.png') no-repeat");
                //showMessage(msgs[i]);
            } else {
                msgs = ["筋斗云！~我飞！", "我跑呀跑呀跑！~~", "别摸我了，再摸我就脸红了！", "惹不起你，我还躲不起你么？", "非礼呀！救命！OH，My ladygaga"];
                $("#xiaomai").css('background',"url('/images/xiaomai/xm_jump.png') no-repeat");
                var i = Math.floor(Math.random() * msgs.length);
                //showMessage(msgs[i]);
            }
        s = [0.1, 0.2, 0.3, 0.4, 0.5, 0.6,0.7,0.75,-0.1, -0.2, -0.3, -0.4, -0.5, -0.6,-0.7,-0.75];
        var i1 = Math.floor(Math.random() * s.length);
        var i2 = Math.floor(Math.random() * s.length);
            $(".spig").animate({
            left: document.body.offsetWidth/2*(1+s[i1]),
            top:  document.body.offsetheight/2*(1+s[i1])
            },
			{
			    duration: 500,
			    complete: showMessage(msgs[i])
			});
        } else {
            ismove = false;
        }
    });
});
//显示消息函数 
function showMessage(a, b) {
    if (b == null) b = 10000;
    jQuery("#message").hide().stop();
    jQuery("#message").html(a);
    jQuery("#message").fadeIn();
    jQuery("#message").fadeTo("1", 1);
    jQuery("#message").fadeOut(b);
};

//改：
//判断拖动事件是在移动端还是在pc端
function IsPC()
{
    var userAgentInfo = navigator.userAgent;
    var Agents = new Array("Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod");
    var flag = true;
    for (var v = 0; v < Agents.length; v++) {
        if (userAgentInfo.indexOf(Agents[v]) > 0) { flag = false; break; }
    }
    return flag;
}
var touchEvents = {
    touchstart: "touchstart",
    touchmove: "touchmove",
    touchend: "touchend",

    /**
     * @desc:判断是否pc设备，若是pc，需要更改touch事件为鼠标事件，否则默认触摸事件
     */
    initTouchEvents: function () {
        
    }
};
touchEvents.initTouchEvents();

var _move = false;
var ismove = false; //移动标记
var _x, _y; //鼠标离控件左上角的相对位置

if (IsPC()) {
    jQuery(document).ready(function ($) {
        $("#spig").mousedown(function (e) {
            _move = true;
            _x = e.pageX - parseInt($("#spig").css("left"));
            _y = e.pageY - parseInt($("#spig").css("top"));
         });
        $(document).mousemove(function (e) {
            if (_move) {
                var x = e.pageX - _x; 
                var y = e.pageY - _y;
                var wx = $(window).width() - $('#spig').width();
                var dy = $(document).height() - $('#spig').height();
                if(x >= 0 && x <= wx && y > 0 && y <= dy) {
                    $("#spig").css({
                        top: y,
                        left: x
                    }); //控件新位置
                ismove = true;
                }
            }
        }).mouseup(function () {
            _move = false;
        });
    });
}
//文档加载完成事件，如果SCRIPT标签在尾部就可以不用它
window.onload=function(){
    //获取元素
    var spig=document.getElementById("spig");
    //添加触屏开始事件
    spig.addEventListener("touchstart",function(e){
    	var time = 0;
    	e.stopPropagation();
	    time = setTimeout(function(){  
	        showMessage("恭喜你，发现秘密通道:<br /><br /><a href=\"/index.html\" title=\"\">首页</a>&nbsp;<a href=\"javascript:void(0)\" id=\"ChangePic\">换心情</a>&nbsp;<a href=\"javascript:void(0)\" id=\"Disappear\">躲起来</a>",10000);
	        $("#xiaomai").css('background',"url(/images/xiaomai/xm_happy.png) no-repeat");
	    }, 3000);//这里设置长按响应时间  
        $("#xiaomai").fadeTo("300", 0.3);
        var p,f1,f2;
        _move = true;
        //由于触屏的坐标是个数组，所以取出这个数组的第一个元素
        e=e.touches[0];
        //保存picture和开始触屏时的坐标差
        p={
            x:spig.offsetLeft-e.clientX,
            y:spig.offsetTop-e.clientY
        };
        //添加触屏移动事件
        document.addEventListener("touchmove",f2=function(e){
            if(_move){
                //获取保触屏坐标的对象
                var t=t=e.touches[0];
                //把picture移动到初始计算的位置加上当前触屏位置
                spig.style.left=p.x+t.clientX+"px";
                spig.style.top=p.y+t.clientY+"px";
                //阻止默认事件
                e.preventDefault();
                ismove = true;
            }
        },false);
        //添加触屏结束事件
        document.addEventListener("touchend",f1=function(e){
            $("#xiaomai").fadeTo("300", 1);
            //移除在document上添加的两个事件
            e.stopPropagation();  
		    clearTimeout(time);  
            document.removeEventListener("touchend",f1);
            document.removeEventListener("touchmove",f2);
            _move = false;
        },false);
    },false);
};



//////以上是小埋的代码，改自spig.js