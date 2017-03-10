$(function(){
	
	$(".cart-form-select-title").on("click", function(){
		var select = $(this), parent = select.parent(),
			options = select.next(), content = $(".cart-form-select-content");
		content.fadeOut();
		if(!parent.hasClass("opened")){
			parent.addClass("opened");
			options.fadeIn();
		} else {
			parent.removeClass("opened");
			options.fadeOut();
		}		
	});
	
	$(".cart-form-select-delivery-btn").on("click", function(){
		var btn = $(this), parent = btn.parents("li"), hints = $(".cart-form-option-hint"),
			hint = btn.parent().next(), li = $(".cart-form-select-options > li");
		var winwidth = $(window).width();
		if(winwidth > 559){
			li.removeClass("active");
			hints.fadeOut();
			parent.addClass("active");
			hint.fadeIn();
			return false;
		}
	});
	
	function deliBtns(){
		var btn = $(".cart-form-select-delivery-btn"), width = $(window).width();
		btn.each(function(){
			if (width > 559){
				$(this).attr("href", "#");
			} else {
				$(this).attr("href", "#modal3");
				btn.magnificPopup({	type: 'inline'});	
			} 
		});
	}
	deliBtns();
	$(window).on("resize", function(){ deliBtns(); });

	var modal1 = $(".cart-top-more-link");
	modal1.magnificPopup({type: 'inline'});	
	var modal2 = $(".product-cart-btn");
	modal2.magnificPopup({type: 'inline'});
	var modal3 = $(".card-buy-btn");
	modal3.magnificPopup({type: 'inline'});	

	$(".modal2-continue, .modal3-another-btn").on("click", function() {	$.magnificPopup.close(); });
	
	
	$(".cart-form-option").on("click", function(){
		var option = $(this), txt = option.text(),
			content = option.parents(".cart-form-select-content"),
			select = option.parents(".cart-form-select-content").prev().children("p");
		content.fadeOut();
		select.text(txt);
	});
	
	$(".cart-product-remove-btn").on("click", function(e){
		e.preventDefault();
		var btn = $(this), item = btn.parents(".cart-product");
		item.fadeOut();
	});
	
	$(".ofp").on("click", function(){
		link = $(this).find(".ofp-link"), src = link.attr("src");
		if (src == "img/cart-left-icon.png") link.attr("src","img/radio-not-active.png");
		else link.attr("src","img/cart-left-icon.png");
		return false;
	});
	
	$(".cart-product-info-btn, .card-quantity-btn, .product-select button, .product-select-mini button").on("click", function(e){
		e.preventDefault();
		var btn = $(this), sign = btn.text(),
			input = btn.parents(".input-group").find("input"), value = input.attr("value");
		if (sign == "+") input.attr("value",++value);
		else if (value > 1)	input.attr("value",--value);
			
	});		
	
	$(".header-xs-menu-btn").on("click", function(e){
		e.preventDefault();
		var btn = $(this), menu = $(".header-xs-top-menu"), body = $("body");
		if (!btn.hasClass("menu-xs-visible")){
			btn.addClass("menu-xs-visible");
			body.addClass("darkned");
			menu.slideDown();
		} else {
			btn.removeClass("menu-xs-visible");
			body.removeClass("darkned");
			menu.slideUp();			
		}
	});
	
});