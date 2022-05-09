$(function () {
  $(".questions__item-title").on("click", function() {
    
    $('.questions__item-title').not($(this)).removeClass("active")
    $('.questions__item-text').not($(this).next()).slideUp(300)
    $(this).toggleClass("active").next().slideDown(300);
  });
});
