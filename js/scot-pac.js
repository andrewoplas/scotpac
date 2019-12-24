$(document).ready(function() {
  // Tabs Desktop
  $('.business-tabs-item').click(function() {
    $('.feature_3 .business-tabs-item')
      .parent()
      .removeClass('active');
    $('.feature_3 .business-tabs-content').removeClass('active');
    $(this)
      .parent()
      .addClass('active');

    const contentId = $(this).attr('data-content');
    $('.feature_3 #' + contentId).addClass('active');
  });
  $('[data-content="business-size"]').click();

  // Tabs Mobile
  $('.business-select').change(function() {
    $('.feature_3_xs .business-tabs-content').removeClass('active');
    const contentId = $(this).val();
    $('#' + contentId).addClass('active');
  });

  // Mega Menu
  $('.solutions-dropdown').dropdown();
  $('.solutions-dropdown').on('show.bs.dropdown', function() {
    $('.mega-menu').show(1000);
  });

  $('.solutions-dropdown').on('hide.bs.dropdown', function() {
    $('.mega-menu').hide();
  });
});
