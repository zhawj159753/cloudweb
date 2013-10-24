function showType() {
	/*document.getElementById("image_01").src = 'img/reputation.png';
	document.getElementById("image_01").setAttribute("style","z-index:300;position:absolute;");*/
	
}

function showBack() {
	/*document.getElementById("image_01").src = 'img/icon_06.png';*/
	document.getElementById("pannel_01").setAttribute("style","display:none");
}

function zoom() {
	var c = document.getElementById("wrapper");
	if(screen.width > 1300){
		
		c.setAttribute("style","zoom:1.2");
	}
	else {
		c.setAttribute("style","zoom:0.9");
	}

}

$(".link-border ul li img").hover(function() {
	var cur_img =$(this).parents("li");
	cur_img.data("setTime",setTimeout(function(){
		cur_img.addClass("hover").find(".device-info-pannel").offset({left:cur_img.offset().left, top:cur_img.offset().top+16});
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
		cur_img.addClass("hover").find(".app-info-pannel").offset({left:cur_img.offset().left+4, top:cur_img.offset().top+105});
	}), 100);
}, function() {
	var cur_img =$(this).parents("li");
	clearTimeout(cur_img.data("setTime"));
	cur_img.removeClass("hover");
}
);

var already = 0;
function display(max){
	already++;
	var disObj = document.all.load_percentage;
	disObj.style.width = 100 * already/max + "%";
	disObj.innerHTML = 100 * already/max + "%";

	var timer = window.setTimeout("display("+max+")", 200);
	if(already >= max){
		window.clearTimeout(timer);
		disObj.innerHTML = "已完成。";
	}
}

function showMenu(){
	var obj = document.getElementById("content_1");
	if(obj.style.display == "block"){
		obj.style.display = "none";
	}
	else{
		obj.style.display = "block";
	}
}

function hideMenu(content){
	document.getElementById("content_1").style.display = "none";
	document.getElementById("content_input").value = content;
}
