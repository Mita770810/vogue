$(document).ready(function() {

  //最上頭slider效果
  $(window).load(function() {
      $('#slider').nivoSlider();  
  }); 
  //下拉式收闔選單

  $('.dropdown').click(function(event) {
    event.preventDefault();
    // $('.dropdown').toggleClass('active');
    $(this).siblings('ul').slideToggle();
  });
  //右下角top效果
  $('.top').click(function(event) {
    event.preventDefault();
    $('html,body').animate({
      scrollTop: 0
    }, 1000);
    });
   //滑到首頁就會自動隱藏
  $(window).scroll(function() {
          if ( $(this).scrollTop() > 300){
              $('.top').fadeIn("fast");
          } else {
              $('.top').stop().fadeOut("fast");
          }
      });
   //tab的效果
   $( "#tabs" ).tabs();
   //摺疊問題選單
   $('.question h4').click(function(event) {
     $(this).toggleClass('active');
     $(this).parent().find('p').slideToggle();
     $(this).parent().siblings().find('p').slideUp();
   });






});