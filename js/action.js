function showType() {
	/*document.getElementById("image_01").src = 'img/reputation.png';
	document.getElementById("image_01").setAttribute("style","z-index:300;position:absolute;");*/
	
}

function showBack() {
	/*document.getElementById("image_01").src = 'img/icon_06.png';*/
	document.getElementById("pannel_01").setAttribute("style","display:none");
}

function zoom() {
	var c = document.getElementById("content");
	c.setAttribute("style","zoom:1");
}

$(".link-border ul li img").hover(function() {
	var cur_img =$(this).parents("li");
	cur_img.data("setTime",setTimeout(function(){
		cur_img.addClass("hover").find(".device-info-pannel").offset({left:cur_img.offset().left, top:cur_img.offset().top});
	}), 100);
}, function() {
	var cur_img =$(this).parents("li");
	clearTimeout(cur_img.data("setTime"));
	cur_img.removeClass("hover");
}
);

$(".link-border ul li img").hover(function() {
	var cur_img =$(this).parents("li");
	cur_img.data("setTime",setTimeout(function(){
		cur_img.addClass("hover").find(".app-info-pannel").offset({left:cur_img.offset().left, top:cur_img.offset().top+10});
	}), 100);
}, function() {
	var cur_img =$(this).parents("li");
	clearTimeout(cur_img.data("setTime"));
	cur_img.removeClass("hover");
}
);