$(document).ready(function(){
	$(".owl-carousel").owlCarousel({ items: 1});
});
const menuItems = document.querySelectorAll('.monticello__first-nav-link');
$(".monticello__first-nav-link").click(function(e) {
  $(".monticello__first-nav-link").removeClass('active');
  $(this).addClass('active');
})