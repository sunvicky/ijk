$(function(){
	$(".userName").click(function(){
		$(".userMore").slideToggle("slow");
	});

	$(".rank ul li").click(function(){
		$(this).addClass("active").siblings().removeClass();	
		if ($(this).index() == 3) {
			$(".rank-users").show();
		}
		else{
			$(".rank-users").hide();
		};
	});
	
	$(".device-title .title1").click(function(){
		$(this).addClass("active").siblings().removeClass("active");
		$(".device-chart-other").show();
		$(".device-chart-mobile").hide();
	});

	$(".device-title .title2").click(function(){
		$(this).addClass("active").siblings().removeClass("active");
		$(".device-chart-mobile").show();
		$(".device-chart-other").hide();
	});

	$(".curve-leftbar li").click(function(){
		$(this).addClass("active").siblings().removeClass();
		$(".curve").hide().eq($(".curve-leftbar li").index(this)).show();
	});

	$(".curve-title div").click(function(){
		var parentCurve = $(this).parents(".curve");
		var nowIndex = parentCurve.find(".curve-title div").index(this);
		$(this).addClass("active").siblings().removeClass();
		parentCurve.find(".curve-content").hide();
		parentCurve.find(".curve-content").eq(nowIndex).show();
	});

});