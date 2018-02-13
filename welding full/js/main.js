$(document).ready(function(){
    $("#wrap").on("click","a", function (event) {
       event.preventDefault();
		var id  = $(this).attr('href'),
        top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 1000);
	});
});
$(document).ready(function(){
    $("#up").on("click","a", function (event) {
       event.preventDefault();
		var id  = $(this).attr('href'),
        top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 600);
	});
});