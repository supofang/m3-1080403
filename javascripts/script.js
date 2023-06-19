$(function () {
  // var num = $('.num span').text();
  var w = 90;
  $(window).scroll(function () {
    if ($(window).scrollTop() >= $('.activity').offset().top) {
      $('.progress-bar').css('width', w + '%');
      $('.monster').addClass('fadeInUp');
    }
  })
  $('.attack').on('click', function (e) {
    e.preventDefault();
    //原來的隱藏
    $('.monster').addClass('fadeOut').removeClass('fadeInUp');
    //顯示打擊的
    $('.monster-hit').addClass('fadeIn');
    //打擊動畫
    $('.monster-hit').find('div').removeClass('on').each(function (index) {
      $(this).delay(index*100).show(function () {
        $(this).addClass('on')
      });
    });
    
  })
})



