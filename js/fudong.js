// JavaScript Document
$(function(){	
	 
	//判断滚动条是否置顶
	$(window).scroll(function(){
		if($(document).scrollTop() <= 100){
			$('.fanhui').hide();
		}else{
			$('.fanhui').show();
		};
	}); 
	//电话
	var tel="4008-123-510";
	//通用
	var yjfk="意见反馈";
	var lxfs="联系方式";
	var tjfk="提交反馈";
	//提示文本
	var tishi_txt="您对我们的网站有任何意见和建议，或使用中遇到的问题，请在本页面反馈。我们会每天关注并不断优化产品，为您提供更好的服务！";
	//input提示文本1
	var input_txt1="我们非常乐意收到您使用网站过程中的感受和意见";
	//input提示文本2
	var input_txt2="手机号、Email、QQ均可";

	var fudong_html='<div class="topcontrol"><div class="phone"><div class="phone_txt"><span>'+tel+'</span><div class="sanjiao"></div></div></div><div class="fankui"><div class="fankui_txt"><span>'+yjfk+'</span><div class="sanjiao"></div></div></div><div class="fanhui"></div></div>';
	
	var yijianfankui_html='<div class="black"></div><div class="feedback"><div class="guanbi"></div><div class="feed_con"><p>'+tishi_txt+'</p><h3>'+yjfk+'</h3><textarea placeholder="'+input_txt1+'"></textarea><h3>'+lxfs+'</h3><input type="text" placeholder="'+input_txt2+'" /><div class="but"><button>'+tjfk+'</button></div></div></div>';
	
	
	//添加元素
	$('body').append(fudong_html);
	
	//右下角
	$('.phone').hover(function(){//电话
		if($('.phone_txt').is(":hidden")){
			$('.phone_txt').show();
		}else{
			$('.phone_txt').hide();
		};
	});
	$('.fankui').hover(function(){//意见反馈
		if($('.fankui_txt').is(":hidden")){
			$('.fankui_txt').show();
		}else{
			$('.fankui_txt').hide();
		};
	});
	//回到顶部
	$('body').on("click",".fanhui",function(){
		$("body,html").animate({scrollTop:0},300);		
	});
	//意见反馈
	$('body').on("click",".fankui",function(){
		$('body').append(yijianfankui_html);
	});
	//关闭反馈页
	$('body').on("click",".guanbi",function(){
		$('.black').remove();
		$('.feedback').remove();
	});

})