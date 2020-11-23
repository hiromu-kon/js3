$(function(){
  $('.search-box').keydown(function(){
    search_text = $(".search-box").val();
    $('.list li').each(function(){
      all_list = $(this).text();
      if (all_list.match(search_text)) {
        $(this).show();
      } else {
        $(this).hide();
      }
    });
  });
});
