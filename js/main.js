$(document).ready(function() {
  // Tabs Desktop
  $('.business-tabs-item').click(function() {
    $('.tabs_section .business-tabs-item')
      .parent()
      .removeClass('active');
    $('.tabs_section .business-tabs-content').removeClass('active');
    $(this)
      .parent()
      .addClass('active');

    const contentId = $(this).attr('data-content');
    $('.tabs_section #' + contentId).addClass('active');
  });
  $('[data-content="business-size"]').click();

  // Tabs Mobile
  $('.business-select').change(function() {
    $('.tabs_section_xs .business-tabs-content').removeClass('active');
    const contentId = $(this).val();
    $('#' + contentId).addClass('active');
  });

  // Mega Menu
  $('.mega-menu').hide();
  $('.dropdown-toggle').dropdown();
	$(".dropdown").on("show.bs.dropdown", function () {
    $('.mega-menu').show();
	});
	
	$(".dropdown").on("hidden.bs.dropdown", function () {
    $('.mega-menu').hide();
	})

  // Trustpilot carousel
  $('.trustpilot-carousel').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 300,
  });
});
