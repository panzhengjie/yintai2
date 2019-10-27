// JavaScript Document
$(function(){
	//导航点击效果
	$('.nav li').click(function(){
		$('.nav li').removeClass('active');
		$(this).addClass('active');
	})
	//banner轮播效果
	$.foucs({ direction: 'left' });  
	
	//项目图片点击效果
	$('.fancybox').fancybox(); 

	//鼠标指向效果
	$(".hover").hover(function(){
		$(this).css("opacity","1");
	},function(){
		$(this).css("opacity","0.9");
	});
	//点击了解更多参数
	$('.list2_txt b').click(function(){
		$('.list2_tab').show();		
	});
	//点击项目详情更多参数收起
	$('.list2_tab i').click(function(){
		$('.list2_tab').hide();	
	});
	//商业配套	
	var timer = null;
	$('.list5 li').on({"mouseenter":function(){
		$thid = $(this);
		clearTimeout(timer);
		timer=setTimeout(function(){
			$thid.children('.list5_txt_fudong').animate({top:0},'swing');		
		},200);
	},"mouseleave":function(){
		clearTimeout(timer);
		$thid.children('.list5_txt_fudong').animate({top:190},'swing');
	}
	});	

	

	
})
























