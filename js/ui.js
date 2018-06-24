
$(function(){

	if( $("#body_container.main_page").length ){
		// affection.main.init();
	}

});

var affection = {}

affection = {
	/* 404 error */
	notFound : function(){
		alert('이 페이지는 현재 작업중입니다.');
		return false;
	},
	/* 공통 모션 */
	motion : function(el, motionType){
		el.css({opacity:1}).addClass("animated " + motionType);
	}
}





/*
*	main
*/
affection.main = {
	init : function(){
		// this.section02();
	}
}


