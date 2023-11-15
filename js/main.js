$(document).ready(function(){
   
    
    $(".lazy").Lazy({
        afterLoad: function(element) {
            element.addClass("loaded");
        }
    });
    
    $('.fa-star').click(function() {

   
        $(this).toggleClass('yellow');
        $(this).prevAll('.fa-star').addClass('yellow');
        $(this).nextAll('.fa-star').removeClass('yellow');
      });
    
    
  });