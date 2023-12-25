$(document).ready(function (){
  $(".lazy").Lazy({
      afterLoad: function (element) {
        element.addClass("loaded");
      },
    });
    function fadeInOnScroll() {
      $('.fadein').each(function () {
         
          var position = $(this).offset().top;
          var scroll = $(window).scrollTop();
          var windowHeight = $(window).height();
          if (scroll > position - windowHeight + 100) {
            
              $(this).addClass('active');
          }
          
      });
  }
  function rightInScroll(){
    $('.rightin').each(function () {
         
      var position = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > position - windowHeight + 100) {
        
          $(this).addClass('active');
      }
      
  });
  }
      
  // Call the function on document ready and scroll
  // fadeInOnScroll();
  $(window).scroll(function () {
      rightInScroll()
      fadeInOnScroll();
  });
       
});

