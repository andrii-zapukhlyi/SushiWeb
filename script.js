// Стрелка вверх


$(document).ready(function(){
	var $element = $('.sec-1');
	let counter = 0;
	$(window).scroll(function() {
		var scroll = $(window).scrollTop() + $(window).height();
		var offset = $element.offset().top + $element.height();

		if (scroll > offset && counter == 0) {
			$('.scrolldown__link').css({'opacity':'1'});
		} else {
			$('.scrolldown__link').css({'opacity':'0'});
		}
	});
});

// Скролл

$(document).ready(function() {
			// Get the header height
			var headerHeight= $('header').outerHeight();
			$('.nav__link').click(function(e) {
				var linkHref = $(this).attr('href');
				$('html, body').animate({
					scrollTop: $(linkHref).offset().top
				},1000);
				e.preventDefault();
			});
		});

$(document).ready(function() {
			// Get the header height
			var headerHeight= $('header').outerHeight();
			$('.scrolldown__link').click(function(e) {
				var linkHref = $(this).attr('href');
				$('html, body').animate({
					scrollTop: $(linkHref).offset().top
				},1000);
				e.preventDefault();
			});
		});

// Меню бургер


$(document).ready(function(){
    $(".header__burger").click(function(){
        $(".header__nav").toggleClass("active"); return false;
    });
});


$(document).ready(function(){
    $(".header__burger").click(function(){
        $(".header__burger").toggleClass("active"); return false;
    });
});


$(document).ready(function(){
    $(".nav__link").click(function(){
        $(".header__nav").removeClass("active");
        $(".header__burger").removeClass("active");
    });
});


$(window).scroll(function() {    
    $(".header__nav").removeClass("active");
    $(".header__burger").removeClass("active");
});


$(document).ready(function(){
    $("section").click(function(){
        $(".header__nav").removeClass("active");
        $(".header__burger").removeClass("active");
    });
});