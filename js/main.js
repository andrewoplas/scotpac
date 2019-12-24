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
  // $('.mega-menu').hide();
  $('.solutions-dropdown').dropdown();
  $('.solutions-dropdown').on('shown.bs.dropdown', function() {
    $('.mega-menu').show();
  });

  $('.solutions-dropdown').on('hidden.bs.dropdown', function() {
    $('.mega-menu').hide();
  });
});
