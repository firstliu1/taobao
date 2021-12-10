$(".yonghu-bottom").children().mouseover(function() {
	$(this).children().eq(0).addClass("yonghu-color");
})
$(".yonghu-bottom").children().mouseout(function() {
	$(this).children().eq(0).removeClass("yonghu-color");
})
$(".sp-yonghu-dianji").children().eq(0).click(function(){
	location.href="html/login.html"
})
