$(function dd(){
			$(".carousel-content").carousel({
				carousel : ".carousel",//轮播图容器
				indexContainer : ".img-index",//下标容器
				prev : ".carousel-prev",//左按钮
				next : ".carousel-next",//右按钮
				timing : 5000,//自动播放间隔
				animateTime : 800,//动画时间
				auto : true,//是否自动播放
			});

			$(".carousel-prev").hover(function(){
				$(this).find("img").attr("src","../static/images/left_btn2.png");
			},function(){
				$(this).find("img").attr("src","../static/images/left_btn1.png");
			});
			$(".carousel-next").hover(function(){
				$(this).find("img").attr("src","../static/images/right_btn2.png");
			},function(){
				$(this).find("img").attr("src","../static/images/right_btn1.png");
			});
		});
		export {
			dd
		}
